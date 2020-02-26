$(document).ready(() => {

    moduleTourismProd.init()

})

var moduleTourismProd = {

    init: function () {
        if($('.tourism-product__mobile-confirm')) {
            $('.tourism-product__mobile-confirm').off('click', this.openForm).on('click', this.openForm);
            $('.trip-details__close').off('click', this.closeForm).on('click', this.closeForm);

            $('.trip-details__confirm').off('click', this.openModal).on('click', this.openModal);

            $('.tourism-product__sports-confirm').off('click', this.openModal);
        }        
        
        if ($('.flight')) {
            $('.flight__add-btn').off('click', this.addFlight).on('click', this.addFlight);
            $('.flight__chevron').off('click', this.hideFliht).on('click', this.hideFliht)
        }

        if ($('.hotel')) {
            $('.hotel__button').off('click', this.addHotel).on('click', this.addHotel);
            $('.hotel__top-btn').off('click', this.hideHotel).on('click', this.hideHotel)
        }

        if ($('.event-details')) {
            $('.event-details__button').off('click', this.addEvent).on('click', this.addEvent);
            $('.event-details__top-btn').off('click', this.hideEvent).on('click', this.hideEvent)
        }

        if ($('.trip-details')) {
            $('.trip-details__add-room').off('click', this.addRoom).on('click', this.addRoom);
        }      

        if ($('.tourism-product__travel-package-modal')) {
            $('.travel-package__close-modal').off('click', this.closeTravel).on('click', this.closeTravel);
        }

        if ($('.tourism-product__ticket-panel')) {
            $('.tourism-product__ticket-button').off('click', this.openTicket).on('click', this.openTicket);
            $('.ticket__close').off('click', this.closeTicket).on('click', this.closeTicket);
            $('.ticket__confirm').off('click', this.openTravel).on('click', this.openTravel);
        }
    },

    openForm: function(e) {
        e.preventDefault();
        $('.trip-details').addClass('trip-details_active');
        $('html').css("overflow", "hidden");
    },
    closeForm: function(e) {
        e.preventDefault();
        $('.trip-details').removeClass('trip-details_active');
        $('html').css("overflow", "auto");
    },

    openModal: function (e) {
        e.preventDefault();
        if ($('.trip-details').hasClass('trip-details_active')) {
            $('.trip-details').removeClass('trip-details_active');
        }
        $('.modal-booking').addClass('modal-booking_active');
        $('html').css("overflow", "hidden");
    },
    addFlight: function () {
        $('.flight__container').first().clone().appendTo('.flight__wrapper');
    },
    hideFliht: function () {
        $('.flight__chevron').toggleClass('flight__chevron_active');
        $('.flight__wide-wrapper').slideToggle();
    },
    addHotel: function () {
        $('.hotel__container').first().clone().appendTo('.hotel__cover');
    },
    hideHotel: function () {
        $('.hotel__top-btn').toggleClass('hotel__top-btn_active');
        $('.hotel__wide-cover').slideToggle();
    },
    addEvent: function () {
        $('.event-details__container').first().clone().appendTo('.event-details__wrapper');
    },
    hideEvent: function () {
        $('.event-details__top-btn').toggleClass('event-details__top-btn_active');
        $('.event-details__wide-wrapper').slideToggle();
    },
    addRoom: function (e) {
        e.preventDefault();
        $('.trip-details__inputs').first().clone().appendTo('.trip-details__wrapper');
    },
    openTicket: function (e) {
        e.preventDefault();
        $('.ticket').addClass('ticket_active');
        $('html').css("overflow", "hidden");
    },
    closeTicket: function () {
        $('.ticket').removeClass('ticket_active');
        $('html').css("overflow", "auto");
    },  
    openTravel: function () {
        if ($('.tourism-product__travel-package-modal')) {
            moduleTourismProd.closeTicket();
            $('.tourism-product__travel-package-modal').addClass('tourism-product__travel-package-modal_active');
            $('html').css("overflow", "hidden");
        }        
    },
    closeTravel: function () {
        $('.tourism-product__travel-package-modal').removeClass('tourism-product__travel-package-modal_active');
        $('html').css("overflow", "auto");
    }  
}