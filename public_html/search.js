const IconMenu = document.querySelector('#iconmenu'),
        menu = document.querySelector('#menu');

IconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    
});