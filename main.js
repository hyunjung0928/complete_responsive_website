const toggleBtn = document.querySelector('.header_toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});