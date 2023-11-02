

// Бургер
       // Меню бургера меняет значок
$(document).ready(function() {
    $('.menu__burger').click(function(){
     $('.menu__mobile .menu').toggle(500);
     $(this).toggleClass('close');
             });
         });