const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let counter = 0;
let slideWidth = slides[0].clientWidth;
const slideCount = slides.length;
let intervalId;

function updateSlideWidth() {
    slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function nextSlide() {
    counter++;
    if (counter >= slideCount) {
        counter = 0;
    }
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function startInterval() {
    intervalId = setInterval(nextSlide, 4000);
}

startInterval();

slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

slider.addEventListener('mouseleave', () => {
    startInterval();
});

window.addEventListener('resize', updateSlideWidth);
