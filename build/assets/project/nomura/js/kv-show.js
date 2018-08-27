

$(document).ready(function() {

if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
// mobile目前是用手機瀏覽
	$('#kv_title8').css({ "left":"0","width":"70%","top":"0","opacity":1});
	$('#kv_title8').delay(100).animate({"left":"0%","width":"40%","top":"0","opacity":1 },400,'easeOutElastic');
	
	$('#kv_title-txt-1').css({ "right":"-50%","width":"200%" ,"top":"-50px" ,"opacity":0 });
    $('#kv_title-txt-1').delay(500).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');

    $('#kv_title-txt-2').css({ "right":"-50%","width":"200%","top":"0" ,"opacity":0 });
    $('#kv_title-txt-2').delay(1000).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');

    $('#kv_title-txt-3').css({ "right":"-50%","width":"200%","height":"100%" ,"top":"50px" ,"opacity":0 });
    $('#kv_title-txt-3').delay(1500).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');
	
	$('#btn_block_light').delay(2300).animate({"left":"100%" },1000,'easeInOutQuart');
    }

else {
// 目前是用電腦瀏覽
	
	$('#kv_title8').css({ "left":"0","width":"70%","top":"0","opacity":1});
	$('#kv_title8').delay(100).animate({"left":"0%","width":"40%","top":"0","opacity":1 },400,'easeOutElastic');
	
	$('#kv_title-txt-1').css({ "right":"-50%","width":"200%","height":"200%" ,"top":"-10%" ,"opacity":0 });
    $('#kv_title-txt-1').delay(500).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');

    $('#kv_title-txt-2').css({ "right":"-50%","width":"200%","height":"200%" ,"top":"0" ,"opacity":0 });
    $('#kv_title-txt-2').delay(1000).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');

    $('#kv_title-txt-3').css({ "right":"-50%","width":"200%","height":"100%" ,"top":"10%" ,"opacity":0 });
    $('#kv_title-txt-3').delay(1500).animate({"left":"0","width":"100%" ,"top":"0","opacity":1},800,'easeInOutCubic');
	
	$('#btn_block_light').delay(2300).animate({"left":"100%" },1000,'easeInOutQuart');
}

});















$(document).ready(function() {
var h_high = $(".gridContainer").height();
$('#move_mov_block').css({ "height":h_high});

	
var h = $(window).height();
$("#move_mov" ).css({"height":h*0.8});
$('#kv_btn_a').click(function() {
$('#move_mov_block').fadeIn(500);

$('#move_mov').append( "<iframe width=100%  src=https://www.youtube.com/embed/McJxoeBgiU0?autoplay=1&loop=1&playlist=McJxoeBgiU0 feature=player_detailpage frameborder=0 allowfullscreen  ></iframe>" );
});
$('#move_mov_block').find(".move_close").click(function() {
$("#move_mov" ).find("iframe").remove();	
$('#move_mov_block').fadeOut(500);	
});

$('#kv_btn_b').click(function() {
$('#img_a_block').fadeIn(500);
});
$('#img_a_block').find(".img_a_close").click(function() {
$('#img_a_block').fadeOut(500);	
});

$('#kv_btn_c').click(function() {
$('#img_b_block').fadeIn(500);
});
$('#img_b_block').find(".img_b_close").click(function() {
$('#img_b_block').fadeOut(500);	
});

});
