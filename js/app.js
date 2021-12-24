// UI
const nav = document.querySelector('nav');
const menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
	nav.classList.toggle('show');
});

const search = document.querySelector('.fa-search');
const searchbox = document.querySelector('.search-box');

search.addEventListener('click',()=>{

	searchbox.classList.toggle('active');
});