const buttonNav = document.querySelector('#navigation');
const buttonSearch = document.querySelector('#search');
const inputSearch = document.querySelector('.header-search-form--input')

buttonNav.addEventListener('click', function (){
    this.classList.toggle('button-round--active-nav')
});

buttonSearch.addEventListener('click', function (){
    inputSearch.classList.toggle('header-search-form--input-active')
    this.classList.toggle('button-round--active-search')
});

