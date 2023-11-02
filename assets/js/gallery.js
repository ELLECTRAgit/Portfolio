const sliderOne = new Swiper('.slider_main', {
    // прокрутка слайдера мышкой
    mousewheel: true,
    // листать слайдер без привязки к конкретной позиции
    freeMode: true,
    // центрирование слайда
    centeredSlides: true,
    parallax: true,
    // количество слайдеров на экране
    slidesPerView: 3.5,
    // аналог медиа-правил
    breakpoints: {
        0: {
            slidesPerView: 2.5, 
            spaceBetween: 20 // расстояние между колонками
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }

}); 

const sliderTwo = new Swiper('.slider_bg', {
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60
}); 

sliderOne.controller.control = sliderTwo
// действия при нажатии на картинку
let imgesOpen = document.querySelectorAll('.slider__item');
imgesOpen.forEach((elem) => {
    elem.addEventListener('click', e => {
    elem.classList.toggle('open')  
    })
})

let description = document.querySelector('.description');
sliderOne.on('slideChange', e => {
    if (sliderOne.activeIndex > 0) {
        description.classList.add('ghost');
    }
    else {
        description.classList.remove('ghost');
    }
});

//Бегающие буквы

$('document').ready(function(){
    let typed = new Typed(".skills", {
        stringsElement: '.skills-strings',
        typeSpeed: 20,
        backSpeed: 50,
        startDelay: 500,
        loopCount: 1
    });

    });

    //Бегающие буквы mobile

$('document').ready(function(){
    let typedMobile = new Typed(".skills-mobile", {
        stringsElement: '.skills-strings-mobile',
        typeSpeed: 20,
        backSpeed: 50,
        startDelay: 500,
        loopCount: 1
    });
    });
    

