#!/bin/bash

echo "Please enter the directory name:"
read directory_name

if [ -z "$directory_name" ]; then
  echo "Usage: $0 directory_name"
  exit 1
fi

cd "$directory_name" || {
  echo "Error: Directory not found."
  exit 1
}

counter=1

for file in *; do
  if [[ -f "$file" ]] && [[ "$file" != "$0" ]]; then
    new_name="$counter${file##*[0-9]}"
    mv -i "$file" "$new_name"
    ((counter++))
  fi
done