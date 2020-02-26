$(document).ready(() => {

    moduleModalBooking.init()

})

var moduleModalBooking = {

    init: function () {
        if ($('.modal-booking')) {
            $('.modal-booking__button').off('click', this.switchPayment).on('click', this.switchPayment);
            $('.modal-booking__close').off('click', this.closeModal).on('click', this.closeModal);

            $('.modal-booking__continue').off('click', this.openDiscount).on('click', this.openDiscount);
        }
                     
    },
    switchPayment: function (e) {
        e.preventDefault();
        if (!$(this).is('.modal-booking__button_active')) {
            $(this).closest('.modal-booking__choice').find('.modal-booking__button_active').removeClass('modal-booking__button_active');
            $(this).addClass('modal-booking__button_active');
        }
    },
    closeModal: function (e) {
        e.preventDefault();
        if ($('.modal-booking')) {
            $('.modal-booking').removeClass('modal-booking_active');
            $('html').css("overflow", "auto");
        }
    },
    openDiscount: function (e) {
        e.preventDefault();
        if ($('.modal-booking') && $('.modal-discount')) {
            $('.modal-booking').removeClass('modal-booking_active');
            $('.modal-discount').addClass('modal-discount_active');
        }
    }
}