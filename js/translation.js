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
		
		$("#galleryModal11").find("p").html("弁理士春秋会の100周年記念のロゴマークです。この葉と花の花輪(リース)は上から下に春秋会の２つの季節(秋の試験合格祝賀、春の役員選挙)を示し、円形でサイクルと周年記念の意味を表すものです。<br><br><b><u>これは私の受賞作品です。</b></u>元々、道と序数詞のthを除いたら、平面的でした。その上、社名に由来して秋のオレンジ色と春のピンク色と緑色で配色を選びましたが、ホームページのブランドカラーに合わせました。");
		$("#galleryModal1").find("p").html("クールビズは室温28°Cで快適に過ごせる服装で、ライフスタイルのキャンペーンを告知するポスターです。クールビズの意味が分かりやすくする為、文字をデザインして涼しい背景を制作しました。<br><br>元々、メッセージを直接伝えるために、温度計と落雷やスーツの上に禁止マークなどをレイアウトしてましたが、ラフから修正しデジタルではエアコンとシャツと結晶のみで仕上げています。");
		$("#galleryModal2").find("p").html("シートベルトを着用し安全な運転を促す農作業のポスターです。特別な色のシャツを着ている人々が手を繋ぐ事で、シートベルト、また農家のコミュニティーに安全を促がすと言う意味を表現しています。<br><br>髪型のイラストは、一般的な日本人を参考にしたものです。原画のポスターは人物を斜めに手を繋いでいましたが、レイアウトしてみて真っ直ぐの方が伝わりやすいと思い変更しました。");
		$("#galleryModal3").find("p").html("動物病院を宣伝するチラシです。目立たせる為に、面白い犬の画像をレイアウトしました。<br><br>色々な動物病院のチラシを参考にして、緩やかで親しみやすいと思われるように、デザインしました。足跡をアクセントにし楽しいデザインを目指しました。");
		$("#galleryModal4").find("p").html("このバッジは痴漢を思いとどまらせるためのものです。痴漢をした結果、塀の中の人に入るというメッセージを込めています。<br><br>電車での痴漢は日本でたくさんある現象です。電車が混んでいる時、ひどい人たちは窮屈な状況に乗じて女性にセクハラをします。フィリピンで公共の場での排尿を禁止するために、犯罪者を脅すようにハサミを使った標識をイメージするデザインがありました。しかし、あまりにも暴力的だったし、その代わり性犯罪者を脅すために可愛いキャラを使うことも逆効果になると思ってたので、刑務所からの視点のモチーフを使いました。イラストの中では手を描くのが最も得意です。");
		$("#galleryModal5").find("p").html("このポスターは、インボイス制度に差し迫った事を企業に緊急に知らせるものです。作成したポスターの設定にはターゲットの企業がインボイス制度に入っていないので、ビジネスが破産していて、サプライチェーン(供給連鎖)が破綻している様子を表現しています。<br><br>「パートナーがデジタル化されたインボイスに適応したので、事業が解散する危険性がある」と言うことを知らせるために「壊れたサプライチェーン(供給連鎖)」を表現しました。");
		$("#galleryModal6").find("p").html("このCGは大阪府医師会の正月のためのものです。新年の太陽と正月の餅つきを使うことで、癸卯（みずのとう）を代表する月の兎を表現しています。<br><br>作成した時の新年が「癸卯（みずのとう）」なので、兎の日本の意味合いを残したまま、どうやったらポスターに活かせるか考え、餅つき月の兎の意味を少しだけ変えて表現しました。");
		$("#galleryModal7").find("p").html("大阪弁護士会のためのマスコットキャラクターです。このマスコットは桜草、大阪の漫才(ネクタイ、メガネ)、正義の秤、そしてダイナミックでフレンドリーなポーズの組み合わせです。<br><br>アニメや企業や各都道府県など、ゆるキャラは日本文化の定番です。大阪を表現したかったので、ターゲットである弁護士会の意味合いを表しました。大阪府の花と正義の秤の組み合わせというモチーフを選び、また、花をモチーフにしたスマートなマスコットがモデルポーズを秤に見立てて表現しました。");
		$("#galleryModal8").find("p").html("これは私の学校のロゴデザインコンテストに応募したものです。傾けたOpportunity(チャンス)のOに越える上向きの線と言うロゴマークです。<br><br>タイポグラフィーに関する色々なスケッチを描きました。学校のブランドカラーと格式を保ちたかったので、ロゴをモダンにしてメッセージを込めました。「階段」と言うアイデアとOの文字の「Opportunity(チャンス)」と言う意味です。");
		$("#galleryModal9").find("p").html("特別メニューと割引が強調している高級メンズヘアサロンのチラシです。<br><br>元々、白黒の「高級美容院」のイメージを大切にして男らしさを高めたかったので、逞しい男を使いました。ヒゲや筋肉質な男性はデザインと合わなかったので、その代わりに日本人の標準的な男性を使用しました。また、メニューをメインにし、サービスを示すようにしました。");
		$("#galleryModal10").find("p").html("アルミニウムの再利用を特化した「UACJ」と言う日本の製造業界の会社の為に作ったBtoBのポスターです。アルミ製の物が同じ素材の一本の缶から出ています。<br><br>単色でない配色、統一された構造、会社のビジョンと一致するメッセージ、この３つをポスターに表現しました。<br>メインコンセプトは「多形性」という事です。<br>再利用されたアルミニウムの物が一本の缶から出て来ることをモチーフにする事で、同社が推進するものが、アルミニウムと結び付いていることを示しています。<br>「多形性」の部分は、同じ一本の缶から出て来るアルミニウムの物から来ています。<br>一貫した配色を使うことで、「同じ素材」のつながりを表し、立体的に見えるように調整しました。");
		$("#galleryModal12").find("p").html("プリントパックが主宰する2024年の木竜の年賀状コンテストへの応募作品です。これはラッキーカラーと吉方位を使った書道の「辰」と新年の日の出を組み合わせたものです。<br><br>前回のコンテストに応募した「癸卯(みずのとう)」の年賀状とまた違ったデザインを作成したいと考えており、手書きアートの趣味を生かして、Illustratorのペンツールを使って仕上げる事ができました。言うまでもなく、予想以外にうまく仕上がりました。最終製品がスケッチから直接トレースしました。");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>連</a>絡先");
		$("#contact").css("font-family","Toppan Bunkyu Midashi Gothic");
		
		$("#contact-content").find("div").eq(0).find("h2").text("連絡先");
		$("#contact-content").find("div").eq(1).find("h2").text("履歴書");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("メール：<a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top_jp.png' alt=''>");
	}else{
		if(mobileMode){
			$("#menu").css("font-size","3em");
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
		
		$("#galleryModal11").find("p").html("This is a commemorative logo representing the 100th anniversary of the “Shunjukai” patent attorney’s association. The wreath of leaves and flowers indicate the seasons derived from Shunjukai’s name (spring/“ju” for new recruits, fall/“Shun” for the exams) from top to bottom, with the circular shape indicating the cycle of time that lead to the commemoration of their anniversary.<br><br><b><u>This is my award-winning submission,</b></u> which I won last April 2023. The logo originally looked as flat as this, without the road and the letters “th” under the number. I also opted to go for a straightforward color scheme directly taken from the meaning of their name alone. Orange is for autumn and pink and green are for spring. However, I changed my mind and decided to use their logo’s and website’s brand colors instead.");
		$("#galleryModal1").find("p").html("CoolBiz is a lifestyle campaign in Japan where white-collar workers shed their suits and wear summer clothes to suit a 28°C environment, which also saves electricity. This is a poster meant to inform people about the CoolBiz campaign being put into practice. A type-focused logo and a cool setting make the meaning of CoolBiz more easily understood.<br><br>The poster originally used a thermometer, a lightning bolt, arrows and a suit with a NO mark on it to express the message directly. I later opted for the room design using the air conditioner and dress shirt because the old design looked flat and abstract.");
		$("#galleryModal2").find("p").html("This is a poster about farm safety, particularly with the encouragement of the use of seatbelts when driving. The use of people holding hands, shirts colored to match the structure of the seatbelt, and a farm community represent seatbelts and the safety it brings to a community.<br><br>The hairstyles I drew are all based on various stock images and pictures of everyday Japanese people I found on the internet. The poster was originally going to be isometric, but I figured it would be easier to portray the “seatbelt” part if the layout were straight.");
		$("#galleryModal3").find("p").html("This is a flyer advertising an animal hospital. To attract attention, I used funny dog images and structured the flyer accordingly.<br><br>I designed this off of various animal hospital posters with an “energetic”, “frantic” and “friendly” tone in mind, particularly using paw prints to accentuate that fact.");
		$("#galleryModal4").find("p").html("This is a badge meant to discourage molesting (“chikan”) in trains in Japan. The main message here is the threat of the consequences, featuring a molester behind bars doing their time after committing CHIKAN.<br><br>Molesting in trains is a phenomenon that frequently takes place in Japan. When trains get crowded, terrible people take advantage of the cramped situation to harass women like schoolgirls and office ladies. I initially designed the badge to look like those signs in the Philippines that prohibit urinating in public by using scissors to scare the offender. However, since the target audience might see it as too violent, and I did not want to use cute characters to scare the offender, because I thought that it might be counterproductive, I came up with the prison perspective drawing instead. And to my benefit, I was able to make use of my skill in drawing hands.");
		$("#galleryModal5").find("p").html("This is a poster meant to urgently inform the target audience of the impending changes to the Invoice system in Japan, suggesting that they register as soon as possible. The setting of the poster portrays an organization that failed to join the invoice system, resulting in them being locked out of the supply chain with their business falling apart.<br><br>The embedded message of “being left out of the supply chain due to your trading partners adapting to the digitalized invoice system, resulting in the risk of your business collapsing” is represented by the concept of the “literal supply chain”, with the unregistered business “breaking the chain” and literally “falling” apart as a result.");
		$("#galleryModal6").find("p").html("This is a poster submission for the Osaka Medical Association’s annual “(Chinese) New Year’s CG” design contest. The moon rabbit pounding mochi represents both “kagami mochi (mochi from the traditional New Year’s mochi pounding)” and the Year of the Water Rabbit 2023. The rising sun of the New Year is also utilized in the background, to contrast the moon rabbit’s usual setting and give it an altered meaning.<br><br>Since the upcoming New Year at the time of making this was the Year of the Rabbit in both the Chinese and  Japanese cultures, I made use of the symbolic implications of the rabbit in Japan. After some more thought, I fused the ideas of “the moon rabbit, also known as the rabbit pounding mochi on the moon (Japan’s equivalent of the man in the moon)” and “New Year’s mochi pounding” by altering the original meaning of the same “tsukimi (moon-viewing)” rabbit to match the context of New Year’s. To emphasize that change even further, I used the Rising Sun in the background and gave the rabbit a “hachimaki (rope headband)”.");
		$("#galleryModal7").find("p").html("This is the yuruchara mascot design I submitted for the Osaka Bar Association. It is a combination of the primrose (Primula sieboldii), Osaka’s manzai (tie, round glasses), the scales of justice and a dynamic, friendly pose representing the Osakan reputation of being friendly.<br><br>Yuruchara are one of the many symbols of modern Japanese culture, having mascots representing anime to businesses to EVERY prefecture and government in Japan. Since I wanted to represent the “brand” of Osaka, I emphasized that while maintaining the core themes of the target being a Bar Association and their clientele. So, I opted for a cross between Osaka Prefecture’s flower and the scales of justice as the main concept, and I posed the lean stick figure model while having it hold fishing baskets to portray the scales of justice as a double meaning.");
		$("#galleryModal8").find("p").html("This is my submission for a design contest aimed at updating my school’s logo. It is a dynamic logo featuring an arm going upwards past the O-shaped door of Opportunity.<br><br>Since I wanted to maintain the school’s brand colors and prestige, I modernized it with the palette and imbued it with a new but still-relevant message. I modernized it with the palette and imbued it with a new but still-relevant message. The idea of “stairs” as well as the forward leaning O in the logo both suggest the broader meaning of Opportunity.");
		$("#galleryModal9").find("p").html("A flyer for a men’s hair salon with the special menu and discount emphasized above all else.<br><br>I originally wanted to elevate the “manly” and “male” aspects while keeping the aesthetics expected of a “high-end salon for men”. I chose an equally back and white muscular model at first. However, the beard and muscularity did not suit the image I had in mind, so I used a more standard but clean-cut Japanese man instead. I also scaled up the menu to make “service” the second point of focus.");
		$("#galleryModal10").find("p").html("This is a B-to-B themed newspaper ad for a design contest run by UACJ, a Japanese company dedicated to recycling aluminum. The ad depicts multiple aluminum objects emerging from a single aluminum can.<br><br>I wanted to put three things for this submission into practice: a consistent non-monochromatic color scheme, a unified structure and a message that aligns with the company’s vision.<br>The main concept of this poster was the idea of “polymorphism”, with the recycled aluminum objects “emerging” from a single can to show how everything the company promotes all ties to aluminum and the recycling of it. “Polymorphism”, defined as “taking many forms”, is represented by the airplane and train coming out of the single aluminum can. The use of a consistent color scheme indicates the connection with the “same material”.<br>Since the horizontal sketch could not fit and since I did not want to break apart the structure of the image, I readjusted it to suit a dynamic 3D perspective, utilizing the golden ratio in the process.");
		$("#galleryModal12").find("p").html("This is my submission for a contest run by PrintPac aimed at creating a New Year’s card (nengajo) for the year 2024 (Year of the Wood Dragon). This is a calligraphy-style Japanese dragon utilizing a combination of 2024’s lucky colors, the lucky direction of north and the rising sun of the New Year.<br><br>I wanted to improve from my previous nengajou submission for 2023’s Year of the Water Rabbit. So, I made use of my actual skills in hand-drawn art and managed to nail the image I wanted using Illustrator’s brush tools, which needless to say, turned out better than I expected. I traced the final product directly from my pencil sketch.");
		
		$("#contact").html("<a style='color: #D35321; text-shadow: 0px;'>R</a>EACH OUT");
		$("#contact").css("font-family","Barlow Condensed");
		
		$("#contact-content").find("div").eq(0).find("h2").text("CONTACT ME");
		$("#contact-content").find("div").eq(1).find("h2").text("RESUME");
		$("#contact-content").find("div").eq(0).find("p").eq(0).html("Email: <a href='mailto:mlvillarino.biz@gmail.com'>mlvillarino.biz@gmail.com</a>");
		
		$("#vint-top").find("figure").html("<img src='images/vintage_top.png' alt=''>");
	}
}