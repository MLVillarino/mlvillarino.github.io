winWidth = 0;
mobileMode = false;
langMode = "en"; //check translation.js for the rest

winWidth = $(window).width();
chk = mobileCheck();
if(chk){
	mobileMode = true;
	$("#menu").css("margin-left","110vw");
	$("#menu").css("display","none");
	$("#menu").css("opacity","0");
//	console.log("MOBILE MODE");
}else{
	mobileMode = false;
	$("#menu").css("margin-left","0px");
	$("#menu").css("display","flex");
	$("#menu").css("opacity","100");
//	console.log("DESKTOP MODE");
}

$(window).resize(function(){ //FIX THIS
	winWidth = $(window).width();
	chk = mobileCheck();
	if(chk){
		mobileMode = true;
		$("#menu").css("margin-left","110vw");
		$("#menu").css("display","none");
		$("#menu").css("opacity","0");
	}else{
		mobileMode = false;
		$("#menu").css("margin-left","0px");
		$("#menu").css("display","flex");
		$("#menu").css("opacity","100");
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
	
	$("#menu").css("margin-left","100vw");
	$("#menu").css("display","block");
	$("#menu").css("position","absolute");
	$("#menu").css("opacity","0");
	$("#menu").animate({
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
		var top = $(window).scrollTop() + ($(window).height() * (1/3));
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
	var top = $(window).scrollTop() + ($(window).height() * (1/8));
	var modal = $(this).parent().siblings(".modal");
	$(modal).css("display","block");
	$('body').css("overflow", "hidden");
	$("#vint-top").css("display","none");
	$(".toggle-thumb").css("display","none");

	var modalchild = $(modal).children(".modal-content");
	$(modalchild).css("opacity","0");
	$(modalchild).css("top","-300px");
	$(modalchild).animate({
		opacity: 1,
		top: top
	}, 400, "swing", function(){
		//done
	});
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
	}else if( $(e.target).hasClass("menu-modal") || (($(e.target).is(".menu-item")) && mobileMode) ) {
		$("#menu").css("margin-left","110vw");
		$("#menu").css("display","none");
		$("#menu").css("opacity","0");

		$(".menu-modal").css("display", "none");
		$('body').css("overflow", "auto");
		$("#vint-top").css("display","block");
		$(".toggle-thumb").css("display","flex");
//				$("#banner").css("position","relative");
	}
});
$(".menu-item").on("click",function(){
	$("#menu").css("margin-left","110vw");
	$("#menu").css("display","none");
	$("#menu").css("opacity","0");

	$(".menu-modal").css("display", "none");
	$('body').css("overflow", "auto");
	$("#vint-top").css("display","block");
	$(".toggle-thumb").css("display","flex");
});