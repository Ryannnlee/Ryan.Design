$(function() {
    $(".wrapper").tabs({
        show: { effect: "fade", duration: 300 }
    });


    //mixer
    var containerEl = document.querySelector('.mixerContainer');
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


});