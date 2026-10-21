/*
	PORTFOLIO DATA

	HOW TO ADD A NEW PROJECT
	1. Copy the blank project record below into the portfolioData list.
	2. Fill in the category, image paths, and both language blocks.
	3. Save and refresh. The gallery card, modal, filters, and translations build themselves.

	Allowed categories: "print", "art", "web"
	The order in this list is the order shown in the gallery.
	cardHTML, titleHTML, and bodyHTML accept trusted handwritten HTML such as
	<strong>, <em>, <a href="...">, <br>, and lists.

	BLANK PROJECT RECORD
	{
		id: "short-unique-id",
		category: "web",
		thumbnail: {
			src: "images/web/thumbnail.png",
			alt: {
				en: "English alt text",
				jp: "日本語の代替テキスト"
			}
		},
		modalImages: [
			{
				src: "images/web/screenshot.png",
				alt: {
					en: "English alt text",
					jp: "日本語の代替テキスト"
				}
			}
		],
		en: {
			cardHTML: "CARD LABEL",
			titleHTML: "PROJECT TITLE",
			bodyHTML: "Project copy with <strong>bold text</strong>."
		},
		jp: {
			cardHTML: "カードラベル",
			titleHTML: "プロジェクトタイトル",
			bodyHTML: "<strong>太字</strong>を含むプロジェクト説明。"
		}
	}
*/

