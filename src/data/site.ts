export type RoutePlan = {
  id: 'quick' | 'family' | 'halfday';
  label: string;
  duration: string;
  audience: string;
  effort: string;
  description: string;
  stops: string[];
  note: string;
};

export const site = {
  name: '奧爾森林學堂',
  domain: 'OwlForestSchool.com',
  url: 'https://owlforestschool.com',
  title: '奧爾森林學堂｜虎頭山親子樹屋、停車與最新開放資訊',
  description:
    '整理奧爾森林學堂最新開放狀況、樹屋與天空步道、親子玩法、停車交通、推車友善與虎頭山半日路線；免門票、適合親子散步。',
  address: '桃園市桃園區公園路42號（虎頭山公園內、孔廟旁）',
  coordinates: { lat: 25.0018144, lng: 121.327567 },
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=25.0018144%2C121.327567',
  status: {
    code: 'partial-open',
    label: '分區施工・分期開放',
    checkedAt: '2026-07-29',
    staleAfterDays: 30,
    summary:
      '虎頭山風景特定區服務設施改造工程進行中，部分動線與遊具可能依現場調整。出發前請留意圍籬與公告。',
    expectedCompletion: '預計 2026 年 12 月 31 日全區完工',
  },
  phone: '+886 3 394 6061',
  plusCode: '282H+P2（桃園市桃園區三元里）',
  mapsShareUrl: 'https://maps.app.goo.gl/DkMT1LgizXtkuL8s7',
  govtTourismUrl: 'https://travel.tycg.gov.tw/zh-tw/travel/attraction/14',
  nearbyLandmarks: ['桃園孔廟', '虎頭山風景特定區'],
  transport: {
    parkingIntro:
      '奧爾森林學堂位於虎頭山公園內、桃園孔廟旁，園區本身沒有獨立停車場，車輛多就近停於孔廟周邊與虎頭山公園停車區，再步行進入。',
    kongMiaoParking: {
      name: '桃園孔廟停車場',
      spaces: '約 30 格（免費／付費混合）',
      distance: '距離奧爾森林學堂入口最近',
      holidayNote: '週末與連假最容易停滿，建議上午 9 點前抵達；滿場時請參考下方替代方案。',
    },
    parkingAlternatives: [
      '孔廟停滿時，可續往虎頭山公園內其他停車區，或周邊路邊收費格位尋找車位。',
      '假日人潮多，改搭大眾運輸或共乘，能省下繞圈找位的時間。',
      '下車後跟著「虎頭山公園」「孔廟」指標步行，約數分鐘即可抵達奧爾森林學堂。',
    ],
    busIntro: '可搭乘公車於虎頭山公園、三聖宮等鄰近站點下車，再步行進入園區。',
    busNote:
      '確切路線、班次與停靠位置會依年度調整，出發前請以桃園市公車動態系統或 Google 地圖即時資訊為準。',
  },
  attractions: {
    intro:
      '奧爾森林學堂以三座與林木共生的活樹屋為核心，沿空中步道串連，適合放慢腳步觀察森林與貓頭鷹的棲息環境。',
    treehouses: [
      {
        id: 'gugu',
        name: '咕咕屋',
        text: '以貓頭鷹（咕咕）為主題的樹屋，外型與林冠融合，是園區最具辨識度的觀察與打卡點，適合帶孩子認識夜行猛禽。',
      },
      {
        id: 'classroom',
        name: '讀樹教室',
        text: '把「樹」當作教材的開放教室，沿木棧道近距離觀察樹皮、根系與附生植物，是親子自然教育的起點。',
      },
      {
        id: 'ark',
        name: '綠野方舟',
        text: '造型如方舟般的樹屋空間，串連林下活動場域，提供遮蔭與停留休息，適合家庭中途歇腳。',
      },
    ],
    skywalk: {
      name: '天空步道',
      text: '架設於林冠層的空中步道，讓遊客在樹梢高度散步，俯看森林層次與林下生態；雨後木面較濕滑，行走請留意。',
    },
    slide: {
      name: '水管溜滑梯',
      text: '以水管為造型的兒童溜滑梯，是園區最受小朋友喜愛的放電設施；建議由家長陪同、依年齡分齡使用，並留意現場開放狀況。',
    },
  },
  nearbyVisit: {
    intro:
      '奧爾森林學堂位處虎頭山公園內，周邊的孔廟、神社與環山步道可串成半日～一日遊，適合安排順遊。',
    items: [
      {
        id: 'taoyuan-temple',
        name: '桃園孔廟',
        text: '鄰近奧爾森林學堂的桃園代表性古蹟與信仰場域，建築與庭園適合散步；前往奧爾森林學堂多就近停於孔廟周邊停車區，詳見交通資訊。',
      },
      {
        id: 'shrine',
        name: '桃園神社（忠烈祠）',
        text: '日治時期留存至今的神社建築群，是桃園少見的歷史地標，可與虎頭山步道一併安排；開放與參觀動線請以現場公告為準。',
      },
      {
        id: 'trail',
        name: '虎頭山環山步道',
        text: '環繞虎頭山公園的步道系統，坡度平緩處適合親子散步與賞景，與奧爾森林學堂同屬一處綠地，可彈性串連安排。',
      },
    ],
  },
  itinerary: {
    intro:
      '想用一天把虎頭山周邊玩透？以下把奧爾森林學堂與鄰近的孔廟、神社、步道、美食串成一條親子一日遊路線，時間彈性、折返容易，適合安排半日～一日遊。',
    steps: [
      {
        time: '09:00',
        title: '奧爾森林學堂 森林探索',
        text: '上午光線柔和、人也少，先逛三座活樹屋（咕咕屋／讀樹教室／綠野方舟）與天空步道，孩子可放電於水管溜滑梯。',
        link: { href: '#treehouses', label: '看樹屋設施' },
      },
      {
        time: '11:30',
        title: '桃園孔廟 散步',
        text: '步行可達的鄰近古蹟，建築與庭園適合放慢腳步；前往時多就近停於孔廟周邊停車區。',
        link: { href: '#nearby', label: '周邊順遊' },
      },
      {
        time: '12:30',
        title: '虎頭山周邊午餐',
        text: '就近補給台灣古早味（擔仔麵、魯肉飯、湯包等），快速吃過再出發。',
        link: { href: '#food', label: '附近吃什麼' },
      },
      {
        time: '14:00',
        title: '桃園神社（忠烈祠）',
        text: '日治時期留存的神社建築群，與虎頭山步道一併安排，歷史與綠意兼具。',
        link: { href: '#nearby', label: '周邊順遊' },
      },
      {
        time: '15:30',
        title: '虎頭山環山步道 收尾',
        text: '坡度平緩處適合親子散步賞景，作為一日遊的舒緩收尾。',
        link: { href: '#nearby', label: '周邊順遊' },
      },
    ],
    note: '各景點開放時間與動線以現場與官方公告為準；出發前可先查看天氣模組與交通資訊。',
  },
  rating: {
    score: 4.4,
    count: 8003,
    category: '城市公園',
    syncedAt: '2026 年 9 月',
  },
  reviewedAt: '2026 年 9 月',
};

