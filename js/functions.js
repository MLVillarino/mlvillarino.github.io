winWidth = 0;
mobileMode = false;
showingMenu = false;
langMode = "en"; //check translation.js for the rest
var controller = new ScrollMagic.Controller();
var enableOldFadeIn = false;





// CHECK IF MOBILE MODE OR DESKTOP MODE
winWidth = $(window).width();
//chk = mobileCheck();
chk = true; //DEBUGGING ONLY. FORCES MOBILE MODE ON DESKTOP. THIS IS BEFORE I DID THE BANTAYAN FOOD HUB WIDTHS BASED ONE

if(chk){
	mobileMode = true;
//	$("#menu-mobile").css("margin-left","110vw");
//	$("#menu-mobile").css("display","none");
//	$("#menu-mobile").css("opacity","0");
//	showingMenu = true;
	console.log("NOW MOBILE MODE");
}else{
	mobileMode = false;
//	$("#menu-mobile").css("margin-left","none");
//	$("#menu-mobile").css("display","flex");
//	$("#menu-mobile").css("opacity","100");
	console.log("NOW DESKTOP MODE");
}
$(window).resize(function(){
	winWidth = $(window).width();
	chk = mobileCheck();
	if(chk){
		mobileMode = true;
//		$("#menu-mobile").css("margin-left","110vw");
//		$("#menu-mobile").css("display","none");
//		$("#menu-mobile").css("opacity","0");
	}else{
		mobileMode = false;
//		$("#menu-mobile").css("margin-left","0px");
//		$("#menu-mobile").css("display","flex");
//		$("#menu-mobile").css("opacity","100");
	}
	
	if(showingMenu && winWidth >= 1080){
		$("#menu-mobile").css("margin-left","110vw");
		$("#menu-mobile").css("display","none");
		$("#menu-mobile").css("opacity","0");
		showingMenu = false;

		$(".menu-modal").css("display", "none");
		$('body').css("overflow", "auto");
		$("#vint-top").css("display","block");
		$(".toggle-thumb").css("display","flex");
	}
});

//		$(window).resize(function(){ //FIX THIS
//			winWidth = $(window).width();
//			if(winWidth <= 1080){
//				mobileMode = true;
//				$("#menu").css("margin-left","110vw");
//				$("#menu").css("display","none");
//				$("#menu").css("opacity","0");
//			}else{
//				mobileMode = false;
//				$("#menu").css("margin-left","0px");
//				$("#menu").css("display","flex");
//				$("#menu").css("opacity","100");
//			}
//		});





// Menu Modal from clicking on the Hamburger Menu
$("#menu-hamburger").on("click",function(){
	$(".menu-modal").css("display","block");
	$('body').css("overflow", "hidden");
	$("#vint-top").css("display","none");
	$(".toggle-thumb").css("display","none");
//			$("#banner").css("position","fixed");
	
	console.log("this one ESTE");
	showingMenu = true;
	
	$("#menu-mobile").css("margin-left","100vw");
	$("#menu-mobile").css("display","block");
	$("#menu-mobile").css("position","absolute");
	$("#menu-mobile").css("opacity","0");
	$("#menu-mobile").animate({
		opacity: 1,
		marginLeft: '40vw'
	}, 400, "swing", function(){
		//done
	});
});





// Gallery Modal
$(".galleryOver").on("click",function() {
	var ind = $(this).parent("li").index();
//			var txt = $(this).children(".galleryText").text();
	if(mobileMode){
		var top = $(window).scrollTop() + ($(window).height() * (1/4));
	}else{
		var top = $(window).scrollTop() + ($(window).height() * (1/10));
	}
	var modal = $("#modal-list").children(".modal").filter(":nth-child("+(ind+1)+")");
	$(modal).css("display","block");
	$("#modal-list").find("p").css("display","block");
	$('body').css("overflow", "hidden");
	$("#vint-top").css("display","none");
	$(".toggle-thumb").css("display","none");

	var modalchild = $(modal).children(".modal-content");
	$(modalchild).css("opacity","0");
	if(mobileMode){
		$(modalchild).css("top","450vh");
	}else{
		$(modalchild).css("top","-300px");
	}
	$(modalchild).animate({
		opacity: 1,
		top: top
	}, 400, "swing", function(){
		//done
	});
});





// Resume Modal TEMP NOT WORKING
$("#resume-btn").on("click",function() {
	var top = $(window).scrollTop() + $(window).height();
	$(window).scrollTop(top);
//	var modal = $(this).parent().siblings(".modal");
//	$(modal).css("display","block");
//	$('body').css("overflow", "hidden");
//	$("#vint-top").css("display","none");
//	$(".toggle-thumb").css("display","none");
//
//	var modalchild = $(modal).children(".modal-content");
//	$(modalchild).css("opacity","0");
//	$(modalchild).css("top","-300px");
//	$(modalchild).animate({
//		opacity: 1,
//		top: top
//	}, 400, "swing", function(){
//		//done
//	});
});
$("#portfolio-btn").on("click",function() {
	var top = $(window).scrollTop() + $(window).height();
	$(window).scrollTop(top);
});





