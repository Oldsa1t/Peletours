$(document).ready(() => {

    moduleModalDiscount.init()

})

var moduleModalDiscount = {

    init: function () {
        if ($('.modal-discount')) {
            $('.modal-discount__close').off('click', this.closeModal).on('click', this.closeModal);

            $('.modal-discount__button').off('click', this.closeModal).on('click', this.closeModal);
        }
       
                     
    },
    closeModal: function (e) {
        e.preventDefault();
        $('.modal-discount').removeClass('modal-discount_active');
        $('html').css("overflow", "auto");
    }
}