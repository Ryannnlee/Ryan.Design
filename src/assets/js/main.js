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
    // filter();

    $('.events .PLText span.sort').text('活動網站');
    $('.website .PLText span.sort').text('官方網站');
    $('.banner .PLText span.sort').text('數位宣傳');
    $('.video .PLText span.sort').text('動態影片');
    $('.graphic .PLText span.sort').text('平面設計');
});