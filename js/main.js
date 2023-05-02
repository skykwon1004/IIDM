$(function () {

    $('.mainFull').fullpage({
        anchors: ['intro', 'l02', 'l03', 'l04', 'l05', 'l06'],
        afterLoad: function (lnk, idx) {
            // console.log(lnk, idx);
            // 만약에 2번째에 오면 ... nav li class on을 붙이고 나머지 a 는 뗀다.
            // $('nav li a').removeClass('on');

            if (idx == 2 || idx == 4 || idx == 6) {
                // $('nav li').eq(1).find('a').addClass('on');
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }

            if (idx == 2 || idx == 4 || idx == 6) {
                // $('nav li').eq(1).find('a').addClass('on');
                $('nav').addClass('on');
            } else {
                $('nav').removeClass('on');
            }

            // 페이지 넘어갈 때 마다 logo 이미지 바꾸기
            if (idx == 2 || idx == 4 || idx == 6) {
                $(".logo").attr("src", "./img/logo_dark.png");
            } else {
                $(".logo").attr("src", "./img/logo_white.png");
            }

            if (idx == 1) {
                $('.totop').fadeOut();
            } else {
                $('.totop').fadeIn();
            }

            // if (idx == 2 || idx == 4) 이렇게 쓰면됨 || 이거가 2 또는 4 임
            // if (idx == 4) {               
            //     // $('nav li').eq(1).find('a').addClass('on');
            //     $('nav').addClass('on'); 
            // } else {
            //     $('nav').removeClass('on');
            // }
        },
        onLeave: function (idx, nIdx, dir) {
            console.log(idx, nIdx, dir);
            $('nav li').eq(nIdx - 1).addClass('on').siblings().removeClass('on')
        },

        // navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
    });

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        // vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.content_desc_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
    });

    $('.content_desc .arrows .left').on('click', function () {
        $('.content_desc_slide').slick('slickPrev')
    });

    $('.content_desc .arrows .right').on('click', function () {
        $('.content_desc_slide').slick('slickNext')
    });


})