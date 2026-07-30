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
    '整理奧爾森林學堂最新開放狀況、樹屋特色、親子玩法、停車交通、推車友善程度與虎頭山半日路線。',
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
    q: '奧爾森林學堂現在有開放嗎？',
    a: '園區採分區施工、分期開放。部分區域與設施可能臨時調整，請以入口及現場圍籬公告為準。',
  },
  {
    q: '需要門票嗎？',
    a: '奧爾森林學堂位於虎頭山公園內，為免費開放的戶外親子空間。',
  },
  {
    q: '適合幾歲的小朋友？',
    a: '以幼兒至國小階段最能享受樹屋與森林探索。低齡孩子需要成人全程陪同，並依現場開放設施評估。',
  },
  {
    q: '可以推嬰兒車嗎？',
    a: '主要動線相對平緩，輕便推車較容易通行；但樹屋入口、局部坡道與施工替代路線可能不完全無障礙。',
  },
  {
    q: '建議停留多久？',
    a: '只逛核心樹屋約 60～90 分鐘；加入孔廟與全齡友善步道約 2 小時；串聯忠烈祠等周邊景點可安排半日。',
  },
  {
    q: '下雨天適合前往嗎？',
    a: '不建議在大雨或雷雨時前往。雨後木棧道、落葉和坡面容易濕滑，兒童活動也會受到限制。',
  },
];
