document.addEventListener('mousemove', e => {
Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.008}deg;
    --move-y: ${(e.clientY - window.innerWidth / 2) * -0.008}deg;
    `
})
})
let unlock = true;
let clickImg = document.querySelector('.img');
let menu = document.querySelector('.menu');
let containerBlure = document.querySelector('.containerBlure');
let imgClose = document.querySelector('.imgClose');
let linkActive = document.querySelectorAll('.menu__item-link');
clickImg.addEventListener('click', e => {
menu.classList.toggle('active');
containerBlure.classList.toggle('active');
for(i=0; i<linkActive.length; i++) {
linkActive[i].classList.toggle('active');
}
});



let linkActiveNo = document.querySelectorAll('.menu__item-link.linkActiveNo');
containerBlure.addEventListener('click', e => {
    if (!e.target.closest('.menu.active')) {
    menu.classList.remove('active');
    containerBlure.classList.remove('active');
    for(i=0; i<linkActive.length; i++) {
        linkActive[i].classList.remove('active');
        }
    }
    });



// определение ширины экрана
let viewportWidth = document.getElementById('viewport').offsetWidth;
let viewportHeight = document.getElementById('viewport').offsetHeight;
console.log (viewportWidth);
console.log (viewportHeight);

