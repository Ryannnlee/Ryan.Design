$(function () {
	// smooth scrollTo
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').stop(0,1).animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// vertical nav dots
	$(window).scroll(function () {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 50) {
			$('#hd section.count').each(function (i) {
				if ($(this).position().top <= windscroll + 100) {
					$('#fp-nav li a.active').removeClass('active');
					$('#fp-nav li').eq(i).find("a").addClass('active');
				}
			});
		} else {
			$('#fp-nav li a.active').removeClass('active');
			$('#fp-nav li:first').find("a").addClass('active');
		}


		//scrollUp btn
		if ($(this).scrollTop() > 0) {
			$('#scrollUp').addClass('hd-show');
		} else {
			$('#scrollUp').removeClass('hd-show');
		}
	}).scroll();

	//scrollUp btn
	$('#scrollUp').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	// scrollReveal
	// Changing the defaults
	window.sr = ScrollReveal({
		reset: true,
		mobile: true,
		duration: 600,
		origin: 'bottom',
		distance: '50px',
		opacity: 0,
		scale: 0.8,
		easing: 'cubic-bezier(.38,.02,.52,1.35)'
	});

	sr.reveal('#kv_light', {
		duration: 2000,
		distance: '0',
		opacity:0,
		scale:1,
		viewFactor: 0.6
	});
	sr.reveal('.reveal', {
		duration: 800,
		distance: '100px',
		easing: 'ease'
	});
	sr.reveal('.reveal1', 500);
	sr.reveal('.reveal2', 500);
	sr.reveal('.reveal3', {
		origin: 'left'
	}, 500);
	sr.reveal('.reveal4', {
		origin: 'left'
	}, 500);
	sr.reveal('.reveal5', 500);


	// spec switch
	var spec_dot = $('#specs .hd-dots li'),
		spec_main = $('#specs .spec-main');

	// spec auto switch
	function switchSpec() {
		spec_dot.toggleClass('active');
		spec_main.toggleClass('glow');
	};
	var setSwitch = setInterval(function(){
		switchSpec();
	},5000)

	// spec click switch(clear auto switch)
	spec_dot.on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index() != 0){spec_main.addClass('glow');}
		else{spec_main.removeClass('glow');}

		clearInterval(setSwitch);
	})

	// fan control
	var fan_filter = $('.hd-sec-fan .hd-filter li'),
		fan_cover = $('.hd-sec-fan .fan_cover li'),
		fan_content = $('.hd-sec-fan .hd-content li');
		
	fan_filter.on('click', function(){
		var n = $(this).index();
		$(this).addClass('hd-active').siblings().removeClass('hd-active');
		fan_cover.removeClass('hd-active').eq(n).addClass('hd-active');
		fan_content.removeClass('hd-active').eq(n).addClass('hd-active');
	})

	//  SUPREMEFX hover switch
	var item = $('.audio-switch');
	var supremefx = $('.hd-supremefx li');
	item.hover(function () {
		var n = $(this).data('supremefx');
		supremefx.eq(0).addClass('hd-active');
		supremefx.eq(n).addClass('hd-active');
	}, function () {
		supremefx.eq(0).removeClass('hd-active');
		supremefx.removeClass('hd-active');
	})

	// sonic studio ui lightbox
	var uibox = $('#sonic_ui_on');
	$('.hd-sec-sonic figure > img').on('click', function(){
		uibox.fadeIn();
	});
	uibox.on('click', function(e){
		if(e.target != this){return;}
		$(this).fadeOut();
	})

	// triple lightbox
	var triplebox = $('#triple_lightbox'),
		closetriple = $('#triple_lightbox .closebox');
	$('.hd-sec-triple .hd-btn-more').on('click', function(){
		triplebox.fadeIn();
	});
	triplebox.on('click', function(e){
		if(e.target != this){return;}
		$(this).fadeOut();
	})
	closetriple.on('click', function(){
		triplebox.fadeOut();
	})

	// overview click switch
	var detail = $('.hd-detail');
	var menu = $('.hd-menu li, .hd-detail .hd-btn');
	menu.on('click', function (e) {
		var targetdetail = $(this).data('detail');
		if ($(e.target).parents().hasClass('hd-menu')) {
			menu.removeClass('hd-active');
		}
		$(this).addClass('hd-active');

		detail.removeClass('hd-open');
		$(targetdetail).addClass('hd-open');
	});

	// mode click expand content
	$('.hd-sec-mode h4').on('click', function () {
		$(this).toggleClass('hd-open');
		$(this).next().slideToggle();
	})

	// video lightbox
	var hd_lightbox = $('#hd_lightbox');
	var player = $('#player');

	$('.play-tutorial').click(function () {
		var video = $(this).data('src') +
			'?modestbranding=0&autohide=1&showinfo=0&color=white&autoplay=1&enablejsapi=1';

		player.attr('src', video);
		hd_lightbox.fadeIn();
	})

	// close lightbox
	$('#hd .hd_filter, #hd .hd_close').click(function () {
		hd_lightbox.fadeOut();
		player.attr('src', "");
	});


	// expand content
	$('.hd-more').on('click', function () {
		var $this = $(this),
			source = $this.data('source'),
			hidden = $this.next();

		hidden.find('img').each(function () {
			$(this).attr('src', $(this).data('source')).css('visibility', 'visible');
		})

		$this.toggleClass('hd-open');
		hidden.slideToggle(1000);
		if ($this.hasClass('hd-open')) {
			$('html, body').stop(0,1).animate({
				scrollTop: $this.offset().top
			}, 1000);
		}
	})
});