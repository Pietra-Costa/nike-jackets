const closeButton = document.querySelector('.close');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-link a');
const openButton = document.querySelector('.ri-menu-line');

function activateLink() {

    links.forEach((item) => {
        item.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active-link'));
            item.classList.add('active-link');
                menu.classList.add("close-menu")
        });
    });
}

function closeMenu(){

    closeButton.addEventListener('click', function(){
        menu.classList.add("close-menu")
    })
}

function openMenu(){
    openButton.addEventListener('click', function(){
        menu.classList.remove("close-menu")
    })
}

openMenu()
closeMenu()
activateLink()