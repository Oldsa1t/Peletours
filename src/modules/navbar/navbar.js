$(document).ready(() => {

    menu.init();

})

var menu = {

    init: function () {

        if ($('.navbar__button')) {
            $('.navbar__button').off('click', menu.pcTogglt).on('click', menu.pcTogglt);
        }   
        
        if ($('.navbar__search-btn')) {
            $('.navbar__search-btn').off('click', menu.search).on('click', menu.search);
        }
        $(document).off('click', menu.closeSearch).on('click', menu.closeSearch);
    },
    pcTogglt: function () {
        $('.aside').toggleClass('aside_hidden');
        setTimeout(() => {
            $('.js-favorites-carousel').trigger('refresh.owl.carousel');
            $('.js-communication-bestsellers').trigger('refresh.owl.carousel');
            $('.js-communication-special').trigger('refresh.owl.carousel');
            $('.js-gift-bestsellers').trigger('refresh.owl.carousel');
            $('.js-gift-special').trigger('refresh.owl.carousel');
            $('.js-payment-bestsellers').trigger('refresh.owl.carousel');
            $('.js-tourism-recommend').trigger('refresh.owl.carousel');
            $('.js-tourism-special').trigger('refresh.owl.carousel');
            $('.js-tourism-chance').trigger('refresh.owl.carousel');
            $('.js-tourism-show').trigger('refresh.owl.carousel');
            $('.js-travel-package').trigger('refresh.owl.carousel');
        }, 300);
    },
    search: function () {
        $('.navbar__loupe').toggleClass('navbar__loupe_active');
        $('.navbar__search').toggleClass('navbar__search_active');
    },
    closeSearch: function (e) {
        if ($(e.target).closest('.navbar__search-btn').length == 0 
        && $(e.target).closest('.navbar__search').length == 0) {
            $('.navbar__loupe').removeClass('navbar__loupe_active');
            $('.navbar__search').removeClass('navbar__search_active');
        }
    }

}