var portfolioData = [
  {
    "id": "art-01",
    "category": "art",
    "thumbnail": {
      "src": "images/art/1 gigi september.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/1 gigi september.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Gigi Murin:<br>September Slideshow Meme Video",
      "titleHTML": "Gigi Murin: September Slideshow Meme Video",
      "bodyHTML": "Fanart slideshow video based on Gigi Murin’s September 21st karaoke stream, where the joke was pushed through repeated visual references and costume styling. I dressed her in an idol-like version of Philip Bailey’s outfit, with the background Gigi singing in a car to match the livestream setting."
    },
    "jp": {
      "cardHTML": "ジジ・ムリン：<br>Septemberスライドショー・ミーム動画",
      "titleHTML": "ジジ・ムリン：Septemberスライドショー・ミーム動画",
      "bodyHTML": "ジジ・ムリンの9月21日のカラオケ配信をもとにしたファンアート動画です。フィリップ・ベイリー風の衣装をアイドルらしくアレンジし、車内で歌う背景も配信の雰囲気に合わせました。"
    }
  },
  {
    "id": "art-10",
    "category": "art",
    "thumbnail": {
      "src": "images/art/10 fwmc fbk.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/10 fwmc fbk.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "FUWAMOCO & Fubuki:<br>Ambulance Rescue",
      "titleHTML": "FUWAMOCO & Fubuki: Ambulance Rescue",
      "bodyHTML": "Fanart combining Inktober's 'Rescue' and Holoctober's 'Stickman' prompts, based on FUWAMOCO and Fubuki's HoloGTA hospital dynamic. I drew an airborne ambulance rushing through a tilted city scene, with a flattened YAGOO stickman adding one more casualty to the attempted rescue."
    },
    "jp": {
      "cardHTML": "FUWAMOCOとフブキ：<br>救急車の救助騒動",
      "titleHTML": "FUWAMOCOとフブキ：救急車の救助騒動",
      "bodyHTML": "FUWAMOCOとフブキのHoloGTAでの救助シーンをもとにしたファンアートです。傾いた街の構図で空を飛ぶ救急車を描き、つぶれたYAGOOの棒人間も入れて、救助なのに大変なことになっている場面にしました。"
    }
  },
  {
    "id": "art-02",
    "category": "art",
    "thumbnail": {
      "src": "images/art/2 idle dreams.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/2 idle dreams.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "\"Idle Dreams, Idol Dreams\" Submission",
      "titleHTML": "\"Idle Dreams, Idol Dreams\" Submission",
      "bodyHTML": "My original character design contest submission for Otakufest 2026, featuring Sheaf Heathertop, a living scarecrow girl who dreams of leaving the farm to become an idol. Her frayed wooden limbs show her incomplete scarecrow body, while the field pose references a familiar Minecraft wallpaper composition."
    },
    "jp": {
      "cardHTML": "『Idle Dreams, Idol Dreams』<br>応募作品",
      "titleHTML": "『Idle Dreams, Idol Dreams』応募作品",
      "bodyHTML": "Otakufest 2026のキャラクターデザインコンテスト用に描いたオリジナルキャラ、『シーフ・ヘザートップ』です。農場を出てアイドルを目指す、未完成なかかしの少女として、ほつれた木の手足でその設定を見せています。"
    }
  },
  {
    "id": "art-03",
    "category": "art",
    "thumbnail": {
      "src": "images/art/3 cirno chalice.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/3 cirno chalice.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Cirno Day 2025:<br>Chilk Chalice",
      "titleHTML": "Cirno Day 2025: Chilk Chalice",
      "bodyHTML": "A Cirno Day piece built around a layered meme joke, with Cirno holding a glass of “Chilk” while raising a camera for a toast. The idea combines the YandereDev chalice pose, Cirno’s ice-themed name, and the Neco-Arc \"pilk\" meme."
    },
    "jp": {
      "cardHTML": "チルノの日2025：<br>チルク・チャリス",
      "titleHTML": "チルノの日2025：チルク・チャリス",
      "bodyHTML": "9月9日のチルノの日に描いた、ミームネタ入りの作品です。チルノが「チルク」を持って乾杯する構図で、YandereDevのチャリスネタ、チルノの名前、Neco-Arcの「pilk」ネタを合わせました。"
    }
  },
  {
    "id": "art-04",
    "category": "art",
    "thumbnail": {
      "src": "images/art/4 goodbye rosemi.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/4 goodbye rosemi.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Rosemi Lovelock:<br>Graduation Fanart",
      "titleHTML": "Rosemi Lovelock: Graduation Fanart",
      "bodyHTML": "Graduation fanart for Rosemi Lovelock, drawn as a quiet farewell moment with her holding a rose bouquet and trying not to cry. The sunflower field comes from the announcement stream, while the Rosebud plush adds a small fan-symbol detail into the composition."
    },
    "jp": {
      "cardHTML": "ロゼミ・ラブロック：<br>卒業ファンアート",
      "titleHTML": "ロゼミ・ラブロック：卒業ファンアート",
      "bodyHTML": "ロゼミ・ラブロックの卒業に合わせて描いたファンアートです。涙をこらえながらバラの花束を持つ静かな別れの場面にし、告知配信のひまわり畑とRosebudのぬいぐるみも入れました。"
    }
  },
  {
    "id": "art-05",
    "category": "art",
    "thumbnail": {
      "src": "images/art/5 seija kijin.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/5 seija kijin.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Seija Kijin Touhou Fanart",
      "titleHTML": "Seija Kijin Touhou Fanart",
      "bodyHTML": "A practice fanart piece of Seija Kijin built around her reversal theme, with the pose, hair, skirt, and loose slipper all based on her being upside-down. I used bold primary colors, arrows, and a yellow background to make the image feel more dynamic while loosely echoing the energy of Kirby's Dreamland 3 Hyper Zone."
    },
    "jp": {
      "cardHTML": "鬼人正邪 東方ファンアート",
      "titleHTML": "鬼人正邪 東方ファンアート",
      "bodyHTML": "鬼人正邪の「逆さま」の能力をテーマにした練習作品です。逆さのポーズ、髪、スカート、脱げかけたスリッパで動きを出し、原色、矢印、黄色い背景でカービィ3のHyper Zoneらしい勢いも少し入れました。"
    }
  },
  {
    "id": "art-11",
    "category": "art",
    "thumbnail": {
      "src": "images/art/11 ccgg swap.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/11 ccgg swap.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Cecilia Immergreen &<br>Gigi Murin: Outfit Swap",
      "titleHTML": "Cecilia Immergreen & Gigi Murin: Outfit Swap",
      "bodyHTML": "Hololive outfit-swap fanart featuring Cecilia Immergreen and Gigi Murin, with one twist: their clothes don't change size. Gigi ends up buried in Cecilia's loose outfit, while Cecilia struggles with Gigi's much smaller clothes, turning a familiar fanart theme into a visual joke."
    },
    "jp": {
      "cardHTML": "セシリアとジジ：衣装交換",
      "titleHTML": "セシリアとジジ：衣装交換",
      "bodyHTML": "セシリア・イマーグリーンとジジ・ムリンの衣装交換を描いたファンアートです。ただし服のサイズは変わらないため、ジジには大きすぎ、セシリアには小さすぎる衣装になり、その違いを面白く描きました。"
    }
  },
  {
    "id": "art-14",
    "category": "art",
    "thumbnail": {
      "src": "images/art/14 koboreine tonjok.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/14 koboreine tonjok.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Pavolia Reine &<br>Kobo Kanaeru: Teacher's Tonjok",
      "titleHTML": "Pavolia Reine &<br>Kobo Kanaeru: Teacher's Tonjok",
      "bodyHTML": "Comedic Hololive fanart piece of Pavolia Reine teaching Kobo Kanaeru, combining Inktober's 'Smack' prompt with Holoctober's 'Teacher'. I treated the lesson like a slapstick scene with raw shonen energy and motion lines, using Reine's punch and the characters' reactions to make the joke clear without a complicated background."
    },
    "jp": {
      "cardHTML": "パヴォリア・レイネとこぼ・かなえる：<br>パンチの授業",
      "titleHTML": "パヴォリア・レイネとこぼ・かなえる：<br>パンチの授業",
      "bodyHTML": "レイネがこぼに教える場面を、コメディ風に描いたホロライブのファンアートです。「Smack」と「Teacher」のお題を合わせて、レイネのパンチと二人の表情で、シンプルで分かりやすいジョークにしました。"
    }
  },
  {
    "id": "art-06",
    "category": "art",
    "thumbnail": {
      "src": "images/art/6 boat goes binted.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/6 boat goes binted.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Gigi and Kronii:<br>Boat Goes Binted!",
      "titleHTML": "Gigi and Kronii: Boat Goes Binted!",
      "bodyHTML": "Hololive meme fanart turning Gigi Murin’s “Boat goes binted!” line into a Titanic-style composition with Ouro Kronii holding her up at sunset. The romantic framing leads into the sinking ship at the bottom, making the layout carry the dark humor punchline."
    },
    "jp": {
      "cardHTML": "ジジとクロニー：<br>Boat Goes Binted!",
      "titleHTML": "ジジとクロニー：Boat Goes Binted!",
      "bodyHTML": "ジジ・ムリンの「Boat goes binted!」を、クロニーに支えられるタイタニック風の構図にしたミームファンアートです。夕焼けのロマンチックな雰囲気から、下の沈む船へつなげてオチを見せています。"
    }
  },
  {
    "id": "art-07",
    "category": "art",
    "thumbnail": {
      "src": "images/art/7 amelia splash.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/7 amelia splash.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Amelia Watson Splash Art",
      "titleHTML": "Amelia Watson Splash Art",
      "bodyHTML": "Graduation tribute splash art I made of Amelia Watson, drawn in a full-body dynamic pose over a Roman clock with her mascots gathered around her. I leaned into gacha and anime-inspired staging, using pale gold and muted teal to give the send-off a brighter but more nostalgic tone."
    },
    "jp": {
      "cardHTML": "ワトソン・アメリア：キービジュアル風イラスト",
      "titleHTML": "ワトソン・アメリア：キービジュアル風イラスト",
      "bodyHTML": "ワトソン・アメリアの卒業に合わせて描いた、記念用のキービジュアル風イラストです。ローマ数字の時計の上で動きのある全身ポーズにし、マスコットたちと淡い金色、くすんだ青緑で明るく少し懐かしい雰囲気にしました。"
    }
  },
  {
    "id": "art-12",
    "category": "art",
    "thumbnail": {
      "src": "images/art/12 kiara pessi.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/12 kiara pessi.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Kiara vs. Pessi:<br>World Cup Fanart",
      "titleHTML": "Kiara vs. Pessi: World Cup Fanart",
      "bodyHTML": "Soccer-themed fanart of Kiara facing Pekora as 'Pessi', inspired by Kiara cheering for Austria and Pekora's admiration for Messi in 2026's World Cup. I staged a close-range soccer feint with exaggerated poses and opposing national uniforms, turning that fandom connection into a playful rivalry."
    },
    "jp": {
      "cardHTML": "キアラ vs. ペッシ：<br>ワールドカップ風ファンアート",
      "titleHTML": "キアラ vs. ペッシ：<br>ワールドカップ風ファンアート",
      "bodyHTML": "オーストリアを応援するキアラと、メッシが好きなぺこらをもとにしたサッカーのファンアートです。ぺこらを「ペッシ」にして、アルゼンチンとオーストリアのユニフォームや大きな動きで、二人の勝負を描きました。"
    }
  },
  {
    "id": "art-08",
    "category": "art",
    "thumbnail": {
      "src": "images/art/8 rosemi teens.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/8 rosemi teens.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Rosemi Lovelock:<br>Fellow Kids",
      "titleHTML": "Rosemi Lovelock: Fellow Kids",
      "bodyHTML": "A meme fanart piece of Rosemi Lovelock based on the “How do you do, fellow kids?” pose, made after her innocent struggles with younger slang on stream. I adapted the outfit, background Rosebuds, skateboard stickers, and caption styling around her own jokes so the meme felt specific to Rosemi instead of just pasted onto her."
    },
    "jp": {
      "cardHTML": "ロゼミ・ラブロック：Fellow Kids",
      "titleHTML": "ロゼミ・ラブロック：Fellow Kids",
      "bodyHTML": "ロゼミが配信で若者言葉に戸惑っていた話から、「How do you do, fellow kids?」のポーズで描いたミームファンアートです。衣装、背景のRosebud、スケボーのステッカー、字幕風の文字もロゼミのネタに合わせました。"
    }
  },
  {
    "id": "art-13",
    "category": "art",
    "thumbnail": {
      "src": "images/art/13 ollie batik.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/13 ollie batik.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Kureiji Ollie:<br>Batik Celebration",
      "titleHTML": "Kureiji Ollie: Batik Celebration",
      "bodyHTML": "Fanart of Kureiji Ollie celebrating with her detachable arms raised, while her off-shoulder dress starts to slip. I recreated a parang-style batik pattern across the fabric, using its folds and movement to turn the 'Hooray' Inktober prompt into a cheeky wardrobe-malfunction joke."
    },
    "jp": {
      "cardHTML": "クレイジー・オリー：<br>バティックで大喜び",
      "titleHTML": "クレイジー・オリー：<br>バティックで大喜び",
      "bodyHTML": "クレイジー・オリーが両腕を外して喜ぶ場面を描いたファンアートです。バティックのパラン柄を服に描き、手を上げたことでドレスがずれそうになる、少し大胆なジョークにしました。"
    }
  },
  {
    "id": "art-09",
    "category": "art",
    "thumbnail": {
      "src": "images/art/9 project ocs.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/art/9 project ocs.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Original Character Lineup from My Series",
      "titleHTML": "Original Character Lineup from My Series",
      "bodyHTML": "A first public look at the six central characters from my unpublished original series. Their mostly uncolored designs act as a teaser, revealing only their glowing eyes and key colors while keeping their poses, expressions, anatomy, and outfits fully established."
    },
    "jp": {
      "cardHTML": "一次創作シリーズの主要キャラクター6人",
      "titleHTML": "一次創作シリーズの主要キャラクター6人",
      "bodyHTML": "未発表の一次創作シリーズから、中心となる6人を初めて公開した作品です。物語の予告として色は抑え、光る目とキーカラーだけを見せながら、ポーズ、表情、体格、衣装を完成させています。"
    }
  },
  {
    "id": "print-01",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/1 shunjukai 100th.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/1 shunjukai 100th.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Shunjukai 100th Anniversary Logo",
      "titleHTML": "Shunjukai 100th Anniversary Logo",
      "bodyHTML": "A commemorative logo representing the 100th anniversary of the “Shunjukai” patent attorney’s association. The wreath of leaves and flowers indicate the seasons derived from Shunjukai’s name (spring/“ju” for new recruits, fall/“Shun” for the exams) from top to bottom, with the circular shape indicating the cycle of time that lead to the commemoration of their anniversary.<br><br><b><u>This is my award-winning submission,</b></u> which I won last April 2023. The logo originally looked flatter, without the road and the letters “th” under the number. I also opted to go for a straightforward color scheme directly taken from the meaning of their name alone. Orange is for autumn and pink and green are for spring. However, I changed my mind and decided to use their logo’s and website’s brand colors instead.<br><br><a href='http://www.shunju.gr.jp/%ef%bc%91%ef%bc%90%ef%bc%90%e5%91%a8%e5%b9%b4%e8%a8%98%e5%bf%b5%e3%83%ad%e3%82%b4%e3%83%9e%e3%83%bc%e3%82%af/'>Shunjukai website</a>"
    },
    "jp": {
      "cardHTML": "春秋会１００周年<br>ロゴマーク",
      "titleHTML": "春秋会１００周年ロゴマーク",
      "bodyHTML": "弁理士春秋会の100周年記念のロゴマークです。この葉と花の花輪(リース)は上から下に春秋会の２つの季節(秋の試験合格祝賀、春の役員選挙)を示し、円形でサイクルと周年記念の意味を表すものです。<br><br><b><u>これは私の受賞作品です。</b></u>元々、道と序数詞のthを除いたら、平面的でした。その上、社名に由来して秋のオレンジ色と春のピンク色と緑色で配色を選びましたが、ホームページのブランドカラーに合わせました。<br><br><a href='http://www.shunju.gr.jp/%ef%bc%91%ef%bc%90%ef%bc%90%e5%91%a8%e5%b9%b4%e8%a8%98%e5%bf%b5%e3%83%ad%e3%82%b4%e3%83%9e%e3%83%bc%e3%82%af/'>Shunjukai website</a>"
    },
    "thumbnailExtraHTML": "<div id=\"vint-award\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/vintage_award.png\" alt=\"\" loading=\"lazy\">\n\t\t\t\t\t\t\t\t</div>"
  },
  {
    "id": "print-02",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/2 printpac new year.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/2 printpac new year.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Printpac New Year's Card<br>Year of the Dragon 2024",
      "titleHTML": "Printpac New Year's Card Year of the Dragon 2024",
      "bodyHTML": "My submission for a contest run by PrintPac aimed at creating a New Year’s card (nengajo) for the year 2024 (Year of the Wood Dragon). This is a calligraphy-style Japanese dragon utilizing a combination of 2024’s lucky colors, the lucky direction of north and the rising sun of the New Year.<br><br>The dragon is the main focus of this design. It was hand-drawn, scanned and then manually traced with the art brushes of Illustrator. I utilized the lucky colors of greyish-white, silver and gold while trying to reduce the unlucky colors of blue and green by as much as possible. By also utilizing a brushstroke sun in the background and a gradient, the final image of a 'rising dragon' was solidified. Furthermore, I added some Japanese elements like plums and flowers.<br><br><b><u>This is an honorable mention of the PrintPac Nengajou 2024 Design Contest</b></u>, placing among 900 honorable mentions from over <strong>4,500</strong> entries.<br><br><a href='https://www.printpac.co.jp/design/2024/nenga_result/?page=2'>PrintPac 2024 website</a>"
    },
    "jp": {
      "cardHTML": "プリントパック<br>年賀状2024辰年",
      "titleHTML": "プリントパック年賀状2024辰年",
      "bodyHTML": "年賀状の主役は辰です。当初手書きで、スキャンされ、書道の感じを与えるために、Illustratorのアートブラシを使いながら手動で描き直しました。 黒を除けば、配色は2024年の木竜の年のラッキーカラーに基づくもので、灰色がかった白、銀色、金色となっています。不吉な色は緑と青で、これは避けようと思いました。灰色がかった白は年賀状に和風な雰囲気を与えると思っています。背景の金色の筆文字太陽は「新年の日の出」です。太陽と背景にはグラデーションをつけ、吉方位が北に含まれることから、昇天をイメージしました。 また、梅の花や横雲、低木などの和の装飾も加えました。葉っぱと松は緑色にしました。<br><br><b><u>2023年10月現在、4500以上の応募の中から900の佳作に選ばれています。</b></u><br><br><a href='https://www.printpac.co.jp/design/2024/nenga_result/?page=2'>PrintPac 2024 website</a>"
    },
    "thumbnailExtraHTML": "<div id=\"vint-award\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/vintage_award.png\" alt=\"\" loading=\"lazy\">\n\t\t\t\t\t\t\t\t</div>"
  },
  {
    "id": "print-03",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/3 wechooselocal banners GALLERY.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/3 wechooselocal banners.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "WeChooseLocal Website Hero Banners",
      "titleHTML": "WeChooseLocal Website Hero Banners",
      "bodyHTML": "This banner series was created for multiple WeChooseLocal store pages using a shared container size and layout system. Each one had to work within the same narrow format while still reflecting the store’s own branding, products, and tone.<br><br>Since the layout stayed mostly fixed, the focus was on making each store feel distinct within the same structure. I pulled from each brand’s website, social media, logo, and product imagery to build two directions per banner, and in some cases adjusted or recreated elements when template changes affected the final display.<br><br>All of these banners, except for the green Simple Wonders one, were selected by the clients themselves, and are therefore visible on <a href='https://wechooselocal.ca/browse-stores/'>their website</a>"
    },
    "jp": {
      "cardHTML": "WeChooseLocal店舗ページ<br>ヒーローバナーシリーズ",
      "titleHTML": "WeChooseLocal店舗ページヒーローバナーシリーズ",
      "bodyHTML": "複数の <a href='https://wechooselocal.ca/browse-stores/'>WeChooseLocal 店舗ページ</a>向けに制作したヒーローバナーシリーズです。共通の横長フォーマットの中で、各店舗のブランド、商品、雰囲気が伝わるように調整しました。<br><br>同じ構成を使いながらも、それぞれが別の店として見えることを重視しました。各ブランドのサイト、SNS、ロゴ、商品写真をもとに2案ずつ制作し、表示仕様の変更に合わせて一部要素も調整しています。"
    }
  },
  {
    "id": "print-04",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/4 pugo cover.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/4 pugo cover.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "PUGO Cover Photo",
      "titleHTML": "PUGO Cover Photo",
      "bodyHTML": "The cover photo series was made for Pugo’s Facebook, YouTube, and LinkedIn pages using the studio’s established space-themed branding. An astronaut repairing a spaceship was used to match Pugo’s “Explorer” motif and support the idea of helping brands grow through goal-driven design, with the composition leading the eye from the figure and welding light toward the main header.<br><br>Since Pugo already had a defined visual direction, the focus was on keeping the design consistent with their branding rather than reinventing it. The main challenge was fitting a detailed scene, headline, and service-related text into such a wide format without making it feel crowded, so the extra text was worked into the cyberpunk UI elements as part of the design itself."
    },
    "jp": {
      "cardHTML": "PUGOのカバー画像",
      "titleHTML": "PUGOのカバー画像",
      "bodyHTML": "PUGO の Facebook、YouTube、LinkedIn 用に制作したカバー画像です。既存の宇宙モチーフに合わせ、宇宙飛行士と機体整備の場面でブランドの世界観を表現しました。<br><br>横長の構図の中で情報量を整理し、見出しやサービス文言もUI表現の一部として組み込みました"
    }
  },
  {
    "id": "print-05",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/5 pebblepath staggered.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/5 pebblepath staggered.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "PebblePath Staggered Folder Inserts",
      "titleHTML": "PebblePath Staggered Folder Inserts",
      "bodyHTML": "A set of staggered folder inserts made for PebblePath’s orthodontic welcome packet. The goal was to organize patient information into a stepped print format that would be easy for both kids and parents to browse, while keeping the visuals consistent with the practice’s bright and friendly branding.<br><br>The format changed several times during the project. What began as a simple set of square inserts was later resized and rebuilt around the printer’s staggered cut requirements so the section headers would stay visible when stacked. The final layout used two three-sheet groups with different heights, giving the packet a cleaner stepped structure and a clearer reading flow."
    },
    "jp": {
      "cardHTML": "PebblePathの段差付き<br>フォルダーインサート",
      "titleHTML": "PebblePathの段差付き<br>フォルダーインサート",
      "bodyHTML": "PebblePath の矯正用ウェルカムパケット向けに制作した段差付きフォルダーインサートです。子どもと保護者の両方が見やすいよう、明るいブランドイメージに合わせて情報を整理しました。<br><br>制作途中で仕様変更がありましたが、段差断裁に合わせて再構成し、見出しが重なっても読みやすいレイアウトに仕上げました。"
    }
  },
  {
    "id": "print-06",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/6 stonebridge summer.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/6 stonebridge summer.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Stonebridge Pebble Path Summer Flyers",
      "titleHTML": "Stonebridge Pebble Path Summer Flyers",
      "bodyHTML": "The summer giveaway flyer made as a shared campaign piece for Stonebridge Dental and PebblePath under Dr. McMann. Based on the original mockup, I kept the polaroid-style layout and refined it with brighter seasonal imagery, improved office photo treatments, and playful summer elements to make it feel more polished and inviting.<br><br>I explored two directions from the same base. One stayed closer to the original layout, while the other pushed the summer theme further through brighter beach visuals and added decorative details."
    },
    "jp": {
      "cardHTML": "Stonebridge Dental と PebblePathの<br>夏季キャンペーン用フライヤ",
      "titleHTML": "Stonebridge Dental と PebblePathの夏季キャンペーン用フライヤ",
      "bodyHTML": "Dr. McMann のもとで展開された Stonebridge Dental と PebblePath の夏季キャンペーン用フライヤーです。既存案をもとに、より明るく親しみやすい夏らしい印象に整えました。<br><br>同じベースから2案を制作し、片方は元案に近く、もう片方はビーチ感や装飾を強めて季節感を押し出しました。"
    }
  },
  {
    "id": "print-07",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/7 atriumx business.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/7 atriumx business.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "AtriumX Business Card",
      "titleHTML": "AtriumX Business Card",
      "bodyHTML": "Vertical business cards designed for AtriumX to promote its conference presence in a compact double-sided format. Using the brand’s blue, magenta, and white palette, I focused on keeping the quote, QR code, and event details easy to scan while tying the layout back to AtriumX’s rounded shapes and line elements.<br><br>I first explored three directions for the same content, each based on a different balance of structure and branding. The final version stayed closest to the client’s reference, but simplified the layout and palette to make it feel cleaner, more direct, and better suited to AtriumX’s conference identity."
    },
    "jp": {
      "cardHTML": "AtriumXの名刺",
      "titleHTML": "AtriumXの名刺",
      "bodyHTML": "AtriumX のカンファレンス用に制作した縦型両面名刺です。ブランドカラーと図形要素を使いながら、引用文、QRコード、イベント情報を見やすく整理しました。<br><br>内容は同じまま3案を比較し、最終案では構成と配色を整理して、よりすっきりした仕上がりにまとめました。"
    }
  },
  {
    "id": "print-08",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/8 atriumx maps GALLERY.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/8 atriumx maps.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "AtriumX Conference Maps",
      "titleHTML": "AtriumX<br>Conference Maps",
      "bodyHTML": "Conference maps designed for AtriumX, a conference brand by Atrium24, for use as printed handouts and onsite signage. The goal was to rebuild the floor plan and bus route map in a clearer, more branded format so key locations and pickup points could be understood quickly.<br><br>I simplified the original maps and applied AtriumX’s bright visual style while keeping the information easy to follow. When the bus route map was later adapted into a larger easel sign, I revised the layout further by reducing less important details and giving more space to the main pickup information."
    },
    "jp": {
      "cardHTML": "AtriumXの会場マップ",
      "titleHTML": "AtriumXの<br>会場マップ",
      "bodyHTML": "Atrium24 のカンファレンスブランドである AtriumX 向けに制作した会場マップです。配布用印刷物と会場サインの両方で使えるよう、フロア案内とバスルートを見やすく再構成しました。<br><br>元の情報を整理しつつブランドの明るいビジュアルに合わせ、後に大型サインへ展開する際は主要情報をさらに強調しました。"
    }
  },
  {
    "id": "print-09",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/9 405 amenities GALLERY.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/9 405 amenities.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "405 Dental Aesthetics Amenities Menu",
      "titleHTML": "405 Dental Aesthetics Amenities Menu",
      "bodyHTML": "This rack card menu was made for 405 Dental Aesthetics to present patient amenities in a way that matched the clinic’s polished, high-end branding. The final black-and-white layout kept that minimal, boutique feel while organizing a long list of comfort items into a compact format that was easy to scan.<br><br>Although the piece itself was visually straightforward, it went through several revisions before reaching its final form utilizing Spot UV. I developed three initial directions, then refined the selected one while keeping the layout clean, consistent, and ready for print production.<br><br>The amenities card was also featured on the <a href='https://www.youtube.com/watch?v=Afk7ZToF7kA&t=16s'>Office Tour video</a> in the <a href='https://405dentalaesthetics.com/our-practice/'>Our Practice page of their website.</a>"
    },
    "jp": {
      "cardHTML": "405 Dental Aesthetics のアメニティ<br>紹介用ラックカード",
      "titleHTML": "405 Dental Aesthetics の<br>アメニティ紹介用ラックカード",
      "bodyHTML": "405 Dental Aesthetics 向けに制作したアメニティ紹介用ラックカードです。高級感のあるブランディングに合わせ、白黒基調で内容をすっきりまとめました。<br><br>見た目はミニマルですが、初期案を複数制作したうえで調整を重ね、印刷仕様も含めて仕上げています。<br><br>実際の使用例は <a href='https://www.youtube.com/watch?v=Afk7ZToF7kA&t=16s'>Office Tour動画</a> と <a href='https://405dentalaesthetics.com/our-practice/'>Our Practiceページ</a> でも見ることができます。"
    }
  },
  {
    "id": "print-10",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/10 rootdental ppt.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/10 rootdental ppt.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Root Dental PowerPoint Deck",
      "titleHTML": "Root Dental PowerPoint Deck",
      "bodyHTML": "This PowerPoint deck was designed for Root Dental as a presentation system that carried its updated brand across team bios, testimonials, before-and-after cases, social content, and video. Using the newer website direction as reference, the final look became lighter and cleaner, built around soft greens, white space, and subtle root-inspired accents.<br><br>The deck began with two directions based on an earlier presentation structure, then shifted after feedback toward a version that followed Root Dental’s newer branding more closely. Once approved, it was developed into a full PowerPoint file containing team bios, testimonials, before-and-after slides, social placeholders, and a video slide template."
    },
    "jp": {
      "cardHTML": "Root Dental プレゼン資料",
      "titleHTML": "Root Dental プレゼン資料",
      "bodyHTML": "Root Dental 向けに制作したプレゼン資料です。新しいブランドの方向性に合わせて、スタッフ紹介、口コミ、症例紹介、SNS、動画用のスライドをまとめました。明るいグリーンと余白を使い、軽くて見やすい印象に仕上げています。<br><br>最初は以前の資料をもとに2案を作り、フィードバック後は新しいWebデザインに近い方向へ調整しました。承認後は、各用途に対応したスライドを含む完成版の資料にまとめました。"
    }
  },
  {
    "id": "print-11",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/11 katysmile swim coupons.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/11 katysmile swim coupons.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Katy Smile Design Swim Coupons",
      "titleHTML": "Katy Smile Design Swim Coupons",
      "bodyHTML": "A coupon set made for Katy Smile Design’s summer partnership with the Firefish Swim Team. I designed two postcard-sized versions using Katy Smile Design’s teal branding, Firefish visuals, and swimmer photography to promote a whitening offer in a bright, seasonal, and family-friendly way.<br><br>The main challenge was keeping the design consistent through several changes in size, print setup, and asset use. After starting from the practice’s earlier referral card style, I rebuilt both directions for a 4” × 6” postcard format and focused on keeping the offer clear while balancing both brands and the campaign imagery."
    },
    "jp": {
      "cardHTML": "Katy Smile Designのクーポン",
      "titleHTML": "Katy Smile Designのクーポン",
      "bodyHTML": "Katy Smile Design と Firefish Swim Team の夏季コラボ向けに制作したクーポンです。両ブランドの要素と水泳写真を組み合わせ、明るく親しみやすい雰囲気にまとめました。<br><br>サイズや印刷条件の変更に対応しながら構成を調整し、内容が伝わりやすいハガキ形式に再設計しました。"
    }
  },
  {
    "id": "print-12",
    "category": "print",
    "thumbnail": {
      "src": "images/portfolio/12 freds pharma halfpage.png",
      "alt": {
        "en": "",
        "jp": ""
      }
    },
    "modalImages": [
      {
        "src": "images/portfolio/12 freds pharma halfpage.png",
        "alt": {
          "en": "",
          "jp": ""
        }
      }
    ],
    "en": {
      "cardHTML": "Freds Pharmacy Half-Page Newspaper Ad",
      "titleHTML": "Freds Pharmacy<br>Half-Page Newspaper Ad",
      "bodyHTML": "The half-page newspaper ad made for Fred’s Pharmacy for the local softball and baseball section. I used a simple, warm layout that matched the client’s request while keeping the headline, body text, and contact details clear.<br><br>I first prepared three concepts using the provided photos, with some early options leaning more into the sports context. The final selected version was more restrained, which made the ad feel clearer and more familiar for its audience."
    },
    "jp": {
      "cardHTML": "Fred’s Pharmacyのハーフページ広告",
      "titleHTML": "Fred’s Pharmacyの<br>ハーフページ広告",
      "bodyHTML": "Fred’s Pharmacy の新聞広告として制作したハーフページ広告です。見出し、本文、連絡先が自然に読めるよう、親しみやすく落ち着いた紙面にまとめました。<br><br>初期段階では3案を用意し、一部はスポーツ面らしさを強めましたが、最終案はより素直で読みやすい方向に整えました。"
    }
  },
  {
    "id": "web-01",
    "category": "web",
    "thumbnail": {
      "src": "images/web/jones meet.png",
      "alt": {
        "en": "Dental Practice Staff and Service Pages",
        "jp": "歯科医院のスタッフ・サービス紹介ページ"
      }
    },
    "modalImages": [
      {
        "src": "images/web/jones meet.png",
        "alt": {
          "en": "Dental Practice Staff Page",
          "jp": "歯科医院のスタッフ紹介ページ"
        }
      },
      {
        "src": "images/web/jones sedation.png",
        "alt": {
          "en": "Dental Practice Service Page",
          "jp": "歯科医院のサービス紹介ページ"
        }
      }
    ],
    "en": {
      "cardHTML": "Dental Practice Staff and Service Pages",
      "titleHTML": "Dental Practice<br>Staff and Service Pages",
      "bodyHTML": "I worked on several pages for Jones & Copeland Smiles as its older website was being modernized, including the Meet Our Dentists and Sedation Dentistry pages. The updated layouts use gradients, solid color sections, and more white space to give the content a cleaner rhythm while keeping large amounts of patient information easy to follow.<br><br><a href='https://jonessmiles.com/meet-our-dentists/'>View the Meet Our Dentists page here</a><br><a href='https://jonessmiles.com/sedation-dentistry-buford-ga/'>View the Sedation Dentistry page here</a>"
    },
    "jp": {
      "cardHTML": "歯科医院のスタッフ・サービス紹介ページ",
      "titleHTML": "歯科医院のスタッフ・<br>サービス紹介ページ",
      "bodyHTML": "Jones & Copeland Smilesのサイト更新で、歯科医師紹介や鎮静歯科など複数のページを制作しました。グラデーション、色のブロック、広めの余白を使い、情報量が多くても読みやすく、すっきり見えるレイアウトにしています。<br><br><a href='https://jonessmiles.com/meet-our-dentists/'>歯科医師紹介ページはこちら</a><br><a href='https://jonessmiles.com/sedation-dentistry-buford-ga/'>鎮静歯科ページはこちら</a>"
    }
  },
  {
    "id": "web-02",
    "category": "web",
    "thumbnail": {
      "src": "images/web/brandnue testimonials.png",
      "alt": {
        "en": "Art Deco Design Agency Case Study Pages",
        "jp": "アールデコ風デザイン会社の事例紹介ページ"
      }
    },
    "modalImages": [
      {
        "src": "images/web/brandnue testimonials.png",
        "alt": {
          "en": "Art Deco Design Agency Case Study Pages",
          "jp": "アールデコ風デザイン会社の事例紹介ページ"
        }
      }
    ],
    "en": {
      "cardHTML": "Art Deco Design Agency Case Study Pages",
      "titleHTML": "Art Deco Design Agency<br>Case Study Pages",
      "bodyHTML": "BrandNué is a boutique branding agency with a strong vintage Art Deco-inspired identity. I worked within its tightly defined visual system to design testimonial and case study pages, adapting the existing typography, decorative elements, and layouts for longer web content. The La Vie case study direction was approved with relatively few changes.<br><br><a href='#'>View the La Vie Case Study here TBA</a><br><a href='https://brandnue.agency/testimonial'>View the Testimonial page here</a>"
    },
    "jp": {
      "cardHTML": "アールデコ風デザイン会社の事例紹介ページ",
      "titleHTML": "アールデコ風デザイン会社の事例紹介ページ",
      "bodyHTML": "BrandNuéは、アールデコ風の強いブランドイメージを持つデザイン会社です。決められたタイポグラフィや装飾を使いながら、事例紹介とお客様の声のページを制作しました。特にLa Vieの事例紹介ページは、少ない修正で方向性が決まりました。<br><br><a href='#'>La Vie事例紹介ページはこちら TBA</a><br><a href='https://brandnue.agency/testimonial'>お客様の声ページはこちら</a>"
    }
  },
  {
    "id": "web-03",
    "category": "web",
    "thumbnail": {
      "src": "images/web/dcatalog content library.png",
      "alt": {
        "en": "Digital Publishing Platform Library Page",
        "jp": "デジタル出版サービスのライブラリページ"
      }
    },
    "modalImages": [
      {
        "src": "images/web/dcatalog content library.png",
        "alt": {
          "en": "Digital Publishing Platform Library Page",
          "jp": "デジタル出版サービスのライブラリページ"
        }
      }
    ],
    "en": {
      "cardHTML": "Digital Publishing Platform Library Page",
      "titleHTML": "Digital Publishing Platform<br>Library Page",
      "bodyHTML": "DCatalog is a digital publishing platform for turning documents and catalogs into interactive online experiences. I worked on the Virtual Library Rack page as part of a website update, organizing its many sections and product mockups into a more modern layout while keeping the company’s established blue visual identity recognizable.<br><br><a href='https://dcatalog.com/virtual-library-rack/'>View the Virtual Library Rack page here</a>"
    },
    "jp": {
      "cardHTML": "デジタル出版サービスのライブラリページ",
      "titleHTML": "デジタル出版サービスの<br>ライブラリページ",
      "bodyHTML": "DCatalogは、カタログや資料をオンラインで見られる形にするデジタル出版サービスです。サイト更新の一部としてVirtual Library Rackページを制作し、多くのセクションやモックアップを整理しながら、既存の青いブランドイメージを残した現代的なレイアウトにしました。<br><br><a href='https://dcatalog.com/virtual-library-rack/'>Virtual Library Rackページはこちら</a>"
    }
  },
  {
    "id": "web-04",
    "category": "web",
    "thumbnail": {
      "src": "images/web/dna spot zero.png",
      "alt": {
        "en": "Marine Product Landing Page",
        "jp": "船舶製品ランディングページ"
      }
    },
    "modalImages": [
      {
        "src": "images/web/dna spot zero.png",
        "alt": {
          "en": "Marine Product Landing Page",
          "jp": "船舶製品ランディングページ"
        }
      }
    ],
    "en": {
      "cardHTML": "Marine Product Landing Page",
      "titleHTML": "Marine Product Landing Page",
      "bodyHTML": "DNA Surface Concepts specializes in marine surface restoration and protection. I designed this landing page for their Spot Zero water purification systems, keeping it consistent with the rest of the website while giving the product its own focus. I also created the product cutouts and splashing water graphics used throughout the page.<br><br><a href='https://dnasurfaceconcepts.com/spot-zero/'>View the Spot Zero page here</a>"
    },
    "jp": {
      "cardHTML": "船舶製品ランディングページ",
      "titleHTML": "船舶製品ランディングページ",
      "bodyHTML": "DNA Surface Conceptsは、船の表面保護やメンテナンスを行う会社です。Spot Zeroという浄水システムのランディングページを、既存サイトに合わせてデザインしました。商品画像の切り抜きや、水しぶきのグラフィックも自分で制作しています。<br><br><a href='https://dnasurfaceconcepts.com/spot-zero/'>Spot Zeroページはこちら</a>"
    }
  },
  {
    "id": "web-05",
    "category": "web",
    "thumbnail": {
      "src": "images/web/pugo marketing.png",
      "alt": {
        "en": "Design Studio Service Landing Pages",
        "jp": "デザイン会社のサービス紹介ページ"
      }
    },
    "modalImages": [
      {
        "src": "images/web/pugo marketing.png",
        "alt": {
          "en": "Design Studio Service Landing Pages",
          "jp": "デザイン会社のサービス紹介ページ"
        }
      }
    ],
    "en": {
      "cardHTML": "Design Studio Service Landing Pages",
      "titleHTML": "Design Studio<br>Service Landing Pages",
      "bodyHTML": "As part of PUGO Design Studio’s 2026 website refresh, I worked on new service landing pages using the studio’s updated visual direction. The redesign introduced dark blue, gradients, serif typography, and more varied layouts while expanding the site around PUGO’s branding, marketing, web, and motion design services.<br><br><a href='#'>View the Social Media Services page here TBA</a><br><a href='https://pugodesigns.com/services/marketing/'>View the Marketing page here</a>"
    },
    "jp": {
      "cardHTML": "デザイン会社のサービス紹介ページ",
      "titleHTML": "デザイン会社の<br>サービス紹介ページ",
      "bodyHTML": "PUGO Design Studioの2026年サイトリニューアルで、新しいサービス紹介ページを制作しました。新しいデザインでは濃い青、グラデーション、セリフ体などを取り入れ、ブランディング、マーケティング、Web、動画などのサービスをより分かりやすく見せています。<br><br><a href='#'>SNSサービスページはこちら TBA</a><br><a href='https://pugodesigns.com/services/marketing/'>マーケティングページはこちら</a>"
    }
  }
];
