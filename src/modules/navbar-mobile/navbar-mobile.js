$(document).ready(() => {

    menuMobile.init()

})

var menuMobile = {

    init: function() {        
            
        if ($('.navbar-mobile__menu-button')) {
            $('.navbar-mobile__menu-button').off('click', menuMobile.menuToggle).on('click', menuMobile.menuToggle);
        }
        if ($('.navbar-mobile__profile-button')) {
            $('.navbar-mobile__profile-button').off('click', menuMobile.profileToggle).on('click', menuMobile.profileToggle);
        }    
        if ($('.navbar-mobile__search-btn')) {
            $('.navbar-mobile__search-btn').off('click', menuMobile.openSearch).on('click', menuMobile.openSearch);
        }
        $(document).off('click', menuMobile.closeSearch).on('click', menuMobile.closeSearch);
        
    },
    menuToggle: function () {
        $('.navbar-mobile__menu-button').toggleClass('navbar-mobile__menu-button_active');
        $('.aside').toggleClass('aside_active');
    },
    profileToggle: function () {
        $('.navbar-mobile__profile-button').toggleClass('navbar-mobile__profile-button_active');
        $('.navbar-mobile__user').toggleClass('navbar-mobile__user_hidden');
        $('.profile-mobile').toggleClass('profile-mobile_active');
    },
    openSearch: function () {
        $('.navbar-mobile__search-btn').toggleClass('navbar-mobile__search-btn_active');
        $('.navbar-mobile__search').toggleClass('navbar-mobile__search_active');
    },
    closeSearch: function (e) {
        if ($(e.target).closest('.navbar-mobile__search-btn').length == 0 
        && $(e.target).closest('.navbar-mobile__search').length == 0) {
            $('.navbar-mobile__search-btn').removeClass('navbar-mobile__search-btn_active');
            $('.navbar-mobile__search').removeClass('navbar-mobile__search_active');
        }
        
    }
}

