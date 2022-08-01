$(document).ready(function () {
    $('.conntent-new-host-read').hide();
    $(".nav-new-host").click(function () {
        $('.conntent-new-host-most-read').show();
        $('.conntent-new-host-read').hide();
        $('.nav-new-host').addClass('background-DA0000');
        $('.nav-most-read').removeClass('background-DA0000');
        $('#text-nav-new-host').addClass('color-white');
        $('#text-nav-most-read').removeClass('color-white');

    });
    $(".nav-most-read").click(function () {
        $('.conntent-new-host-most-read').hide();
        $('.conntent-new-host-read').show();
        $('.nav-most-read').addClass("background-DA0000");
        $('.nav-new-host').removeClass('background-DA0000');
        $('#text-nav-most-read').addClass('color-white');
        $('#text-nav-new-host').removeClass('color-white');
    });
    $(".list-category ul .news-latest").hover(
        function () {
            $('.sub-news').show();
        },
        function () {
            $('.sub-news').hide();
        }
    );
    $(".show-list-category").click(function () {
        $(".show-list-all-category").toggle();
    });
    $(".close-tab-list-category").click(function () {
        $(".show-list-all-category").hide();
    });

    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 120) {
            $('.section-list-category').addClass('posion-fixed-list-category');
            $('.show-list-all-category').addClass('posion-fixed');
        } else {
            $('.section-list-category').removeClass('posion-fixed-list-category');
            $('.show-list-all-category').removeClass('posion-fixed');
        }
    });
    //Mobi
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 120) {
            $('.section_nav').addClass('posion-fixed-list-category');
        } else {
            $('.section_nav').removeClass('posion-fixed-list-category');
        }
    });
    $(document).ready(function () {

        $('.first-button').on('click', function () {

            $('.animated-icon1').toggleClass('open');
        });
        $('.second-button').on('click', function () {

            $('.animated-icon2').toggleClass('open');
        });
        $('.third-button').on('click', function () {

            $('.animated-icon3').toggleClass('open');
        });
    });
    $('.popup-menu-mobi').on('click',function (){
        $('.show-popup-menu-mobi').toggle();
    });
    $('.icon-close').on('click',function (){
        $('.show-popup-menu-mobi').hide();
    });
    $('.show-list-subcategory').on('click', function () {
        $('.list-subcategory').toggle();
        $('.show-list-click').addClass('active');
    });
});
