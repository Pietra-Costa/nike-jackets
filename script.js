


function activateLink() {
    const links = document.querySelectorAll('.menu-link a');

    links.forEach((item) => {
        item.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active-link'));
            item.classList.add('active-link');
        });
    });
}

activateLink();

activateLink()