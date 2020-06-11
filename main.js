const toogleBtn = document.querySelector('.toogleBtn');
const menu = document.querySelector('.menu');

toogleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});