export const highlights = [
  {
    title: '三座活樹屋',
    text: '讀樹教室、咕咕屋與綠野方舟穿梭林梢，把自然觀察變成孩子的探險。',
    icon: 'tree',
  },
  {
    title: '貓頭鷹主題',
    text: '「奧爾」取自 Owl 的音譯，園區以貓頭鷹裝飾與森林故事串起遊程。',
    icon: 'owl',
  },
  {
    title: '親子輕旅行',
    text: '免費入園，適合安排 1～2 小時，也能接續孔廟與虎頭山全齡友善步道。',
    icon: 'footprint',
  },
];

export const galleryPhotos = [
  {
    src: '/images/gallery-treehouse-walkway.jpg',
    width: 1200,
    height: 803,
    alt: '陽光下的奧爾森林學堂木造樹屋與空中步道',
    caption: '木造樹屋與空中步道',
    author: '徐月春',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:333,_Taiwan,_%E6%A1%83%E5%9C%92%E5%B8%82%E9%BE%9C%E5%B1%B1%E5%8D%80%E9%BE%9C%E5%B1%B1%E9%87%8C_-_panoramio_(49).jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    src: '/images/gallery-owl-sculpture.jpg',
    width: 1000,
    height: 1500,
    alt: '奧爾森林學堂貓頭鷹雕塑與後方樹屋步道',
    caption: '貓頭鷹雕塑與樹屋',
    author: 'lienyuan lee',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Owl_Forest_School_%E5%A5%A7%E7%88%BE%E6%A3%AE%E6%9E%97%E5%AD%B8%E5%A0%82_-_panoramio_(3).jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    src: '/images/gallery-entrance-sign.jpg',
    width: 1200,
    height: 800,
    alt: '奧爾森林學堂入口標誌、木階梯與貓頭鷹造型',
    caption: '入口標誌與木階梯',
    author: 'lienyuan lee',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Owl_Forest_School_%E5%A5%A7%E7%88%BE%E6%A3%AE%E6%9E%97%E5%AD%B8%E5%A0%82_-_panoramio.jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    src: '/images/gallery-owl-tree.jpg',
    width: 1200,
    height: 800,
    alt: '林間樹幹上的貓頭鷹小屋與貓頭鷹裝置',
    caption: '藏在樹梢的貓頭鷹',
    author: 'lienyuan lee',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:%E5%A5%A7%E7%88%BE%E6%A3%AE%E6%9E%97%E5%AD%B8%E5%A0%82_Owl_Forest_School_-_panoramio.jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    src: '/images/gallery-fubao.jpg',
    width: 1200,
    height: 900,
    alt: '奧爾森林學堂的貓頭鷹吉祥物福寶',
    caption: '貓頭鷹吉祥物「福寶」',
    author: '寺人孟子',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:%E5%A5%A7%E7%88%BE%E6%A3%AE%E6%9E%97%E5%AD%B8%E5%A0%82%E5%90%89%E7%A5%A5%E7%89%A9%EF%BC%8D%E3%80%8C%E7%A6%8F%E5%AF%B6%E3%80%8D.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    src: '/images/gallery-tree-platform.jpg',
    width: 1200,
    height: 900,
    alt: '從下方仰望奧爾森林學堂架高的樹屋平台',
    caption: '林間架高樹屋平台',
    author: 'Foxy Who (^∀^)/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:%E8%99%8E%E9%A0%AD%E5%B1%B1%E5%85%AC%E5%9C%92_%E6%A8%B9%E5%B1%8B_-_panoramio_(2).jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
];

export const nearbyFood = [
  {
    name: '台南故鄉擔仔麵',
    category: '台式小吃',
    image: '/images/food-danzai-noodles.jpg',
    width: 1400,
    height: 933,
    alt: '擺有青蔥與香菜的台式麵食餐點示意',
    description: '擔仔麵、魯肉飯與鴨肉冬粉，適合散步後快速吃一頓台灣古早味。',
    address: '桃園市桃園區成功路三段48之3號',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E6%95%85%E9%84%89%E6%93%94%E4%BB%94%E9%BA%B5%20%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E6%88%90%E5%8A%9F%E8%B7%AF%E4%B8%89%E6%AE%B548%E4%B9%8B3%E8%99%9F',
  },
  {
    name: '鼎藏湯包麵食',
    category: '湯包麵食',
    image: '/images/food-xiaolongbao.jpg',
    width: 1400,
    height: 933,
    alt: '竹蒸籠裡的湯包餐點示意',
    description: '湯包、鍋貼與各式麵食選擇豐富，適合親子家庭一起吃正餐。',
    address: '桃園市桃園區大有路596號1樓',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=%E9%BC%8E%E8%97%8F%E6%B9%AF%E5%8C%85%E9%BA%B5%E9%A3%9F%20%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E5%A4%A7%E6%9C%89%E8%B7%AF596%E8%99%9F1%E6%A8%93',
  },
  {
    name: '大麻鍋物・大有店',
    category: '火鍋',
    image: '/images/food-hotpot.jpg',
    width: 1400,
    height: 933,
    alt: '火鍋肉片、蔬菜與菇類餐點示意',
    description: '多種湯頭搭配蔬菜與肉品，適合想坐下來休息、慢慢用餐的行程。',
    address: '桃園市桃園區大有路575號',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%BA%BB%E9%8D%8B%E7%89%A9%E5%A4%A7%E6%9C%89%E5%BA%97%20%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E5%A4%A7%E6%9C%89%E8%B7%AF575%E8%99%9F',
  },
];

export const quickFacts = [
  ['門票', '免費入園'],
  ['建議停留', '1～2 小時'],
  ['適合對象', '親子・幼兒・輕量散步'],
  ['推車體驗', '主動線較友善'],
  ['最佳時段', '上午或午後 3 點後'],
  ['雨後提醒', '木棧道與落葉較濕滑'],
];

export const routes: RoutePlan[] = [
  {
    id: 'quick',
    label: '輕鬆走',
    duration: '約 60 分鐘',
    audience: '幼兒家庭・短暫停留',
    effort: '低',
    description: '把時間留給核心樹屋與林下空間，路線單純、折返容易。',
    stops: ['入口與貓頭鷹標誌', '咕咕屋與空中步道', '林下休息區', '原路返回'],
    note: '施工期間請依現場開放動線調整，不跨越圍籬。',
  },
  {
    id: 'family',
    label: '親子玩',
    duration: '約 2 小時',
    audience: '想散步也想放電的家庭',
    effort: '低～中',
    description: '先探索樹屋，再延伸至相鄰的孔廟與友善步道，節奏最剛好。',
    stops: ['奧爾森林學堂', '樹屋與森林遊戲區', '虎頭山全齡友善步道', '桃園孔廟'],
    note: '孔廟就在園區旁，適合安排短暫停留與補充飲水。',
  },
  {
    id: 'halfday',
    label: '半日遊',
    duration: '約 4 小時',
    audience: '喜歡自然與文化散步',
    effort: '中',
    description: '把奧爾森林學堂當作起點，串聯虎頭山周邊的綠地與文化景點。',
    stops: ['奧爾森林學堂', '桃園孔廟', '全齡友善步道', '經國梅園', '忠烈祠暨神社文化園區'],
    note: '部分步道可能因工程繞行，請預留彈性並留意天候。',
  },
];

export const checklist = [
  ['防蚊用品', '林下與潮濕區域蚊蟲較多。'],
  ['飲用水', '夏季濕熱，園區散步仍需補充水分。'],
  ['防滑鞋', '木棧道、落葉與坡道路面雨後容易濕滑。'],
  ['替換衣物', '孩子玩耍後容易沾到泥土或汗濕。'],
  ['輕便推車', '主動線較友善，但施工繞行可能有坡度。'],
  ['垃圾袋', '帶走自己的垃圾，也不要餵食野生動物。'],
];

export const faqs = [
  {
    id: 'location',
    q: '奧爾森林學堂在哪裡？',
    a: `奧爾森林學堂位於${site.address}，鄰近桃園孔廟與虎頭山風景特定區，可經由 Google 地圖導航前往。`,
  },
  {
    id: 'open-now',
    q: '奧爾森林學堂現在有開放嗎？',
    a: '園區採分區施工、分期開放。部分區域與設施可能臨時調整，請以入口及現場圍籬公告為準。',
  },
  {
    id: 'ticket',
    q: '需要門票嗎？',
    a: '奧爾森林學堂位於虎頭山公園內，為免費開放的戶外親子空間，一般散步無需購票。',
  },
  {
    id: 'hours',
    q: '開放時間是幾點到幾點？',
    a: '園區為戶外空間，一般於日間開放；確切開放時段、設施開閉以現場公告與虎頭山公園管理為準。建議白天前往，並避開大雨、雷雨時段（可參考頁面天氣模組）。',
  },
  {
    id: 'age',
    q: '適合幾歲的小朋友？',
    a: '以幼兒至國小階段最能享受樹屋與森林探索。低齡孩子需要成人全程陪同，並依現場開放設施評估。',
  },
  {
    id: 'stroller',
    q: '可以推嬰兒車嗎？',
    a: '主要動線相對平緩，輕便推車較容易通行；但樹屋入口、局部坡道與施工替代路線可能不完全無障礙。',
  },
  {
    id: 'picnic',
    q: '可以在園區野餐嗎？',
    a: '園區以散步與自然觀察為主，是否開放野餐請以現場規範與公告為準；若攜帶食物，請務必帶走垃圾、愛護環境。',
  },
  {
    id: 'duration',
    q: '建議停留多久？',
    a: '只逛核心樹屋約 60～90 分鐘；加入孔廟與全齡友善步道約 2 小時；串聯忠烈祠等周邊景點可安排半日。',
  },
  {
    id: 'rain',
    q: '下雨天適合前往嗎？',
    a: '不建議在大雨或雷雨時前往。雨後木棧道、落葉和坡面容易濕滑，兒童活動也會受到限制。',
  },
  {
    id: 'booking',
    q: '需要預約或購票嗎？',
    a: '奧爾森林學堂為免費開放的戶外空間，一般散步無需購票或預約；團體環境教育活動請依主辦單位公告辦理。',
  },
  {
    id: 'facilities',
    q: '園區內有餐飲與洗手間嗎？',
    a: '園區以輕食與飲料販售為主，並設有公共廁所；正餐與補給建議安排在周邊市區，詳見訪客服務與周邊設施。',
  },
  {
    id: 'daytrip',
    q: '可以安排桃園親子一日遊嗎？',
    a: '可以。奧爾森林學堂位處虎頭山公園內，鄰近桃園孔廟、桃園神社（忠烈祠）與環山步道，可串成半日～一日遊；頁面「桃園親子景點一日遊」提供示範時間表與周邊順遊建議。',
  },
];
