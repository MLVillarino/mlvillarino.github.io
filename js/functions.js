winWidth = 0;
mobileMode = false;
showingMenu = false;
langMode = "en"; //check translation.js for the rest
var controller = new ScrollMagic.Controller();
var enableOldFadeIn = false;





// CHECK IF MOBILE MODE OR DESKTOP MODE
winWidth = $(window).width();
chk = mobileCheck();
//chk = true; //DEBUGGING ONLY. FORCES MOBILE MODE ON DESKTOP. THIS IS BEFORE I DID THE BANTAYAN FOOD HUB WIDTHS BASED ONE

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





// BUILD THE PORTFOLIO FROM portfolioData.js
function validPortfolioProject(project, projectIDs){
	var validCategories = ["print", "art", "web"];
	var valid = true;

	if(!project.id || !/^[a-z0-9][a-z0-9-]*$/.test(project.id)){
		console.error("Portfolio project has an invalid id.", project.id);
		valid = false;
	}else if(projectIDs[project.id]){
		console.error("Portfolio project has a duplicate id.", project.id);
		valid = false;
	}
	if(validCategories.indexOf(project.category) === -1){
		console.error("Portfolio project has an invalid category.", project.id);
		valid = false;
	}
	if(!project.thumbnail || !project.thumbnail.src || !project.modalImages || !project.modalImages.length){
		console.error("Portfolio project is missing an image.", project.id);
		valid = false;
	}
	if(!project.en || !project.jp){
		console.error("Portfolio project is missing a language block.", project.id);
		valid = false;
	}

	if(valid){
		projectIDs[project.id] = true;
	}
	return valid;
}

function buildPortfolio(){
	var gallery = $(".gallery");
	var modalList = $("#modal-list");
	var projectIDs = {};

	gallery.html("");
	modalList.html("");

	$.each(portfolioData,function(index, project){
		if(!validPortfolioProject(project, projectIDs)){
			return;
		}

		var galleryItem = $("<li>").addClass("fade-in").attr({
			"data-category": project.category,
			"data-project-id": project.id
		});
		var thumbnail = $("<img>").attr({
			"src": project.thumbnail.src,
			"loading": "lazy"
		});
		var galleryOver = $("<a>").addClass("galleryOver").attr("data-project-id", project.id);
		var galleryText = $("<div>").addClass("galleryText");

		galleryOver.append(galleryText);
		galleryItem.append(thumbnail);
		galleryItem.append(galleryOver);
		if(project.thumbnailExtraHTML){
			galleryItem.append(project.thumbnailExtraHTML);
		}
		gallery.append(galleryItem);

		var modal = $("<div>").addClass("modal").attr({
			"id": "portfolioModal-" + project.id,
			"data-project-id": project.id
		});
		var modalContent = $("<div>").addClass("modal-content");
		var closeButton = $("<span>").addClass("close").html("&times;");
		var modalBody = $("<div>").addClass("modal-body");
		var useScrollableMedia = project.category === "web" || project.modalImages.length > 1;
		var modalMedia = $("<div>").addClass("modal-media modal-media-scrollable");
		if(useScrollableMedia){
			modalBody.append(modalMedia);
		}
		var modalCopy = $("<div>").addClass("modal-copy");
		var modalTitle = $("<h2>");
		var modalParagraph = $("<p>");

		$.each(project.modalImages,function(imageIndex, image){
			var modalImage = $("<img>").attr({
				"src": image.src,
				"loading": "lazy",
				"data-image-index": imageIndex
			});
			if(useScrollableMedia){
				modalMedia.append(modalImage);
			}else{
				modalBody.append(modalImage);
			}
		});

		modalCopy.append(modalTitle);
		modalCopy.append(modalParagraph);
		modalBody.append(modalCopy);
		modalContent.append(closeButton);
		modalContent.append(modalBody);
		modal.append(modalContent);
		modalList.append(modal);
	});

	updatePortfolioLanguage(langMode);
}

function updatePortfolioLanguage(lang){
	$.each(portfolioData,function(index, project){
		var copy = project[lang] || project.en;
		var galleryItem = $('.gallery > li[data-project-id="' + project.id + '"]');
		var modal = $('#modal-list > .modal[data-project-id="' + project.id + '"]');
		var thumbnailAlt = project.thumbnail.alt[lang] || project.thumbnail.alt.en || "";

		galleryItem.children("img").first().attr("alt", thumbnailAlt);
		galleryItem.find(".galleryText").html(copy.cardHTML);
		modal.find(".modal-copy > h2").html(copy.titleHTML);
		modal.find(".modal-copy > p").html(copy.bodyHTML);

		$.each(project.modalImages,function(imageIndex, image){
			var imageAlt = image.alt[lang] || image.alt.en || "";
			modal.find('img[data-image-index="' + imageIndex + '"]').attr("alt", imageAlt);
		});
	});
}

buildPortfolio();


// Gallery Modal
$(".galleryOver").on("click",function() {
	var projectID = $(this).attr("data-project-id");
//			var txt = $(this).children(".galleryText").text();
	if(mobileMode){
		var top = $(window).scrollTop() + ($(window).height() * (1/4));
	}else{
		var top = $(window).scrollTop() + ($(window).height() * (1/10));
	}
	var modal = $("#portfolioModal-" + projectID);
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



// PORTFOLIO FILTERS
var portfolioGallery = $(".gallery");
var portfolioItems = $(".gallery > li");
var portfolioMobileItemHeight = 5500 / 21;

portfolioItems.not('[data-category="print"]').addClass("portfolio-hidden");

function resizeFilteredPortfolio(){
	if(window.matchMedia("(orientation: portrait)").matches){
		var visibleItems = portfolioItems.not(".portfolio-hidden").length;
		portfolioGallery.css("height", (portfolioMobileItemHeight * visibleItems) + "px");
	}else{
		portfolioGallery.css("height", "");
	}
}

$(".portfolioFilter").on("click",function(){
	var category = $(this).attr("data-category");

	$(".portfolioFilter").attr("aria-pressed", "false");
	$(this).attr("aria-pressed", "true");
	portfolioItems.addClass("portfolio-hidden");
	portfolioItems.filter('[data-category="' + category + '"]').removeClass("portfolio-hidden");
	resizeFilteredPortfolio();
});

$(window).on("resize", resizeFilteredPortfolio);
resizeFilteredPortfolio();
