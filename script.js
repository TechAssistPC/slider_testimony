const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let counter = 0;
const slideWidth = slides[0].clientWidth;
const slideCount = slides.length;

// Función para avanzar el slider
function nextSlide() {
    counter++;
    if (counter >= slideCount) {
        counter = 0;
    }
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Iniciar el intervalo para el desplazamiento automático
let intervalId = setInterval(nextSlide, 4000); // Cambia cada 5000 milisegundos (5 segundos)

// Opcional: Pausar el desplazamiento automático al hacer hover sobre el slider
slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 4000);
});