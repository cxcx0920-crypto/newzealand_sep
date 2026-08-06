// ── 狀態 ──────────────────────────────────────────────────
let currentIsland = 'south';
let activeDay = 1;
let map, markers = {}, routeLayer;

// ── 工具函式 ─────────────────────────────────────────────

function getStatusClass(hoursStr) {
  if (!hoursStr || hoursStr === '全天' || hoursStr === '依潮汐' || hoursStr === '－') return 'open';
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const h = now.getHours(), m = now.getMinutes();
  const cur = h * 60 + m;

  // pick weekend or weekday string
  let str = hoursStr;
  const parts = hoursStr.split('/');
  if (parts.length > 1) str = (day === 0 || day === 6) ? parts[1].trim() : parts[0].trim();

  const match = str.match(/(\d{1,2}):(\d{2})[–\-](\d{1,2}):(\d{2})/);
  if (!match) return 'open';
  const open = parseInt(match[1]) * 60 + parseInt(match[2]);
  const close = parseInt(match[3]) * 60 + parseInt(match[4]);
  if (cur >= open && cur < close) {
    if (close - cur <= 30) return 'soon';
    return 'open';
  }
  if (cur < open && open - cur <= 30) return 'soon';
  return 'closed';
}

function statusLabel(cls) {
  return cls === 'open' ? '現在開放' : cls === 'soon' ? '即將開放' : '現在關閉';
}

function unsplashUrl(query, w, h) {
  return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)},travel`;
}

// ── 地圖初始化 ────────────────────────────────────────────

function initMap() {
  map = L.map('map', { zoomControl: true, scrollWheelZoom: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map);

  const allCoords = DAYS.map(d => d.coords);

  // 分島路線
  const southCoords = DAYS.filter(d => d.island === 'south').map(d => d.coords);
  const northCoords = DAYS.filter(d => d.island === 'north').map(d => d.coords);

  L.polyline(southCoords, { color: '#4EAFC4', weight: 3, opacity: 0.7, dashArray: '6,4' }).addTo(map);
  L.polyline(northCoords, { color: '#C9A84C', weight: 3, opacity: 0.7, dashArray: '6,4' }).addTo(map);

  // 每天標記
  DAYS.forEach(day => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="map-pin" id="pin-${day.id}" style="
        background:${day.island==='south'?'#4EAFC4':'#C9A84C'};
        color:#1E2D3D; border-radius:50%; width:28px; height:28px;
        display:flex; align-items:center; justify-content:center;
        font-size:0.65rem; font-weight:700; font-family:'JetBrains Mono',monospace;
        border:2px solid #fff; box-shadow:0 2px 6px rgba(0,0,0,0.3);
        cursor:pointer; transition:transform 0.2s;
      ">${day.id}</div>`,
      iconSize: [28, 28], iconAnchor: [14, 14],
    });
    const m = L.marker(day.coords, { icon }).addTo(map);
    m.bindPopup(`<b>${day.label} ${day.date}</b><br>${day.title}<br><small>${day.subtitle}</small>`);
    m.on('click', () => scrollToDay(day.id));
    markers[day.id] = m;
  });

  map.fitBounds(allCoords, { padding: [30, 30] });
}

function highlightPin(dayId) {
  Object.entries(markers).forEach(([id, m]) => {
    const pin = document.getElementById('pin-' + id);
    if (!pin) return;
    if (parseInt(id) === dayId) {
      pin.style.transform = 'scale(1.4)';
      pin.style.zIndex = '999';
      m.openPopup();
    } else {
      pin.style.transform = 'scale(1)';
      pin.style.zIndex = '';
    }
  });
}

// ── 導航 ──────────────────────────────────────────────────

function buildNav() {
  const nav = document.getElementById('dayNav');
  nav.innerHTML = '';
  const days = DAYS.filter(d => d.island === currentIsland);
  days.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (d.id === activeDay ? ' active' : '');
    btn.textContent = d.label;
    btn.onclick = () => scrollToDay(d.id);
    btn.id = 'nav-' + d.id;
    nav.appendChild(btn);
  });
}

function filterIsland(island) {
  currentIsland = island;
  document.querySelectorAll('.island-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.island-btn').forEach(b => {
    if ((island === 'south' && b.textContent.includes('南')) ||
        (island === 'north' && b.textContent.includes('北'))) b.classList.add('active');
  });
  document.querySelectorAll('.day-section').forEach(s => {
    s.style.display = s.dataset.island === island ? 'block' : 'none';
  });
  // 地圖 fit
  const coords = DAYS.filter(d => d.island === island).map(d => d.coords);
  if (coords.length) map.fitBounds(coords, { padding: [40, 40] });
  activeDay = DAYS.find(d => d.island === island)?.id || 1;
  buildNav();
}

function scrollToDay(dayId) {
  activeDay = dayId;
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  const nb = document.getElementById('nav-' + dayId);
  if (nb) { nb.classList.add('active'); nb.scrollIntoView({ inline: 'center', block: 'nearest' }); }
  const sec = document.getElementById('day-' + dayId);
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  highlightPin(dayId);
}

// ── 餐廳分頁 ──────────────────────────────────────────────

function showMeal(dayId, meal) {
  ['breakfast', 'lunch', 'dinner'].forEach(m => {
    const panel = document.getElementById(`meal-${dayId}-${m}`);
    const tab = document.getElementById(`tab-${dayId}-${m}`);
    if (panel) panel.classList.toggle('active', m === meal);
    if (tab) tab.classList.toggle('active', m === meal);
  });
}

// ── 渲染 ──────────────────────────────────────────────────

