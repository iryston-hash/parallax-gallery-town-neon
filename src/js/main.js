const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centerSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 40
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centerSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item =>{
    item.addEventListener('click', event => {
        item.classList.toggle('open');
    });
});

let desc = document.querySelector('.descr');

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});
