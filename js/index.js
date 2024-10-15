// //////////////////////////////////////////////////////////////
// ///////////////////////////////////CONTADOR///////////////////
// //////////////////////////////////////////////////////////////
function updateCountdown() {
    const targetDate = new Date('2024-12-14T00:00:00');
    const now = new Date();
    const totalSeconds = Math.floor((targetDate - now) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').children[0].innerText = String(days).padStart(2, '0');
    document.getElementById('hours').children[0].innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').children[0].innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').children[0].innerText = String(seconds).padStart(2, '0');

    if (totalSeconds > 0) {
        setTimeout(updateCountdown, 1000);
    } else {
        document.querySelector('.countdown').innerHTML = '<div class="time-unit">¡Es el gran día!</div>';
    }
}

updateCountdown();

// //////////////////////////////////////////////////////////////
// ///////////////////////////////////navbar r///////////////////
// //////////////////////////////////////////////////////////////

// JavaScript para el menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.navbar ul');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Alternar la clase active para mostrar/ocultar el menú
});

// //////////////////////////////////////////////////////////////
// ///////////////////////////SWIPPER JS/////////////////////////
// //////////////////////////////////////////////////////////////
const swiper = new Swiper('.swiper', {
    loop: true, // Habilitar bucle
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, // Permitir interacción mientras se reproduce
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permitir que se haga clic en los paginadores
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 3, // Número de diapositivas a mostrar por vista
});
