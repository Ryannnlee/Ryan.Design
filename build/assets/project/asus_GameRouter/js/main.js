(function($) {
    $(document).ready(function() {
        $("#GRTab").tabs({
            hide: { duration: 300 },
            show: { duration: 300 },
            disabled: [3],
            create: function(e, ui) {
                $('.nav-bottom').click(function() {
                    $("#GRTab").tabs("option", "active", $(this).attr("rel"));
                    return false;
                });
            },
            activate: function(e, ui) {
                $('.item2-tab-nav').fadeIn();
                $('#item2-tab-pc').fadeOut();
                $('#item2-tab-mob').fadeOut();
                $('#item2-tab-live').fadeOut();

                if ($("#GRTab").tabs("option", "active") == 1) {
                    $('#Gamingfeature .GRc-item-line span').hide();
                }
            }
        });

        // GRTab Bottom NAV
        $('.toGRtop').click(function() {
            var GRTABTOP = $("#GRTab").offset().top - 50;
            $('html, body').animate({ scrollTop: GRTABTOP }, '800');
        });
        //mobile
        $('.mobile-top').click(function() {
            var GRTABTOP = $("#GRTab").offset().top - 50;
            $('html, body').animate({ scrollTop: GRTABTOP }, '800');
        });

        document.querySelector(".outerLink").addEventListener("click", function() {
            window.open('https://www.asus.com/Gaming-Networking/Gaming-Routers-Products/');
        });

        $(function() {
            var w = $(window).width();
            var h = $(window).height();
            if (w > 767) {
                var s4ItemH = $('#why-asus .s4 .s4-item2 p').innerHeight();
                $('#why-asus .s4 .s4-item1 p').height(s4ItemH);

                $(window).resize(function() {
                    var s4ItemH = $('#why-asus .s4 .s4-item2 p').innerHeight();
                    $('#why-asus .s4 .s4-item1 p').height(s4ItemH);
                });
            } else {

            }
        });


        // whyasus-product
        var h = $(window).height(),
            whyasusOfs = $('.s1').offset().top;
        // console.log(whyasusOfs);

        $(window).scroll(function() {
            if ($(this).scrollTop() >= whyasusOfs - 50) {
                $('#spotlight').addClass('Focus');
            } else {
                $('#spotlight').removeClass('Focus');
            }
        });

        // whyasus slider
        $('#s2-slider .flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            directionNav: false,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            controlNav: false,
            slideshow: true,
            itemMargin: 0,
            pausePlay: false,
            pauseOnAction: false,
            move: 1,
            after: function(slider) {
                var slider1 = $('#s2-slider .flexslider').data('flexslider');
                var silder1Now = slider1.currentSlide;
                // console.log(silder1Now);
                switch (silder1Now) {
                    case 0:
                        $('.slider-logo ul li').addClass('forimg-gray');
                        $('.slider-logo .slider-for-img1').removeClass('forimg-gray');
                        $('.slider-logo ul li').removeClass('for-active');
                        $('.slider-logo .slider-for-img1').addClass('for-active');
                        break;
                    case 1:
                        $('.slider-logo ul li').addClass('forimg-gray');
                        $('.slider-logo .slider-for-img4').removeClass('forimg-gray');
                        $('.slider-logo ul li').removeClass('for-active');
                        $('.slider-logo .slider-for-img4').addClass('for-active');
                        break;
                    case 2:
                        $('.slider-logo ul li').addClass('forimg-gray');
                        $('.slider-logo .slider-for-img5').removeClass('forimg-gray');
                        $('.slider-logo ul li').removeClass('for-active');
                        $('.slider-logo .slider-for-img5').addClass('for-active');
                        break;
                    case 3:
                        $('.slider-logo ul li').addClass('forimg-gray');
                        $('.slider-logo .slider-for-img6').removeClass('forimg-gray');
                        $('.slider-logo ul li').removeClass('for-active');
                        $('.slider-logo .slider-for-img6').addClass('for-active');
                        break;
                }
            }
        });
    });





    $(function() {
        $('.item2-tab-nav .item2-tabnavpc').click(function() {
            $('.item2-tabnavmob').removeClass('it2-tabnav-active');
            $('.item2-tabnavlive').removeClass('it2-tabnav-active');
            $(this).addClass('it2-tabnav-active');
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
            $('#item2-tab-pc').fadeIn();

            var GafepcH = $('#item2-tab-pc').height();
            $('#Gamingfeature .GRc-item-line .left').height(GafepcH);
            $('#Gamingfeature .GRc-item-line .right').height(GafepcH);
        });

        $('.item2-tab-nav .item2-tabnavmob').click(function() {
            $('.item2-tabnavpc').removeClass('it2-tabnav-active');
            $('.item2-tabnavlive').removeClass('it2-tabnav-active');
            $(this).addClass('it2-tabnav-active');
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
            $('#item2-tab-mob').fadeIn();

            var GafemobH = $('#item2-tab-mob').height();
            $('#Gamingfeature .GRc-item-line .left').height(GafemobH);
            $('#Gamingfeature .GRc-item-line .right').height(GafemobH);
        });

        $('.item2-tab-nav .item2-tabnavlive').click(function() {
            $('.item2-tabnavpc').removeClass('it2-tabnav-active');
            $('.item2-tabnavmob').removeClass('it2-tabnav-active');
            $(this).addClass('it2-tabnav-active');
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
            $('#item2-tab-live').fadeIn();

            var GafeLiveH = $('#item2-tab-live').height();
            $('#Gamingfeature .GRc-item-line .left').height(GafeLiveH);
            $('#Gamingfeature .GRc-item-line .right').height(GafeLiveH);
        });

        $('.item2-tab-nav li').click(function() {
            var item2TabTop = $("#item2-tab").offset().top;
            $('html, body').animate({ scrollTop: item2TabTop }, '800');
            $('#Gamingfeature .GRc-item-line span').show();
            $('.item2-tabnavpc').removeClass('it2-tabnav-active');
            $('.item2-tabnavmob').removeClass('it2-tabnav-active');
            $('.item2-tabnavlive').removeClass('it2-tabnav-active');
            $('.item2-tab-nav').slideUp('slow');
            $('.switchother-top').fadeIn(500);
        });
        $('.switchother-top').click(function() {
            var GRcontentTOP = $(".GRcontent").offset().top - 50;
            $('html, body').animate({ scrollTop: GRcontentTOP }, '800');
            $('.item2-tab-nav').delay(500).slideDown('slow');
            $('#Gamingfeature .GRc-item-line span').hide();
            $('.item2-tabnavpc').removeClass('it2-tabnav-active');
            $('.item2-tabnavmob').removeClass('it2-tabnav-active');
            $('.item2-tabnavlive').removeClass('it2-tabnav-active');
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
            $(this).fadeOut(500);
        });
        $('.switchother-bottom').click(function() {
            var GRcontentTOP = $(".GRcontent").offset().top - 50;
            $('html, body').animate({ scrollTop: GRcontentTOP }, '800');
            $('.item2-tab-nav').delay(500).slideDown('slow');
            $('.switchother-top').fadeOut(500);
            $('#Gamingfeature .GRc-item-line span').hide();
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
        });
        $('#tabitem2').on('click', function() {
            $('.item2-tab-nav').fadeIn();
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
        });
        $('#Btabitem2').on('click', function() {
            $('.item2-tab-nav').fadeIn();
            $('#item2-tab-pc').fadeOut();
            $('#item2-tab-mob').fadeOut();
            $('#item2-tab-live').fadeOut();
        });
    });


    // Recommendation slider
    $(document).ready(function() {
        $('#Recommendation #Rec-slider .flexslider2').flexslider({
            // animation: "slide", 
            controlNav: "thumbnails",
            animationLoop: true, //c
            directionNav: false,
            slideshowSpeed: 7000,
            animationSpeed: 500,
            slideshow: true, //c
            pausePlay: false,
            pauseOnAction: true,
            move: 1
        });

        var tab3Slider = $('#Recommendation #Rec-slider .flexslider2').data('flexslider');
        tab3Slider.on('click', function() {
            tab3Slider.pause();
        });
    });

    // left right span height
    $(document).ready(function() {
        var whyAsusH = $('#why-asus').innerHeight(),
            GafeH = $('#Gamingfeature').innerHeight(),
            RecoH = $('#Recommendation').innerHeight();
        // console.log($('#Recommendation').innerHeight());

        $('#why-asus .GRc-item-line .left').height(whyAsusH);
        $('#why-asus .GRc-item-line .right').height(whyAsusH);
        $('#Gamingfeature .GRc-item-line .left').height(GafeH);
        $('#Gamingfeature .GRc-item-line .right').height(GafeH);
        $('#Recommendation .GRc-item-line .left').height(RecoH);
        $('#Recommendation .GRc-item-line .right').height(RecoH);

        var Allmainheight = $('#hdGR').innerHeight();
        $('#main-zone').height(Allmainheight);
        $(document).on('scroll', function() {
            var Allmainheight = $('#hdGR').innerHeight();
            $('#main-zone').height(Allmainheight);
        })
        $('#main-zone .container').css({
            'width': '100%',
            'max-width': '100%',
            'padding': 0,
        });
    });
})($)