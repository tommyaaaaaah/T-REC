/*nav hover*/
$(function() {
	$("a.icon_meun").click(function() {
		// alert('123');
		$("header > nav").slideToggle(900);
	});

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$(window).resize(function() {
		if(windowHeight == $(window).height() && windowWidth != $(window).width()){
			if($(window).width() >= 751 ){
				$("header > nav").show();
			}else{
				$('header > nav').hide();
			}
		}
		windowHeight = $(window).height();
	});

	$('nav li').hover(function() {
		// $(this).children('a.hover').css("background-image","url(dist/images/icon_menu_mobile02.png)");
		// $(this).siblings('li').children('a.hover').css("background-image","url(dist/images/icon_menu_mobile01.png)");
		$(this).children('ul').stop(true,false);
		$(this).children('ul').css({
			visibility: 'visible'
		}).fadeIn(500);
	}, function() {
		$(this).children('ul').hide();
	});

	return false;
});

/*header 滑動變化*/
$(function(){
	var windowHeight = $(window).height();
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
		var $this = $(this);
		var $this_Top=$this.scrollTop();
		//當高度小於100時，關閉區塊
		if($this_Top < 98){
			$("header").removeClass("slip");
			$("header a.logo img").attr("src","dist/images/logo.png");
		}
		if($this_Top > 98){
			$("header").addClass("slip");
			$("header a.logo img").attr("src","dist/images/logo_down.png");
		}

		}).scroll();
	});//header 滑動變化
});

/*fixed hover*/
$(function() {
	$(".fixed a").click(function() {
		$(".fixed").toggleClass("open");
		$(".fixed > a.close").toggle();
		$(".fixed > .statistics_box").toggle();
	});
	return false;
});








/*certification.php 年份點擊變換*/
$(function() {
	$(".certification main .content .years a").click(function() {
		$(this).addClass("this");
		$(this).siblings('a').removeClass("this");
	});
});

/*取表格table span 高度*/
$(function() {
	var height02 = $(".table ul li:nth-child(2) .first .data").outerHeight(true);
	$(".table ul li:nth-child(2) .first .data").find('span').css("height", height02);
	$(".table ul li:nth-child(2) .second .data").find('span').css("height", height02);

	var height03 = $(".table ul li:nth-child(3) .first .data").outerHeight(true);
	$(".table ul li:nth-child(3) .first .data").find('span').css("height", height03);
	$(".table ul li:nth-child(3) .second .data").find('span').css("height", height03);

	var height04 = $(".table ul li:nth-child(4) .first .data").outerHeight(true);
	$(".table ul li:nth-child(4) .first .data").find('span').css("height", height04);
	$(".table ul li:nth-child(4) .second .data").find('span').css("height", height04);

	var height05 = $(".table ul li:nth-child(5) .first .data").outerHeight(true);
	$(".table ul li:nth-child(5) .first .data").find('span').css("height", height05);
	$(".table ul li:nth-child(5) .second .data").find('span').css("height", height05);

	var height06 = $(".table ul li:nth-child(6) .first .data").outerHeight(true);
	$(".table ul li:nth-child(6) .first .data").find('span').css("height", height06);
	$(".table ul li:nth-child(6) .second .data").find('span').css("height", height06);

	var height07 = $(".table ul li:nth-child(7) .first .data").outerHeight(true);
	$(".table ul li:nth-child(7) .first .data").find('span').css("height", height07);
	$(".table ul li:nth-child(7) .second .data").find('span').css("height", height07);

	var height08 = $(".table ul li:nth-child(8) .first .data").outerHeight(true);
	$(".table ul li:nth-child(8) .first .data").find('span').css("height", height08);
	$(".table ul li:nth-child(8) .second .data").find('span').css("height", height08);

	var height09 = $(".table ul li:nth-child(9) .first .data").outerHeight(true);
	$(".table ul li:nth-child(9) .first .data").find('span').css("height", height09);
	$(".table ul li:nth-child(9) .second .data").find('span').css("height", height09);

	var height10 = $(".table ul li:nth-child(10) .first .data").outerHeight(true);
	$(".table ul li:nth-child(10) .first .data").find('span').css("height", height10);
	$(".table ul li:nth-child(10) .second .data").find('span').css("height", height10);

	var height11 = $(".table ul li:nth-child(11) .first .data").outerHeight(true);
	$(".table ul li:nth-child(11) .first .data").find('span').css("height", height11);
	$(".table ul li:nth-child(11) .second .data").find('span').css("height", height11);

});






$(function(){
	var windowHeight = $(window).height();
	// if($(window).width() <= 963 ){
	// 	$("main").css({'min-height': windowHeight - 171 + 'px' });
	// 	windowWidth = $(window).width();
	// }else{
	// 	$("main").css({'min-height': windowHeight - 390 + 'px' });
	// }//最小高度


//手機 menu
	var windowHeight = $(window).height();
	$("header i.menu").click(function() {
		$(this).toggleClass('open');
		$("nav.mobile").slideToggle();
	});

	$("nav.mobile > ul > li > a").click(function() {
		$("nav.mobile").hide();
		$('header i.menu').removeClass('open');
	});

	$(window).on('resize', function() {
		var windowHeight = $(window).height();
		if($(window).width() <= 980 ){
			$("nav.mobile").slideUp();
			$('header i.menu').removeClass('open');
			$("nav.mobile").hide();
			windowWidth = $(window).width();
		}else{

		}
	});
});






