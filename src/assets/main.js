$(document).ready(function() {

    $("body").imagesLoaded().always(onAlways);

    function onAlways() {
        $('.project-list .mix .photo').addClass('load');
    }

    var containerEl = document.querySelector('.Container');
    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)'
        },
        controls: {
            toggleLogic: 'and'
        },
        load: {
            filter: 'none',
            sort: 'published-date:desc'
        }
    });

    containerEl.classList.add('mixitup-ready');

    mixer.show().then(function() {
        mixer.configure({
            animation: {
                effects: 'fade scale'
            }
        });
    });
    filter();

    function filter() {
        $('.nav-selected').on('click', function(e) {
            $('.navContent').fadeToggle(300);
            $('.nav-selected').toggleClass('active');
        });
        $('.filter-all').on('click', function(e) {
            $('.navContent').fadeOut(300);
            $('.nav-selected').removeClass('active');
            $('#bg-check').prop("checked", false);
            $(window).scrollTop(0);
        });
        $('.navContent li').on('click', function(e) {
            $('.navContent').fadeOut(300);
            $('.nav-selected').removeClass('active');
            $('#bg-check').prop("checked", false);
            $(window).scrollTop(0);
        });
        $('.close .icon-bar').on('click', function(e) {
            $('.navContent').fadeOut(300);
            $('.nav-selected').removeClass('active');
        });
        $('.date li').on('click', function(e) {
            $('#bg-check').prop("checked", false);
            $(window).scrollTop(0);
        });
        $('.navContent ul li').click(function() {
            var copyText = $(this)[0].firstChild.nodeValue;
            $(".nav-selected").text(copyText);
        });
        $('.filter-all').click(function() {
            $(".nav-selected").text('Filter');
        });

        $('.nav-menu li').click(function() {

        });
        $('.clientsbtn').click(function() {
            $('#bg-check').prop("checked", true);
        });

        $('.events .text span').text('活動網站');
        $('.website .text span').text('官方網站');
        $('.banner .text span').text('數位宣傳');
        $('.video .text span').text('動態影片');
        $('.graphic .text span').text('平面設計');

        $(window).scroll(function() {
            var offset = $('#header .logo').height();
            var scrollVal = $(this).scrollTop();
            var screen_w = $(window).width();

            if (screen_w > 900) {
                if (scrollVal > offset) {
                    $('#header').addClass('fixed');
                } else {
                    $('#header').removeClass('fixed');
                }
                //overview scroll hide
                if ($(window).scrollTop()) {
                    $('.navContent').fadeOut(300);
                }
            }

        });
    }

});