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
		$(".gallery").find("li").eq(0).find(".galleryText").html("春秋会１００周年<br>ロゴマーク");
		$(".gallery").find("li").eq(1).find(".galleryText").html("プリントパック<br>年賀状2024辰年");
		$(".gallery").find("li").eq(2).find(".galleryText").html("WeChooseLocal店舗ページ<br>ヒーローバナーシリーズ");
		$(".gallery").find("li").eq(3).find(".galleryText").html("PUGOのカバー画像");
		$(".gallery").find("li").eq(4).find(".galleryText").html("PebblePathの段差付き<br>フォルダーインサート");
		$(".gallery").find("li").eq(5).find(".galleryText").html("Stonebridge Dental と PebblePathの<br>夏季キャンペーン用フライヤ");
		$(".gallery").find("li").eq(6).find(".galleryText").html("AtriumXの名刺");
		$(".gallery").find("li").eq(7).find(".galleryText").html("AtriumXの会場マップ");
		$(".gallery").find("li").eq(8).find(".galleryText").html("405 Dental Aesthetics のアメニティ<br>紹介用ラックカード");
		$(".gallery").find("li").eq(9).find(".galleryText").html("Ramirez GuitarsのSNSキット");
		$(".gallery").find("li").eq(10).find(".galleryText").html("Katy Smile Designのクーポン");
		$(".gallery").find("li").eq(11).find(".galleryText").html("Fred’s Pharmacyのハーフページ広告");
		
		$("#galleryModal1").find("h2").text("春秋会１００周年ロゴマーク");
		$("#galleryModal2").find("h2").text("プリントパック年賀状2024辰年");
		$("#galleryModal3").find("h2").text("WeChooseLocal店舗ページヒーローバナーシリーズ");
		$("#galleryModal4").find("h2").text("PUGOのカバー画像");
		$("#galleryModal5").find("h2").html("PebblePathの段差付き<br>フォルダーインサート");
		$("#galleryModal6").find("h2").text("Stonebridge Dental と PebblePathの夏季キャンペーン用フライヤ");
		$("#galleryModal7").find("h2").text("AtriumXの名刺");
		$("#galleryModal8").find("h2").html("AtriumXの<br>会場マップ");
		$("#galleryModal9").find("h2").html("405 Dental Aesthetics の<br>アメニティ紹介用ラックカード");
		$("#galleryModal10").find("h2").text("Ramirez GuitarsのSNSキット");
		$("#galleryModal11").find("h2").text("Katy Smile Designのクーポン");
		$("#galleryModal12").find("h2").html("Fred’s Pharmacyの<br>ハーフページ広告");
		
		$("#galleryModal1").find("p").html("弁理士春秋会の100周年記念のロゴマークです。この葉と花の花輪(リース)は上から下に春秋会の２つの季節(秋の試験合格祝賀、春の役員選挙)を示し、円形でサイクルと周年記念の意味を表すものです。<br><br><b><u>これは私の受賞作品です。</b></u>元々、道と序数詞のthを除いたら、平面的でした。その上、社名に由来して秋のオレンジ色と春のピンク色と緑色で配色を選びましたが、ホームページのブランドカラーに合わせました。<br><br><a href='http://www.shunju.gr.jp/%ef%bc%91%ef%bc%90%ef%bc%90%e5%91%a8%e5%b9%b4%e8%a8%98%e5%bf%b5%e3%83%ad%e3%82%b4%e3%83%9e%e3%83%bc%e3%82%af/'>Shunjukai website</a>");
		$("#galleryModal2").find("p").html("年賀状の主役は辰です。当初手書きで、スキャンされ、書道の感じを与えるために、Illustratorのアートブラシを使いながら手動で描き直しました。 黒を除けば、配色は2024年の木竜の年のラッキーカラーに基づくもので、灰色がかった白、銀色、金色となっています。不吉な色は緑と青で、これは避けようと思いました。灰色がかった白は年賀状に和風な雰囲気を与えると思っています。背景の金色の筆文字太陽は「新年の日の出」です。太陽と背景にはグラデーションをつけ、吉方位が北に含まれることから、昇天をイメージしました。 また、梅の花や横雲、低木などの和の装飾も加えました。葉っぱと松は緑色にしました。<br><br><b><u>2023年10月現在、4500以上の応募の中から900の佳作に選ばれています。</b></u><br><br><a href='https://www.printpac.co.jp/design/2024/nenga_result/?page=2'>PrintPac 2024 website</a>");
		$("#galleryModal3").find("p").html("複数の <a href='https://wechooselocal.ca/browse-stores/'>WeChooseLocal 店舗ページ</a>向けに制作したヒーローバナーシリーズです。共通の横長フォーマットの中で、各店舗のブランド、商品、雰囲気が伝わるように調整しました。<br><br>同じ構成を使いながらも、それぞれが別の店として見えることを重視しました。各ブランドのサイト、SNS、ロゴ、商品写真をもとに2案ずつ制作し、表示仕様の変更に合わせて一部要素も調整しています。");
		$("#galleryModal4").find("p").html("PUGO の Facebook、YouTube、LinkedIn 用に制作したカバー画像です。既存の宇宙モチーフに合わせ、宇宙飛行士と機体整備の場面でブランドの世界観を表現しました。<br><br>横長の構図の中で情報量を整理し、見出しやサービス文言もUI表現の一部として組み込みました");
		$("#galleryModal5").find("p").html("PebblePath の矯正用ウェルカムパケット向けに制作した段差付きフォルダーインサートです。子どもと保護者の両方が見やすいよう、明るいブランドイメージに合わせて情報を整理しました。<br><br>制作途中で仕様変更がありましたが、段差断裁に合わせて再構成し、見出しが重なっても読みやすいレイアウトに仕上げました。");
		$("#galleryModal6").find("p").html("Dr. McMann のもとで展開された Stonebridge Dental と PebblePath の夏季キャンペーン用フライヤーです。既存案をもとに、より明るく親しみやすい夏らしい印象に整えました。<br><br>同じベースから2案を制作し、片方は元案に近く、もう片方はビーチ感や装飾を強めて季節感を押し出しました。");
		$("#galleryModal7").find("p").html("AtriumX のカンファレンス用に制作した縦型両面名刺です。ブランドカラーと図形要素を使いながら、引用文、QRコード、イベント情報を見やすく整理しました。<br><br>内容は同じまま3案を比較し、最終案では構成と配色を整理して、よりすっきりした仕上がりにまとめました。");
		$("#galleryModal8").find("p").html("Atrium24 のカンファレンスブランドである AtriumX 向けに制作した会場マップです。配布用印刷物と会場サインの両方で使えるよう、フロア案内とバスルートを見やすく再構成しました。<br><br>元の情報を整理しつつブランドの明るいビジュアルに合わせ、後に大型サインへ展開する際は主要情報をさらに強調しました。");
		$("#galleryModal9").find("p").html("405 Dental Aesthetics 向けに制作したアメニティ紹介用ラックカードです。高級感のあるブランディングに合わせ、白黒基調で内容をすっきりまとめました。<br><br>見た目はミニマルですが、初期案を複数制作したうえで調整を重ね、印刷仕様も含めて仕上げています。<br><br>実際の使用例は <a href='https://www.youtube.com/watch?v=Afk7ZToF7kA&t=16s'>Office Tour動画</a> と <a href='https://405dentalaesthetics.com/our-practice/'>Our Practiceページ</a> でも見ることができます。");
		$("#galleryModal10").find("p").html("Ramirez Guitars のSNS展開用に制作したソーシャルメディアキットです。ブランドガイドをもとに、プロフィール画像、カバー画像、投稿テンプレートをまとめました。<br><br>2つの方向性を提案した後、選ばれた案を編集しやすいテンプレートとして整理し、全体の統一感を持たせました。");
		$("#galleryModal11").find("p").html("Katy Smile Design と Firefish Swim Team の夏季コラボ向けに制作したクーポンです。両ブランドの要素と水泳写真を組み合わせ、明るく親しみやすい雰囲気にまとめました。<br><br>サイズや印刷条件の変更に対応しながら構成を調整し、内容が伝わりやすいハガキ形式に再設計しました。");
		$("#galleryModal12").find("p").html("Fred’s Pharmacy の新聞広告として制作したハーフページ広告です。見出し、本文、連絡先が自然に読めるよう、親しみやすく落ち着いた紙面にまとめました。<br><br>初期段階では3案を用意し、一部はスポーツ面らしさを強めましたが、最終案はより素直で読みやすい方向に整えました。");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>連</a>絡先");
		$("#contact").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#contact-content").find("div").eq(0).find("h2").text("連絡先");
		$("#contact-content").find("div").eq(1).find("h2").text("履歴書");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("メール：<a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		$("#contact-content").find("div").eq(0).find("p").eq(2).html("電話番号：<a href='tel:+63915-904-5212'>(+63)9159045212</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top_jp.png' alt=''>");
		$("#portfolio-btn").attr("onclick","window.location.href='https://drive.google.com/uc?export=download&id=1lSv5RfIS5mpLrgZbiFVS8HpC6AOGdCWB'");
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
		$(".gallery").find("li").eq(0).find(".galleryText").html("Shunjukai 100th Anniversary Logo");
		$(".gallery").find("li").eq(1).find(".galleryText").html("Printpac New Year's Card<br>Year of the Dragon 2024");
		$(".gallery").find("li").eq(2).find(".galleryText").html("WeChooseLocal Website Hero Banners");
		$(".gallery").find("li").eq(3).find(".galleryText").html("PUGO Cover Photo");
		$(".gallery").find("li").eq(4).find(".galleryText").html("PebblePath Staggered Folder Inserts");
		$(".gallery").find("li").eq(5).find(".galleryText").html("Stonebridge Pebble Path Summer Flyers");
		$(".gallery").find("li").eq(6).find(".galleryText").html("AtriumX Business Card");
		$(".gallery").find("li").eq(7).find(".galleryText").html("AtriumX Conference Maps");
		$(".gallery").find("li").eq(8).find(".galleryText").html("405 Dental Aesthetics Amenities Menu");
		$(".gallery").find("li").eq(9).find(".galleryText").html("Ramirez Guitars Social Media Kit");
		$(".gallery").find("li").eq(10).find(".galleryText").html("Katy Smile Design Swim Coupons");
		$(".gallery").find("li").eq(11).find(".galleryText").html("Freds Pharmacy Half-Page Newspaper Ad");
		
		$("#galleryModal1").find("h2").text("Shunjukai 100th Anniversary Logo");
		$("#galleryModal2").find("h2").text("Printpac New Year's Card Year of the Dragon 2024");
		$("#galleryModal3").find("h2").text("WeChooseLocal Website Hero Banners");
		$("#galleryModal4").find("h2").text("PUGO Cover Photo");
		$("#galleryModal5").find("h2").text("PebblePath Staggered Folder Inserts");
		$("#galleryModal6").find("h2").text("Stonebridge Pebble Path Summer Flyers");
		$("#galleryModal7").find("h2").text("AtriumX Business Card");
		$("#galleryModal8").find("h2").html("AtriumX<br>Conference Maps");
		$("#galleryModal9").find("h2").text("405 Dental Aesthetics Amenities Menu");
		$("#galleryModal10").find("h2").text("Ramirez Guitars Social Media Kit");
		$("#galleryModal11").find("h2").text("Katy Smile Design Swim Coupons");
		$("#galleryModal12").find("h2").html("Freds Pharmacy<br>Half-Page Newspaper Ad");
		
		$("#galleryModal1").find("p").html("A commemorative logo representing the 100th anniversary of the “Shunjukai” patent attorney’s association. The wreath of leaves and flowers indicate the seasons derived from Shunjukai’s name (spring/“ju” for new recruits, fall/“Shun” for the exams) from top to bottom, with the circular shape indicating the cycle of time that lead to the commemoration of their anniversary.<br><br><b><u>This is my award-winning submission,</b></u> which I won last April 2023. The logo originally looked flatter, without the road and the letters “th” under the number. I also opted to go for a straightforward color scheme directly taken from the meaning of their name alone. Orange is for autumn and pink and green are for spring. However, I changed my mind and decided to use their logo’s and website’s brand colors instead.<br><br><a href='http://www.shunju.gr.jp/%ef%bc%91%ef%bc%90%ef%bc%90%e5%91%a8%e5%b9%b4%e8%a8%98%e5%bf%b5%e3%83%ad%e3%82%b4%e3%83%9e%e3%83%bc%e3%82%af/'>Shunjukai website</a>");
		$("#galleryModal2").find("p").html("My submission for a contest run by PrintPac aimed at creating a New Year’s card (nengajo) for the year 2024 (Year of the Wood Dragon). This is a calligraphy-style Japanese dragon utilizing a combination of 2024’s lucky colors, the lucky direction of north and the rising sun of the New Year.<br><br>The dragon is the main focus of this design. It was hand-drawn, scanned and then manually traced with the art brushes of Illustrator. I utilized the lucky colors of greyish-white, silver and gold while trying to reduce the unlucky colors of blue and green by as much as possible. By also utilizing a brushstroke sun in the background and a gradient, the final image of a 'rising dragon' was solidified. Furthermore, I added some Japanese elements like plums and flowers.<br><br><b><u>This is an honorable mention of the PrintPac Nengajou 2024 Design Contest</b></u>, placing among 900 honorable mentions from over <strong>4,500</strong> entries.<br><br><a href='https://www.printpac.co.jp/design/2024/nenga_result/?page=2'>PrintPac 2024 website</a>");
		$("#galleryModal3").find("p").html("This banner series was created for multiple WeChooseLocal store pages using a shared container size and layout system. Each one had to work within the same narrow format while still reflecting the store’s own branding, products, and tone.<br><br>Since the layout stayed mostly fixed, the focus was on making each store feel distinct within the same structure. I pulled from each brand’s website, social media, logo, and product imagery to build two directions per banner, and in some cases adjusted or recreated elements when template changes affected the final display.<br><br>All of these banners, except for the green Simple Wonders one, were selected by the clients themselves, and are therefore visible on <a href='https://wechooselocal.ca/browse-stores/'>their website</a>");
		$("#galleryModal4").find("p").html("The cover photo series was made for Pugo’s Facebook, YouTube, and LinkedIn pages using the studio’s established space-themed branding. An astronaut repairing a spaceship was used to match Pugo’s “Explorer” motif and support the idea of helping brands grow through goal-driven design, with the composition leading the eye from the figure and welding light toward the main header.<br><br>Since Pugo already had a defined visual direction, the focus was on keeping the design consistent with their branding rather than reinventing it. The main challenge was fitting a detailed scene, headline, and service-related text into such a wide format without making it feel crowded, so the extra text was worked into the cyberpunk UI elements as part of the design itself.");
		$("#galleryModal5").find("p").html("A set of staggered folder inserts made for PebblePath’s orthodontic welcome packet. The goal was to organize patient information into a stepped print format that would be easy for both kids and parents to browse, while keeping the visuals consistent with the practice’s bright and friendly branding.<br><br>The format changed several times during the project. What began as a simple set of square inserts was later resized and rebuilt around the printer’s staggered cut requirements so the section headers would stay visible when stacked. The final layout used two three-sheet groups with different heights, giving the packet a cleaner stepped structure and a clearer reading flow.");
		$("#galleryModal6").find("p").html("The summer giveaway flyer made as a shared campaign piece for Stonebridge Dental and PebblePath under Dr. McMann. Based on the original mockup, I kept the polaroid-style layout and refined it with brighter seasonal imagery, improved office photo treatments, and playful summer elements to make it feel more polished and inviting.<br><br>I explored two directions from the same base. One stayed closer to the original layout, while the other pushed the summer theme further through brighter beach visuals and added decorative details.");
		$("#galleryModal7").find("p").html("Vertical business cards designed for AtriumX to promote its conference presence in a compact double-sided format. Using the brand’s blue, magenta, and white palette, I focused on keeping the quote, QR code, and event details easy to scan while tying the layout back to AtriumX’s rounded shapes and line elements.<br><br>I first explored three directions for the same content, each based on a different balance of structure and branding. The final version stayed closest to the client’s reference, but simplified the layout and palette to make it feel cleaner, more direct, and better suited to AtriumX’s conference identity.");
		$("#galleryModal8").find("p").html("Conference maps designed for AtriumX, a conference brand by Atrium24, for use as printed handouts and onsite signage. The goal was to rebuild the floor plan and bus route map in a clearer, more branded format so key locations and pickup points could be understood quickly.<br><br>I simplified the original maps and applied AtriumX’s bright visual style while keeping the information easy to follow. When the bus route map was later adapted into a larger easel sign, I revised the layout further by reducing less important details and giving more space to the main pickup information.");
		$("#galleryModal9").find("p").html("This rack card menu was made for 405 Dental Aesthetics to present patient amenities in a way that matched the clinic’s polished, high-end branding. The final black-and-white layout kept that minimal, boutique feel while organizing a long list of comfort items into a compact format that was easy to scan.<br><br>Although the piece itself was visually straightforward, it went through several revisions before reaching its final form utilizing Spot UV. I developed three initial directions, then refined the selected one while keeping the layout clean, consistent, and ready for print production.<br><br>The amenities card was also featured on the <a href='https://www.youtube.com/watch?v=Afk7ZToF7kA&t=16s'>Office Tour video</a> in the <a href='https://405dentalaesthetics.com/our-practice/'>Our Practice page of their website.</a>");
		$("#galleryModal10").find("p").html("A social media kit made for Ramirez Guitars to extend its branding across social platforms. Based on the brand guide, I designed a profile picture, cover image, and five post templates for both promotional and community content, using a dark palette, orange accents, and music-centered imagery.<br><br>The project focused on turning existing brand elements into a flexible social media system. I first prepared two visual directions for comparison, then refined the selected one into a set of minimal, editable templates that kept the branding consistent.");
		$("#galleryModal11").find("p").html("A coupon set made for Katy Smile Design’s summer partnership with the Firefish Swim Team. I designed two postcard-sized versions using Katy Smile Design’s teal branding, Firefish visuals, and swimmer photography to promote a whitening offer in a bright, seasonal, and family-friendly way.<br><br>The main challenge was keeping the design consistent through several changes in size, print setup, and asset use. After starting from the practice’s earlier referral card style, I rebuilt both directions for a 4” × 6” postcard format and focused on keeping the offer clear while balancing both brands and the campaign imagery.");
		$("#galleryModal12").find("p").html("The half-page newspaper ad made for Fred’s Pharmacy for the local softball and baseball section. I used a simple, warm layout that matched the client’s request while keeping the headline, body text, and contact details clear.<br><br>I first prepared three concepts using the provided photos, with some early options leaning more into the sports context. The final selected version was more restrained, which made the ad feel clearer and more familiar for its audience.");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>R</a>EACH OUT");
		$("#contact").css("font-family","Barlow Condensed");
		
		$("#contact-content").find("div").eq(0).find("h2").text("CONTACT ME");
		$("#contact-content").find("div").eq(1).find("h2").text("RESUME");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("Email: <a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		$("#contact-content").find("div").eq(0).find("p").eq(2).html("Phone：<a href='tel:+63915-904-5212'>(+63)9159045212</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top.png' alt=''>");
		$("#portfolio-btn").attr("onclick","window.location.href='https://drive.google.com/uc?export=download&id=16VWbAeKFKdNUYD7ogpVfbZdFrYbcW060'");
	}
}