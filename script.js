const menu = document.getElementById('menu');

function mostarMenu () {
    const links = document.getElementById('menus');
    links.classList.toggle('active');
}

menu.addEventListener('click', mostarMenu)