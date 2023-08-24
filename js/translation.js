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
	if(lang === "jp"){
		if(mobileMode){
			$("#menu").css("font-size","1.25em");
			$("#intro").css("font-size","2.25em");
			$("#gallery").find("h1").css("font-size","2.25em");
			$("#contact").css("font-size","2.25em");
		}else{
			$("#menu").css("font-size","1.25em");
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
		
		$("#intro").html("<a style='color: #d1c55a; text-shadow: 0px;'>メ</a>ッセージ");
		$("#intro").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#intro-content").find("p").eq(0).html("マティアス・ローレンス・A・ヴィリアリーノ <br> 大原情報ITクリエイター専門学校 <br> サン・カルロス大学");
		$("#intro-content").find("p").eq(1).text("子供の頃、絵を描くことやピクセルアート、ゲーム開発を趣味で制作していました。そのうち、デザインする事とコンセプトワークを考える事が楽しいと思う事ができました。学問を志すことで、タイポグラフィーやロゴマークなどの日本のグラフィックデザインの複雑さと考え方を理解したいと言う思いから、あらゆる考え方デザインを研究することで、少しずつ経験を積んでいき、このポートフォリオを作成しました。これからも日々向上していきたいと思います。")
		
		$("#skills").find("h2").eq(0).text("ソフト");
		$("#skills").find("h2").eq(1).text("スキル");
		$("#skills").find("h2").eq(2).text("言語");
		$("#skills").find("h2").eq(3).text("趣味");
		$("#skills").find("h2").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#skills").find("h2").eq(1).siblings("p").text("動画編集ソフト、写真編集ソフト、文章を書くこと、デッサン、スケッチ、絵を描くこと、クリティカルシンキング");
		$("#skills").find("h2").eq(2).siblings("p").text("英語、日本語 N2、タガログ語、セブアノ語");
		$("#skills").find("h2").eq(3).siblings("p").text("創作活動、動画制作、音楽を聴くこと、絵を描くこと、キャラクターデザイン");
		
		$("#gallery").find("h1").html("<a style='color: #569bab; text-shadow: 0px;'>ポ</a>ートフォリオ");
		$("#gallery").find("h1").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$(".galleryText").css("font-size","20px");
		$(".gallery").find("li").eq(0).find(".galleryText").html("春秋会１００周年<br>ロゴマーク");
		$(".gallery").find("li").eq(1).find(".galleryText").html("クール・ビズ");
		$(".gallery").find("li").eq(2).find(".galleryText").html("締めよう！<br>シートベルト");
		$(".gallery").find("li").eq(3).find(".galleryText").html("動物病院<br>チラシ");
		$(".gallery").find("li").eq(4).find(".galleryText").html("痴漢バッジ");
		$(".gallery").find("li").eq(5).find(".galleryText").html("インボイス制度<br>ポスター");
		$(".gallery").find("li").eq(6).find(".galleryText").html("大阪府医師会<br>新年号ＣＧ");
		$(".gallery").find("li").eq(7).find(".galleryText").html("大阪弁護士会<br>マスコット");
		$(".gallery").find("li").eq(8).find(".galleryText").html("大原学園の新ロゴ");
		$(".gallery").find("li").eq(9).find(".galleryText").html("美容院チラシ");
		$(".gallery").find("li").eq(10).find(".galleryText").html("BToB アルミニウム");
		$(".gallery").find("li").eq(11).find(".galleryText").html("プリントパック<br>年賀状2024辰年");
		
		$("#galleryModal11").find("h2").text("春秋会１００周年ロゴマーク");
		$("#galleryModal1").find("h2").text("クールビズ");
		$("#galleryModal2").find("h2").text("締めよう！シートベルト");
		$("#galleryModal3").find("h2").text("動物病院チラシ");
		$("#galleryModal4").find("h2").text("痴漢バッジ");
		$("#galleryModal5").find("h2").text("インボイス制度ポスター");
		$("#galleryModal6").find("h2").text("大阪医師会年賀状");
		$("#galleryModal7").find("h2").text("大阪弁護士会マスコット");
		$("#galleryModal8").find("h2").text("大原学園の新ロゴ");
		$("#galleryModal9").find("h2").text("美容院チラシ");
		$("#galleryModal10").find("h2").text("BToB アルミニウム");
		$("#galleryModal12").find("h2").text("プリントパック年賀状2024辰年");
		
		$("#galleryModal11").find("p").text("弁理士春秋会の100周年記念のロゴマークです。この葉と花の花輪(リース)は上から下に春秋会の２つの季節(秋の試験合格祝賀、春の役員選挙)を示し、円形でサイクルと周年記念の意味を表すものです。");
		$("#galleryModal1").find("p").text("クールビズは室温28°Cで快適に過ごせる服装で、ライフスタイルのキャンペーンを告知するポスターです。クールビズの意味が分かりやすくする為、文字をデザインして涼しい背景を制作しました。");
		$("#galleryModal2").find("p").text("シートベルトを着用し安全な運転を促す農作業のポスターです。特別な色のシャツを着ている人々が手を繋ぐ事で、シートベルト、また農家のコミュニティーに安全を促がすと言う意味を表現しています。");
		$("#galleryModal3").find("p").text("動物病院を宣伝するチラシです。目立たせる為に、面白い犬の画像をレイアウトしました。");
		$("#galleryModal4").find("p").text("このバッジは痴漢を思いとどまらせるためのものです。痴漢をした結果、塀の中の人に入るというメッセージを込めています。");
		$("#galleryModal5").find("p").text("このポスターは、インボイス制度に差し迫った事を企業に緊急に知らせるものです。作成したポスターの設定にはターゲットの企業がインボイス制度に入っていないので、ビジネスが破産していて、サプライチェーン(供給連鎖)が破綻している様子を表現しています。");
		$("#galleryModal6").find("p").text("このポスターは大阪府医師会の正月のためのものです。新年の太陽と正月の餅つきを使うことで、癸卯を代表する月の兎を表現しています。");
		$("#galleryModal7").find("p").text("大阪弁護士会のためのマスコットキャラクターです。このマスコットは桜草、大阪の漫才(ネクタイ、メガネ)、正義の秤、そしてダイナミックでフレンドリーなポーズの組み合わせです。");
		$("#galleryModal8").find("p").text("これは私の学校のロゴデザインコンテストに応募したものです。傾けたOpportunity(チャンス)のOに越える上向きの線と言うロゴマークです。");
		$("#galleryModal9").find("p").text("特別メニューと割引が何よりも強調している高級メンズヘアサロンのチラシです。");
		$("#galleryModal10").find("p").text("アルミニウムの再利用を特化した「UACJ」と言う日本の製造業界の会社のために作ったBtoBをテーマにしたポスターです。アルミ製の物が同じ一本の缶から出て来ています。");
		$("#galleryModal12").find("p").text("プリントパックが運営する2024年の木竜の年賀状コンテストへの応募作品です。これはラッキーカラーと吉方位を使った書道の「辰」と新年の日の出を組み合わせたものです。");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>連</a>絡先");
		$("#contact").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top_jp.png' alt=''>");
	}else{
		if(mobileMode){
			$("#menu").css("font-size","1.5em");
			$("#intro").css("font-size","3em");
			$("#gallery").find("h1").css("font-size","3em");
			$("#contact").css("font-size","3em");
		}else{
			$("#menu").css("font-size","1.5em");
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
		
		$("#intro").html("<a style='color: #d1c55a; text-shadow: 0px;'>A</a>BOUT ME");
		$("#intro").css("font-family","Barlow Condensed");
		
		$("#intro-content").find("p").eq(0).html("Matthias Laurence A. Villarino <br> Ohara Jouhou IT Creator Senmon Gakkou <br> University of San Carlos");
		$("#intro-content").find("p").eq(1).text("When I was a kid, I dabbled in hobbies like drawing and game development. Over time, I found out that I enjoyed the designing and the problem solving aspects involved in the design process. With a thirst for knowledge and a desire to understand the intricacies of Japanese graphic design including mascots, typography and logos, I slowly built up experience at a vocational school by taking every opportunity to do research and putting it into practice, creating this portfolio in the process. I’m always finding ways to hone my craft.")
		
		$("#skills").find("h2").eq(0).text("SOFTWARE");
		$("#skills").find("h2").eq(1).text("SKILLS");
		$("#skills").find("h2").eq(2).text("LANGUAGES");
		$("#skills").find("h2").eq(3).text("HOBBIES");
		$("#skills").find("h2").css("font-family","Barlow Condensed");
		
		$("#skills").find("h2").eq(1).siblings("p").text("Adobe Suite, video editing software (Vegas Pro, Adobe Premiere Pro), photo editing software (incl. Paint.NET), writing, drawing, critical thinking");
		$("#skills").find("h2").eq(2).siblings("p").text("English, Japanese N2, Tagalog, Cebuano. Currently learning Spanish");
		$("#skills").find("h2").eq(3).siblings("p").text("Creative hobbies, making videos, listening to music, drawing, character design");
		
		$("#gallery").find("h1").html("<a style='color: #569bab; text-shadow: 0px;'>P</a>ORTFOLIO");
		$("#gallery").find("h1").css("font-family","Barlow Condensed");
		
		$(".galleryText").css("font-size","30px");
		$(".gallery").find("li").eq(0).find(".galleryText").html("Shunjukai 100th Anniversary Logo");
		$(".gallery").find("li").eq(1).find(".galleryText").html("Cool Biz");
		$(".gallery").find("li").eq(2).find(".galleryText").html("Farmwork Safety");
		$(".gallery").find("li").eq(3).find(".galleryText").html("Veterinary Clinic Flyer");
		$(".gallery").find("li").eq(4).find(".galleryText").html("Anti-Molester Badge");
		$(".gallery").find("li").eq(5).find(".galleryText").html("Invoice System Poster");
		$(".gallery").find("li").eq(6).find(".galleryText").html("Osaka Medical Association<br>New Year's Card");
		$(".gallery").find("li").eq(7).find(".galleryText").html("Osaka Bar Association<br>Mascot");
		$(".gallery").find("li").eq(8).find(".galleryText").html("Updated Ohara Logo");
		$(".gallery").find("li").eq(9).find(".galleryText").html("Hair Salon Flyer");
		$(".gallery").find("li").eq(10).find(".galleryText").html("BToB Aluminium Poster");
		$(".gallery").find("li").eq(11).find(".galleryText").html("Printpac New Year's Card<br>Year of the Dragon 2024");
		
		$("#galleryModal11").find("h2").text("Shunjukai 100th Anniversary Logo");
		$("#galleryModal1").find("h2").text("Cool Biz");
		$("#galleryModal2").find("h2").text("Farmwork Safety");
		$("#galleryModal3").find("h2").text("Veterinary Clinic Flyer");
		$("#galleryModal4").find("h2").text("Anti-Molester Badge");
		$("#galleryModal5").find("h2").text("Invoice System Poster");
		$("#galleryModal6").find("h2").text("Osaka Medical Association New Year's Card");
		$("#galleryModal7").find("h2").text("Osaka Bar Association Mascot");
		$("#galleryModal8").find("h2").text("Updated Ohara Logo");
		$("#galleryModal9").find("h2").text("Hair Salon Flyer");
		$("#galleryModal10").find("h2").text("BToB Aluminium Poster");
		$("#galleryModal12").find("h2").text("Printpac New Year's Card Year of the Dragon 2024");
		
		$("#galleryModal11").find("p").text("ass we can");
		$("#galleryModal1").find("p").text("ass we can");
		$("#galleryModal2").find("p").text("ass we can");
		$("#galleryModal3").find("p").text("ass we can");
		$("#galleryModal4").find("p").text("ass we can");
		$("#galleryModal5").find("p").text("ass we can");
		$("#galleryModal6").find("p").text("ass we can");
		$("#galleryModal7").find("p").text("ass we can");
		$("#galleryModal8").find("p").text("ass we can");
		$("#galleryModal9").find("p").text("ass we can");
		$("#galleryModal10").find("p").text("ass we can");
		$("#galleryModal12").find("p").text("ass we can");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>R</a>EACH OUT");
		$("#contact").css("font-family","Barlow Condensed");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top.png' alt=''>");
	}
}