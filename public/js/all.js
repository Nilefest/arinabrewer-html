/*
 * For ALL pages.
 * In this document:
 * 
 *  Link by LOGO
 *  Mobile menu
 *  
*/

// Link to main page by Logo
$('.link_to_main_page').click(function () {
    location.href = '#main_page';
});

// Mobile MENU
$('.wrapper-menu').click(function () {
    if ($('.wrapper-menu').hasClass('open')) {
        $('.wrapper-menu').removeClass('open');
        $('.mobile_nav').removeClass('open_menu');
        $('.mobile_nav').addClass('closing_menu');
        setTimeout(function () {
            $('.mobile_nav').removeClass('closing_menu');
        }, 500);
    } else {
        $('.wrapper-menu').addClass('open');
        $('.mobile_nav').addClass('open_menu');
        $('.mobile_nav').addClass('opening_menu');
        setTimeout(function () {
            $('.mobile_nav').removeClass('opening_menu');
        }, 500);
    }
});