$(document).ready(() => {

    moduleEntertainment.init()

})

var moduleEntertainment = {

    init: function () {
        $('.js-entertainment-carousel').each(function () {
            $(this).owlCarousel({
                rtl: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2,
                        margin: 20
                    }
                }
            });
            $(this).closest('.entertainment__slider').find('.category-slider__control_next').off('click', moduleEntertainment.nextSlide).on('click', moduleEntertainment.nextSlide)
            $(this).closest('.entertainment__slider').find('.category-slider__control_prev').off('click', moduleEntertainment.prevSlide).on('click', moduleEntertainment.prevSlide)
        });
    },
    nextSlide: function (e) {
        e.preventDefault();
        $(this).closest('.entertainment__slider').find('.js-entertainment-carousel').trigger('next.owl.carousel');
    },
    prevSlide: function (e) {
        e.preventDefault();
        $(this).closest('.entertainment__slider').find('.js-entertainment-carousel').trigger('prev.owl.carousel');
    }

}