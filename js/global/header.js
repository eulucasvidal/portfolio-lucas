const menuMobile = document.querySelector('#menu');

function toggleMenu (event){
    if(event.type === 'touchstart') event.preventDefaul();

    const menuNav = document.querySelector ('#menu');
    menu.classList.toggle('active');
}

menuMobile.addEventListener('click', toggleMenu);
menuMobile.addEventListener('touchstart',toggleMenu);