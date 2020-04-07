
// dropdown js
var dropdown = document.querySelector('.header__location-dropdown-active');
dropdown.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.header__location-list').classList.toggle('is--open');
});

window.onclick = function (event) {
    if (!event.target.matches('.header__location-title')) {
        var dropdowns = document.getElementsByClassName("header__location-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('is--open')) {
                openDropdown.classList.remove('is--open');
            }
        }
    }
}

$(document).ready(function () {

    // loading
   $(window).on('load', function(e){
    $('body').removeClass('preloading');
    $('.loading__box').delay(500).fadeOut('fast');
   });

    // back-to-top
    var scrollTop = $(".back-to-top");
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
            $(scrollTop).css("visibility", "visible");

        } else {
            $(scrollTop).css("opacity", "0");
            $(scrollTop).css("visibility", "hidden");
        }
    });
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // icon bars & overlay
    $('.header__icon-bars, .navbar__overlay').click(function (e) {
        e.preventDefault();
        $('.wrapper').toggleClass('wrapper--overlay');
        $('.navbar__overlay').fadeToggle();
    });

    // search responsive mobile
     $('.header__icon-search, .navbar__mobile-btn-close').click(function (e) {
        e.preventDefault();
        $('.navbar__mobile-search').toggle('navbar__mobile-search--on')
    });

    // menu responsive dùng jquery
    // $('.navbar__mobile-link').on('click', function (e) {
    //     $(this).parent().find('.navbar__mobile-level').toggleClass('fade-to-right');
    // });

    // $('.navbar__mobile-link--icon-right').click(function () {
    //     $('.navbar__mobile-level').removeClass('fade-to-right');
    // });


    // slick.js
    $('.featured__slideshow').slick({
        autoplay: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1 } },
            { breakpoint: 1023, settings: { slidesToShow: 1 } },
            { breakpoint: 739, settings: { slidesToShow: 1 } },
        ]
    });

    // $('.featured__video-large').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.featured__video-thumb'
    //   });

    //   $('.featured__video-thumb').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.featured__video-large',
    //     focusOnSelect: true
    //     // responsive: [
    //     //   { breakpoint: 1024, settings: { slidesToShow: 3 } },
    //     //   { breakpoint: 991, settings: { slidesToShow: 3 } },
    //     //   { breakpoint: 730, settings: { slidesToShow: 3 } },
    //     // ]
    //   });
});