function renderDay(day) {
  const section = document.createElement('div');
  section.className = 'day-section';
  section.id = 'day-' + day.id;
  section.dataset.island = day.island;

  // 找第一個有餐廳的餐別
  const defaultMeal = ['breakfast', 'lunch', 'dinner'].find(m => day.meals[m] && day.meals[m].length) || 'lunch';

  const warnHTML = (day.warnings || []).map(w =>
    `<div class="warn-box"><span>⚠️</span><span>${w}</span></div>`
  ).join('');

  const attractHTML = (day.attractions || []).map(a => {
    const sc = getStatusClass(a.hours);
    return `
    <div class="attraction-card">
      <div class="attr-icon">${a.icon}</div>
      <div class="attr-body">
        <div class="attr-name">${a.name}</div>
        <div class="attr-desc">${a.desc}</div>
        <div class="attr-meta">
          <span class="attr-hours">🕐 ${a.hours}</span>
          <span class="status-dot ${sc}">${statusLabel(sc)}</span>
          <span class="attr-price">${a.price}</span>
        </div>
      </div>
    </div>`;
  }).join('');

  const mealTabsHTML = ['breakfast', 'lunch', 'dinner'].map(m => {
    const labels = { breakfast: '☀️ 早餐', lunch: '🍱 午餐', dinner: '🌙 晚餐' };
    const has = day.meals[m] && day.meals[m].length;
    if (!has) return '';
    return `<button class="meal-tab${m === defaultMeal ? ' active' : ''}" id="tab-${day.id}-${m}" onclick="showMeal(${day.id},'${m}')">${labels[m]}</button>`;
  }).join('');

  const mealPanelsHTML = ['breakfast', 'lunch', 'dinner'].map(m => {
    const items = day.meals[m] || [];
    if (!items.length) return '';
    const itemsHTML = items.map((r, i) => {
      const sc = getStatusClass(r.hours);
      const badgeClass = r.note.includes('訂位') ? '' : 'confirm';
      return `
      <div class="rest-card">
        <div class="rest-rank">${i + 1}</div>
        <div class="rest-body">
          <div class="rest-name">${r.name}</div>
          <div class="rest-type">${r.type}</div>
          <div class="rest-meta">
            <span class="rest-price">${r.price}</span>
            ${r.hours && r.hours !== '－' ? `<span class="rest-hours status-dot ${sc}">${statusLabel(sc)}</span>` : ''}
            ${r.note ? `<span class="rest-badge ${badgeClass}">${r.note}</span>` : ''}
          </div>
        </div>
      </div>`;
    }).join('');
    return `<div class="meal-panel${m === defaultMeal ? ' active' : ''}" id="meal-${day.id}-${m}">${itemsHTML}</div>`;
  }).join('');

  const tlHTML = (day.timeline || []).map(t =>
    `<li><span class="tl-time">${t.time}</span>${t.text}</li>`
  ).join('');

  const routeOk = day.route.ok;
  const routeBadge = day.route.km > 0
    ? `<div class="route-badge ${routeOk ? 'ok' : 'detour'}">
        <span class="icon">${routeOk ? '✅' : '⚠️'}</span>
        <span>${day.route.text} &nbsp;|&nbsp; ${day.route.km} km</span>
       </div>
       <div style="font-size:0.75rem;color:#6B7280;margin-top:4px;padding-left:4px;">💬 ${day.route.note}</div>`
    : `<div class="route-badge ok"><span class="icon">📍</span><span>${day.route.note}</span></div>`;

  section.innerHTML = `
    <div class="day-hero" onclick="scrollToDay(${day.id})">
      <img src="${unsplashUrl(day.photo, 800, 360)}" alt="${day.title}" loading="lazy"
           onerror="this.src='https://source.unsplash.com/800x360/?new+zealand,nature'">
      <div class="day-hero-overlay">
        <div class="day-label">${day.label} &nbsp;·&nbsp; ${day.date} ${day.island === 'south' ? '南島' : '北島'}</div>
        <div class="day-title">${day.title}</div>
        <div class="day-subtitle">${day.subtitle}</div>
      </div>
    </div>
    <div class="day-body">
      ${warnHTML}
      ${routeBadge}
      <div>
        <div class="sec-header"><span>📅</span> 今日時程</div>
        <ul class="timeline">${tlHTML}</ul>
      </div>
      <div>
        <div class="sec-header"><span>🏔️</span> 附近景點</div>
        <div class="attraction-list">${attractHTML}</div>
      </div>
      <div>
        <div class="sec-header"><span>🍽️</span> 餐廳推薦</div>
        <div class="meal-tabs">${mealTabsHTML}</div>
        ${mealPanelsHTML}
      </div>
    </div>
  `;

  return section;
}

function renderAll() {
  const col = document.getElementById('timeline-col');
  col.innerHTML = '';
  DAYS.forEach(day => {
    const el = renderDay(day);
    if (day.island !== currentIsland) el.style.display = 'none';
    col.appendChild(el);
  });
}

// ── Intersection Observer：滾動同步地圖 ──────────────────

function initScrollSync() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.3) {
        const id = parseInt(e.target.id.replace('day-', ''));
        const day = DAYS.find(d => d.id === id);
        if (day && day.island === currentIsland) {
          activeDay = id;
          document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
          const nb = document.getElementById('nav-' + id);
          if (nb) { nb.classList.add('active'); nb.scrollIntoView({ inline: 'center', block: 'nearest' }); }
          highlightPin(id);
          map.panTo(day.coords, { animate: true, duration: 0.5 });
        }
      }
    });
  }, { root: document.getElementById('timeline-col'), threshold: 0.3 });

  document.querySelectorAll('.day-section').forEach(s => observer.observe(s));
}

// ── 主入口 ────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  renderAll();
  buildNav();
  initMap();
  initScrollSync();
});
