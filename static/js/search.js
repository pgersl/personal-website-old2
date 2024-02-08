const cardTemplate = document.getElementById('search-card-template');
const cardsContainer = document.querySelector('.search-cards');
const searchBar = document.querySelector('.search-bar-input');
const notFoundMessage = document.querySelector('.search-not-found');

function performSearch(searchValue, data) {
  cardsContainer.innerHTML = '';

  data.forEach(card => {
    if (card.title.toLowerCase().includes(searchValue)) {
      const searchCard = cardTemplate.content.cloneNode(true).children[0];
      const searchCardTitle = searchCard.querySelector('.search-card-title');
      const searchCardDate = searchCard.querySelector('.search-card-date');
      const searchCardSearch = searchCard.querySelector('.search-card-content');
      const searchCardLink = searchCard.querySelector('.search-card-link');

      searchCardTitle.textContent = card.title;
      searchCardDate.textContent = card.date;
      searchCardSearch.textContent = card.search;
      searchCardLink.setAttribute('href', card.link);
      cardsContainer.appendChild(searchCard);
    }
  });
  notFoundMessage.style.display = cardsContainer.children.length === 0 ? 'flex' : 'none';
}

fetch('/index.json')
  .then(response => response.json())
  .then(data => {
    searchBar.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      if (val === '') {
        cardsContainer.innerHTML = '';
        notFoundMessage.style.display = 'flex';
      } else {
        performSearch(val, data);
      }
    });
  });
