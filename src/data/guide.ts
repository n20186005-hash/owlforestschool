// 訪客服務與周邊設施（類型中立，不推薦特定商戶）
export type VisitorService = {
  emoji: string;
  type: string;
  summary: string;
  tip: string;
};

export const visitorServices: VisitorService[] = [
  {
    emoji: '🚻',
    type: '盥洗設施（WC）',
    summary: '入口服務台與主要步道節點設有公共廁所，部分為無障礙與親子友善設計。',
    tip: '旺季與假日人潮較多，建議錯峰使用，並隨身攜帶備用紙巾。',
  },
  {
    emoji: '🅿️',
    type: '停車',
    summary: '鄰近虎頭山公園與孔廟周邊設有公共停車空間，以平面與路邊停車為主。',
    tip: '週末與連假易滿位，上午 9 點前抵達較容易停車。',
  },
  {
    emoji: '🍜',
    type: '餐飲',
    summary: '園區以輕食與飲料販售為主；周邊聚落有台式小吃、麵食、湯包、火鍋與早午餐等類型。',
    tip: '本指南不推薦特定店家，請依個人需求、預算與當日營業狀況自行選擇。',
  },
  {
    emoji: '🛏️',
    type: '住宿',
    summary: '桃園市區、高鐵桃園站與機場周邊提供民宿、商旅、飯店等多種旅宿類型。',
    tip: '若安排全日或跨日行程，可就近選擇交通便利的住宿類型。',
  },
  {
    emoji: '🛒',
    type: '商超與補給',
    summary: '市區與幹道沿線有便利商店、超市與藥妝等類型，可補給飲水、零食與防曬用品。',
    tip: '山區日照與蚊蟲較多，出發前備妥飲水、防曬與防蚊用品。',
  },
  {
    emoji: '⛽',
    type: '加油與充電',
    summary: '周邊幹道設有加油站；電動車可參考公開充電地圖尋找鄰近充電站。',
    tip: '建議出發前確認油量或電量，山區補給點較市區稀疏。',
  },
];

// 按人群定制的遊覽方案
export type AudienceRoute = {
  audience: string;
  duration: string;
  pace: string;
  stops: string[];
  focus: string;
};

export const audienceRoutes: AudienceRoute[] = [
  {
    audience: '親子家庭',
    duration: '半日（約 2–3 小時）',
    pace: '慢・多停留',
    stops: ['入口貓頭鷹標誌', '咕咕屋與空中步道', '林下遊戲區', '桃園孔廟'],
    focus: '以樹屋探索與短距離散步為主，預留休息與補水點，讓孩子自己發現森林。',
  },
  {
    audience: '攝影與自然觀察',
    duration: '半日–全日',
    pace: '彈性',
    stops: ['清晨薄霧中的樹屋', '林間光斑步道', '埤塘與濕地邊緣', '黃昏前返回取景'],
    focus: '建議清晨或黃昏光線柔和時拍攝，保持距離、不干擾野生動物。',
  },
  {
    audience: '低體力 / 無障礙',
    duration: '1–2 小時',
    pace: '平緩',
    stops: ['入口廣場', '主動線平緩段', '休憩座椅區', '原路折返'],
    focus: '以主動線與休憩點為主，避開坡道與施工替代路線，量力調整行程。',
  },
];

// 季度遊覽策略（依桃園／北台灣長期氣候特徵整理，非即時預報）
export type Season = {
  season: string;
  weather: string;
  water: string;
  wildlife: string;
  advice: string;
  recommended: boolean;
};

export const seasons: Season[] = [
  {
    season: '春季（3–5 月）',
    weather: '氣溫回暖，鋒面過境帶來短暫陣雨，日夜溫差明顯。',
    water: '春雨過後溪流水位略增，木棧道與落葉較易濕滑。',
    wildlife: '蛙類與昆蟲開始活躍，鳥類遷徙接近尾聲。',
    advice: '避開鋒面降雨時段，隨身攜帶輕便雨具與防滑鞋。',
    recommended: false,
  },
  {
    season: '夏季（6–8 月）',
    weather: '高溫高濕，5–6 月為梅雨季，7–9 月進入颱風季。',
    water: '午後雷陣雨頻繁，留意局部積水、落石與步道濕滑。',
    wildlife: '夜間兩棲類與蛾類活躍，蛇類出沒機會增加。',
    advice: '避開午後雷陣雨與颱風警報；加強防曬、防蚊與補水。',
    recommended: false,
  },
  {
    season: '秋季（9–11 月）',
    weather: '東北季風尚未轉強，天氣穩定、涼爽舒適。',
    water: '降雨減少、步道乾爽，能見度與行走品質最佳。',
    wildlife: '猛禽與留鳥活動活躍，適合生態觀察。',
    advice: '全年最舒適的造訪季節，推薦安排戶外行程。',
    recommended: true,
  },
  {
    season: '冬季（12–2 月）',
    weather: '東北季風強、濕冷多雨，山區常起霧。',
    water: '雲霧多、能見度低，濕氣重使路面更滑。',
    wildlife: '進入候鳥季，水鳥與猛禽有較多觀察機會。',
    advice: '著保暖防風衣物，留意濃霧與濕滑，放慢步調。',
    recommended: false,
  },
];

// 科普與訪客責任
export const conservation: string[] = [
  '不餵食野生動物，也不觸碰、捕捉昆蟲與兩棲類。',
  '不採集植物、不刻畫樹木與設施，讓自然留在原地。',
  '垃圾不落地，離開時帶走自己的廢棄物。',
  '保持安靜，降低對鳥類與其他動物的干擾。',
  '依現場指示動線行走，避開施工與生態敏感區域。',
];

// 背景、生態與生態寓言（用於豐富「關於」內容）
export const about = {
  intro:
    '虎頭山是桃園市區難得的都市森林綠地。奧爾森林學堂以「把森林變成教室」為出發點，把環境教育融入樹屋、空中步道與林下遊戲，讓親子在玩耍中認識自然。',
  ecology:
    '園區以貓頭鷹為主題並非偶然——貓頭鷹是夜行性猛禽，也是森林生態是否健康的指示物種。認識牠們，等於認識整座森林的食物鏈、棲地與生物多樣性。',
  storyLabel: '生態寓言',
  story:
    '在許多文化的森林故事裡，貓頭鷹被視為夜裡守護森林的「守夜人」。我們用這個生態寓言，帶孩子理解：每一個物種都有自己的角色，守護棲地，就是守護這雙「看顧森林的眼睛」。',
};
