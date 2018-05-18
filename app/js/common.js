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
    $('.open-menu').on('click', function(){
        $('.header__nav').show();
    });

    $('.close-menu').on('click', function(){
        $('.header__nav').hide();
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
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

/* menu-wrap */
$('.num').click(function() {
    var click_id=$(this).attr('id');
    if (click_id != $('.num.active').attr('id') ) {
        $('.num').removeClass('active');
        $(this).addClass('active');
        $('.menu-wrap-menu > div').removeClass('active');
        $('#con_' + click_id).addClass('active');
    }
});

/* open */
$('.view-more p').on('click',function(){
   $(this).hide();
    $('.gallery-wrap-block').removeClass('hidden');
});

/* form */
//  E-mail Ajax Send
$("form").submit(function() { //Change

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "/mail.php", //Change
        data: th.serialize()
    }).success(function() {

        alert('Thanks');
        $.magnificPopup.open({
            items: {
                src: '.modal-thanks'
            }
        });

        setTimeout(function () {
            $.magnificPopup.close();
        }, 3000);
        th.trigger("reset");

    }).error(function(){
        alert('Error');
        $.magnificPopup.open({
            items: {
                src: '.modal-error'
            }
        });

        setTimeout(function () {
            $.magnificPopup.close();
        }, 3000);

    });
    return false;

});
