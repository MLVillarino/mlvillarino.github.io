// JavaScript Document

// EN Default
translate("en");

// Translation Toggle Detection
$('.switch').children('input:checkbox').change(
	function(){
		if($(this).is(":checked")){
//			console.log("japanese");
			translate("jp");
		}else{
//			console.log("english");
			translate("en");
		}
	}
);

//CONNECT THESE TWO

// EN to JP Translation and Vice Versa
function translate(lang){
	langMode = lang; //for outside translate button toggle
	updatePortfolioLanguage(lang);
	$(".portfolioFilter[data-category='print']").text("Print & Graphic");
	$(".portfolioFilter[data-category='art']").text("Fan & Character Art");
	$(".portfolioFilter[data-category='web']").text("Web & UI/UX");
	if(lang === "jp"){
		$(".portfolioFilter[data-category='print']").text("印刷・グラフィック");
		$(".portfolioFilter[data-category='art']").text("ファンアート・キャラクター");
		$(".portfolioFilter[data-category='web']").text("ウェブ・UI/UX");
	}
	if(lang === "jp"){
		if(mobileMode){
			$("#menu").css("font-size","2.75em");
			$("#menu-mobile").css("font-size","2.75em");
			$("#intro").css("font-size","2.25em");
			$("#gallery").find("h1").css("font-size","2.25em");
			$("#contact").css("font-size","2.25em");
		}else{
			$("#menu").css("font-size","1.25em");
			$("#menu-mobile").css("font-size","1.25em");
			$("#intro").css("font-size","2.25em");
			$("#gallery").find("h1").css("font-size","2.25em");
			$("#contact").css("font-size","2.25em");
		}
		
		$("#menu").css("font-family","Toppan Bunkyu Midashi Gothic");
		$("#menu").find("ul").css("margin-top","6px");
		$("#menu").children("li").css("letter-spacing","0px");
		$("#menu").find("ul").css("width","100%");
		$("#menu").find("li").eq(0).text("ホーム");
		$("#menu").find("li").eq(1).text("メッセージ");
		$("#menu").find("li").eq(2).text("ポートフォリオ");
		$("#menu").find("li").eq(3).text("連絡先");
		$("#menu-mobile").css("font-family","Toppan Bunkyu Midashi Gothic");
		$("#menu-mobile").find("ul").css("margin-top","6px");
		$("#menu-mobile").children("li").css("letter-spacing","0px");
		$("#menu-mobile").find("ul").css("width","100%");
		$("#menu-mobile").find("li").eq(0).text("ホーム");
		$("#menu-mobile").find("li").eq(1).text("メッセージ");
		$("#menu-mobile").find("li").eq(2).text("ポートフォリオ");
		$("#menu-mobile").find("li").eq(3).text("連絡先");
		
		$("#intro").html("<a style='color: #d1c55a; text-shadow: 0px;'>メ</a>ッセージ");
		$("#intro").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#intro-content").find("p").eq(0).html("マティアス・ローレンス・A・ヴィリアリーノ <br> 大原情報ITクリエイター専門学校 <br> サン・カルロス大学");
		$("#intro-content").find("p").eq(1).text("子供の頃、絵を描くことから始まりましたが、少しずつデザインやビジュアルアイデンティティ、日本のグラフィックデザインにも興味を持つようになりました。大阪の専門学校で基礎を学び、その後は PUGO Design Studio でグラフィックデザイナーとして働きながら、仕事以外でもイラストや個人制作を続けてきました。今も表現を磨き続けながら、将来はキャラクターを中心にしたビジュアルや、自分の物語につながる仕事にもっと近づきたいと思っています。")
		
		$("#skills").find("h2").eq(0).text("ソフト");
		$("#skills").find("h2").eq(1).text("スキル");
		$("#skills").find("h2").eq(2).text("言語");
		$("#skills").find("h2").eq(3).text("趣味");
		$("#skills").find("h2").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#skills").find("h2").eq(1).siblings("p").text("グラフィックデザイン,画像編集,コンセプトアート,キャラクターシート,創作,2Dアート・コンプ,発想力,対話力,対応力");
		$("#skills").find("h2").eq(2).siblings("p").text("英語、日本語 N2、タガログ語、セブアノ語、スペイン語勉強中");
		$("#skills").find("h2").eq(3).siblings("p").text("創作,キャラクターデザイン,ファンアート,交流イベント,言語交換,筋トレ,音楽を聴くこと,モバゲー・ガチャ");
		
		$("#gallery").find("h1").html("<a style='color: #569bab; text-shadow: 0px;'>ポ</a>ートフォリオ");
		$("#gallery").find("h1").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$(".galleryText").css("font-size","20px");
		
		
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>連</a>絡先");
		$("#contact").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#contact-content").find("div").eq(0).find("h2").text("連絡先");
		$("#contact-content").find("div").eq(1).find("h2").text("履歴書");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("メール：<a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		$("#contact-content").find("div").eq(0).find("p").eq(2).html("電話番号：<a href='tel:+63915-904-5212'>(+63)9159045212</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top_jp.png' alt=''>");
		$("#portfolio-btn").attr("onclick","window.location.href='https://drive.google.com/uc?export=download&id=1sQRcqXAMELufnCycH0NWzY-dCnq_NNZ0'");
	}else{
		if(mobileMode){
			$("#menu").css("font-size","3em");
			$("#menu-mobile").css("font-size","3em");
			$("#intro").css("font-size","3em");
			$("#gallery").find("h1").css("font-size","3em");
			$("#contact").css("font-size","3em");
		}else{
			$("#menu").css("font-size","1.5em");
			$("#menu-mobile").css("font-size","1.5em");
			$("#intro").css("font-size","2.5em");
			$("#gallery").find("h1").css("font-size","2.25em");
			$("#contact").css("font-size","2.25em");
		}
		
		$("#menu").css("font-family","Barlow Condensed");
		$("#menu").find("ul").css("margin-top","6px");
		$("#menu").children("li").css("letter-spacing","2px");
		$("#menu").find("ul").css("width","90%");
		$("#menu").find("li").eq(0).text("HOME");
		$("#menu").find("li").eq(1).text("ABOUT ME");
		$("#menu").find("li").eq(2).text("PORTFOLIO");
		$("#menu").find("li").eq(3).text("REACH OUT");
		$("#menu-mobile").css("font-family","Barlow Condensed");
		$("#menu-mobile").find("ul").css("margin-top","6px");
		$("#menu-mobile").children("li").css("letter-spacing","2px");
		$("#menu-mobile").find("ul").css("width","90%");
		$("#menu-mobile").find("li").eq(0).text("HOME");
		$("#menu-mobile").find("li").eq(1).text("ABOUT ME");
		$("#menu-mobile").find("li").eq(2).text("PORTFOLIO");
		$("#menu-mobile").find("li").eq(3).text("REACH OUT");
		
		$("#intro").html("<a style='color: #d1c55a; text-shadow: 0px;'>A</a>BOUT ME");
		$("#intro").css("font-family","Barlow Condensed");
		
		$("#intro-content").find("p").eq(0).html("Matthias Laurence A. Villarino <br> Ohara Jouhou IT Creator Senmon Gakkou <br> University of San Carlos");
		$("#intro-content").find("p").eq(1).text("I started out drawing long before I knew what kind of work I wanted to pursue, but over time that grew into a deeper interest in design, visual identity, and Japanese graphic design. I built my foundation through vocational study in Osaka and later worked as a graphic designer at PUGO Design Studio, while continuing to grow through illustration and personal creative work outside the job. I still make it a habit to keep sharpening my craft, with a long-term goal of moving closer to character-driven visual work and the kinds of stories I want to bring to life.")
		
		$("#skills").find("h2").eq(0).text("SOFTWARE");
		$("#skills").find("h2").eq(1).text("SKILLS");
		$("#skills").find("h2").eq(2).text("LANGUAGES");
		$("#skills").find("h2").eq(3).text("HOBBIES");
		$("#skills").find("h2").css("font-family","Barlow Condensed");
		
		$("#skills").find("h2").eq(1).siblings("p").text("Collateral graphic design, image edits, concept art, character sheets, creative writing, 2D art & comps, critical thinking, communication, adaptability");
		$("#skills").find("h2").eq(2).siblings("p").text("English | Native - IELTS Band 8.0, Japanese | N2, Tagalog, Cebuano, Spanish (learning)");
		$("#skills").find("h2").eq(3).siblings("p").text("Creative writing, character design, fanart, meetup events, language exchange events, calisthenics / gym, listening to music, mobage / gacha");
		
		$("#gallery").find("h1").html("<a style='color: #569bab; text-shadow: 0px;'>P</a>ORTFOLIO");
		$("#gallery").find("h1").css("font-family","Barlow Condensed");
		
		$(".galleryText").css("font-size","30px");
		
		
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>R</a>EACH OUT");
		$("#contact").css("font-family","Barlow Condensed");
		
		$("#contact-content").find("div").eq(0).find("h2").text("CONTACT ME");
		$("#contact-content").find("div").eq(1).find("h2").text("RESUME");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("Email: <a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		$("#contact-content").find("div").eq(0).find("p").eq(2).html("Phone：<a href='tel:+63915-904-5212'>(+63)9159045212</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top.png' alt=''>");
		$("#portfolio-btn").attr("onclick","window.location.href='https://drive.google.com/uc?export=download&id=1sQRcqXAMELufnCycH0NWzY-dCnq_NNZ0'");
	}
}
