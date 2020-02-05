/*
 * For MAIN pages.
 * In this document:
 * 
 *  Gallery: Prev, Next, Open
 *  H1 special
 *  
*/

// Gallery images
let slide_width = 900;

$('.gallery_perv').click(function () {
    if (screen.width < 767) slide_width = 450;
    else slide_width = 900;

    let total = $('.gallery ul li').length - 3;
    let margin_left = parseInt($('.gallery ul').css('margin-left'));
    let nth = Math.round(margin_left / slide_width) * -1;

    if (nth == 1) {
        $('.gallery ul').css('transition-duration', '0s');
        $('.gallery ul').css('margin-left', (total + 1) * slide_width * -1);
        setTimeout(function () {
            $('.gallery ul').css('transition-duration', '.5s');
            $('.gallery ul').css('margin-left', total * slide_width * -1);
        }, 50);
    } else {
        $('.gallery ul').css('margin-left', (nth * slide_width * -1 + slide_width));
    }
});

$('.gallery_next').click(function () {
    if (screen.width < 767) slide_width = 450;
    else slide_width = 900;

    let total = $('.gallery ul li').length - 3;
    let margin_left = parseInt($('.gallery ul').css('margin-left'));
    let nth = Math.round(margin_left / slide_width) * -1;

    if (nth == total + 1) {
        $('.gallery ul').css('transition-duration', '0s');
        $('.gallery ul').css('margin-left', slide_width * -1);
        setTimeout(function () {
            $('.gallery ul').css('transition-duration', '.5s');
            $('.gallery ul').css('margin-left', -2 * slide_width);
        }, 50);
    } else {
        $('.gallery ul').css('margin-left', (nth * slide_width * -1 - slide_width));
    }
});

// Open by gallery
$('.gallery_open').click(function () {
    let margin_left = parseInt($('.gallery ul').css('margin-left'));
    let nth = Math.round(margin_left / slide_width) * -1 + 1;

    let link = $('.gallery ul li:nth-child(' + nth + ') .gallery_img').attr('data-href');
    location.href = link;
});

// Spicial effect by header text h1.main_h1
$(window).scroll(function () {
    let scroll_top = Math.round($(this).scrollTop() / 10, 0);
    if (scroll_top < 45) {
        $('h1.main_h1 div:first-child span').each(function (i, elem) {
            let margin_top = scroll_top * $(this).attr('data-kTop');
            $(this).css('margin-top', margin_top + 'px');
        });
        $('h1.main_h1 div:last-child span').each(function (i, elem) {
            let margin_top = scroll_top * $(this).attr('data-kTop');
            $(this).css('margin-top', margin_top + 'px');
        });
    } else {
        //$('h1.main_h1 div:first-child span').css('margin-top', '0px');
    }
});
