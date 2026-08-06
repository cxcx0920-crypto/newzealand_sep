// NZ 2026 行程資料
const DAYS = [
  // ── 南島 ──────────────────────────────────────────────────
  {
    id: 1, island: 'south', date: '9/19', dateISO: '2026-09-19',
    label: 'Day 1', title: '基督城', subtitle: '抵達整備・超市大採買',
    photo: 'christchurch',
    coords: [-43.5320, 172.6362],
    route: { text: '機場 → Riccarton 超市 → 別墅', km: 15, ok: true, note: '取車後直接採買，完全順路' },
    timeline: [
      { time: '12:30', text: '抵達基督城機場・辦理取車' },
      { time: '14:00', text: 'New World / Pak\'nSave Riccarton 大採買' },
      { time: '16:00', text: '入住別墅整頓' },
    ],
    attractions: [
      { icon: '🌸', name: 'Hagley Park 植物園', desc: '春天滿開水仙花與櫻花，9月絕美', hours: '06:00–22:00', price: '免費', lat: -43.5317, lng: 172.6268 },
      { icon: '⛪', name: '基督城大教堂廣場', desc: '重建後的新城地標，感受城市脈動', hours: '全天', price: '免費', lat: -43.5305, lng: 172.6366 },
      { icon: '🚡', name: '基督城纜車 Mt. Cavendish', desc: '俯瞰整個基督城與班克斯半島', hours: '10:00–17:00', price: 'NZD $32', lat: -43.5667, lng: 172.6833 },
    ],
    meals: {
      breakfast: [],
      lunch: [
        { name: 'Unknown Chapter Coffee', type: '咖啡廳輕食', price: 'NZD $10–25', hours: '07:00–16:00', note: '' },
        { name: 'Manu Restaurant', type: '亞洲健康料理', price: 'NZD $20–35', hours: '11:00–21:00', note: '' },
        { name: 'Soul Quarter', type: '美式/歐陸', price: 'NZD $20–35', hours: '11:00–22:00', note: '' },
      ],
      dinner: [
        { name: 'Inati', type: '當代紐西蘭料理', price: 'NZD $120–150', hours: '17:30–22:00', note: '需訂位' },
        { name: 'Chillingworth Road', type: '5–9道套餐', price: 'NZD $100–180', hours: '18:00–22:00', note: '需訂位' },
        { name: 'Rascal', type: '當代酒館料理', price: 'NZD $40–70', hours: '17:00–22:00', note: '' },
      ],
    },
  },
  {
    id: 2, island: 'south', date: '9/20', dateISO: '2026-09-20',
    label: 'Day 2', title: '蒂卡波湖', subtitle: 'Lake Tekapo・星空前奏',
    photo: 'lake+tekapo+new+zealand',
    coords: [-44.0047, 170.4775],
    route: { text: '基督城 → Fairlie → Lake Tekapo (SH79)', km: 220, ok: true, note: '沿途經 Fairlie 順路吃派，路況良好' },
    timeline: [
      { time: '08:30', text: '出發，沿 SH79 南下' },
      { time: '10:30', text: '🥧 Fairlie Bakehouse 停留（必吃鹿肉派）' },
      { time: '12:30', text: '抵達 Lake Tekapo，午餐' },
      { time: '14:00', text: '好牧羊人教堂 Church of the Good Shepherd' },
      { time: '15:00', text: '湖邊散步・拍照' },
      { time: '21:30', text: '⭐ 變色龍觀星導覽（已預訂）' },
    ],
    attractions: [
      { icon: '⛪', name: '好牧羊人教堂', desc: '湖岸經典石頭教堂，拍照熱點，週末人多早去', hours: '09:00–17:00', price: '免費', lat: -44.0047, lng: 170.4832 },
      { icon: '🔭', name: 'Mt. John 天文台 / Earth & Sky', desc: '黑暗天空保護區，觀星世界頂級，需提前預訂', hours: '觀星約 21:00起', price: 'NZD $165', lat: -44.0079, lng: 170.4641 },
      { icon: '🚶', name: 'Lake Alexandrina 步道', desc: '2小時環形，同時看兩個湖，南阿爾卑斯山背景', hours: '全天', price: '免費', lat: -44.0600, lng: 170.4600 },
    ],
    meals: {
      breakfast: [
        { name: '別墅自煮', type: '（採買食材）', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'The Greedy Cow', type: 'NZ咖啡廳燒烤', price: 'NZD $15–35', hours: '08:00–20:00', note: '份量大' },
        { name: 'Mackenzies Bar & Grill', type: '全日NZ燒烤', price: 'NZD $20–45', hours: '11:00–21:00', note: '' },
        { name: 'Dark Sky Diner', type: '湖畔全日餐廳', price: 'NZD $20–40', hours: '08:00–21:00', note: '景色佳' },
      ],
      dinner: [
        { name: 'Kohan Japanese Restaurant', type: '日式料理', price: 'NZD $25–50', hours: '11:30–21:00', note: '觀星前吃飽' },
        { name: 'Blue Lake Eatery & Bar', type: '當代NZ料理', price: 'NZD $30–55', hours: '17:00–22:00', note: '湖景晚餐' },
        { name: 'Fishtail Restaurant', type: '尼泊爾/印度融合', price: 'NZD $20–40', hours: '17:00–21:00', note: '' },
      ],
    },
  },
  {
    id: 3, island: 'south', date: '9/21', dateISO: '2026-09-21',
    label: 'Day 3', title: '蒂卡波湖', subtitle: '悠閒湖日・藍色牛奶湖',
    photo: 'tekapo+lake+church+new+zealand',
    coords: [-44.0047, 170.4775],
    route: { text: '全天留守 Tekapo', km: 0, ok: true, note: '休息日，步行可達所有景點' },
    timeline: [
      { time: '09:00', text: 'Mt. John 山頂咖啡廳（土耳其藍湖景）' },
      { time: '11:00', text: '好牧羊人教堂周邊拍照（最佳光線時段）' },
      { time: '14:00', text: 'Lake Alexandrina 步道 或 溫泉放鬆' },
      { time: '18:00', text: '湖邊等待夕陽' },
    ],
    attractions: [
      { icon: '☕', name: 'Mt. John 山頂咖啡廳', desc: '開車或步行上山，360度麥肯齊盆地全景，咖啡配絕景', hours: '10:00–16:00', price: '免費（飲料另計）', lat: -44.0079, lng: 170.4641 },
      { icon: '♨️', name: 'Tekapo 溫泉 Hot Pools', desc: '露天地熱溫泉，有湖景與山景（請確認9月是否開放）', hours: '10:00–21:00', price: 'NZD $30', lat: -44.0081, lng: 170.4813 },
      { icon: '⛰️', name: 'Cowan\'s Hill 步道', desc: 'Tekapo鎮邊緣小山丘，1小時，可俯瞰整個湖區', hours: '全天', price: '免費', lat: -44.0012, lng: 170.4770 },
    ],
    meals: {
      breakfast: [
        { name: 'Mt. John 山頂咖啡廳', type: '景觀咖啡廳', price: 'NZD $15–30', hours: '10:00–16:00', note: '視野絕佳' },
        { name: 'The Greedy Cow', type: '咖啡廳早午餐', price: 'NZD $15–30', hours: '08:00–20:00', note: '07:30開門' },
        { name: '別墅自煮', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'The Greedy Cow', type: 'NZ咖啡廳', price: 'NZD $15–35', hours: '08:00–20:00', note: '' },
        { name: 'Dark Sky Diner', type: '湖畔輕食', price: 'NZD $15–30', hours: '08:00–21:00', note: '' },
        { name: '別墅自煮野餐', type: '', price: '－', hours: '－', note: '' },
      ],
      dinner: [
        { name: 'Blue Lake Eatery & Bar', type: '當代NZ料理', price: 'NZD $30–55', hours: '17:00–22:00', note: '湖景夜晚' },
        { name: 'Kohan Japanese Restaurant', type: '日式料理', price: 'NZD $25–50', hours: '11:30–21:00', note: '' },
        { name: 'Mackenzies Bar & Grill', type: '烤肉餐廳', price: 'NZD $20–45', hours: '11:00–21:00', note: '' },
      ],
    },
  },
  {
    id: 4, island: 'south', date: '9/22', dateISO: '2026-09-22',
    label: 'Day 4', title: '庫克山', subtitle: 'Aoraki Mount Cook・冰河之巔',
    photo: 'mount+cook+new+zealand+glacier',
    coords: [-43.7350, 170.0978],
    route: { text: 'Tekapo → Pukaki湖畔 → Mt Cook (SH8→80)', km: 105, ok: true, note: '沿Pukaki湖的藍色公路極美，必停拍照' },
    timeline: [
      { time: '07:30', text: '出發，沿 Pukaki 湖岸行駛（停留拍照）' },
      { time: '08:45', text: '🚁 直升機冰川健行 Heli-Hike（已預訂，3小時）' },
      { time: '12:00', text: '午餐' },
      { time: '14:00', text: 'Hooker Valley Track（建議走）' },
      { time: '17:00', text: 'Tasman 冰川觀景台' },
    ],
    warnings: ['Alpine Restaurant 午市 10/1 起開放，9/22 午餐以 Sir Ed Hillary Cafe 為主'],
    attractions: [
      { icon: '🥾', name: 'Hooker Valley Track', desc: 'NZ最經典步道，3座吊橋通往冰河湖，可見冰山，來回3–4小時', hours: '全天', price: '免費', lat: -43.7380, lng: 170.0960 },
      { icon: '🏔️', name: 'Tasman 冰川觀景台', desc: '30分鐘步道，俯瞰南半球最長冰川，接Blue Lakes延伸步道', hours: '全天', price: '免費', lat: -43.6800, lng: 170.1750 },
      { icon: 'ℹ️', name: 'DOC 遊客中心', desc: '免費展示庫克山地質、高山植物與歷史，健行前值得進去', hours: '08:30–17:00', price: '免費', lat: -43.7357, lng: 170.0975 },
    ],
    meals: {
      breakfast: [
        { name: 'Alpine Restaurant 自助早餐', type: '國際自助餐', price: 'NZD $45', hours: '07:00–10:00', note: '官方確認' },
        { name: 'Sir Edmund Hillary Cafe', type: '輕食咖啡', price: 'NZD $10–25', hours: '08:00–17:00', note: '' },
        { name: 'Tekapo 出發前吃完', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Sir Edmund Hillary Cafe & Bar', type: '輕食/三明治', price: 'NZD $10–25', hours: '08:00–17:00', note: '9月午市最可靠' },
        { name: '自備野餐', type: '（步道上享用）', price: '－', hours: '－', note: '' },
        { name: 'Alpine Restaurant（確認是否有午市）', type: '自助餐', price: 'NZD $65', hours: '待確認', note: '需致電確認' },
      ],
      dinner: [
        { name: 'Panorama Room', type: '現代NZ精緻料理', price: 'NZD $125', hours: '18:00–21:00', note: '需訂位，15歲以上' },
        { name: 'Alpine Restaurant 自助晚餐', type: '國際自助餐', price: 'NZD $89', hours: '18:00–21:30', note: '最多選擇' },
        { name: 'Sir Edmund Hillary Cafe 輕食', type: '輕食', price: 'NZD $10–25', hours: '08:00–17:00', note: '' },
      ],
    },
  },
  {
    id: 5, island: 'south', date: '9/23', dateISO: '2026-09-23',
    label: 'Day 5', title: '瓦納卡', subtitle: 'Wanaka・跨越山嶺',
    photo: 'wanaka+lake+new+zealand',
    coords: [-44.6993, 169.1318],
    route: { text: 'Mt Cook → Omarama → Lindis Pass (SH8) → Wanaka', km: 200, ok: true, note: 'Lindis Pass高原公路壯闊，途中停 High Country Salmon 農場' },
    timeline: [
      { time: '09:00', text: '退房出發' },
      { time: '11:00', text: '🐟 High Country Salmon 鮭魚農場（午餐+餵魚體驗）' },
      { time: '13:30', text: '抵達 Wanaka，入住別墅' },
      { time: '15:00', text: 'Wanaka 市區 + 湖邊散步' },
      { time: '16:30', text: '🏔️ Mount Iron Track（替代 Roys Peak）' },
    ],
    warnings: ['Roys Peak 8/1–10/31 封閉（羊羔季），請改走 Mount Iron Track'],
    attractions: [
      { icon: '🏔️', name: 'Mount Iron Track', desc: 'Wanaka鎮邊環形步道，1.5小時，360度全景，9月開放', hours: '全天', price: '免費', lat: -44.7077, lng: 169.1636 },
      { icon: '🌳', name: 'Wanaka 孤獨樹（That Wanaka Tree）', desc: '湖中標誌性柳樹，早晨光線最美', hours: '全天', price: '免費', lat: -44.6974, lng: 169.1285 },
      { icon: '🧩', name: 'Puzzling World', desc: '視錯覺藝術館+大型迷宮，全家大小都適合', hours: '08:30–17:30', price: 'NZD $18', lat: -44.6890, lng: 169.1644 },
    ],
    meals: {
      breakfast: [
        { name: '別墅自煮', type: '', price: '－', hours: '－', note: '' },
        { name: 'Sir Edmund Hillary Cafe (Hermitage)', type: '', price: 'NZD $10–25', hours: '08:00–17:00', note: '出發前' },
      ],
      lunch: [
        { name: 'High Country Salmon 農場餐廳', type: '鮭魚料理', price: 'NZD $30–50', hours: '10:00–16:00', note: '順路必停' },
        { name: 'Charlie Brown Crepes (Wanaka)', type: '可麗餅餐車', price: 'NZD $10–20', hours: '09:00–16:00', note: '' },
        { name: 'Wanaka Gourmet Kitchen', type: '慢烤羊肉', price: 'NZD $30–50', hours: '11:00–21:00', note: '' },
      ],
      dinner: [
        { name: 'Kika', type: 'tapas 分享小盤', price: 'NZD $20–50', hours: '12:00–22:00', note: '需訂位' },
        { name: 'Cinema Paradiso', type: '披薩+電影體驗', price: 'NZD $20–40', hours: '17:00–21:00', note: '特色首選' },
        { name: 'Bistro Gentil', type: '法式精緻料理', price: 'NZD $60–100', hours: '18:00–21:30', note: '山景浪漫' },
      ],
    },
  },
  {
    id: 6, island: 'south', date: '9/24', dateISO: '2026-09-24',
    label: 'Day 6', title: '皇后鎮', subtitle: 'Queenstown・湖畔漫活',
    photo: 'queenstown+new+zealand+lake',
    coords: [-45.0312, 168.6626],
    route: { text: 'Wanaka → Cardrona (SH89) → 皇后鎮', km: 80, ok: true, note: 'Cardrona山路壯麗，或走Cromwell葡萄酒莊路線' },
    timeline: [
      { time: '07:00', text: '清晨拍孤獨樹（光線最佳）' },
      { time: '09:00', text: 'Puzzling World（若前一天未去）' },
      { time: '11:00', text: '出發前往皇后鎮' },
      { time: '12:30', text: '抵達皇后鎮，午餐' },
      { time: '14:00', text: '皇后鎮碼頭、市區逛逛' },
    ],
    attractions: [
      { icon: '🌿', name: '皇后鎮花園 Queenstown Gardens', desc: '湖邊免費公園，飛盤高爾夫、玫瑰花園，春天極美', hours: '全天', price: '免費', lat: -45.0337, lng: 168.6600 },
      { icon: '🏘️', name: 'Arrowtown 箭鎮', desc: '20分鐘車程，淘金時代古老小鎮，華人礦工遺址', hours: '全天', price: '免費', lat: -44.9399, lng: 168.8288 },
      { icon: '🍷', name: 'Gibbston Valley 酒莊區', desc: '30分鐘車程，中奧塔哥黑皮諾葡萄酒產地，多家試飲', hours: '10:00–17:00', price: '試飲費用另計', lat: -45.0265, lng: 168.8780 },
    ],
    meals: {
      breakfast: [
        { name: '別墅自煮', type: '', price: '－', hours: '－', note: '' },
        { name: 'Charlie Brown Crepes', type: '可麗餅早餐', price: 'NZD $10–20', hours: '09:00–16:00', note: '' },
      ],
      lunch: [
        { name: 'Fergbaker', type: 'NZ招牌手工派', price: 'NZD $6–10', hours: '06:00–17:00', note: '平價必試' },
        { name: 'Bespoke Kitchen', type: '健康全日早午餐', price: 'NZD $15–30', hours: '07:00–15:00', note: '' },
        { name: 'Erik\'s Fish & Chips', type: '現炸魚薯', price: 'NZD $10–20', hours: '11:00–21:00', note: '' },
      ],
      dinner: [
        { name: 'Rata', type: '現代NZ精緻料理', price: 'NZD $120–180', hours: '12:00–22:00', note: '需訂位' },
        { name: 'Amisfield Winery & Bistro', type: '在地食材+葡萄酒', price: 'NZD $80–130', hours: '12:00–16:00', note: '僅午餐，需訂位' },
        { name: 'The Bunker', type: '野味料理+調酒', price: 'NZD $70–120', hours: '17:00–23:00', note: '隱密酒吧' },
      ],
    },
  },
  {
    id: 7, island: 'south', date: '9/25', dateISO: '2026-09-25',
    label: 'Day 7', title: '皇后鎮', subtitle: 'Deer Park・纜車・滑板車',
    photo: 'queenstown+skyline+gondola',
    coords: [-45.0312, 168.6626],
    route: { text: '全天皇后鎮市區', km: 0, ok: true, note: '留守，市區內移動' },
    timeline: [
      { time: '09:00', text: '🦌 Deer Park Heights（12人座車入園，餵鹿與犛牛）' },
      { time: '12:00', text: '午餐' },
      { time: '14:00', text: '🚡 Skyline 纜車 + Luge 滑板車' },
      { time: '18:00', text: '皇后鎮湖邊夕陽' },
    ],
    attractions: [
      { icon: '🦌', name: 'Deer Park Heights', desc: '開12人座車入園，近距離餵食鹿、犛牛，俯瞰絕美湖景', hours: '08:00–17:00', price: 'NZD $10/人', lat: -45.0549, lng: 168.7191 },
      { icon: '🚡', name: 'Skyline Gondola + Luge', desc: '纜車上山後玩滑板車，可吃山頂自助餐（NZD $69含纜車）', hours: '10:00–22:00', price: 'NZD $32起', lat: -45.0199, lng: 168.6607 },
      { icon: '💎', name: 'Kawarau Gorge 高空彈跳橋', desc: '世界第一個商業高空彈跳地點，觀看免費', hours: '09:00–17:00', price: '觀看免費', lat: -45.0133, lng: 168.8218 },
    ],
    meals: {
      breakfast: [
        { name: 'Bespoke Kitchen', type: '健康早午餐', price: 'NZD $15–30', hours: '07:00–15:00', note: '' },
        { name: 'Fergbaker', type: '現烤派+咖啡', price: 'NZD $8–15', hours: '06:00–17:00', note: '' },
        { name: '別墅自煮', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Skyline 山頂自助餐', type: '（含纜車）', price: 'NZD $69', hours: '12:00–14:30', note: '' },
        { name: 'Fergbaker', type: '快速方便', price: 'NZD $8–15', hours: '06:00–17:00', note: '' },
        { name: 'Erik\'s Fish & Chips', type: '輕食', price: 'NZD $10–20', hours: '11:00–21:00', note: '' },
      ],
      dinner: [
        { name: 'Amisfield Winery & Bistro', type: '主廚發辦菜單', price: 'NZD $80–130', hours: '12:00–16:00', note: '需訂位' },
        { name: 'The Bunker', type: '野味料理隱密酒吧', price: 'NZD $70–120', hours: '17:00–23:00', note: '' },
        { name: 'True South Dining Room', type: '得獎精緻料理', price: 'NZD $150+', hours: '18:00–22:00', note: '需訂位' },
      ],
    },
  },
  {
    id: 8, island: 'south', date: '9/26', dateISO: '2026-09-26',
    label: 'Day 8', title: '米佛峽灣', subtitle: 'Milford Sound・峽灣一日遊',
    photo: 'milford+sound+new+zealand+fiord',
    coords: [-44.6413, 167.8975],
    route: { text: '皇后鎮出發大巴 → Te Anau → Milford Sound', km: 290, ok: true, note: '大巴包辦，不用自駕，峽灣公路路況複雜讓司機來' },
    timeline: [
      { time: '07:20', text: '出發大巴（已預訂）' },
      { time: '11:00', text: 'Mirror Lakes 鏡湖停靠拍照' },
      { time: '12:00', text: '抵達峽灣，搭船看瀑布' },
      { time: '14:00', text: '返程，沿途 Homer Tunnel' },
      { time: '20:00', text: '返回皇后鎮' },
    ],
    attractions: [
      { icon: '🏞️', name: 'Mirror Lakes 鏡湖', desc: '大巴途中停靠，山嶒完美倒影，免費，約10分鐘', hours: '全天', price: '免費', lat: -44.9760, lng: 168.1320 },
      { icon: '🌊', name: 'Milford Sound 峽灣船遊', desc: 'Stirling Falls & Bowen Falls，船上可見海豚海豹', hours: '07:30–17:00', price: '含大巴', lat: -44.6413, lng: 167.8975 },
      { icon: '🚇', name: 'Homer Tunnel 穿山隧道', desc: '1.2km穿越山脈，出口即是峽灣，地形震撼', hours: '全天', price: '免費', lat: -44.7630, lng: 168.0160 },
    ],
    meals: {
      breakfast: [
        { name: 'Fergbaker 外帶', type: '派+咖啡', price: 'NZD $8–15', hours: '06:00–17:00', note: '出發前' },
        { name: '別墅自煮便當', type: '', price: '－', hours: '－', note: '' },
        { name: 'Bespoke Kitchen 快速早餐', type: '', price: 'NZD $15–25', hours: '07:00–15:00', note: '' },
      ],
      lunch: [
        { name: '船上餐廳', type: '', price: 'NZD $25–40', hours: '船上供應', note: '' },
        { name: '自備便當', type: '', price: '－', hours: '－', note: '' },
        { name: 'Te Anau 鎮咖啡廳', type: '（來回途中）', price: 'NZD $15–25', hours: '08:00–17:00', note: '' },
      ],
      dinner: [
        { name: 'Rata', type: '精緻NZ料理', price: 'NZD $120–180', hours: '12:00–22:00', note: '犒賞自己，需訂位' },
        { name: 'The Bunker', type: '野味酒吧', price: 'NZD $70–120', hours: '17:00–23:00', note: '' },
        { name: 'Bespoke Kitchen 輕食晚餐', type: '', price: 'NZD $20–35', hours: '07:00–15:00', note: '需確認晚餐是否供應' },
      ],
    },
  },
  {
    id: 9, island: 'south', date: '9/27', dateISO: '2026-09-27',
    label: 'Day 9', title: '奧馬魯', subtitle: 'Oamaru・企鵝歸巢',
    photo: 'oamaru+victorian+new+zealand',
    coords: [-45.0966, 170.9714],
    route: { text: '皇后鎮 → Cromwell → Oamaru (SH8) → 基督城 (SH1)', km: 470, ok: true, note: '奧馬魯完全在回程路上，企鵝看完再返基督城' },
    timeline: [
      { time: '08:00', text: '退房出發' },
      { time: '12:00', text: '抵達奧馬魯，午餐' },
      { time: '13:30', text: 'Victorian Precinct 維多利亞遺產區散步' },
      { time: '14:30', text: 'Steampunk HQ + Whitestone Cheese Factory' },
      { time: '17:00', text: '🐧 藍企鵝歸巢觀賞（~NZD $45，日落前30分鐘入場）' },
      { time: '19:30', text: '出發返回基督城（車程3小時）' },
      { time: '22:30', text: '抵達基督城酒店' },
    ],
    attractions: [
      { icon: '🐧', name: 'Oamaru 藍企鵝保護區', desc: '白天 10:00–16:00，傍晚觀察日落前30分鐘入場，禁用閃光燈', hours: '10:00–16:00 / 傍晚觀賞', price: 'NZD $45（晚間）', lat: -45.1027, lng: 170.9673 },
      { icon: '⚙️', name: 'Steampunk HQ', desc: '維多利亞倉庫內的蒸汽龐克藝術裝置，超適合拍照', hours: '10:00–17:00', price: 'NZD $10', lat: -45.1009, lng: 170.9638 },
      { icon: '🧀', name: 'Whitestone Cheese Factory', desc: '現場製作參觀+品嚐，Waitaki Valley 在地牛奶', hours: '09:00–17:00', price: 'NZD $15', lat: -45.0985, lng: 170.9717 },
    ],
    meals: {
      breakfast: [
        { name: '別墅打包自煮', type: '', price: '－', hours: '－', note: '' },
        { name: 'Fergbaker 外帶', type: '', price: 'NZD $8–15', hours: '06:00–17:00', note: '' },
      ],
      lunch: [
        { name: 'Harbour Street Bakery', type: '手工派/麵包', price: 'NZD $5–15', hours: '07:00–15:00', note: '傳說最好吃的派' },
        { name: 'Cucina', type: '義式/南美料理', price: 'NZD $30–55', hours: '11:30–21:00', note: '' },
        { name: 'Scott\'s Brewing Co.', type: '精釀啤酒+披薩', price: 'NZD $20–40', hours: '11:00–21:00', note: '' },
      ],
      dinner: [
        { name: 'Riverstone Kitchen', type: '當代歐式料理', price: 'NZD $50–80', hours: '09:00–16:00', note: 'SH1旁，回程前吃，需訂位' },
        { name: 'Cucina', type: '義式料理', price: 'NZD $30–55', hours: '11:30–21:00', note: '' },
        { name: 'Whitestone Cheese 起司拼盤', type: '起司+酒', price: 'NZD $20–40', hours: '09:00–17:00', note: '' },
      ],
    },
  },
  {
    id: 10, island: 'south', date: '9/28', dateISO: '2026-09-28',
    label: 'Day 10', title: '基督城離境', subtitle: '南島終點・飛往奧克蘭',
    photo: 'christchurch+city+centre',
    coords: [-43.5320, 172.6362],
    route: { text: '市區 → 基督城機場 → 奧克蘭', km: 20, ok: true, note: '還車後採買伴手禮，午前離境' },
    timeline: [
      { time: '上午', text: '還車・採買伴手禮' },
      { time: '中午', text: '機場離境（基督城 → 奧克蘭）' },
      { time: '13:25', text: '抵達奧克蘭，取北島車，北島開始！' },
    ],
    attractions: [
      { icon: '🛍️', name: 'Riccarton 市場', desc: '週末市集，NZ在地產品、食物、手工藝品', hours: '週六日 09:00–13:00', price: '免費入場', lat: -43.5310, lng: 172.5994 },
      { icon: '🌺', name: '植物園 Botanic Gardens（最後一眼）', desc: '春天最後的基督城綠肺，步行或租腳踏車', hours: '06:00–22:00', price: '免費', lat: -43.5317, lng: 172.6268 },
    ],
    meals: {
      breakfast: [
        { name: 'Unknown Chapter Coffee', type: '咖啡廳早午餐', price: 'NZD $10–25', hours: '07:00–16:00', note: '' },
        { name: '酒店早餐', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Manu Restaurant', type: '亞洲健康料理', price: 'NZD $20–35', hours: '11:00–21:00', note: '' },
        { name: 'Soul Quarter', type: '輕鬆美式', price: 'NZD $20–35', hours: '11:00–22:00', note: '' },
        { name: '機場餐廳', type: '', price: '－', hours: '－', note: '' },
      ],
      dinner: [],
    },
  },

  // ── 北島 ──────────────────────────────────────────────────
  {
    id: 11, island: 'north', date: '9/28', dateISO: '2026-09-28',
    label: 'Day 1N', title: '奧克蘭', subtitle: 'Auckland・北島出發',
    photo: 'auckland+viaduct+harbour+night',
    coords: [-36.8485, 174.7633],
    route: { text: '奧克蘭機場 → 市區', km: 25, ok: true, note: '機場到市區約45分鐘' },
    timeline: [
      { time: '13:25', text: '抵達奧克蘭，取車' },
      { time: '15:00', text: '入住市區，輕裝出發' },
      { time: '16:00', text: 'Viaduct Harbour 遊艇港區散步' },
      { time: '傍晚', text: 'Mission Bay 海灘夕陽' },
    ],
    attractions: [
      { icon: '⛵', name: 'Viaduct Harbour 遊艇港', desc: '餐廳、酒吧林立，夕陽很美，奧克蘭最熱鬧海濱', hours: '全天', price: '免費', lat: -36.8436, lng: 174.7653 },
      { icon: '🏖️', name: 'Mission Bay 海灘', desc: '市區最近海灘，噴水池廣場，散步放鬆', hours: '全天', price: '免費', lat: -36.8559, lng: 174.8227 },
      { icon: '⛴️', name: 'Devonport 德文港', desc: '渡輪12分鐘，維多利亞海濱小鎮+North Head砲台', hours: '全天', price: 'NZD $16（渡輪）', lat: -36.8300, lng: 174.7980 },
    ],
    meals: {
      breakfast: [],
      lunch: [],
      dinner: [
        { name: 'Depot Eatery & Oyster Bar', type: 'NZ海鮮分享盤', price: 'NZD $50–80', hours: '週一-五07:00–21:00 / 週六11:00–21:30', note: '無訂位，可能等候' },
        { name: 'Alma', type: '西班牙小盤料理', price: 'NZD $50–75', hours: '12:00–22:00', note: '' },
        { name: 'Ahi', type: '火烤NZ料理', price: 'NZD $150+', hours: '17:30–22:00', note: 'Viaduct精緻晚餐，需訂位' },
      ],
    },
  },
  {
    id: 12, island: 'north', date: '9/29', dateISO: '2026-09-29',
    label: 'Day 2N', title: '哈比村', subtitle: 'Hobbiton・魔戒電影場景',
    photo: 'hobbiton+movie+set+new+zealand',
    coords: [-37.8578, 175.6824],
    route: { text: '奧克蘭 → Matamata (SH1/SH27) → 返回', km: 200, ok: true, note: '大巴06:00出發，不需自駕' },
    timeline: [
      { time: '06:00', text: '出發哈比村大巴（已預訂）' },
      { time: '09:00', text: '抵達 The Shire\'s Rest，開始導覽（2.5小時）' },
      { time: '12:00', text: 'The Green Dragon Inn 午餐+霍比特啤酒' },
      { time: '14:00', text: '返回奧克蘭' },
      { time: '17:00', text: '抵達奧克蘭，自由活動' },
    ],
    attractions: [
      { icon: '🧙', name: 'Hobbiton Movie Set', desc: '每日導覽，強烈建議提前預訂，行程2.5小時', hours: '09:00–17:30', price: '含大巴', lat: -37.8578, lng: 175.6824 },
      { icon: '🌊', name: 'Waiheke Island 懷黑克島（返回後）', desc: '渡輪35分鐘，NZ最佳葡萄酒小島，Mudbrick酒莊景色超美', hours: '渡輪 06:00–23:00', price: 'NZD $38（渡輪）', lat: -36.7803, lng: 175.0904 },
      { icon: '🌋', name: 'North Head Historic Reserve', desc: 'Devonport二戰砲台遺址+火山錐，奧克蘭港全景', hours: '全天', price: '免費', lat: -36.8294, lng: 174.7997 },
    ],
    meals: {
      breakfast: [
        { name: '酒店早餐或外帶', type: '', price: '－', hours: '－', note: '出發前' },
        { name: 'Eden Noodles', type: '中式手拉麵', price: 'NZD $10–20', hours: '11:00–21:00', note: '' },
      ],
      lunch: [
        { name: 'The Green Dragon Inn（哈比村園區內）', type: '霍比特啤酒+輕食', price: 'NZD $25–40', hours: '導覽結束後', note: '' },
        { name: 'Matamata 鎮咖啡廳', type: '', price: 'NZD $15–25', hours: '08:00–16:00', note: '' },
      ],
      dinner: [
        { name: 'Alma', type: '西班牙料理', price: 'NZD $50–75', hours: '12:00–22:00', note: '' },
        { name: 'Gemmayze Street', type: '黎巴嫩分享料理', price: 'NZD $40–70', hours: '17:00–22:00', note: '' },
        { name: 'Pici', type: '自製義大利麵', price: 'NZD $40–70', hours: '17:00–22:00', note: '' },
      ],
    },
  },
  {
    id: 13, island: 'north', date: '9/30', dateISO: '2026-09-30',
    label: 'Day 3N', title: '懷托摩', subtitle: 'Waitomo・螢火蟲洞',
    photo: 'waitomo+glowworm+caves+new+zealand',
    coords: [-38.2614, 175.1058],
    route: { text: '奧克蘭 → Waitomo (SH1→SH3) → 返回', km: 200, ok: true, note: '大巴13:30出發，上午奧克蘭自由活動' },
    timeline: [
      { time: '上午', text: '奧克蘭自由活動（Sky Tower / 博物館）' },
      { time: '13:30', text: '出發懷托摩螢火蟲洞導覽（已預訂）' },
      { time: '15:00', text: '黑水漂流穿越鐘乳石洞' },
      { time: '18:30', text: '回程' },
    ],
    attractions: [
      { icon: '✨', name: 'Waitomo Glowworm Caves', desc: '鐘乳石洞中數千隻螢火蟲，平日09:00–17:30，週末09:30起', hours: '09:00–17:30', price: '含大巴', lat: -38.2614, lng: 175.1058 },
      { icon: '🗼', name: 'Sky Tower 天空塔', desc: '328m高，奧克蘭360度全景，上午自由時間', hours: '09:00–22:30', price: 'NZD $32', lat: -36.8485, lng: 174.7621 },
      { icon: '🏛️', name: '奧克蘭戰爭紀念博物館', desc: '毛利文化+二戰展覽，世界級免費（NZ公民）', hours: '10:00–17:00', price: 'NZD $28（遊客）', lat: -36.8601, lng: 174.7763 },
    ],
    meals: {
      breakfast: [
        { name: 'Depot Eatery 早午餐', type: '', price: 'NZD $30–50', hours: '07:00–21:00', note: '' },
        { name: 'Eden Noodles', type: '快速便宜', price: 'NZD $10–20', hours: '11:00–21:00', note: '' },
        { name: '酒店早餐', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Gemmayze Street', type: '黎巴嫩料理', price: 'NZD $40–70', hours: '17:00–22:00', note: '出發前' },
        { name: 'Pici', type: '義大利麵', price: 'NZD $40–70', hours: '17:00–22:00', note: '' },
        { name: 'Alma 午餐', type: '', price: 'NZD $40–60', hours: '12:00–22:00', note: '' },
      ],
      dinner: [
        { name: 'Metita', type: '太平洋島嶼精緻料理', price: 'NZD $90–130', hours: '17:30–22:00', note: '需訂位' },
        { name: 'Depot Eatery', type: '海鮮分享盤', price: 'NZD $50–80', hours: '07:00–21:00', note: '' },
        { name: 'East Restaurant', type: '蔬食亞洲料理', price: 'NZD $45–70', hours: '17:00–21:30', note: '' },
      ],
    },
  },
  {
    id: 14, island: 'north', date: '10/1', dateISO: '2026-10-01',
    label: 'Day 4N', title: 'Hamilton → Tauranga', subtitle: '花園城市・藍色泉水',
    photo: 'hamilton+gardens+new+zealand',
    coords: [-37.7870, 175.2793],
    route: { text: '奧克蘭 → Hamilton (SH1) → Putaruru Blue Spring → Tauranga (SH26/SH29)', km: 180, ok: true, note: '完全順路：Hamilton Gardens → Blue Spring → Tauranga依序排列' },
    timeline: [
      { time: '08:30', text: '出發' },
      { time: '10:00', text: '🌸 Hamilton Gardens（世界級主題花園，免費）' },
      { time: '12:00', text: 'Hamilton 午餐' },
      { time: '14:00', text: '💧 Putaruru Blue Spring（Te Waihou步道）' },
      { time: '16:30', text: '抵達 Tauranga' },
    ],
    attractions: [
      { icon: '🌸', name: 'Hamilton Gardens', desc: '世界級主題庭園，中日義毛利等主題花園，主庭10:00–17:00', hours: '主題庭 10:00–17:00 / 外圍 06:15–21:00', price: '主題庭需購票', lat: -37.8053, lng: 175.3019 },
      { icon: '💧', name: 'Putaruru Blue Spring', desc: '全球最清澈淡水泉，湛藍泉水，Te Waihou步道來回1.5小時', hours: '全天', price: '免費', lat: -38.0564, lng: 175.7850 },
      { icon: '⛰️', name: 'Mauao（Mount Maunganui）', desc: '抵達Tauranga後傍晚上山，火山錐環形步道，360度海景', hours: '全天', price: '免費', lat: -37.6361, lng: 176.1855 },
    ],
    meals: {
      breakfast: [
        { name: '奧克蘭酒店早餐', type: '', price: '－', hours: '－', note: '' },
        { name: '路上咖啡廳', type: '', price: 'NZD $10–20', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Good George Brewing', type: '精釀啤酒+漢堡/披薩', price: 'NZD $25–45', hours: '11:00–22:00', note: '旅途餐最輕鬆' },
        { name: 'Palate Restaurant', type: '精緻NZ料理', price: 'NZD $70–120', hours: '12:00–14:30', note: '正式午餐' },
        { name: 'Gothenburg', type: '當代歐式', price: 'NZD $50–80', hours: '12:00–21:00', note: '' },
      ],
      dinner: [
        { name: 'Clarence Bistro', type: '國際料理+在地食材', price: 'NZD $30–50', hours: '17:00–21:00', note: '' },
        { name: 'Latitude 37（Mt Maunganui）', type: '海鮮/NZ料理', price: 'NZD $30–50', hours: '11:30–21:00', note: '' },
        { name: 'Le Petit Four', type: '法式餐廳晚餐', price: 'NZD $35–60', hours: '07:30–15:00', note: '請確認晚餐時間' },
      ],
    },
  },
  {
    id: 15, island: 'north', date: '10/2', dateISO: '2026-10-02',
    label: 'Day 5N', title: 'Tauranga → Whitianga', subtitle: '科羅曼德半島・海蝕拱門',
    photo: 'cathedral+cove+coromandel+new+zealand',
    coords: [-36.8322, 175.7017],
    route: { text: 'Tauranga → Waihi Beach → Karangahake Gorge → Thames → Whitianga (SH25)', km: 200, ok: true, note: '沿半島海岸線北上，完全順路' },
    timeline: [
      { time: '08:30', text: '出發，Tauranga → Waihi Beach' },
      { time: '10:00', text: '🏖️ Waihi Beach 海灘散步' },
      { time: '11:30', text: '⛏️ Karangahake Gorge 峽谷步道（金礦隧道，1–2小時）' },
      { time: '13:30', text: '午餐（Thames 鎮）' },
      { time: '15:30', text: '抵達 Whitianga，Cathedral Cove 水上計程車' },
    ],
    attractions: [
      { icon: '🌊', name: 'Cathedral Cove 海蝕拱門', desc: '水上計程車最方便（10月可開車至Hahei），步行來回2.5小時', hours: '全天（步道）', price: 'NZD $20（水上計程車）', lat: -36.8413, lng: 175.7805 },
      { icon: '♨️', name: 'Hot Water Beach 熱水沙灘', desc: '退潮前後各2小時挖溫泉坑，租鏟子NZD $7', hours: '全天（依潮汐）', price: '免費（鏟子 NZD $7）', lat: -36.8908, lng: 175.7942 },
      { icon: '⛏️', name: 'Karangahake Gorge 步道', desc: '穿越金礦隧道，河谷風景極美，約1–2小時，免費', hours: '全天', price: '免費', lat: -37.3660, lng: 175.7160 },
    ],
    meals: {
      breakfast: [
        { name: 'Le Petit Four Cafe', type: '法式早餐/糕點', price: 'NZD $10–25', hours: '07:30–15:00', note: '' },
        { name: '酒店早餐', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Thames 鎮咖啡廳', type: '', price: 'NZD $15–30', hours: '08:00–16:00', note: '' },
        { name: '自備野餐', type: '', price: '－', hours: '－', note: '' },
      ],
      dinner: [
        { name: 'Salt Restaurant & Bar', type: '現代NZ海鮮', price: 'NZD $40–70', hours: '17:00–21:00', note: '小鎮必訂位' },
        { name: '當地海鮮餐廳', type: '新鮮扇貝/鯛魚', price: 'NZD $30–50', hours: '17:00–21:00', note: '' },
        { name: 'Pepper Tree（若過Coromandel Town）', type: '', price: 'NZD $25–50', hours: '11:30–21:00', note: '' },
      ],
    },
  },
  {
    id: 16, island: 'north', date: '10/3', dateISO: '2026-10-03',
    label: 'Day 6N', title: 'Whitianga → 奧克蘭', subtitle: '科羅曼德鐵路・返回奧克蘭',
    photo: 'coromandel+town+new+zealand',
    coords: [-36.7590, 175.4953],
    route: { text: 'Whitianga → Coromandel Town (SH25) → Thames → 奧克蘭 (SH2/SH1)', km: 220, ok: true, note: '半島西海岸繞一圈完整，沿SH25回奧克蘭完全順路' },
    timeline: [
      { time: '08:00', text: '出發' },
      { time: '09:30', text: '🚂 Driving Creek Railway（窄軌鐵路穿越原生林，1小時）' },
      { time: '12:00', text: '午餐 Coromandel Town' },
      { time: '14:00', text: 'Thames → 返回奧克蘭' },
      { time: '17:30', text: '抵達奧克蘭' },
    ],
    attractions: [
      { icon: '🚂', name: 'Driving Creek Railway', desc: '一人建造的窄軌鐵路穿越再生原生林，Coromandel必去，約1小時', hours: '約 10:15 / 14:00', price: 'NZD $35', lat: -36.7554, lng: 175.4960 },
      { icon: '🦪', name: 'Coromandel Mussel Kitchen', desc: 'SH25旁路邊餐廳，新鮮青口貝料理，開車必停', hours: '11:00–17:00', price: 'NZD $20–40', lat: -36.6650, lng: 175.5270 },
      { icon: '🗻', name: 'Thames 科羅曼德歷史博物館', desc: '淘金時代遺跡，Thames鎮順路停', hours: '11:00–16:00', price: '免費', lat: -37.1336, lng: 175.5452 },
    ],
    meals: {
      breakfast: [
        { name: 'Whitianga 當地咖啡廳', type: '', price: 'NZD $10–25', hours: '07:00–14:00', note: '' },
        { name: '酒店早餐', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [
        { name: 'Pepper Tree Restaurant & Bar', type: '花園座位，Coromandel最佳', price: 'NZD $25–50', hours: '11:30–21:00', note: '7天開放' },
        { name: 'Coromandel Mussel Kitchen', type: '青口貝料理', price: 'NZD $20–40', hours: '11:00–17:00', note: 'SH25旁' },
        { name: 'Driving Creek Café', type: '', price: 'NZD $10–25', hours: '09:00–16:00', note: '鐵路旁' },
      ],
      dinner: [
        { name: 'Depot Eatery', type: '海鮮分享盤', price: 'NZD $50–80', hours: '07:00–21:00', note: '返回奧克蘭後' },
        { name: 'Alma', type: '西班牙料理', price: 'NZD $50–75', hours: '12:00–22:00', note: '' },
        { name: 'Metita', type: '太平洋島嶼料理', price: 'NZD $90–130', hours: '17:30–22:00', note: '需訂位' },
      ],
    },
  },
  {
    id: 17, island: 'north', date: '10/4', dateISO: '2026-10-04',
    label: 'Day 7N', title: '奧克蘭離境', subtitle: '返家',
    photo: 'auckland+airport+new+zealand',
    coords: [-36.8485, 174.7633],
    route: { text: '市區 → 奧克蘭機場', km: 25, ok: true, note: '機場約45分鐘，11:45班機建議10:00出發' },
    timeline: [
      { time: '上午', text: '採買伴手禮（CBD / Newmarket）' },
      { time: '10:00', text: '還車，前往機場' },
      { time: '11:45', text: '✈️ 班機起飛，返家' },
    ],
    attractions: [
      { icon: '🛍️', name: 'Newmarket 購物區', desc: '奧克蘭最佳購物街道，NZ品牌、伴手禮', hours: '09:00–18:00', price: '免費', lat: -36.8710, lng: 174.7764 },
      { icon: '☕', name: 'Ponsonby Road', desc: '奧克蘭最有味道街道，特色咖啡廳最後一杯', hours: '07:00–22:00', price: '免費', lat: -36.8564, lng: 174.7429 },
    ],
    meals: {
      breakfast: [
        { name: 'Depot Eatery 早餐', type: '', price: 'NZD $30–50', hours: '07:00–21:00', note: '最後一餐' },
        { name: 'Ponsonby Road 咖啡廳', type: '', price: 'NZD $15–30', hours: '07:00–15:00', note: '' },
        { name: '酒店早餐', type: '', price: '－', hours: '－', note: '' },
      ],
      lunch: [],
      dinner: [],
    },
  },
];
