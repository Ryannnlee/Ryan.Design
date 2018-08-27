(function(){
	var online = /asus\.com/.test( window.location.hostname ), path = online?'/':'';
	document.write( '<link rel="stylesheet" href="' + path + 'css/mg-style.css">');
	document.write( '<script src="' + path + 'js/plu/jquery.reel-min.js"></script>');
	document.write( '<script src="' + path + 'js/plu/jquery.lazyload_img.js"></script>');
	document.write( '<script src="' + path + 'js/plu/jquery.lazyload_bg.js"></script>');
	document.write( '<script src="' + path + 'js/plu/jquery.navscroll.min.js"></script>');
	document.write( '<script src="' + path + 'js/plu/jquery-ui.min.js"></script>');
	document.write( '<script src="' + path + 'js/plu/video.js"></script>');
	document.write( '<script src="' + path + 'js/modernizr.js"></script>');
	document.write( '<script src="' + path + 'js/mg-main.min.js"></script>');
	document.write( '<script src="' + path + 'js/plu/overview.js"></script>');
})();