/*** zoomin ***/
var productName = 'mg248q-warp';
var windowW, windowH;

var Main = function() {
	var init = function() {
		product = $('#' + productName);
		windowResizeInit();
	}

	function windowResizeInit() {
		$(window).resize(function() {
			windowW = $(window).width();
			windowH = $(window).height();

			product.css({
				width: windowW,
				marginLeft: -windowW / 2
			})
		}).resize();
	}
	return {
		init: init
	};
}();

var Overview = function() {
	var init = function() {
		section03();
	}
	function section03() {
		$('#mg248q-stunning .mainsize > .page .ani .item', product).on('mousemove touchstart touchmove', function(e) {
			var touch;
			if (typeof(e.originalEvent.touches) != 'undefined') {
				touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			} else {
				touch = e;
			}
			var pX = (touch.pageX - $(this).offset().left) / $(this).width(); //4.5~95.2
			var pY = (touch.pageY - $(this).offset().top) / $(this).height(); //8.9~92.4
			if (pX > 0.045 && pX < 0.952 && pY > 0.089 && pY < 0.924) {
				var glass = $('#mg248q-stunning .mainsize > .page .ani .item .glass', product);
				glass.show();
				glass.css({
					left: pX * 100 + '%',
					top: pY * 100 + '%',
				});
				var img = $('#mg248q-stunning .mainsize > .page .ani .item .glass img', product);
				img.css({
					left: -pX * 666 + 50 + '%',
					top: -pY * 402 + 50 + '%',
				});
			} else {
				$('#mg248q-stunning .mainsize > .page .ani .item .glass', product).hide();
			}
		});
		$('#mg248q-stunning .mainsize > .page .ani .item', product).on('mouseleave', function() {
			$('#mg248q-stunning .mainsize > .page .ani .item .glass', product).hide();
		});
		$('#mg248q-stunning .mainsize > .page > .links a', product).on('click', function() {
			$('#mg248q-stunning .mainsize > .page .ani .item', product).stop().fadeOut();
			$('#mg248q-stunning .mainsize > .page .ani .item.item' + $(this).attr('data-idx'), product).stop().fadeIn();
			$('#mg248q-stunning .mainsize > .page > .links a', product).removeClass('active');
			$(this).addClass('active');
		});
		$('#mg248q-stunning .mainsize > .page > .links a', product).eq(0).click();
		setTimeout(section03_timer, 5000);
	}

	function section03_timer() {
		var idx = $('#mg248q-stunning .mainsize > .page > .links a.active', product).index();
		idx++;
		$('#mg248q-stunning .mainsize > .page > .links a', product).eq(idx > 2 ? 0 : idx).click();
		setTimeout(section03_timer, 5000);
	}

	return {
		init: init
	};
}();
