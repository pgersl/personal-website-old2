const toggleButton = document.querySelector('.sidebar-toggle-btn')
const sidebarContainer = document.querySelector('#sidebar-column')
const untoggleButton = document.querySelector('.sidebar-untoggle-btn')
const contentContainer = document.querySelector('#nav-content-column')

toggleButton.addEventListener('click', () => {
    sidebarContainer.classList.add('toggled');
    contentContainer.classList.add('sidebar-toggled');
})

untoggleButton.addEventListener('click', () => {
    sidebarContainer.classList.remove('toggled');
    contentContainer.classList.remove('sidebar-toggled');
})