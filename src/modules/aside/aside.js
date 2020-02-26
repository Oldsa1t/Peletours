$(document).ready(() => {

    aside.init();

})

var aside = {
    init: function () {
        if ($('.aside')) {
            $('.aside__link-file').off('click', aside.showMenu).on('click', aside.showMenu);
            $('.aside__link-js').off('click', aside.openMenuThird).on('click', aside.openMenuThird);
        }
    },
    showMenu: function () {
        $('.aside__second-lvl').slideToggle();
        $('.aside__link-file').toggleClass('aside__link-plus_active');
    },
    openMenuThird: function (e) { 
        e.preventDefault();
        var currentItem = this;

        $('.aside__link-js').each(function () {
            if (currentItem == this) {      
                $(this).next('.aside__third-lvl').slideToggle();          
                $(this).toggleClass('aside__link-plus_active');
            }       
            if (currentItem != this) {
                $(this).next('.aside__third-lvl').slideUp();
                $(this).removeClass('aside__link-plus_active');
            }          
        })      
    }
}