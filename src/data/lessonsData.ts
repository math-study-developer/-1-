import { Chapter, Lesson } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    title: '第1章：正の数・負の数',
    shortTitle: '正負の数',
    themeColor: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-800',
      accent: 'bg-sky-500',
      badgeBg: 'bg-sky-100 text-sky-800',
    },
    totalLessons: 8,
    lessons: [
      {
        id: 'ch1-1',
        chapterId: 1,
        lessonNumber: 1,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '反対の性質をもつ量と正負の数',
        target: '0を基準にして「＋（プラス）」と「ー（マイナス）」で反対の向きを表そう！',
        keywords: ['正の数', '負の数', 'プラス', 'マイナス', '符号', '基準', '気温', '東と西'],
        step1: {
          stepNum: 1,
          title: '基準の0を決める',
          instruction: '「0℃」や「今いる地点（0m）」など、どこが真ん中（基準）かをまず確認します。',
          mathLatex: '\\text{基準} = 0',
          badge: 'スタート'
        },
        step2: {
          stepNum: 2,
          title: '反対の向きに符号をつける',
          instruction: '東へ5kmが「+5km」なら、反対の西へ5kmは「-5km」と表します。',
          mathLatex: '+5\\text{ km} \\iff -5\\text{ km}',
          badge: '符号をつける'
        },
        formulaModel: {
          title: '反対のことばテンプレート',
          templateLatex: '\\text{基準より } [\\text{多い/東/増える}] \\to +, \\quad [\\text{少ない/西/減る}] \\to -',
          explanation: '基準を0として、一方をプラスに決めたら、真逆の出来事はすべてマイナスになります。',
          exampleLatex: '300\\text{円の利益} \\to +300\\text{円}, \\quad 200\\text{円の損失} \\to -200\\text{円}',
          tips: '問題文で「何をプラスとするか」をまず探すのがコツ！'
        },
        cautionMistake: {
          wrong: '「0は正の数である」と答えてしまう',
          wrongReason: '0はプラスでもマイナスでもない特別な数（基準）です。',
          correct: '0は「正の数でも負の数でもない」',
          correctReason: '0は基準そのもの。正の数は0より大きい数、負の数は0より小さい数です。'
        },
        quiz: {
          question: '海面を0mとするとき、海面より150m高い山を「+150m」と表すなら、海面より80m深い海底はどう表す？',
          optionA: '-80m',
          optionB: '+80m',
          correctOption: 'A',
          explanation: '海面（0m）より高い向きがプラスなので、反対の深さ（下向き）はマイナス（-80m）になります！',
          encouragement: 'すばらしい！反対の向きをマイナスでバッチリ捉えられましたね！'
        }
      },
      {
        id: 'ch1-2',
        chapterId: 1,
        lessonNumber: 2,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '数直線と絶対値',
        target: '数直線での0からの「きょり（絶対値）」をスパッと見つけよう！',
        keywords: ['数直線', '絶対値', '原点', '距離', '大きさ', '不等号'],
        simulatorType: 'numberLine',
        step1: {
          stepNum: 1,
          title: '原点（0）からの距離を見る',
          instruction: '絶対値とは「0からどれだけ離れているか」の長さです。符号（＋やー）を取るだけ！',
          mathLatex: '|+4| = 4, \\quad |-4| = 4',
          badge: '符号を取る'
        },
        step2: {
          stepNum: 2,
          title: '右に行くほど大きい',
          instruction: '数直線では右に行くほど大きく、左に行くほど小さくなります。負の数は絶対値が大きいほど左にいきます。',
          mathLatex: '-5 < -2 < 0 < +3',
          badge: '並び順'
        },
        formulaModel: {
          title: '絶対値の見つけ方',
          templateLatex: '|\\square| = (\\text{プラス・マイナスの符号を取った数字})',
          explanation: '距離なのでマイナスにはなりません。ただの数字の大きさを答えます。',
          exampleLatex: '|-7| = 7, \\quad |+3.5| = 3.5',
          tips: '「絶対値が3になる数は？」と聞かれたら、+3と-3の2つ答えるのがテストのお約束！'
        },
        cautionMistake: {
          wrong: '-7 のほうが -3 より大きいと思ってしまう',
          wrongMath: '-7 > -3 \\quad (\\times)',
          wrongReason: '数字だけ見ると7のほうが大きいですが、マイナスでは0から遠い（左にある）ほど小さいです。',
          correct: '-3 のほうが大きい',
          correctMath: '-7 < -3 \\quad (\\bigcirc)',
          correctReason: '気温で考えると「-7℃」より「-3℃」のほうがあったかい（大きい）ですね！'
        },
        quiz: {
          question: '「絶対値が 5 である数」はいくつありますか？',
          optionA: '+5 と -5 の 2つ',
          optionB: '-5 の 1つだけ',
          correctOption: 'A',
          explanation: '0から距離が5離れている場所は、右に+5、左に-5の2箇所あります！',
          encouragement: 'パーフェクト！絶対値の意味をしっかり理解できています！'
        }
      },
      {
        id: 'ch1-3',
        chapterId: 1,
        lessonNumber: 3,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '正負の数の加法（たし算・綱引き）',
        target: 'プラス軍とマイナス軍の「綱引き」で、どちらが何点勝つかを考えよう！',
        keywords: ['加法', 'たし算', '綱引き', '同符号', '異符号', '和'],
        simulatorType: 'tugOfWar',
        step1: {
          stepNum: 1,
          title: '仲間同士なら協力（足し算）',
          instruction: '同じ符号同士のたし算は、仲間なので数字を足して、共通の符号をつけます。',
          mathLatex: '(-3) + (-5) = -(3+5) = -8',
          badge: '同じ符号'
        },
        step2: {
          stepNum: 2,
          title: '敵同士なら綱引き（引き算）',
          instruction: '＋とーのたし算は綱引き！数字が大きい方の軍が勝ち、符号は勝ったほう、点数は差になります。',
          mathLatex: '(+7) + (-4) = +(7-4) = +3',
          badge: '違う符号'
        },
        formulaModel: {
          title: '加法（たし算）の綱引き公式',
          templateLatex: '(+\\text{大}) + (-\\text{小}) = +(\\text{大} - \\text{小}), \\quad (+\\text{小}) + (-\\text{大}) = -(\\text{大} - \\text{小})',
          explanation: '強いチームの旗（符号）を残して、人数の差（ひき算）を計算します。',
          exampleLatex: '(-9) + (+4) = -(9 - 4) = -5',
          tips: '「どっちの軍が強い？」と自分に問いかけると迷いません！'
        },
        cautionMistake: {
          wrong: '(-6) + (+2) = -8 としてしまう',
          wrongReason: 'たし算だからといって数字の6と2を足してしまっています。異符号なので綱引き（引き算）です！',
          correct: '(-6) + (+2) = -4',
          correctReason: 'マイナス軍が6人、プラス軍が2人。マイナス軍が4人勝ち残るので -4 です。'
        },
        quiz: {
          question: '計算してみよう： (+3) + (-8) = ?',
          optionA: '-5',
          optionB: '+5',
          correctOption: 'A',
          explanation: 'マイナス軍（8）のほうがプラス軍（3）より5人多いので、マイナスが勝って -5 になります！',
          encouragement: 'お見事！綱引きのイメージでスッキリ解けましたね！'
        }
      },
      {
        id: 'ch1-4',
        chapterId: 1,
        lessonNumber: 4,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '正負の数の減法（ひき算の変身）',
        target: 'ひき算は「たし算に変身」させて、うしろの符号をくるっと逆にしよう！',
        keywords: ['減法', 'ひき算', '符号反転', '加法になおす', '差'],
        simulatorType: 'signMachine',
        step1: {
          stepNum: 1,
          title: '「ー」を「＋」に変身させる',
          instruction: '真ん中のひき算の「ー」を、たし算の「＋」に書き換えます。',
          mathLatex: 'A - B \\longrightarrow A + (\\dots)',
          badge: '＋に変身'
        },
        step2: {
          stepNum: 2,
          title: 'うしろの数の符号を逆にする',
          instruction: 'うしろが (+3) なら (-3) に、(-3) なら (+3) にくるっと反転させて、綱引きします。',
          mathLatex: '5 - (-3) = 5 + (+3) = 8',
          badge: 'くるっと反転'
        },
        formulaModel: {
          title: 'ひき算の変身ルール',
          templateLatex: 'A - (+B) = A + (-B), \\quad A - (-B) = A + (+B)',
          explanation: 'ひき算はすべて「符号を変えて足す」に直せば、加法の綱引きと同じになります。',
          exampleLatex: '(-4) - (-7) = (-4) + (+7) = +3',
          tips: '「マイナス・マイナス」が重なったら「ニッコリ・プラス（＋）」と覚えよう！'
        },
        cautionMistake: {
          wrong: '5 - (-2) = 3 と計算してしまう',
          wrongReason: 'マイナスを引いているのに、普通のひき算をしてしまっています。',
          correct: '5 - (-2) = 5 + 2 = 7',
          correctReason: '引くマイナス2は、足すプラス2に変身するので 5 + 2 = 7 です！'
        },
        quiz: {
          question: '計算してみよう： (-2) - (-6) = ?',
          optionA: '+4',
          optionB: '-8',
          correctOption: 'A',
          explanation: '(-2) - (-6) は (-2) + (+6) に変身！綱引きでプラスが4勝つので +4 です！',
          encouragement: '変身マスター！マイナスのひき算も怖くありませんね！'
        }
      },
      {
        id: 'ch1-5',
        chapterId: 1,
        lessonNumber: 5,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '加減の混じった計算と項',
        target: 'カッコを外して「＋チーム」と「ーチーム」に分けてまとめよう！',
        keywords: ['項', '正の項', '負の項', 'カッコを外す', '加減混合'],
        step1: {
          stepNum: 1,
          title: 'カッコを全部外して並べる',
          instruction: '＋のカッコはそのまま外し、ーのカッコは符号を逆にして、ただの数字の列にします。',
          mathLatex: '(-3) + (+5) - (+2) - (-4) = -3 + 5 - 2 + 4',
          badge: 'カッコ外し'
        },
        step2: {
          stepNum: 2,
          title: '仲間（プラス同士・マイナス同士）で集める',
          instruction: '正の項（+5, +4）と負の項（-3, -2）に仕分けして、最後にガチャンと合わせます。',
          mathLatex: '=(5 + 4) + (-3 - 2) = 9 - 5 = 4',
          badge: 'チーム分け'
        },
        formulaModel: {
          title: '項（こう）の整理テンプレート',
          templateLatex: '(\\text{プラスチームの合計}) - (\\text{マイナスチームの合計})',
          explanation: '式の足し算・引き算のパーツを「項」と呼びます。符号も含めて1つのセットです。',
          exampleLatex: '-8 + 3 - 5 + 10 = (3 + 10) + (-8 - 5) = 13 - 13 = 0',
          tips: '＋の項に青丸、ーの項に赤四角を描いて仕分けるとミス激減！'
        },
        cautionMistake: {
          wrong: '式 5 - 7 + 2 の項を聞かれて「5 と 7 と 2」と答える',
          wrongReason: 'マイナスの符号を落としてしまっています。',
          correct: '項は「5, -7, 2」',
          correctReason: '項は符号も含めてひとまとめにします。必ず符号を連れていきましょう！'
        },
        quiz: {
          question: '計算してみよう： -4 + 9 - 6 = ?',
          optionA: '-1',
          optionB: '+1',
          correctOption: 'A',
          explanation: 'プラスチームは 9。マイナスチームは -4 と -6 で -10。合わせると 9 - 10 = -1 です！',
          encouragement: '素晴らしい！チーム分け計算でミスなく解けました！'
        }
      },
      {
        id: 'ch1-6',
        chapterId: 1,
        lessonNumber: 6,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '正負の数の乗法（マイナスの個数ルール）',
        target: 'かけ算の答えの符号は「マイナスの個数」を数えるだけで一発決定！',
        keywords: ['乗法', 'かけ算', '積', 'マイナスの個数', '偶数奇数'],
        step1: {
          stepNum: 1,
          title: 'マイナスの個数を数えて符号を決める',
          instruction: 'マイナスが奇数個（1個, 3個…）なら答えは「ー」。偶数個（2個, 4個…）なら答えは「＋」！',
          mathLatex: '-\\times- = +, \\quad -\\times-\\times- = -',
          badge: '符号チェック'
        },
        step2: {
          stepNum: 2,
          title: '数字同士を普通にかけ算する',
          instruction: '符号が決まったら、あとは小学生のときと同じように数字をかけるだけです。',
          mathLatex: '(-3) \\times (-4) = +(3 \\times 4) = 12',
          badge: '数字のかけ算'
        },
        formulaModel: {
          title: '乗法の符号判定ルール',
          templateLatex: '\\text{マイナスが } \\begin{cases} \\text{奇数個} & \\to - \\\\ \\text{偶数個} & \\to + \\end{cases}',
          explanation: 'マイナス同士が2つくっつくと打ち消し合ってプラスになります。',
          exampleLatex: '(-2) \\times (-3) \\times (-4) = -(2 \\times 3 \\times 4) = -24',
          tips: 'まず紙に符号（＋かー）を書いてから、数字の計算に入ると忘れ防止になります！'
        },
        cautionMistake: {
          wrong: '(-4) × (-5) = -20 と答えてしまう',
          wrongReason: 'マイナスが2個あるのに、マイナスをつけてしまっています。',
          correct: '(-4) × (-5) = +20',
          correctReason: 'マイナスが2個（偶数個）なので、プラスに変身します！'
        },
        quiz: {
          question: '計算してみよう： (-2) × (-3) × (-5) の符号と値は？',
          optionA: '-30',
          optionB: '+30',
          correctOption: 'A',
          explanation: 'マイナスが3個（奇数個）なので答えはマイナス。数字は 2×3×5 = 30 なので -30 です！',
          encouragement: '大正解！マイナスの個数カウント完璧です！'
        }
      },
      {
        id: 'ch1-7',
        chapterId: 1,
        lessonNumber: 7,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '累乗（るいじょう）と指数（カッコの有無）',
        target: 'カッコの中にあるか外にあるか？指数の「支配範囲」を見抜こう！',
        keywords: ['累乗', '指数', '平方', '立方', 'カッコの有無'],
        step1: {
          stepNum: 1,
          title: 'カッコの外の指数：全体をくり返す',
          instruction: '(-3)² はカッコごと2回かけるので、(-3) × (-3) = +9 になります。',
          mathLatex: '(-3)^2 = (-3) \\times (-3) = +9',
          badge: 'カッコごと'
        },
        step2: {
          stepNum: 2,
          title: 'カッコのない指数：数字だけをくり返す',
          instruction: '-3² は「ー」はそのままで、3だけを2回かけるので、-(3 × 3) = -9 になります。',
          mathLatex: '-3^2 = -(3 \\times 3) = -9',
          badge: '数字だけ'
        },
        formulaModel: {
          title: '累乗の重要ちがいマップ',
          templateLatex: '(-a)^2 = (-a) \\times (-a) = +a^2, \\quad -a^2 = -(a \\times a) = -a^2',
          explanation: '小さな右上の数字（指数）は、すぐ左隣の直前にあるものだけを2回かけます。',
          exampleLatex: '(-5)^2 = 25, \\quad -5^2 = -25',
          tips: 'テストで一番ひっかけに出る要注意ポイントです！'
        },
        cautionMistake: {
          wrong: '-4² = 16 と答えてしまう',
          wrongReason: '-4全体を2乗したと勘違いしています。カッコがありません。',
          correct: '-4² = -16',
          correctReason: 'カッコがないときはマイナスは1個だけ。-(4×4) = -16 になります。'
        },
        quiz: {
          question: '計算してみよう： -6² = ?',
          optionA: '-36',
          optionB: '+36',
          correctOption: 'A',
          explanation: 'カッコがないので、マイナスはそのままで 6 だけを2回かけます。-(6×6) = -36 です！',
          encouragement: '超重要ひっかけポイントをクリア！素晴らしい見極めです！'
        }
      },
      {
        id: 'ch1-8',
        chapterId: 1,
        lessonNumber: 8,
        totalLessonsInChapter: 8,
        chapterTitle: '第1章：正の数・負の数',
        title: '正負の数の除法（逆数）と四則混合',
        target: 'わり算は「逆数のかけ算」にして、累乗→かっこ→かけ算→足し算の順で解こう！',
        keywords: ['除法', 'わり算', '逆数', '四則混合', '計算の順序'],
        step1: {
          stepNum: 1,
          title: 'わり算を逆数のかけ算にする',
          instruction: '分母と分子をひっくり返した数が逆数です。マイナスの符号はそのまま残します。',
          mathLatex: '\\div \\left(-\\frac{2}{3}\\right) \\longrightarrow \\times \\left(-\\frac{3}{2}\\right)',
          badge: '上下ひっくり返し'
        },
        step2: {
          stepNum: 2,
          title: '計算の順番を守る',
          instruction: '①累乗 → ②カッコの中 → ③かけ算・わり算 → ④たし算・ひき算 の順に解きます。',
          mathLatex: '5 + (-2)^3 \\div 4 = 5 + (-8) \\div 4 = 5 - 2 = 3',
          badge: '順番ルール'
        },
        formulaModel: {
          title: '逆数と四則混合のステップ',
          templateLatex: 'A \\div \\frac{b}{a} = A \\times \\frac{a}{b}, \\quad \\text{計算順: 累乗} \\to \\times\\div \\to +-',
          explanation: 'どんなわり算もかけ算になおせば、約分を使ってサクサク計算できます。',
          exampleLatex: '8 - (-6) \\div 2 = 8 - (-3) = 8 + 3 = 11',
          tips: '8 - (-6) を先に引き算したくなってもガマン！わり算が優先です！'
        },
        cautionMistake: {
          wrong: '10 - 2 × 3 を先に 10 - 2 = 8 と計算して 8 × 3 = 24 にする',
          wrongReason: 'たし算・ひき算よりも、かけ算・わり算が先です！',
          correct: '10 - (2 × 3) = 10 - 6 = 4',
          correctReason: 'かけ算 2×3 = 6 を先に計算してから引き算します。'
        },
        quiz: {
          question: '計算してみよう： 7 - (-12) ÷ 3 = ?',
          optionA: '11',
          optionB: '-3',
          correctOption: 'A',
          explanation: 'わり算を先に計算！ (-12)÷3 = -4。次に 7 - (-4) = 7 + 4 = 11 になります！',
          encouragement: '第1章全8時間を完全制覇！素晴らしい計算力です！'
        }
      }
    ]
  },
  {
    id: 2,
    title: '第2章：文字と式',
    shortTitle: '文字と式',
    themeColor: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      accent: 'bg-emerald-600',
      badgeBg: 'bg-emerald-100 text-emerald-800',
    },
    totalLessons: 6,
    lessons: [
      {
        id: 'ch2-1',
        chapterId: 2,
        lessonNumber: 1,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '文字を使った式と×の省略',
        target: 'かけ算の記号「×」を省いて、数字→アルファベット順にキュッと縮めよう！',
        keywords: ['文字式', 'かけ算の省略', '数字が先', 'アルファベット順', '1の省略'],
        step1: {
          stepNum: 1,
          title: '数字を文字の前に書く',
          instruction: '「×」を消して、数字を先、文字をあとに並べます。1や-1の「1」は透明にして書きません。',
          mathLatex: 'a \\times 5 = 5a, \\quad x \\times (-1) = -x',
          badge: '数字が前'
        },
        step2: {
          stepNum: 2,
          title: '文字はアルファベット順・同じ文字は累乗',
          instruction: '文字が複数のときは a, b, c の順。同じ文字をかけるときは指数の小さな数字で表します。',
          mathLatex: 'y \\times x \\times 3 = 3xy, \\quad a \\times a \\times a = a^3',
          badge: 'アルファベット順'
        },
        formulaModel: {
          title: '×の省略3大ルール',
          templateLatex: '1. \\text{数字が先} \\ (4x), \\quad 2. \\text{アルファベット順} \\ (ab), \\quad 3. \\text{1は書かない} \\ (1x \\to x)',
          explanation: '文字式は見た目をスッキリ短く書くのが数学のルールです。',
          exampleLatex: 'b \\times (-4) \\times a = -4ab',
          tips: '1x や -1a と書いてしまうと減点されるので、「1は透明！」と唱えよう。'
        },
        cautionMistake: {
          wrong: 'x × 1 を「1x」と書く',
          wrongReason: '文字式の約束で、数字の 1 は省略します。',
          correct: '「x」と書く',
          correctReason: '1x ではなく単に x と書くのが決まりです（-1x なら -x）。'
        },
        quiz: {
          question: 'b × (-2) × a を文字式のルールで表すと？',
          optionA: '-2ab',
          optionB: '-2ba',
          correctOption: 'A',
          explanation: '数字の -2 が先頭で、文字はアルファベット順（a → b）なので -2ab になります！',
          encouragement: 'すばらしい！文字式の基本ルールをしっかりマスターしました！'
        }
      },
      {
        id: 'ch2-2',
        chapterId: 2,
        lessonNumber: 2,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '÷の省略と分数の表し方',
        target: 'わり算の記号「÷」を消して、うしろの数をすべり台で分母（下）に入れよう！',
        keywords: ['わり算の省略', '分数', '分母', '分子', 'マイナスの位置'],
        step1: {
          stepNum: 1,
          title: '「÷」のうしろを下（分母）に置く',
          instruction: 'a ÷ b は「÷」を消して、うしろの b を分母にスライドさせます。',
          mathLatex: 'a \\div b = \\frac{a}{b}',
          badge: 'うしろが下'
        },
        step2: {
          stepNum: 2,
          title: 'マイナスは分数の真ん中前に出す',
          instruction: '分母や分子にマイナスがあるときは、分数の横の真ん前にピシッと出します。',
          mathLatex: 'x \\div (-5) = -\\frac{x}{5}',
          badge: 'マイナスは前'
        },
        formulaModel: {
          title: '÷の分数変換テンプレート',
          templateLatex: '\\text{前} \\div \\text{後} = \\frac{\\text{前}}{\\text{後}}, \\quad (a+b) \\div 3 = \\frac{a+b}{3}',
          explanation: 'カッコがついた足し算・引き算全体を割るときは、分母の線の上にそのまま乗せます。',
          exampleLatex: '(x - 4) \\div 5 = \\frac{x - 4}{5}',
          tips: '分数にしたときは、分子のカッコは外してOKです！'
        },
        cautionMistake: {
          wrong: 'x ÷ 3 を 3/x と上下逆にしてしまう',
          wrongReason: '「÷」のうしろにある数が下（分母）に来ます。',
          correct: 'x / 3 (xが上、3が下)',
          correctMath: 'x \\div 3 = \\frac{x}{3}',
          correctReason: '÷の後ろの数字が分母（下）に入るのが絶対ルールです！'
        },
        quiz: {
          question: '(a - b) ÷ 4 を「÷」を使わないで表すと？',
          optionA: '(a - b) / 4 （4が分母）',
          optionB: '4 / (a - b) （4が分子）',
          correctOption: 'A',
          explanation: '÷の後ろにある4が分母（下）に来るので、(a - b)/4 です！',
          encouragement: 'バッチリ！分数の上下関係を確実にマスターできましたね！'
        }
      },
      {
        id: 'ch2-3',
        chapterId: 2,
        lessonNumber: 3,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '代入と式の値（カッコをつけて代入）',
        target: '文字の代わりに数字をスポッと入れよう！マイナスを入れるときはカッコが命！',
        keywords: ['代入', '式の値', 'カッコをつけて代入', '負の数の代入'],
        simulatorType: 'substitutionTool',
        step1: {
          stepNum: 1,
          title: '隠れていた「×」を復活させる',
          instruction: '5x は 5 × x のこと。数字を入れる前に、×記号を頭の中で思い出します。',
          mathLatex: '5x = 5 \\times x',
          badge: '×を思い出す'
        },
        step2: {
          stepNum: 2,
          title: '負の数はカッコをつけてスポッと入れる',
          instruction: 'x = -3 を代入するときは (-3) とカッコをつけて入れると符号ミスがゼロになります！',
          mathLatex: '4 - 2x = 4 - 2 \\times (-3) = 4 + 6 = 10',
          badge: 'カッコでガード'
        },
        formulaModel: {
          title: '代入テンプレート',
          templateLatex: 'x \\to (\\text{入れる数})',
          explanation: '文字があった場所に、カッコに入れた数字をそのままはめ込みます。',
          exampleLatex: 'x = -2 \\text{ のとき } x^2 = (-2)^2 = 4, \\quad -x^2 = -(-2)^2 = -4',
          tips: 'とくに二乗（x²）への負の数代入はカッコをつけないと100%間違えます！'
        },
        cautionMistake: {
          wrong: 'x = -3 のとき、x² を -3² = -9 と計算してしまう',
          wrongReason: 'x全体が -3 なので、(-3)² とカッコをつけて2乗しなければなりません。',
          correct: '(-3)² = +9',
          correctReason: 'x自体にカッコをつけて (-3)² = (-3) × (-3) = 9 になります。'
        },
        quiz: {
          question: 'x = -4 のとき、3 - x の値はいくつ？',
          optionA: '7',
          optionB: '-1',
          correctOption: 'A',
          explanation: '3 - (-4) = 3 + 4 = 7 になります！マイナスを引くのでプラスに変身します。',
          encouragement: '素晴らしい！カッコつき代入の極意が身についています！'
        }
      },
      {
        id: 'ch2-4',
        chapterId: 2,
        lessonNumber: 4,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '一次式の加減（同類項チームまとめ）',
        target: '文字が同じ「同類項」同士、ただの数字同士をチーム分けしてまとめよう！',
        keywords: ['一次式', '同類項', '項', '係数', '文字式のたし算ひき算'],
        simulatorType: 'termOrganizer',
        step1: {
          stepNum: 1,
          title: '同じ文字の仲間（同類項）を探す',
          instruction: 'x がついている項同士、数字だけの項同士を見つけてマークします。',
          mathLatex: '\\underline{3x} + 4 \\underline{- 5x} + 2',
          badge: '仲間探し'
        },
        step2: {
          stepNum: 2,
          title: '前の数字（係数）をたし算・ひき算',
          instruction: 'りんご3個 ー りんご5個 ＝ りんご-2個 のように、文字はそのままで数字だけ計算します。',
          mathLatex: '(3 - 5)x + (4 + 2) = -2x + 6',
          badge: '数字を合体'
        },
        formulaModel: {
          title: '同類項まとめテンプレート',
          templateLatex: 'ax + bx = (a + b)x, \\quad \\text{文字が違うもの(}x\\text{と数字)は足せない！}',
          explanation: '文字の部分が全く同じ項だけをまとめられます。2x + 3 を 5x にしてはいけません！',
          exampleLatex: '(5a - 2) + (3a + 7) = 5a + 3a - 2 + 7 = 8a + 5',
          tips: 'xチームと数字チームの間に壁があるイメージを持とう！'
        },
        cautionMistake: {
          wrong: '3x + 5 = 8x と足してしまう',
          wrongReason: '3x は文字の項、5 は数字の項。文字が違うので足せません！',
          correct: '「3x + 5」のまま（これ以上まとめられない）',
          correctReason: 'りんご3個とみかん5個は「りんご8個」にはならないのと同じです。'
        },
        quiz: {
          question: '計算してみよう： 7x - 2 - 4x + 6 = ?',
          optionA: '3x + 4',
          optionB: '11x + 4',
          correctOption: 'A',
          explanation: 'xチームは 7x - 4x = 3x。数字チームは -2 + 6 = 4。合わせて 3x + 4 です！',
          encouragement: '完璧！チーム分け計算がスムーズにできましたね！'
        }
      },
      {
        id: 'ch2-5',
        chapterId: 2,
        lessonNumber: 5,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '一次式と数の乗除（分配法則）',
        target: 'カッコの外の数字を、カッコの中の「全員」に公平にかけ算しよう！',
        keywords: ['分配法則', 'カッコを外す', '乗法', '除法', '符号注意'],
        step1: {
          stepNum: 1,
          title: '矢印を2本飛ばして全員にかける',
          instruction: 'カッコの外の数を、中の1人目にも2人目にも忘れず両方にかけ算します。',
          mathLatex: '3(2x - 4) = 3 \\times 2x + 3 \\times (-4) = 6x - 12',
          badge: '公平にかける'
        },
        step2: {
          stepNum: 2,
          title: 'マイナスを配るときは符号が全員反転',
          instruction: '-(4x - 5) や -2(3x - 1) は、中の全員の符号が＋とーで入れ替わります。',
          mathLatex: '-2(3x - 1) = -6x + 2',
          badge: '符号反転'
        },
        formulaModel: {
          title: '分配法則の公式',
          templateLatex: 'm(a + b) = ma + mb, \\quad -(a - b) = -a + b',
          explanation: 'カッコの前のマイナスは「-1を配る」のと同じです。',
          exampleLatex: '(12x - 8) \\div 4 = \\frac{12x}{4} - \\frac{8}{4} = 3x - 2',
          tips: '後ろの項への掛け忘れがミス率No.1！必ず2本の矢印をメモしよう。'
        },
        cautionMistake: {
          wrong: '2(3x + 4) = 6x + 4 と書いてしまう',
          wrongReason: 'うしろの 4 に 2 をかけ忘れています。',
          correct: '2(3x + 4) = 6x + 8',
          correctReason: 'カッコの中の全員に 2 を配るので、2×3x = 6x、2×4 = 8 で 6x + 8 です。'
        },
        quiz: {
          question: '計算してみよう： -3(2x - 5) = ?',
          optionA: '-6x + 15',
          optionB: '-6x - 15',
          correctOption: 'A',
          explanation: '-3 × 2x = -6x、そして -3 × (-5) = +15（マイナス×マイナス＝プラス）なので -6x + 15 です！',
          encouragement: 'マイナスの分配も完璧！符号の注意力が素晴らしい！'
        }
      },
      {
        id: 'ch2-6',
        chapterId: 2,
        lessonNumber: 6,
        totalLessonsInChapter: 6,
        chapterTitle: '第2章：文字と式',
        title: '数量の関係を文字式に表す',
        target: '「代金」「おつり」「速さ」「割合」の身近な文章を文字式に翻訳しよう！',
        keywords: ['数量', '代金とおつり', 'みはじ', '割合', 'パーセント', '等式と不等式'],
        step1: {
          stepNum: 1,
          title: '具体的な数字で式をイメージする',
          instruction: '「1個100円を3個買ったら？」→ 100 × 3。文字になっても同じ形（100 × a = 100a）にします。',
          mathLatex: '100 \\times x = 100x \\text{ 円}',
          badge: '数字で試す'
        },
        step2: {
          stepNum: 2,
          title: '単位をそろえて式を立てる',
          instruction: 'a分を時間にするなら a/60時間、x%なら x/100 のように単位換算を忘れずに。',
          mathLatex: 'x\\% \\longrightarrow \\frac{x}{100}, \\quad a\\text{分} \\longrightarrow \\frac{a}{60}\\text{時間}',
          badge: '単位チェック'
        },
        formulaModel: {
          title: 'よく出る数量の型',
          templateLatex: '\\text{おつり} = \\text{出したお金} - \\text{代金}, \\quad \\text{道のり} = \\text{速さ} \\times \\text{時間}',
          explanation: '1000円出して a円のノートを3冊買ったおつりなら 1000 - 3a 円。',
          exampleLatex: '1000 - 3a \\text{ (円)}',
          tips: '答えに単位をつけるときは、式全体にカッコをつけて (1000 - 3a)円 と書きます。'
        },
        cautionMistake: {
          wrong: '「x円の3割」を 3x円 と書いてしまう',
          wrongReason: '3割は 3/10（0.3）のことです。3倍ではありません。',
          correct: '0.3x円 または 3/10 x円',
          correctMath: 'x \\times \\frac{3}{10} = \\frac{3}{10}x',
          correctReason: '割合の「割」は 1/10、「％」は 1/100 をかけるのがお約束です。'
        },
        quiz: {
          question: '500円玉を出して、1本 a円のジュースを2本買ったときのおつりは？',
          optionA: '(500 - 2a) 円',
          optionB: '(2a - 500) 円',
          correctOption: 'A',
          explanation: 'おつりは「出したお金(500) － 代金(2a)」なので (500 - 2a)円 です！',
          encouragement: '文字への翻訳もお手の物！第2章マスター達成です！'
        }
      }
    ]
  },
  {
    id: 3,
    title: '第3章：一次方程式',
    shortTitle: '一次方程式',
    themeColor: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      accent: 'bg-amber-600',
      badgeBg: 'bg-amber-100 text-amber-800',
    },
    totalLessons: 6,
    lessons: [
      {
        id: 'ch3-1',
        chapterId: 3,
        lessonNumber: 1,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: '方程式とその解・等式の性質（天秤）',
        target: 'つり合った天秤（＝）は、両側に同じことをしても絶対に傾かない！',
        keywords: ['方程式', '解', '等式の性質', '天秤', '両辺に同じ操作'],
        simulatorType: 'balanceScale',
        step1: {
          stepNum: 1,
          title: '等式は釣り合っている天秤',
          instruction: '左辺と右辺が「＝」で結ばれているのは、重さがピッタリ同じ天秤です。',
          mathLatex: 'A = B \\iff \\text{天秤がつり合っている}',
          badge: '天秤イメージ'
        },
        step2: {
          stepNum: 2,
          title: '両辺に同じ計算をしても等しいまま',
          instruction: '両方に同じ数を「足す・引く・かける・割る」をしても、天秤はつり合い続けます。',
          mathLatex: 'A+C = B+C, \\quad A-C = B-C, \\quad AC = BC, \\quad \\frac{A}{C} = \\frac{B}{C}',
          badge: '4つの性質'
        },
        formulaModel: {
          title: '等式の4つの性質',
          templateLatex: 'A = B \\text{ ならば } A \\pm C = B \\pm C, \\quad A \\times C = B \\times C, \\quad \\frac{A}{C} = \\frac{B}{C}',
          explanation: 'ゴールは「x = (数字)」の形にすること。邪魔なものを両辺から消していきます。',
          exampleLatex: 'x + 5 = 12 \\longrightarrow x + 5 - 5 = 12 - 5 \\longrightarrow x = 7',
          tips: '片方だけに足したり引いたりすると天秤がガタンと崩れるので「両辺に平等に」！'
        },
        cautionMistake: {
          wrong: '3x = 12 を解くとき、両辺から3を引いて x = 9 にしてしまう',
          wrongReason: '3とxは「かけ算（3×x）」でくっついているので、引き算では消せません。',
          correct: '両辺を 3 で割って x = 4',
          correctMath: '\\frac{3x}{3} = \\frac{12}{3} \\implies x = 4',
          correctReason: 'かけ算を消すには逆の「わり算」を使います！'
        },
        quiz: {
          question: 'x - 4 = 10 の解を求めるには、両辺にどうすればいい？',
          optionA: '両辺に 4 を足す',
          optionB: '両辺から 4 を引く',
          correctOption: 'A',
          explanation: '-4 を消したいので、反対の「+4」を両辺に足せば x = 14 になります！',
          encouragement: '天秤のバランス感覚バッチリ！方程式の第一歩クリア！'
        }
      },
      {
        id: 'ch3-2',
        chapterId: 3,
        lessonNumber: 2,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: '移項のルール（＝をまたぐと符号反転）',
        target: '＝の橋を渡ったら、符号が「＋」から「ー」にくるっと変身！',
        keywords: ['移項', 'イコールをまたぐ', '符号反転', '左辺に文字', '右辺に数字'],
        simulatorType: 'transposeDemo',
        step1: {
          stepNum: 1,
          title: '＝の反対側へ引っ越しする',
          instruction: '左辺の数字や右辺の文字を、＝を越えて反対側へ移動させます。',
          mathLatex: 'x + 3 = 8 \\longrightarrow x = 8 \\;[-3]',
          badge: '引っ越し'
        },
        step2: {
          stepNum: 2,
          title: '橋を渡ったら符号をくるっと逆にする',
          instruction: '「+」は「-」に、「-」は「+」に符号を必ず変えます。動かさない数はそのままです。',
          mathLatex: '5x - 4 = 2x + 11 \\longrightarrow 5x - 2x = 11 + 4',
          badge: '符号チェンジ'
        },
        formulaModel: {
          title: '移項のルールブック',
          templateLatex: '+ \\square \\xrightarrow{\\text{＝をまたぐ}} - \\square, \\quad - \\triangle \\xrightarrow{\\text{＝をまたぐ}} + \\triangle',
          explanation: '等式の両辺に同じ数を足し引きするショートカットが「移項」です。',
          exampleLatex: '4x - 7 = 5 \\implies 4x = 5 + 7 \\implies 4x = 12 \\implies x = 3',
          tips: '引っ越しした数だけ符号が変わります。動いてない数の符号は変えないで！'
        },
        cautionMistake: {
          wrong: 'x + 6 = 10 を移項して x = 10 + 6 にしてしまう',
          wrongReason: '＝をまたいだのに符号がプラスのままになっています。',
          correct: 'x = 10 - 6 = 4',
          correctReason: '＝をまたぐと「+6」は「-6」に反転します！'
        },
        quiz: {
          question: '3x = x + 8 の「x」を左辺に移項するとどうなる？',
          optionA: '3x - x = 8',
          optionB: '3x + x = 8',
          correctOption: 'A',
          explanation: '+x が＝をまたいで左辺に行くので、符号が反転して -x になります！',
          encouragement: '移項のルールを完璧にマスター！符号反転はお手の物ですね！'
        }
      },
      {
        id: 'ch3-3',
        chapterId: 3,
        lessonNumber: 3,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: '一次方程式の解き方（基本3ステップ）',
        target: '①左にx・右に数字 → ②同類項まとめ → ③xの前の数で割る の3拍子！',
        keywords: ['一次方程式', '解き方', '3ステップ', '係数で割る', 'ax=b'],
        step1: {
          stepNum: 1,
          title: '移項して ax = b の形にする',
          instruction: 'x がついた項を左辺に、数字だけの項を右辺に集めて、それぞれ計算します。',
          mathLatex: '4x - 5 = x + 7 \\implies 4x - x = 7 + 5 \\implies 3x = 12',
          badge: '整理'
        },
        step2: {
          stepNum: 2,
          title: 'x の前の数（係数）で両辺を割る',
          instruction: '最後は x の前についている数字でそのまま割り算して、x = (答え) を出します。',
          mathLatex: '3x = 12 \\implies x = \\frac{12}{3} = 4',
          badge: '最後のわり算'
        },
        formulaModel: {
          title: '一次方程式の必勝3拍子',
          templateLatex: '1. \\text{移項}(x\\text{は左, 数は右}) \\to 2. \\text{まとめる}(ax = b) \\to 3. x = \\frac{b}{a}',
          explanation: 'どんなに長い一次方程式も、最終的には必ず ax = b の形に帰着します。',
          exampleLatex: '7x + 2 = 3x + 18 \\implies 4x = 16 \\implies x = 4',
          tips: '答えが出たら、元の式のxに入れて確かめ算（検算）すると100点確実！'
        },
        cautionMistake: {
          wrong: '-2x = 6 を解くとき x = 3 と符号をプラスにしてしまう',
          wrongReason: '両辺を「-2」で割るので、6 ÷ (-2) = -3 になります。',
          correct: 'x = -3',
          correctMath: 'x = \\frac{6}{-2} = -3',
          correctReason: 'x の前の数がマイナスなら、マイナスごと割り算します。'
        },
        quiz: {
          question: '一次方程式 5x - 3 = 2x + 9 の解は？',
          optionA: 'x = 4',
          optionB: 'x = 2',
          correctOption: 'A',
          explanation: '移項すると 5x - 2x = 9 + 3 → 3x = 12 → 3で割って x = 4 です！',
          encouragement: '素晴らしい！方程式を自力でスラスラ解けるようになりました！'
        }
      },
      {
        id: 'ch3-4',
        chapterId: 3,
        lessonNumber: 4,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: 'カッコや小数・分数を含む方程式',
        target: '小数には×10、分数には分母の最小公倍数をかけて、普通の式に変身させよう！',
        keywords: ['小数の方程式', '分数の方程式', '10倍', '最小公倍数', '分母をはらう'],
        step1: {
          stepNum: 1,
          title: '小数なら 10倍・100倍する',
          instruction: '0.3x + 0.5 = 1.1 のように小数がいたら、両辺の「すべての項」を10倍して整数にします。',
          mathLatex: '0.3x + 0.5 = 1.1 \\xrightarrow{\\times 10} 3x + 5 = 11',
          badge: '10倍作戦'
        },
        step2: {
          stepNum: 2,
          title: '分数なら分母の最小公倍数をかける',
          instruction: '分母が3と2なら、両辺に6をかけて分母をパッと消します（分母をはらう）。',
          mathLatex: '\\frac{x}{3} + 1 = \\frac{x}{2} \\xrightarrow{\\times 6} 2x + 6 = 3x',
          badge: '分母をはらう'
        },
        formulaModel: {
          title: '小数・分数の撃退テンプレート',
          templateLatex: '\\text{小数} \\to \\text{両辺} \\times 10, 100 \\dots, \\quad \\text{分数} \\to \\text{両辺} \\times (\\text{分母の最小公倍数})',
          explanation: '分数のない整数だけの式にしてから、基本3ステップで解きます。',
          exampleLatex: '\\frac{x-1}{2} = \\frac{x+3}{5} \\xrightarrow{\\times 10} 5(x-1) = 2(x+3)',
          tips: '分数の分子に式があるときは、必ず分子全体にカッコをつけてから掛けよう！'
        },
        cautionMistake: {
          wrong: 'x/2 + 3 = 5 の両辺を2倍するとき、3 を2倍し忘れて x + 3 = 10 にしてしまう',
          wrongReason: '分数以外の「ただの数字の項」にも忘れずに2をかけなければ天秤が崩れます。',
          correct: 'x + 6 = 10 (すべての項を2倍)',
          correctReason: '両辺にかけるときは「すべての項に平等に」かけます！'
        },
        quiz: {
          question: '0.2x + 1 = 0.5x - 2 を解くとき、最初に両辺を何倍すると解きやすい？',
          optionA: '10倍する',
          optionB: '2倍する',
          correctOption: 'A',
          explanation: '小数をなくすために両辺を10倍すると、2x + 10 = 5x - 20 と整数になります！',
          encouragement: '作戦大成功！分母や小数を撃退するコツが掴めました！'
        }
      },
      {
        id: 'ch3-5',
        chapterId: 3,
        lessonNumber: 5,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: '方程式の利用①（代金と個数の問題）',
        target: '求めたいものを「x」とおき、「左の合計金額 ＝ 右の支払った金額」でイコールを結ぼう！',
        keywords: ['方程式の利用', '文章題', '代金と個数', '何をxとおくか', '確かめ'],
        step1: {
          stepNum: 1,
          title: '求めたいものを x 個とおく',
          instruction: '「りんごを何個買ったか？」なら、りんごを x 個とおきます。合計10個なら、みかんは (10 - x)個！',
          mathLatex: '\\text{りんご} = x \\text{ 個}, \\quad \\text{みかん} = (10 - x) \\text{ 個}',
          badge: 'xを決める'
        },
        step2: {
          stepNum: 2,
          title: '代金の合計で＝を結ぶ',
          instruction: '（1個の値段×個数）を足し合わせて、合計金額と＝でつなぎます。',
          mathLatex: '120x + 80(10 - x) = 1040',
          badge: '式を立てる'
        },
        formulaModel: {
          title: '代金文章題の必勝型',
          templateLatex: '(\\text{品物Aの単価} \\times x) + (\\text{品物Bの単価} \\times (\\text{合計} - x)) = \\text{総額}',
          explanation: '方程式を解いたあと、答えが自然数（個数）として問題に合っているか確認します。',
          exampleLatex: '120x + 800 - 80x = 1040 \\implies 40x = 240 \\implies x = 6',
          tips: '最後に「りんご6個」と単位を忘れずに書こう！'
        },
        cautionMistake: {
          wrong: '合わせて12個買ったとき、もう一方の個数を x - 12 と書いてしまう',
          wrongReason: '合計から x を引くので「12 - x」が正しいです。',
          correct: 'もう一方は「12 - x」個',
          correctReason: '12個のうち x個使ったら、残りは 12 - x 個ですね！'
        },
        quiz: {
          question: '1本100円の鉛筆と1本150円のペンを合わせて8本買いました。鉛筆を x本とすると、ペンは何本？',
          optionA: '(8 - x) 本',
          optionB: '(x - 8) 本',
          correctOption: 'A',
          explanation: '全体の8本から鉛筆の x本を引いた残りがペンなので (8 - x)本 です！',
          encouragement: '文章題の文字おきもパーフェクト！この調子！'
        }
      },
      {
        id: 'ch3-6',
        chapterId: 3,
        lessonNumber: 6,
        totalLessonsInChapter: 6,
        chapterTitle: '第3章：一次方程式',
        title: '方程式の利用②（過不足の問題）',
        target: '「余るなら＋」「足りないならー」で全体の人数や個数の等式を作ろう！',
        keywords: ['過不足', '余る', '足りない', '生徒の人数', '飴を配る'],
        step1: {
          stepNum: 1,
          title: '人数を x 人とおく',
          instruction: '配る相手（生徒の人数など）を x 人とおくと、全体の品物の個数が2通りで表せます。',
          mathLatex: '\\text{子どもの人数} = x \\text{ 人}',
          badge: '人数をx'
        },
        step2: {
          stepNum: 2,
          title: '余る（＋）と足りない（ー）で式を作る',
          instruction: '「4個ずつ配ると3個余る」→ 4x + 3。「5個ずつ配ると2個足りない」→ 5x - 2。',
          mathLatex: '4x + 3 = 5x - 2',
          badge: 'イコールで結ぶ'
        },
        formulaModel: {
          title: '過不足問題のテンプレート',
          templateLatex: '(A\\text{個ずつ配る} \\times x) + \\text{余り} = (B\\text{個ずつ配る} \\times x) - \\text{不足}',
          explanation: 'どちらの配り方をしても「アメの全体の個数」は同じなので＝で結べます。',
          exampleLatex: '4x + 3 = 5x - 2 \\implies -x = -5 \\implies x = 5 \\text{ (人)}',
          tips: '求めたxを式に入れると「アメの総数 = 4×5+3 = 23個」とアメの数も出せます！'
        },
        cautionMistake: {
          wrong: '「4個足りない」を +4 と足してしまう',
          wrongReason: '足りない（不足）はマイナスです！',
          correct: '足りないときは「-4」',
          correctReason: '配りきるのに4個届かないので、引き算（-4）にします。'
        },
        quiz: {
          question: '生徒 x人にノートを配る。「1人に3冊ずつ配ると5冊余る」ときのノートの冊数は？',
          optionA: '3x + 5',
          optionB: '3x - 5',
          correctOption: 'A',
          explanation: '3冊ずつ x人に配ってさらに5冊余っているので、全部で 3x + 5 冊です！',
          encouragement: '方程式編コンプリート！難関文章題もクリアしました！'
        }
      }
    ]
  },
  {
    id: 4,
    title: '第4章：比例と反比例',
    shortTitle: '比例と反比例',
    themeColor: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-800',
      accent: 'bg-indigo-600',
      badgeBg: 'bg-indigo-100 text-indigo-800',
    },
    totalLessons: 6,
    lessons: [
      {
        id: 'ch4-1',
        chapterId: 4,
        lessonNumber: 1,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '関数と変数・変域',
        target: 'xの値を1つ決めるとyの値が「ただ1つ」決まる関係が関数！不等号で範囲を表そう！',
        keywords: ['関数', '変数', '変域', '不等号', '以上以下', '未満'],
        step1: {
          stepNum: 1,
          title: 'xを決めるとyが1つだけ決まるか見る',
          instruction: '自動販売機のボタン（x）を押したらジュース（y）が1つ出てくるイメージです。',
          mathLatex: 'x \\xrightarrow{\\text{自動販売機}} y \\text{ (ただ1つ)}',
          badge: '関数の正体'
        },
        step2: {
          stepNum: 2,
          title: '変域を不等号で挟んで表す',
          instruction: '「-2以上5未満」なら、イコールがつく≦と、つかない＜を使い分けて表します。',
          mathLatex: '-2 \\leqq x < 5',
          badge: '変域の書き方'
        },
        formulaModel: {
          title: '不等号の使い分け辞書',
          templateLatex: '\\text{以上・以下} \\to \\leqq, \\geqq \\text{ (その数を含む)}, \\quad \\text{より大きい・未満} \\to <, > \\text{ (その数を含まない)}',
          explanation: '変域はふつう「小さい数 ≦ x ≦ 大きい数」と小〜大の順に挟んで書きます。',
          exampleLatex: 'x \\text{ が 0 以上 10 以下 } \\longrightarrow 0 \\leqq x \\leqq 10',
          tips: '「未満」にはその数が入りません（5未満に5は入らない）！'
        },
        cautionMistake: {
          wrong: '「5未満」を x ≦ 5 とイコールをつけて書いてしまう',
          wrongReason: '未満にはイコールがつきません。',
          correct: 'x < 5',
          correctReason: '「以下」なら ≦、「未満」なら ＜ です！'
        },
        quiz: {
          question: '「x は -3 より大きく、4 以下である」を変域の式で書くと？',
          optionA: '-3 < x ≦ 4',
          optionB: '-3 ≦ x ≦ 4',
          correctOption: 'A',
          explanation: '-3より大きい（イコールなし）で、4以下（イコールあり）なので -3 < x ≦ 4 です！',
          encouragement: '不等号の使い分けバッチリ！関数の基礎固め完了！'
        }
      },
      {
        id: 'ch4-2',
        chapterId: 4,
        lessonNumber: 2,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '比例の式（y = ax と比例定数 a = y/x）',
        target: 'xが2倍3倍になるとyも2倍3倍！「a ＝ y ÷ x」で比例定数を一発ゲット！',
        keywords: ['比例', '比例定数', 'y=ax', 'a=y/x', '2倍3倍'],
        step1: {
          stepNum: 1,
          title: '比例の式 y = ax を用意する',
          instruction: '比例と聞いたら、なにはともあれ y = ax の公式を紙に大きくメモします。',
          mathLatex: 'y = ax',
          badge: '基本の型'
        },
        step2: {
          stepNum: 2,
          title: 'a = y ÷ x で比例定数を出す',
          instruction: 'x と y のペアがわかったら、y を x で割り算するだけで a がすぐ求まります！',
          mathLatex: 'a = \\frac{y}{x}',
          badge: '裏ワザ計算'
        },
        formulaModel: {
          title: '比例マスターテンプレート',
          templateLatex: 'y = ax \\iff a = \\frac{y}{x}',
          explanation: 'x = 3 のとき y = 12 なら、a = 12 ÷ 3 = 4。式は y = 4x に決定！',
          exampleLatex: 'x = 2, y = -6 \\implies a = \\frac{-6}{2} = -3 \\implies y = -3x',
          tips: 'aがマイナスの比例もある（y = -2xなど）ので注意しよう！'
        },
        cautionMistake: {
          wrong: 'a を求めるとき、x ÷ y と逆にしてしまう',
          wrongReason: '割られるのは y です。「a = y / x（下から上に読む）」です！',
          correct: 'a = y / x （yをxで割る）',
          correctReason: 'y = ax の両辺を x で割ると a = y/x になります。'
        },
        quiz: {
          question: 'y は x に比例し、x = 4 のとき y = 20 です。比例定数 a はいくつ？',
          optionA: 'a = 5',
          optionB: 'a = 16',
          correctOption: 'A',
          explanation: 'a = y ÷ x なので、20 ÷ 4 = 5 です！式は y = 5x になります。',
          encouragement: '正解！比例定数の出し方を完璧にモノにしましたね！'
        }
      },
      {
        id: 'ch4-3',
        chapterId: 4,
        lessonNumber: 3,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '座標と比例のグラフ（原点を通る直線）',
        target: '比例のグラフは必ず「原点(0, 0)」を通る直線！1マス進んでa上がる！',
        keywords: ['座標', 'x座標', 'y座標', '原点', '比例のグラフ', '直線', '右上がり右下がり'],
        simulatorType: 'linearGraph',
        step1: {
          stepNum: 1,
          title: '原点 (0, 0) に点を打つ',
          instruction: '比例のグラフは100%必ず真ん中の原点 (0, 0) を通ります。まず原点にドット！',
          mathLatex: '\\text{原点 } O(0, 0)',
          badge: 'スタート地点'
        },
        step2: {
          stepNum: 2,
          title: 'もう1つの点を見つけて定規で結ぶ',
          instruction: 'y = 2x なら x=1 のとき y=2 なので、点(1, 2)に点を打ち、原点と結んで伸ばします。',
          mathLatex: 'a > 0 \\to \\text{右上がり}, \\quad a < 0 \\to \\text{右下がり}',
          badge: '定規でシャッ'
        },
        formulaModel: {
          title: '比例のグラフの特徴',
          templateLatex: '\\text{原点}(0, 0)\\text{を通る1本の直線}',
          explanation: 'aがプラスなら右肩上がり、aがマイナスなら右肩下がりの直線になります。',
          exampleLatex: 'y = -\\frac{2}{3}x \\longrightarrow \\text{原点から「右に3進んで下に2下がる」点を通る}',
          tips: '端から端までしっかり突き抜けるように長く引きましょう！'
        },
        cautionMistake: {
          wrong: '点 (3, 2) を打つとき、横に2・縦に3進んでしまう',
          wrongReason: '座標は (x, y) なので、横が先、縦があとです！',
          correct: '横（x軸）に3、縦（y軸）に2進む',
          correctReason: 'アルファベット順と同じで「xが先、yが後」です！'
        },
        quiz: {
          question: '比例 y = -3x のグラフの形はどれ？',
          optionA: '原点を通る「右下がり」の直線',
          optionB: '原点を通る「右上がり」の直線',
          correctOption: 'A',
          explanation: '比例定数 a が -3（マイナス）なので、原点を通る右下がりの直線になります！',
          encouragement: '素晴らしい！傾きと符号の関係がバッチリ頭に入っています！'
        }
      },
      {
        id: 'ch4-4',
        chapterId: 4,
        lessonNumber: 4,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '反比例の式（y = a/x と xy = a の裏ワザ）',
        target: 'xが2倍3倍になるとyは1/2倍1/3倍！「x × y ＝ a」のかけ算裏ワザを使おう！',
        keywords: ['反比例', 'y=a/x', 'xy=a', '比例定数', '積が一定'],
        step1: {
          stepNum: 1,
          title: '反比例の基本式 y = a / x',
          instruction: 'x が分母に来るのが反比例です。x と y をかけると常に一定の数 a になります。',
          mathLatex: 'y = \\frac{a}{x}',
          badge: '基本の形'
        },
        step2: {
          stepNum: 2,
          title: '裏ワザ公式 a = x × y',
          instruction: '比例定数 a を求めたいときは、x と y をただかけ算するだけで一瞬で出ます！',
          mathLatex: 'a = x \\times y \\quad (\\text{積が一定！})',
          badge: '一発かけ算'
        },
        formulaModel: {
          title: '反比例の裏ワザ公式',
          templateLatex: 'y = \\frac{a}{x} \\iff a = xy',
          explanation: 'x = 4 のとき y = 3 なら、a = 4 × 3 = 12。式は y = 12/x です。',
          exampleLatex: 'x = -2, y = 6 \\implies a = (-2) \\times 6 = -12 \\implies y = -\\frac{12}{x}',
          tips: '反比例は「縦×横＝面積（一定）」と覚えると絶対に忘れません！'
        },
        cautionMistake: {
          wrong: '反比例なのに a = y / x で計算してしまう',
          wrongReason: 'それは比例の出し方です。反比例は「x と y をかける」です！',
          correct: 'a = x × y',
          correctReason: '反比例はペアの数を掛け合わせるといつも同じ数になります。'
        },
        quiz: {
          question: 'y は x に反比例し、x = 3 のとき y = 8 です。比例定数 a は？',
          optionA: 'a = 24',
          optionB: 'a = 8/3',
          correctOption: 'A',
          explanation: '反比例の比例定数は a = x × y なので、3 × 8 = 24 です！式は y = 24/x。',
          encouragement: '裏ワザ「xy = a」をしっかり使いこなせています！見事！'
        }
      },
      {
        id: 'ch4-5',
        chapterId: 4,
        lessonNumber: 5,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '反比例のグラフ（双曲線）',
        target: '反比例のグラフはなめらかな「2本のカーブ（双曲線）」！原点や軸には絶対に触れない！',
        keywords: ['反比例のグラフ', '双曲線', 'なめらかな曲線', '軸に触れない', '2本1組'],
        simulatorType: 'inverseGraph',
        step1: {
          stepNum: 1,
          title: 'かけて a になる整数の点を打つ',
          instruction: 'y = 6/x なら、かけて6になるペア (1,6), (2,3), (3,2), (6,1) とそのマイナス版を打ちます。',
          mathLatex: '(1, 6), (2, 3), (3, 2), (-1, -6), (-2, -3) \\dots',
          badge: '点をたくさん打つ'
        },
        step2: {
          stepNum: 2,
          title: '定規を使わず、なめらかに結ぶ',
          instruction: 'カクカク折れ線にせず、美しいカーブで結びます。2本で1セットの「双曲線」です。',
          mathLatex: 'a > 0 \\to \\text{右上と左下}, \\quad a < 0 \\to \\text{左上と右下}',
          badge: 'ツルッとカーブ'
        },
        formulaModel: {
          title: '双曲線の掟（おきて）',
          templateLatex: '\\text{2本の向かい合うなめらかな曲線（原点・軸には触れない）}',
          explanation: 'x=0 は割ることができないので、y軸と交わることは絶対にありません。',
          exampleLatex: 'y = \\frac{12}{x} \\longrightarrow x\\text{軸と}y\\text{軸に近づきながら永遠に触れない}',
          tips: '定規で直線を引いたら即バツになります！フリーハンドで優しく曲げよう。'
        },
        cautionMistake: {
          wrong: '反比例のグラフを定規でピシッと直線で結んでしまう',
          wrongReason: '反比例は直線ではありません。カーブ（双曲線）です！',
          correct: 'フリーハンドでなめらかな曲線を描く',
          correctReason: '2本のペアの曲線（双曲線）を描くのが反比例の鉄則です。'
        },
        quiz: {
          question: '反比例 y = 8/x のグラフは原点 (0, 0) を通る？',
          optionA: '通らない（絶対に触れない）',
          optionB: '通る',
          correctOption: 'A',
          explanation: '分母に0は入れられないため、反比例のグラフは原点も軸も絶対に通りません！',
          encouragement: '素晴らしい！双曲線の重要ルールをしっかり理解しています！'
        }
      },
      {
        id: 'ch4-6',
        chapterId: 4,
        lessonNumber: 6,
        totalLessonsInChapter: 6,
        chapterTitle: '第4章：比例と反比例',
        title: '比例・反比例の利用（歯車・水槽など）',
        target: '「歯数×回転数＝一定」は反比例！身近な現象を関数で見抜こう！',
        keywords: ['利用問題', '歯車', '水槽に水を入れる', '反比例の応用', '比例の応用'],
        step1: {
          stepNum: 1,
          title: '比例か反比例かを見極める',
          instruction: '一方が2倍になったとき、もう一方も2倍なら比例（y=ax）、半分になるなら反比例（xy=a）です。',
          mathLatex: '\\text{毎分}3\\text{Lずつ水を入れる} \\to \\text{比例}, \\quad \\text{歯車の噛み合い} \\to \\text{反比例}',
          badge: 'どっちか判定'
        },
        step2: {
          stepNum: 2,
          title: '歯車は「歯数 × 回転数 ＝ 一定」',
          instruction: '噛み合っている歯車のかみ合う歯の総数は同じなので、歯数×回転数が常に一定（反比例）です。',
          mathLatex: '(\\text{歯車Aの歯数} \\times \\text{回転数}) = (\\text{歯車Bの歯数} \\times \\text{回転数})',
          badge: '歯車の掟'
        },
        formulaModel: {
          title: '歯車の反比例テンプレート',
          templateLatex: 'x \\times y = a \\quad (\\text{歯数} \\times \\text{毎秒の回転数} = \\text{通過する歯の数})',
          explanation: '歯数20の歯車Aが毎秒6回転するとき、歯数30の歯車Bの回転数 y は 20×6 = 30×y より y = 4回転。',
          exampleLatex: '20 \\times 6 = 30 \\times y \\implies y = 4 \\text{ (回転)}',
          tips: '歯数が多い歯車ほど、ゆっくり回る（回転数が減る）から反比例！'
        },
        cautionMistake: {
          wrong: '「水槽に一定の割合で水を入れるときの深さ」を反比例と勘違いする',
          wrongReason: '時間が経つほど深さはどんどん増えるので「比例」です。',
          correct: '水槽に水を入れる深さは「比例」',
          correctReason: '時間が2倍になれば、水の深さも2倍になるので y = ax の比例です。'
        },
        quiz: {
          question: '歯数が30で毎秒4回転する歯車Aと、歯数が20の歯車Bが噛み合っています。歯車Bは毎秒何回転？',
          optionA: '6回転',
          optionB: '2回転',
          correctOption: 'A',
          explanation: '歯数×回転数が一定なので 30 × 4 = 120。120 ÷ 20 = 6回転 です！',
          encouragement: '第4章完全クリア！比例・反比例の達人になりました！'
        }
      }
    ]
  },
  {
    id: 5,
    title: '第5章：平面図形',
    shortTitle: '平面図形',
    themeColor: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
      accent: 'bg-rose-500',
      badgeBg: 'bg-rose-100 text-rose-800',
    },
    totalLessons: 6,
    lessons: [
      {
        id: 'ch5-1',
        chapterId: 5,
        lessonNumber: 1,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '直線・線分・角と図形の記号（//, ⊥, ∠）',
        target: '平行「//」、垂直「⊥」、角「∠」の記号を使って、図形の性質をスマートに書こう！',
        keywords: ['直線', '線分', '半直線', '平行記号', '垂直記号', '角の記号', '距離'],
        simulatorType: 'lineAngleViewer',
        step1: {
          stepNum: 1,
          title: 'まっすぐな線の違いを見分ける',
          instruction: '両側に永遠に伸びるのが「直線AB」、AからBまでで止まるのが「線分AB」です。',
          mathLatex: '\\text{線分AB} = \\text{端から端までの長さがある線}',
          badge: '線の種類'
        },
        step2: {
          stepNum: 2,
          title: '記号で関係をサクッと書く',
          instruction: '平行（レール）は「AB // CD」、垂直（直角90°）は「AB ⊥ CD」と書きます。',
          mathLatex: 'AB // CD \\quad (\\text{平行}), \\quad AB \\perp CD \\quad (\\text{垂直 90}^\\circ)',
          badge: '図形記号'
        },
        formulaModel: {
          title: '中学数学の必須図形記号',
          templateLatex: '// \\text{ (平行)}, \\quad \\perp \\text{ (垂直)}, \\quad \\angle ABC \\text{ (真ん中のBが頂点の角)}, \\quad \\triangle \\text{ (三角形)}',
          explanation: '∠ABC と書いたら、アルファベットの真ん中「B」の場所の角度を指します。',
          exampleLatex: '\\angle B = 60^\\circ \\text{ または } \\angle ABC = 60^\\circ',
          tips: '点と直線の距離は「一番短い垂線の長さ」のこと！'
        },
        cautionMistake: {
          wrong: '∠ABC の角度を聞かれて、点Aの角度を答えてしまう',
          wrongReason: '3文字で書かれた角は「真ん中の文字」の頂点の角度を表します。',
          correct: '真ん中の「B」の角度を見る',
          correctReason: 'A → B → C となぞったときに曲がる頂点が B です！'
        },
        quiz: {
          question: '2つの直線 AB と CD が直角（90°）に交わっているとき、どの記号を使う？',
          optionA: 'AB ⊥ CD',
          optionB: 'AB // CD',
          correctOption: 'A',
          explanation: '垂直（直角）を表す記号は「⊥」です！「//」は平行（線路）を表します。',
          encouragement: '図形記号の基礎バッチリ！読み書きがスムーズになりますね！'
        }
      },
      {
        id: 'ch5-2',
        chapterId: 5,
        lessonNumber: 2,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '図形の移動（平行・回転・対称）',
        target: '図形をスライド（平行）、回す（回転）、裏返す（対称）の3つのワザを知ろう！',
        keywords: ['平行移動', '回転移動', '対称移動', '対称の軸', '点対称', '回転の中心'],
        step1: {
          stepNum: 1,
          title: '3つの動かし方の特徴',
          instruction: '向きを変えずにずらすのが「平行移動」、1点を中心に回すのが「回転移動」、折り目でパタンと裏返すのが「対称移動」です。',
          mathLatex: '\\text{平行移動} / \\text{回転移動} / \\text{対称移動}',
          badge: '3大移動'
        },
        step2: {
          stepNum: 2,
          title: '移動しても形と大きさは絶対に変わらない',
          instruction: 'どんなに動かしても、移動前と移動後の図形は完全にピッタリ重なります（合同）。',
          mathLatex: '\\text{移動後の図形} \\equiv \\text{移動前の図形}',
          badge: '形は不変'
        },
        formulaModel: {
          title: '図形の移動ルール表',
          templateLatex: '\\begin{cases} \\text{平行移動: 対応する点を結ぶ線分は平行で長さが等しい} \\\\ \\text{対称移動: 対称の軸は対応する点を結ぶ線分の「垂直二等分線」} \\end{cases}',
          explanation: '点対称移動は、回転の中心まわりに「180°回転」させたものと同じです。',
          exampleLatex: '\\text{線対称} \\to \\text{折り紙の折り目}, \\quad \\text{点対称} \\to 180^\\circ \\text{回転}',
          tips: '対応する点を結んだ線が垂直二等分線になるのが対称移動のテスト頻出点！'
        },
        cautionMistake: {
          wrong: '「点対称移動」は裏返し（線対称）と同じだと思ってしまう',
          wrongReason: '線対称はパタンと裏返しますが、点対称はくるっと180度回転させます。',
          correct: '点対称移動は「180°回転移動」',
          correctReason: '回転の中心を通って反対側に同じ長さだけ伸ばした点が対応します。'
        },
        quiz: {
          question: '図形を「対称の軸」で折り返してピッタリ重ねる移動を何という？',
          optionA: '対称移動（線対称）',
          optionB: '平行移動',
          correctOption: 'A',
          explanation: '折り目（対称の軸）でパタンと裏返す移動は「対称移動」です！',
          encouragement: '大正解！図形移動のイメージがしっかり掴めています！'
        }
      },
      {
        id: 'ch5-3',
        chapterId: 5,
        lessonNumber: 3,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '基本の作図① 垂直二等分線（2点から等しい距離）',
        target: 'コンパスの幅を変えずに2点からチョンチョン！「2点から等しい距離の点」の作図！',
        keywords: ['作図', '垂直二等分線', 'コンパス', '2点から等しい距離', '中点'],
        simulatorType: 'compassBisector',
        step1: {
          stepNum: 1,
          title: '点Aと点Bから同じ半径で円弧を描く',
          instruction: 'コンパスを線分の半分より長めに開き、点Aに針を刺して上下に弧を描き、同じ幅のまま点Bからも描きます。',
          mathLatex: '\\text{コンパスの幅を変えないのが鉄則！}',
          badge: 'チョンチョン'
        },
        step2: {
          stepNum: 2,
          title: '交わった2つの交点を定規で結ぶ',
          instruction: '上で交わった点と下で交わった点を定規で結べば、真ん中（中点）を90°で貫く線が完成！',
          mathLatex: 'AP = BP \\iff P \\text{ は垂直二等分線上にある}',
          badge: '定規で結ぶ'
        },
        formulaModel: {
          title: '垂直二等分線の意味',
          templateLatex: '\\text{線分ABの垂直二等分線上の点は、2点A, Bから等しい距離にある}',
          explanation: '問題文で「2点A, Bから等しい距離にある点を作図せよ」と来たら100%これ！',
          exampleLatex: 'AM = BM, \\quad \\text{直線} \\perp AB',
          tips: '作図で使ったコンパスの線は絶対に消しゴムで消さないこと！'
        },
        cautionMistake: {
          wrong: 'コンパスの開き具合を線分ABの長さの半分より短くしてしまう',
          wrongReason: '短すぎると、点Aからの弧と点Bからの弧が交わらなくなってしまいます。',
          correct: '半分より少し長めにコンパスを開く',
          correctReason: '半分より長く開くことで、上下できれいにクロスして交点ができます！'
        },
        quiz: {
          question: '「2つの点Aと点Bから等しい距離にある点」を作図したいとき、描くべき線は？',
          optionA: '線分ABの垂直二等分線',
          optionB: '角の二等分線',
          correctOption: 'A',
          explanation: '2「点」から等しい距離にある点の集まりは、垂直二等分線です！',
          encouragement: 'パーフェクト！問題文のキーワードと作図が見事に結びついています！'
        }
      },
      {
        id: 'ch5-4',
        chapterId: 5,
        lessonNumber: 4,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '基本の作図② 角の二等分線（2辺から等しい距離）',
        target: '頂点からチョン！2つの交点からチョンチョン！角をピッタリ半分に割る作図！',
        keywords: ['角の二等分線', '作図', '2辺から等しい距離', '角を半分にする'],
        step1: {
          stepNum: 1,
          title: '頂点Oに針を刺して両辺に交点を作る',
          instruction: '頂点Oにコンパスの針を刺して円弧を描き、角の2本の腕（辺）との交点P, Qを作ります。',
          mathLatex: 'OP = OQ',
          badge: '腕に印'
        },
        step2: {
          stepNum: 2,
          title: '交点P, Qから同じ幅でチョンチョン',
          instruction: '点Pからシュッ、点Qからシュッと弧を描いて交わらせ、頂点Oからその交点へ線を引きます。',
          mathLatex: '\\angle AOC = \\angle BOC = \\frac{1}{2} \\angle AOB',
          badge: '真ん中を割る'
        },
        formulaModel: {
          title: '角の二等分線の意味',
          templateLatex: '\\text{角の二等分線上の点は、角の2つの「辺」から等しい距離にある}',
          explanation: '問題文で「2つの辺OA, OBから等しい距離にある点」と出たら角の二等分線です。',
          exampleLatex: '\\text{「2点から」} \\to \\text{垂直二等分線}, \\quad \\text{「2辺から」} \\to \\text{角の二等分線}',
          tips: '2「点」か2「辺」か。この1文字で作図の種類を見極めよう！'
        },
        cautionMistake: {
          wrong: '「2辺から等しい距離」なのに垂直二等分線を描いてしまう',
          wrongReason: '2つの「点」なら垂直二等分線ですが、2つの「辺（線）」なら角の二等分線です！',
          correct: '2つの辺から等しい距離は「角の二等分線」',
          correctReason: '辺（直線）からの距離＝角を半分に折る線になります。'
        },
        quiz: {
          question: '「2つの辺 OA と OB から等しい距離にある点」を見つけるには何を作図する？',
          optionA: '∠AOB の二等分線',
          optionB: '線分AB の垂直二等分線',
          correctOption: 'A',
          explanation: '2つの「辺」から等しい距離なので、角の二等分線を作図します！',
          encouragement: '素晴らしい！作図の合言葉「2点＝垂直、2辺＝角」が完璧です！'
        }
      },
      {
        id: 'ch5-5',
        chapterId: 5,
        lessonNumber: 5,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '基本の作図③ 垂線（点Pを通る90°の線）',
        target: '点Pから直線にチョンチョン！左右の点から下へチョンチョンで90°の垂線完成！',
        keywords: ['垂線', '作図', '点Pを通る垂線', '直角90度', '最短距離'],
        step1: {
          stepNum: 1,
          title: '点Pを中心に直線上に2つの交点を作る',
          instruction: '点Pにコンパスの針を刺して、直線と交わるように弧を描き、左右に点A, Bを作ります。',
          mathLatex: 'PA = PB',
          badge: '左右に交点'
        },
        step2: {
          stepNum: 2,
          title: '点A, Bから交差させて点Pと結ぶ',
          instruction: '点Aと点Bから同じ半径で弧を描いて交点を作り、点Pと結べば90°の垂線が引けます！',
          mathLatex: '\\text{直線} \\perp \\text{直線} \\quad (90^\\circ)',
          badge: '90度直角'
        },
        formulaModel: {
          title: '垂線作図の使いどころ',
          templateLatex: '\\text{点Pから直線への最短距離（高さ）を作図するときに使う}',
          explanation: '点Pが直線の上にある場合も、直線の外にある場合も、手順はまったく同じです。',
          exampleLatex: '\\text{三角形の頂点から底辺への「高さ」を作図する}',
          tips: '点Pを中心にした左右対称の2点を作ってから垂直二等分線、と覚えよう！'
        },
        cautionMistake: {
          wrong: '定規の目盛りや直角の角を当ててフリーハンドで垂線を引く',
          wrongReason: 'コンパスの作図跡がない線は、テストで0点になってしまいます。',
          correct: '必ずコンパスで交点を作って引く',
          correctReason: '数学の「作図」はコンパスと目盛りのない定規だけで描くのがルールです。'
        },
        quiz: {
          question: '点Pから直線 L までの「距離」とは、点Pから直線 L に引いた何の長さのこと？',
          optionA: '垂線の長さ（90°に下ろした線の長さ）',
          optionB: '斜めに引いた線の長さ',
          correctOption: 'A',
          explanation: '点と直線の距離は、一番短い「垂直に下ろした線分（垂線）」の長さです！',
          encouragement: '3大作図すべてコンプリート！作図マスターですね！'
        }
      },
      {
        id: 'ch5-6',
        chapterId: 5,
        lessonNumber: 6,
        totalLessonsInChapter: 6,
        chapterTitle: '第5章：平面図形',
        title: '円と扇形の計量（弧の長さと面積）',
        target: '円全体の公式に「360分の中心角」を掛けるだけ！π（パイ）を使って計算しよう！',
        keywords: ['円', '扇形', '円周率', 'パイ', '弧の長さ', '面積', '中心角'],
        simulatorType: 'sectorCalculator',
        step1: {
          stepNum: 1,
          title: '扇形の弧の長さ（円周 × a/360）',
          instruction: '円周の公式 2πr に、ピザの切り分け割合 (中心角 a / 360) をかけ算します。',
          mathLatex: '\\ell = 2\\pi r \\times \\frac{a}{360}',
          badge: '弧の長さ'
        },
        step2: {
          stepNum: 2,
          title: '扇形の面積（円の面積 × a/360）',
          instruction: '円の面積の公式 πr² に、同じくピザの割合 (中心角 a / 360) をかけ算します。',
          mathLatex: 'S = \\pi r^2 \\times \\frac{a}{360} \\quad \\left(= \\frac{1}{2}\\ell r\\right)',
          badge: '扇形の面積'
        },
        formulaModel: {
          title: '円と扇形の公式セット',
          templateLatex: '\\text{円周} = 2\\pi r, \\quad \\text{円の面積} = \\pi r^2, \\quad \\text{扇形はすべて} \\times \\frac{a}{360}',
          explanation: '半径 r = 6cm, 中心角 a = 60° なら、60/360 = 1/6 を円全体にかけるだけ。',
          exampleLatex: '\\ell = 2\\pi \\times 6 \\times \\frac{1}{6} = 2\\pi \\text{ cm}, \\quad S = \\pi \\times 6^2 \\times \\frac{1}{6} = 6\\pi \\text{ cm}^2',
          tips: '中学生は 3.14 ではなくギリシャ文字の「π」を数字の後ろにつけます！'
        },
        cautionMistake: {
          wrong: '半径 4cm の円の面積を π × 4 × 2 = 8π と計算してしまう',
          wrongReason: '半径を2倍してしまっています。面積は「半径の2乗（r²）」です！',
          correct: 'π × 4² = 16π cm²',
          correctReason: '円の面積は 半径×半径×π なので 4×4×π = 16π になります。'
        },
        quiz: {
          question: '半径 6cm、中心角 180°（半円）のおうぎ形の面積は？',
          optionA: '18π cm²',
          optionB: '36π cm²',
          correctOption: 'A',
          explanation: '円全体の面積は π×6² = 36π。中心角180°は半分（180/360 = 1/2）なので 18π cm² です！',
          encouragement: '平面図形編を完全マスター！扇形の計算も完璧です！'
        }
      }
    ]
  },
  {
    id: 6,
    title: '第6章：空間図形',
    shortTitle: '空間図形',
    themeColor: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-800',
      accent: 'bg-teal-600',
      badgeBg: 'bg-teal-100 text-teal-800',
    },
    totalLessons: 6,
    lessons: [
      {
        id: 'ch6-1',
        chapterId: 6,
        lessonNumber: 1,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '立体の種類（柱体・錐体・正多面体5種）',
        target: '柱（上下が同じ形）と錐（上がとがった形）を見分けよう！正多面体はこの世に5種類だけ！',
        keywords: ['角柱', '円柱', '角錐', '円錐', '正多面体', '面・頂点・辺の数'],
        step1: {
          stepNum: 1,
          title: '柱体と錐体の違い',
          instruction: '底面が2つあってまっすぐなのが柱体（角柱・円柱）。てっぺんが点にとがっているのが錐体（角錐・円錐）です。',
          mathLatex: '\\text{柱体 (角柱・円柱)} \\iff \\text{錐体 (角錐・円錐)}',
          badge: '柱と錐'
        },
        step2: {
          stepNum: 2,
          title: '正多面体は世界に5種類だけ！',
          instruction: 'すべての面が合同な正多角形で、頂点に集まる面の数が等しい立体は「正四・六・八・十二・二十面体」の5つだけです。',
          mathLatex: '\\text{正四・正六・正八・正十二・正二十面体}',
          badge: '5つだけ'
        },
        formulaModel: {
          title: '正多面体早見表',
          templateLatex: '\\begin{cases} \\text{正三角形の面} & \\to \\text{正四, 正八, 正二十面体} \\\\ \\text{正方形の面} & \\to \\text{正六面体（サイコロ）} \\\\ \\text{正五角形の面} & \\to \\text{正十二面体} \\end{cases}',
          explanation: '面の形が何角形か（正三角形・正方形・正五角形）を覚えるのがテスト対策の急所！',
          exampleLatex: '\\text{正六面体の面} = 6, \\text{頂点} = 8, \\text{辺} = 12',
          tips: 'サッカーボールのもとになっているのが正二十面体や正十二面体です！'
        },
        cautionMistake: {
          wrong: '「正十面体」があると思ってしまう',
          wrongReason: '正多面体は 4, 6, 8, 12, 20 の「5種類だけ」しか存在しません。',
          correct: '正多面体は 4, 6, 8, 12, 20面体の5種のみ',
          correctReason: '数学的に立体がピッタリ閉じるのはこの5つだけと証明されています！'
        },
        quiz: {
          question: 'サイコロの形（立方体）は、正多面体の中で何面体と呼ばれる？',
          optionA: '正六面体',
          optionB: '正八面体',
          correctOption: 'A',
          explanation: 'サイコロは正方形の面が6つあるので「正六面体」です！',
          encouragement: '立体の分類クリア！正多面体マスターへの第一歩です！'
        }
      },
      {
        id: 'ch6-2',
        chapterId: 6,
        lessonNumber: 2,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '空間の位置関係とねじれの位置（消去法）',
        target: '平行でもなく、交わりもしない！消去法で「ねじれの位置」をあぶり出そう！',
        keywords: ['ねじれの位置', '空間の位置関係', '平行', '交わる', '消去法', '直方体'],
        simulatorType: 'cubeSkewLines',
        step1: {
          stepNum: 1,
          title: '同じ平面上にある線（平行・交わる）を消す',
          instruction: '基準の辺と「交わっている辺」と「平行な辺」を全部バツをつけて消去します。',
          mathLatex: '\\text{交わる線} \\quad (\\times), \\quad \\text{平行な線} \\quad (\\times)',
          badge: 'ダメな線を消す'
        },
        step2: {
          stepNum: 2,
          title: '残った辺がすべて「ねじれの位置」',
          instruction: '同じ平面に乗っかることができない、すれ違いの線だけが生き残ります！',
          mathLatex: '\\text{ねじれの位置} = \\text{平行でない} \\text{ かつ } \\text{交わらない}',
          badge: '消去法で確定'
        },
        formulaModel: {
          title: 'ねじれの位置判定公式',
          templateLatex: '\\text{ねじれの位置} = \\text{全辺} - (\\text{交わる辺}) - (\\text{平行な辺})',
          explanation: '立体空間特有の関係です。高架道路と下をくぐる道路のような立体交差の関係！',
          exampleLatex: '\\text{直方体の1つの辺に対して、ねじれの位置にある辺は必ず4本ある}',
          tips: '直接探そうとせず、「交わる線と平行な線を消す」消去法が一番安全です！'
        },
        cautionMistake: {
          wrong: '交わっていないからといって、平行な辺をねじれの位置に含めてしまう',
          wrongReason: '平行な線は同じ平面上に乗ってしまうので、ねじれの位置ではありません！',
          correct: '平行な線も除外する',
          correctReason: 'ねじれの位置は「平行でもなく、交わりもしない」すれ違いの線です。'
        },
        quiz: {
          question: '直方体の辺ABに対して、「平行でなく、交わりもしない」辺の関係を何という？',
          optionA: 'ねじれの位置',
          optionB: '垂直の位置',
          correctOption: 'A',
          explanation: '平行でもなく交わりもしない、空間特有のすれ違いの関係を「ねじれの位置」といいます！',
          encouragement: '難関「ねじれの位置」を完璧に攻略！素晴らしい空間把握力です！'
        }
      },
      {
        id: 'ch6-3',
        chapterId: 6,
        lessonNumber: 3,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '立体の展開図と回転体',
        target: '立体をハサミで切り開くと何ができる？軸を中心にぐるっと回すと何の立体になる？',
        keywords: ['展開図', '回転体', '回転の軸', '母線', '円錐の展開図', '側面はおうぎ形'],
        step1: {
          stepNum: 1,
          title: '円錐の展開図はおうぎ形と円',
          instruction: '円錐を開くと、側面は「おうぎ形」、底面は「円」になります。おうぎ形の弧の長さ＝底面の円周！',
          mathLatex: '\\text{おうぎ形の弧の長さ} = \\text{底面の円周 } 2\\pi r',
          badge: '開くと扇形'
        },
        step2: {
          stepNum: 2,
          title: '平面図形を1回転させると回転体',
          instruction: '長方形を回すと円柱、直角三角形を回すと円錐、半円を回すと球が生まれます。',
          mathLatex: '\\text{長方形} \\to \\text{円柱}, \\quad \\text{直角三角形} \\to \\text{円錐}, \\quad \\text{半円} \\to \\text{球}',
          badge: 'ぐるっと1回転'
        },
        formulaModel: {
          title: '円錐の展開図の必勝公式',
          templateLatex: '\\frac{\\text{中心角 } a}{360} = \\frac{\\text{底面の半径 } r}{\\text{母線の長さ } R}',
          explanation: '母線 R と底面の半径 r がわかれば、展開図のおうぎ形の中心角が一発で出ます！',
          exampleLatex: 'R = 12\\text{cm}, r = 3\\text{cm} \\implies \\frac{a}{360} = \\frac{3}{12} = \\frac{1}{4} \\implies a = 90^\\circ',
          tips: '「中心角 ＝ 360 × (半径/母線)」はテストで時間を半分にできる魔法の式！'
        },
        cautionMistake: {
          wrong: '円柱を軸に垂直な平面で切った切り口を「長方形」と答えてしまう',
          wrongReason: '垂直に輪切りにすると切り口は「円」になります。',
          correct: '切り口は「円」',
          correctReason: '回転体を回転の軸に垂直に切った切り口は、すべて必ず円になります。'
        },
        quiz: {
          question: '直角三角形を、直角をはさむ1つの辺を軸にして1回転させるとできる立体は？',
          optionA: '円錐',
          optionB: '円柱',
          correctOption: 'A',
          explanation: 'てっぺんがとがった「円錐」ができます！長方形を回すと円柱になります。',
          encouragement: '素晴らしい！回転体のイメージがクッキリ浮かんでいます！'
        }
      },
      {
        id: 'ch6-4',
        chapterId: 6,
        lessonNumber: 4,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '立体の表面積（底面積×2 ＋ 側面積）',
        target: '表面積は「皮（展開図）の合計面積」！底面の枚数に気をつけよう！',
        keywords: ['表面積', '底面積', '側面積', '柱体の表面積', '円柱', '円錐の表面積'],
        step1: {
          stepNum: 1,
          title: '柱体は 底面積 × 2 ＋ 側面積',
          instruction: '角柱や円柱は上下に底面が2枚あります。底面積を2倍して側面積と足します。',
          mathLatex: '\\text{柱体の表面積} = (\\text{底面積} \\times 2) + \\text{側面積}',
          badge: '底面が2枚'
        },
        step2: {
          stepNum: 2,
          title: '錐体は 底面積 ＋ 側面積',
          instruction: '角錐や円錐は底面が1枚しかありません。底面積に側面積を足すだけでOK！',
          mathLatex: '\\text{錐体の表面積} = \\text{底面積} + \\text{側面積}',
          badge: '底面が1枚'
        },
        formulaModel: {
          title: '円錐の側面積の神公式',
          templateLatex: '\\text{円錐の側面積} = \\pi \\times (\\text{母線 } R) \\times (\\text{半径 } r)',
          explanation: '円錐の側面のおうぎ形は、π R r だけで一瞬で計算できます！',
          exampleLatex: '\\text{母線 } 8\\text{cm}, \\text{半径 } 3\\text{cm} \\implies \\text{側面積} = \\pi \\times 8 \\times 3 = 24\\pi \\text{ cm}^2',
          tips: '表面積を求めるときは、これに底面積 (π×3² = 9π) を足して 33π cm² とします！'
        },
        cautionMistake: {
          wrong: '円柱の表面積を計算するとき、底面積を1回しか足さない',
          wrongReason: '円柱には「上」と「下」の2枚の底面があります！',
          correct: '底面積を「2倍」して足す',
          correctReason: '柱体（角柱・円柱）は必ず底面積×2を側面積に足します。'
        },
        quiz: {
          question: '底面積が 10 cm²、側面積が 40 cm² の「三角柱」の表面積は？',
          optionA: '60 cm²',
          optionB: '50 cm²',
          correctOption: 'A',
          explanation: '柱体なので底面が上下に2枚！ 10 × 2 + 40 = 20 + 40 = 60 cm² です！',
          encouragement: '底面2枚のトラップを軽々クリア！素晴らしい！'
        }
      },
      {
        id: 'ch6-5',
        chapterId: 6,
        lessonNumber: 5,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '立体の体積（柱体 Sh と 錐体 1/3Sh）',
        target: '柱体は「底面積×高さ」！とがった錐体はスッキリ「3分の1」をかける！',
        keywords: ['体積', '柱体の体積', '錐体の体積', 'V=Sh', 'V=1/3Sh', '3分の1'],
        simulatorType: 'solidVolume',
        step1: {
          stepNum: 1,
          title: '柱体の体積 V = Sh',
          instruction: '底面積 S をそのまま高さ h の分だけ積み上げるので、シンプルにかけ算します。',
          mathLatex: 'V = Sh \\quad (\\text{底面積 } \\times \\text{ 高さ})',
          badge: '柱体'
        },
        step2: {
          stepNum: 2,
          title: '錐体の体積 V = 1/3 Sh',
          instruction: 'とがった角錐や円錐は、同じ底面・高さの柱体のちょうど 1/3 の量になります！',
          mathLatex: 'V = \\frac{1}{3}Sh \\quad \\left(\\text{底面積 } \\times \\text{ 高さ } \\times \\frac{1}{3}\\right)',
          badge: 'とがったら1/3'
        },
        formulaModel: {
          title: '体積公式セット',
          templateLatex: '\\text{柱体: } V = Sh, \\quad \\text{錐体: } V = \\frac{1}{3}Sh',
          explanation: '円柱なら V = πr²h、円錐なら V = 1/3 πr²h になります。',
          exampleLatex: '\\text{底面の半径 } 3\\text{cm}, \\text{高さ } 4\\text{cm の円錐} \\implies V = \\frac{1}{3} \\times (\\pi \\times 3^2) \\times 4 = 12\\pi \\text{ cm}^3',
          tips: '錐体に水を入れると、ピッタリ3杯で同じ大きさの柱体がいっぱいになります！'
        },
        cautionMistake: {
          wrong: '円錐の体積を求めるときに「1/3」をかけ忘れてしまう',
          wrongReason: '1/3 を忘れると、円柱（柱体）の体積になってしまいます！',
          correct: 'とがっている立体（錐体）は必ず「× 1/3」する',
          correctReason: 'てっぺんがとがった錐体は必ず1/3がつきます。'
        },
        quiz: {
          question: '底面積が 15 cm²、高さが 6 cm の「四角錐」の体積は？',
          optionA: '30 cm³',
          optionB: '90 cm³',
          correctOption: 'A',
          explanation: '錐体（とがっている）なので 1/3 をかけます！ 15 × 6 × 1/3 = 30 cm³ です！',
          encouragement: '1/3 を忘れずしっかり使えました！体積計算バッチリ！'
        }
      },
      {
        id: 'ch6-6',
        chapterId: 6,
        lessonNumber: 6,
        totalLessonsInChapter: 6,
        chapterTitle: '第6章：空間図形',
        title: '球の表面積（4πr²）と体積（4/3πr³）',
        target: '表面積は「心配あるある(4πr²)」、体積は「身の上に心配あーるの参乗(4/3πr³)」で呪文暗記！',
        keywords: ['球の表面積', '球の体積', '4πr^2', '4/3πr^3', '語呂合わせ', '半径の3乗'],
        simulatorType: 'sphereFormula',
        step1: {
          stepNum: 1,
          title: '球の表面積 S = 4πr²',
          instruction: '「心配あるある（4 π r²）」と覚えよう！半径 r を2乗して 4π をかけます。',
          mathLatex: 'S = 4\\pi r^2 \\quad (\\text{語呂: 心配あるある})',
          badge: '表面積(2乗)'
        },
        step2: {
          stepNum: 2,
          title: '球の体積 V = 4/3 πr³',
          instruction: '「身の上に心配あーるの参乗（3分の4 π r³）」と覚えよう！体積なので r を3回かけます。',
          mathLatex: 'V = \\frac{4}{3}\\pi r^3 \\quad (\\text{語呂: 身の上に心配ある参乗})',
          badge: '体積(3乗)'
        },
        formulaModel: {
          title: '球の公式と語呂合わせ',
          templateLatex: '\\text{表面積: } S = 4\\pi r^2, \\quad \\text{体積: } V = \\frac{4}{3}\\pi r^3',
          explanation: '面積は「長さの2乗(cm²)」、体積は「長さの3乗(cm³)」と指数の数も一致します。',
          exampleLatex: 'r = 3\\text{cm の球} \\implies V = \\frac{4}{3}\\pi \\times 3^3 = \\frac{4}{3}\\pi \\times 27 = 36\\pi \\text{ cm}^3',
          tips: '半球のときは、切った平らな面の面積 (πr²) を表面積に足すのを忘れないように！'
        },
        cautionMistake: {
          wrong: '球の体積で 3乗すべきところを 2乗にしてしまう',
          wrongReason: '体積は3次元（たて×横×高さ）なので、半径を3回（r³）かけます！',
          correct: '体積は r³（3乗）、表面積は r²（2乗）',
          correctReason: '単位を見ても cm²（2乗＝面積）、cm³（3乗＝体積）となっています。'
        },
        quiz: {
          question: '半径 3cm の球の表面積は？（S = 4πr²）',
          optionA: '36π cm²',
          optionB: '12π cm²',
          correctOption: 'A',
          explanation: 'S = 4 × π × 3² = 4 × π × 9 = 36π cm² です！',
          encouragement: '空間図形編を完全制覇！球の公式もバッチリですね！'
        }
      }
    ]
  },
  {
    id: 7,
    title: '第7章：データの分析と活用',
    shortTitle: 'データの分析',
    themeColor: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-800',
      accent: 'bg-violet-600',
      badgeBg: 'bg-violet-100 text-violet-800',
    },
    totalLessons: 4,
    lessons: [
      {
        id: 'ch7-1',
        chapterId: 7,
        lessonNumber: 1,
        totalLessonsInChapter: 4,
        chapterTitle: '第7章：データの分析と活用',
        title: '度数分布表とヒストグラム（階級・度数・階級値）',
        target: 'データを区切って表に整理！「階級値」は区間のど真ん中の平均値！',
        keywords: ['度数分布表', 'ヒストグラム', '柱状グラフ', '階級', '度数', '階級値', '階級の幅'],
        simulatorType: 'histogramViewer',
        step1: {
          stepNum: 1,
          title: '階級と度数を読み取る',
          instruction: '区切られた区間を「階級（例: 10m以上〜20m未満）」、そこに入った人数を「度数」といいます。',
          mathLatex: '\\text{階級の幅} = 20 - 10 = 10\\text{m}',
          badge: '表の見方'
        },
        step2: {
          stepNum: 2,
          title: '階級値は真ん中の値',
          instruction: '階級の両端を足して2で割った「真ん中の数」が階級値です。10〜20なら (10+20)÷2 = 15！',
          mathLatex: '\\text{階級値} = \\frac{\\text{階級の以上の数} + \\text{未満の数}}{2}',
          badge: 'ど真ん中'
        },
        formulaModel: {
          title: '度数分布の専門用語まとめ',
          templateLatex: '\\begin{cases} \\text{度数}: \\text{データの個数（人数）} \\\\ \\text{階級の幅}: \\text{区間の広さ} \\\\ \\text{階級値}: \\text{区間の真ん中の値} \\end{cases}',
          explanation: 'ヒストグラム（柱状グラフ）の各柱のてっぺんの真ん中を結ぶと「度数折れ線」になります。',
          exampleLatex: '30\\text{kg以上 } 40\\text{kg未満の階級値} = \\frac{30 + 40}{2} = 35\\text{kg}',
          tips: 'ヒストグラムの横軸は階級、縦軸は度数を表します！'
        },
        cautionMistake: {
          wrong: '「20m以上30m未満」の階級に、ピッタリ30mのデータを含めてしまう',
          wrongReason: '「未満」はその数を含みません。30mは次の「30m以上40m未満」に入ります。',
          correct: '30mは次の階級に入る',
          correctReason: '「以上」は入る、「未満」は入らない、としっかり線引きします！'
        },
        quiz: {
          question: '「40点以上 60点未満」の階級値（ど真ん中の値）はいくつ？',
          optionA: '50点',
          optionB: '20点',
          correctOption: 'A',
          explanation: '両端を足して2で割るので、(40 + 60) ÷ 2 = 50点 です！',
          encouragement: '階級値の意味バッチリ！データの整理が得意になりました！'
        }
      },
      {
        id: 'ch7-2',
        chapterId: 7,
        lessonNumber: 2,
        totalLessonsInChapter: 4,
        chapterTitle: '第7章：データの分析と活用',
        title: '代表値① 平均値の計算',
        target: '全員の合計を人数で割る！度数分布表では「階級値 × 度数」の合計を使う！',
        keywords: ['代表値', '平均値', '合計÷人数', '仮平均', '度数分布表の平均'],
        step1: {
          stepNum: 1,
          title: '普通の平均値は 合計 ÷ 人数',
          instruction: 'すべてのデータを全部足し合わせて、データの個数（人数）で割り算します。',
          mathLatex: '\\text{平均値} = \\frac{\\text{データの合計}}{\\text{データの総数}}',
          badge: '基本の平均'
        },
        step2: {
          stepNum: 2,
          title: '度数分布表の平均値は (階級値×度数) の合計 ÷ 人数',
          instruction: '各階級の「階級値 × 度数」を計算して全員分の合計を推定し、全体の度数で割ります。',
          mathLatex: '\\text{平均値} = \\frac{\\sum (\\text{階級値} \\times \\text{度数})}{\\text{度数の合計}}',
          badge: '表からの平均'
        },
        formulaModel: {
          title: '度数分布表からの平均値計算テンプレート',
          templateLatex: '\\text{平均値} = \\frac{(\\text{階級値}_1 \\times f_1) + (\\text{階級値}_2 \\times f_2) + \\dots}{\\text{総度数}}',
          explanation: '各階級のデータを「みんな階級値と同じ値だった」とみなして計算します。',
          exampleLatex: '\\text{階級値15が3人, 25が7人} \\implies \\text{合計} = 15\\times 3 + 25\\times 7 = 45 + 175 = 220 \\implies \\frac{220}{10} = 22',
          tips: '電卓なしでも解けるように、筆算の位取りをていねいに揃えよう！'
        },
        cautionMistake: {
          wrong: '度数分布表の平均を求めるとき、階級値だけを足して階級の数で割ってしまう',
          wrongReason: '人数（度数）の重みを無視してしまっています。',
          correct: '必ず「階級値 × 度数」を計算して合計する',
          correctReason: '人数が多い階級の値ほど強く影響するように計算します。'
        },
        quiz: {
          question: '5人のテストの点数が 60点, 70点, 80点, 90点, 100点 のとき、平均値は？',
          optionA: '80点',
          optionB: '75点',
          correctOption: 'A',
          explanation: '合計は 400点。 400 ÷ 5 = 80点 です！真ん中対称なので80点とすぐわかります。',
          encouragement: '正解！平均値の計算もバッチリですね！'
        }
      },
      {
        id: 'ch7-3',
        chapterId: 7,
        lessonNumber: 3,
        totalLessonsInChapter: 4,
        chapterTitle: '第7章：データの分析と活用',
        title: '代表値② 中央値（メジアン）と最頻値（モード）',
        target: '並べてど真ん中が「中央値」、一番人気（度数最大）が「最頻値」！',
        keywords: ['中央値', 'メジアン', '最頻値', 'モード', '代表値の比較', '外れ値'],
        simulatorType: 'meanMedianMode',
        step1: {
          stepNum: 1,
          title: '中央値（メジアン）：小さい順に並べて真ん中',
          instruction: 'データを順番に並べます。人数が偶数のときは「真ん中の2つの平均」を取ります！',
          mathLatex: '1, 3, \\mathbf{5}, 7, 9 \\to 5, \\quad 2, \\mathbf{4, 6}, 8 \\to \\frac{4+6}{2} = 5',
          badge: 'ど真ん中の人'
        },
        step2: {
          stepNum: 2,
          title: '最頻値（モード）：最も多く現れる値',
          instruction: '度数が一番大きい（一番人気の）値です。度数分布表では「度数が最大の階級の階級値」！',
          mathLatex: '\\text{最も度数が大きい階級の「階級値」を答える！}',
          badge: '最多人気'
        },
        formulaModel: {
          title: '3大代表値のちがい',
          templateLatex: '\\begin{cases} \\text{平均値}: & \\text{全員の総和 } \\div \\text{ 人数} \\\\ \\text{中央値(メジアン)}: & \\text{順番に並べてちょうど真ん中の値} \\\\ \\text{最頻値(モード)}: & \\text{一番人数が多い値（一番高い柱）} \\end{cases}',
          explanation: '極端に大きい数字（外れ値）があるときは、平均値よりも中央値のほうが実態に合います。',
          exampleLatex: '\\text{データ: 2, 3, 3, 5, 99} \\implies \\text{最頻値}=3, \\text{中央値}=3, \\text{平均値}=22.4',
          tips: '「最頻値の階級は？」なら階級を、「最頻値は？」なら階級値（数字1つ）を答えよう！'
        },
        cautionMistake: {
          wrong: 'データが6個あるとき、3番目の数字だけを中央値にしてしまう',
          wrongReason: '偶数個のときは、3番目と4番目の「2つの数の平均」を中央値にします！',
          correct: '真ん中2つの平均を計算する',
          correctReason: '偶数だと真ん中に1人だけ残らないので、中央の2つの間を取ります。'
        },
        quiz: {
          question: '靴のサイズで「一番よく売れたサイズ」を仕入れたいとき、最も役立つ代表値はどれ？',
          optionA: '最頻値（モード）',
          optionB: '平均値',
          correctOption: 'A',
          explanation: '一番人気のサイズ（最多の度数）を知りたいので「最頻値（モード）」がピッタリです！',
          encouragement: '代表値の特徴を見事に捉えました！実社会でも役立つ知識です！'
        }
      },
      {
        id: 'ch7-4',
        chapterId: 7,
        lessonNumber: 4,
        totalLessonsInChapter: 4,
        chapterTitle: '第7章：データの分析と活用',
        title: '相対度数とその利用（合計は1）',
        target: '全体の人数が違うグループを比べるなら、割合「その階級の度数 ÷ 全体の度数」を使おう！',
        keywords: ['相対度数', '割合', '度数の合計で割る', '合計は1', '集団の比較'],
        step1: {
          stepNum: 1,
          title: '相対度数 ＝ その階級の度数 ÷ 合計度数',
          instruction: '人数ではなく割合で表します。小数の第2位や第3位まで割り算して求めます。',
          mathLatex: '\\text{相対度数} = \\frac{\\text{その階級の度数}}{\\text{度数の合計}}',
          badge: '割合を出す'
        },
        step2: {
          stepNum: 2,
          title: '全部足すとピッタリ「1.00」になる',
          instruction: '全体の割合なので、すべての階級の相対度数を合計すると必ず 1 になります。',
          mathLatex: '\\text{相対度数の合計} = 1.00',
          badge: '合計は1'
        },
        formulaModel: {
          title: '相対度数の活用法',
          templateLatex: '\\text{人数が違う2つの組（30人のA組と40人のB組）の分布を公平に比較できる}',
          explanation: '例えば5人入っていても、全体が20人なら 5/20 = 0.25、全体が50人なら 5/50 = 0.10 です。',
          exampleLatex: '\\text{度数} 8\\text{人}, \\text{総度数} 40\\text{人} \\implies \\text{相対度数} = \\frac{8}{40} = 0.20',
          tips: '問題に「小数第2位まで四捨五入して求めよ」とあったら第3位まで計算！'
        },
        cautionMistake: {
          wrong: '相対度数の合計欄に「100」と書いてしまう',
          wrongReason: 'パーセント（％）ではなく相対度数（割合）なので、合計は 1 です！',
          correct: '相対度数の合計は「1」または「1.00」',
          correctReason: '100% のことを割合では「1」と表します。'
        },
        quiz: {
          question: '生徒数 50人のクラスで、ある階級に 10人いるとき、その階級の相対度数は？',
          optionA: '0.20',
          optionB: '0.50',
          correctOption: 'A',
          explanation: '10 ÷ 50 = 0.20 です！全体に占める割合が 0.2（20%）だとわかります。',
          encouragement: '祝！中学1年数学 全7章42時間分を完全読破！本当におめでとうございます！'
        }
      }
    ]
  }
];

export const ALL_LESSONS: Lesson[] = CHAPTERS_DATA.flatMap(ch => ch.lessons);

export const getLessonById = (id: string): Lesson | undefined => {
  return ALL_LESSONS.find(l => l.id === id);
};
