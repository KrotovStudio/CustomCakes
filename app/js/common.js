/* smooth-scrolling */
$(document).ready(function () {
    $("#makeMeScrollable").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart"
    });
});


/* image popup */
$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true,
        titleSrc: 'title'
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

/* popup form */
$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

/* close / open mobile menu */
$(document).ready(function() {
    var menu =  $('.nav-main');
    $('.mob-btn').on('click', function(){
        menu.addClass('active')
    });

    var close = $('.close-nav');
    $(close).on('click', function(){
        menu.removeClass('active')
    });
});


//    slick slider
$('#rev-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: false
});

$('#our-slider').slick({
    centerMode: true,
    slidesToShow: 5,
    prevArrow: $('.our-prev'),
    nextArrow: $('.our-next'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