// Close the Modal with the X Button or my clicking outside the modal window
$(".close").on("click",function() { // X Button
	var ind = $(this).parent(".modal").index();
	var modal = $(".modal").filter(":nth-child("+(ind+1)+")");
	var modalchild = $(modal).children(".modal-content");
	$(modalchild).css("opacity","0");
	$(modalchild).css("top","-300px");

	$(".modal").css("display", "none");
	$('body').css("overflow", "auto");
	$("#vint-top").css("display","block");
	$(".toggle-thumb").css("display","flex");
});
$(window).click(function(e) { // Outside the window
	if( $(e.target).hasClass("modal") ) {
		var ind = $(e.target).index();
		var modal = $(".modal").filter(":nth-child("+(ind+1)+")");
		var modalchild = $(modal).children(".modal-content");
		$(modalchild).css("opacity","0");
		$(modalchild).css("top","-300px");

		$(e.target).css("display", "none");
		$('body').css("overflow", "auto");
		$("#vint-top").css("display","block");
		$(".toggle-thumb").css("display","flex");
	}else if( $(e.target).hasClass("menu-modal") || (($(e.target).is(".menu-item"))) ) {
		$("#menu-mobile").css("margin-left","110vw");
		$("#menu-mobile").css("display","none");
		$("#menu-mobile").css("opacity","0");
		showingMenu = false;

		$(".menu-modal").css("display", "none");
		$('body').css("overflow", "auto");
		$("#vint-top").css("display","block");
		$(".toggle-thumb").css("display","flex");
//				$("#banner").css("position","relative");
	}
});
$(".menu-item").on("click",function(){
	if(showingMenu){
		$("#menu-mobile").css("margin-left","110vw");
		$("#menu-mobile").css("display","none");
		$("#menu-mobile").css("opacity","0");
		showingMenu = false;

		$(".menu-modal").css("display", "none");
		$('body').css("overflow", "auto");
		$("#vint-top").css("display","block");
		$(".toggle-thumb").css("display","flex");
	}
});





// FADE INTO VIEW
function isScrolledIntoView(elem) {
	var centerY = Math.max( 0,( $(window).height()-$(elem).outerHeight() )+$(window).scrollTop() );
	
	var elementTop = $(elem).offset().top;
	var elementBottom = elementTop + $(elem).height();
	
	if(mobileMode){
		return elementTop >= centerY*.65 && elementBottom <= centerY*1.25;
	}else{
		return elementTop <= centerY*1.05 && elementBottom >= centerY*1.05;
	}
}
$(window).on("scroll resize",function(){
	if(enableOldFadeIn){
		$(".fade-in").each(function(index, element){
			if(isScrolledIntoView(element) && !$(element).hasClass("animate")){
				$(element).animate({
					opacity: 1
				}, 5, "swing", function(){
					//done
				});
				$(element).addClass("animate");
			}
		});
	}
});


if(!enableOldFadeIn){
	$("#contact").addClass("fade-in");
	
	if(!mobileMode){ // DESKTOP MODE
		console.log("DESKTOP MODE");
		$(".fade-in").each(function (i, fadein) {
			var $fadein = $(fadein);
			new ScrollMagic.Scene({
				triggerElement: fadein,
				reverse: false
			})
			.setClassToggle(fadein, "animate-new")
//			.addIndicators()
			.triggerHook("0.8")
			.addTo(controller);
		});
		$(".fade-in-opp").each(function (i, fadein) { //weird solution
			var $fadein = $(fadein);
			new ScrollMagic.Scene({
				triggerElement: fadein,
				reverse: false
			})
			.setClassToggle(fadein, "animate-new")
//			.addIndicators()
			.triggerHook("0.8")
			.addTo(controller);
		});
	} else {			// MOBILE MODE
		console.log("MOBILE MODE");
		$(".fade-in").each(function (i, fadein) {
			var $fadein = $(fadein);
			if ($fadein.is('#contact-content') || $fadein.is('#contact')) {
				new ScrollMagic.Scene({
					triggerElement: fadein,
					reverse: false
				})
				.setClassToggle(fadein, "animate-new")
//				.addIndicators()
				.triggerHook("0.6")
				.addTo(controller);
			} else {
				new ScrollMagic.Scene({
					triggerElement: fadein,
					reverse: false
				})
				.setClassToggle(fadein, "animate-new")
//				.addIndicators()
				.triggerHook("0.9")
				.addTo(controller);
			}
		});
		$(".fade-in-opp").each(function (i, fadein) { //weird solution
			var $fadein = $(fadein);
			new ScrollMagic.Scene({
				triggerElement: fadein,
				reverse: false
			})
			.setClassToggle(fadein, "animate-new")
//			.addIndicators()
			.triggerHook("0.6")
			.addTo(controller);
		});
	}
}


