$(function() {
    $(".wrapper").tabs({
        show: { effect: "fade", duration: 300 }
    });

    //set scrollbar
    $('.scrollbar-dynamic').scrollbar();
    var $WH = $(window).height();
    console.log($WH);
    $('.ScrollBarSet').parent().height($WH - 1);


    //mixer
    var containerEl = document.querySelector('.mixerContainer');
    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale'
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

    $('.events .PLText span.sort').text('活動網站');
    $('.website .PLText span.sort').text('官方網站');
    $('.banner .PLText span.sort').text('數位宣傳');
    $('.video .PLText span.sort').text('動態影片');
    $('.graphic .PLText span.sort').text('平面設計');

    //project list time
    $('.projectList').each(function() {
        let $PLTime = $(this).attr('data-published-date');
        $(this).find('.PLTime').text($PLTime)
    })


    $('.mixItem').on('click', function() {
        let $this = $(this);
        $this.addClass('mixMenuActive').siblings('.mixMenuActive').removeClass('mixMenuActive');
        $('.mixItemSelected').text('FILTER');
    });

    $('.mixFilter').on('click', function() {
        $('.mixItemOption').addClass('visible');
    });

    $('.filter').each(function() {
        $(this).on('click', function() {
            $('.mixItemOption').removeClass('visible');
            var $thisText = $(this).attr('data-subjects');
            console.log($thisText);
            $('.mixItemSelected').text($thisText);
            return false
        });

    });

    //menu
    $('#navToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#overlay li').on('click', function() {
        $('#nav-toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

});


$(window).on("load", function() {
    setTimeout(function() { $('.main').css({ "opacity": 1 }); }, 2500);
    setTimeout(function() { $('#loading').fadeOut(); }, 2500);
    $('html, body').animate({ scrollTop: 0 }, 1);
    if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
        setTimeout(function() { $('#loading').fadeOut(); }, 1000);
        $('html, body').animate({ scrollTop: 0 }, 1);
    }
});