const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Saat hamburger diklik, toggle menu
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    