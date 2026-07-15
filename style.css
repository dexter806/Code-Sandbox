/* ============================================
   DATA
   Fill in future nights the same way — each match
   needs a block, two wrestlers, and (once it happens)
   a winner. Leave winner as null for matches that
   haven't happened yet; they'll show as "TBD".
   ============================================ */

const NIGHTS = [
  {
    id: "night1",
    date: "2026-07-11T23:00:00Z",
    label: "N1 · Jul 11",
    venue: "Hoffman Estates, IL",
    matches: [
      { block: "B", a: "Aaron Wolf",        b: "HENARE",           winner: "Aaron Wolf",        method: "Inverted Olympic Slam", time: "9:00" },
      { block: "A", a: "Shingo Takagi",     b: "Jake Lee",         winner: "Jake Lee",           method: "Facebreak Shot",        time: "10:14" },
      { block: "B", a: "OSKAR",             b: "Ren Narita",       winner: "OSKAR",              method: "Sleeper Hold",          time: "9:43" },
      { block: "A", a: "Yuto-Ice",          b: "Great-O-Khan",     winner: "Yuto-Ice",           method: "Running Knee Strike",   time: "11:11" },
      { block: "B", a: "Shota Umino",       b: "Zack Sabre Jr",    winner: "Zack Sabre Jr",      method: "Zack Driver",           time: "16:10" },
      { block: "A", a: "Hirooki Goto",      b: "SANADA",           winner: "Hirooki Goto",       method: "GTR",                   time: "12:04" },
      { block: "B", a: "Yuya Uemura",       b: "Callum Newman",    winner: "Callum Newman",      method: "Make Way",              time: "15:42" },
      { block: "A", a: "Boltin Oleg",       b: "Ryohei Oiwa",      winner: "Ryohei Oiwa",        method: "Ark Hold (submission)", time: "13:28" },
      { block: "A", a: "Konosuke Takeshita",b: "Yota Tsuji",       winner: "Yota Tsuji",         method: "Fire Blaster",          time: "20:52" },
    ]
  },
  {
    id: "night2",
    date: "2026-07-18T09:00:00Z",
    label: "N2 · Jul 18",
    venue: "Sapporo, Hokkaido",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Jake Lee",       winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Yota Tsuji",      winner: null },
      { block: "A", a: "Boltin Oleg",        b: "Yuto-Ice",        winner: null },
      { block: "A", a: "Great-O-Khan",       b: "SANADA",          winner: null },
      { block: "A", a: "Shingo Takagi",      b: "Ryohei Oiwa",     winner: null },
      { block: "B", a: "Gabe Kidd",          b: "Drilla Moloney",  winner: null },
    ]
  },
  {
    id: "night3",
    date: "2026-07-19T09:00:00Z",
    label: "N3 · Jul 19",
    venue: "Sapporo, Hokkaido",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Aaron Wolf",      winner: null },
      { block: "B", a: "Yuya Uemura",     b: "Zack Sabre Jr",   winner: null },
      { block: "B", a: "HENARE",          b: "Drilla Moloney",  winner: null },
      { block: "B", a: "Callum Newman",   b: "Ren Narita",      winner: null },
      { block: "B", a: "Gabe Kidd",       b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night4",
    date: "2026-07-21T09:00:00Z",
    label: "N4 · Jul 21",
    venue: "Sendai, Miyagi",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Yuto-Ice",      winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Jake Lee",       winner: null },
      { block: "A", a: "Boltin Oleg",        b: "Shingo Takagi",  winner: null },
      { block: "A", a: "Yota Tsuji",         b: "SANADA",         winner: null },
      { block: "A", a: "Great-O-Khan",       b: "Ryohei Oiwa",    winner: null },
    ]
  },
  {
    id: "night5",
    date: "2026-07-22T09:00:00Z",
    label: "N5 · Jul 22",
    venue: "Nagaoka",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Ren Narita",      winner: null },
      { block: "B", a: "Yuya Uemura",     b: "Drilla Moloney",  winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "Callum Newman",   winner: null },
      { block: "B", a: "Aaron Wolf",      b: "Gabe Kidd",       winner: null },
      { block: "B", a: "HENARE",          b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night6",
    date: "2026-07-25T09:00:00Z",
    label: "N6 · Jul 25",
    venue: "Ota City Gymnasium, Tokyo",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Boltin Oleg",    winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Great-O-Khan",   winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Shingo Takagi",  winner: null },
      { block: "A", a: "Jake Lee",           b: "SANADA",         winner: null },
      { block: "A", a: "Yuto-Ice",           b: "Ryohei Oiwa",    winner: null },
    ]
  },
  {
    id: "night7",
    date: "2026-07-26T09:00:00Z",
    label: "N7 · Jul 26",
    venue: "Ebara Wave Arena, Ota, Tokyo",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Yuya Uemura",     winner: null },
      { block: "B", a: "Callum Newman",   b: "Drilla Moloney",  winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "Gabe Kidd",       winner: null },
      { block: "B", a: "HENARE",          b: "Ren Narita",      winner: null },
      { block: "B", a: "Aaron Wolf",      b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night8",
    date: "2026-07-29T09:00:00Z",
    label: "N8 · Jul 29",
    venue: "Yamato University Arena, Osaka",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Great-O-Khan",   winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Shingo Takagi",  winner: null },
      { block: "A", a: "Boltin Oleg",        b: "Jake Lee",       winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Yuto-Ice",       winner: null },
      { block: "A", a: "SANADA",             b: "Ryohei Oiwa",    winner: null },
    ]
  },
  {
    id: "night9",
    date: "2026-07-31T09:00:00Z",
    label: "N9 · Jul 31",
    venue: "Takamatsu City Gymnasium, Kagawa",
    matches: [
      { block: "B", a: "Shota Umino",     b: "HENARE",          winner: null },
      { block: "B", a: "Yuya Uemura",     b: "Aaron Wolf",      winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "Ren Narita",      winner: null },
      { block: "B", a: "Callum Newman",   b: "Gabe Kidd",       winner: null },
      { block: "B", a: "Drilla Moloney",  b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night10",
    date: "2026-08-01T09:00:00Z",
    label: "N10 · Aug 1",
    venue: "Sun Plaza Hall, Hiroshima",
    matches: [
      { block: "A", a: "Hirooki Goto",       b: "Konosuke Takeshita", winner: null },
      { block: "A", a: "Boltin Oleg",        b: "SANADA",             winner: null },
      { block: "A", a: "Shingo Takagi",      b: "Great-O-Khan",       winner: null },
      { block: "A", a: "Yuto-Ice",           b: "Jake Lee",           winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Ryohei Oiwa",        winner: null },
    ]
  },
  {
    id: "night11",
    date: "2026-08-02T09:00:00Z",
    label: "N11 · Aug 2",
    venue: "Japan Tour",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Callum Newman",   winner: null },
      { block: "B", a: "Yuya Uemura",     b: "Ren Narita",      winner: null },
      { block: "B", a: "Gabe Kidd",       b: "HENARE",          winner: null },
      { block: "B", a: "Aaron Wolf",      b: "Drilla Moloney",  winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night12",
    date: "2026-08-06T09:00:00Z",
    label: "N12 · Aug 6",
    venue: "Japan Tour",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Shingo Takagi",  winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Boltin Oleg",    winner: null },
      { block: "A", a: "Jake Lee",           b: "Great-O-Khan",   winner: null },
      { block: "A", a: "Yuto-Ice",           b: "SANADA",         winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Ryohei Oiwa",    winner: null },
    ]
  },
  {
    id: "night13",
    date: "2026-08-08T09:00:00Z",
    label: "N13 · Aug 8",
    venue: "Yokohama Budokan, Kanagawa",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Gabe Kidd",       winner: null },
      { block: "B", a: "Yuya Uemura",     b: "HENARE",          winner: null },
      { block: "B", a: "Drilla Moloney",  b: "Zack Sabre Jr",   winner: null },
      { block: "B", a: "Aaron Wolf",      b: "Ren Narita",      winner: null },
      { block: "B", a: "OSKAR",           b: "Callum Newman",   winner: null },
    ]
  },
  {
    id: "night14",
    date: "2026-08-09T09:00:00Z",
    label: "N14 · Aug 9",
    venue: "G Messe Gunma",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "SANADA",         winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Boltin Oleg",    winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Great-O-Khan",   winner: null },
      { block: "A", a: "Shingo Takagi",      b: "Yuto-Ice",       winner: null },
      { block: "A", a: "Jake Lee",           b: "Ryohei Oiwa",    winner: null },
    ]
  },
  {
    id: "night15",
    date: "2026-08-11T09:00:00Z",
    label: "N15 · Aug 11",
    venue: "Nissho Highway Arena, Mie",
    matches: [
      { block: "B", a: "Yuya Uemura",     b: "Gabe Kidd",       winner: null },
      { block: "B", a: "Drilla Moloney",  b: "Ren Narita",      winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "HENARE",          winner: null },
      { block: "B", a: "Aaron Wolf",      b: "Callum Newman",   winner: null },
      { block: "B", a: "Shota Umino",     b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night16",
    date: "2026-08-12T09:00:00Z",
    label: "N16 · Aug 12",
    venue: "Act City Hamamatsu, Shizuoka",
    matches: [
      { block: "A", a: "Hirooki Goto",       b: "Yuto-Ice",        winner: null },
      { block: "A", a: "Boltin Oleg",        b: "Great-O-Khan",    winner: null },
      { block: "A", a: "Yota Tsuji",         b: "Jake Lee",        winner: null },
      { block: "A", a: "Shingo Takagi",      b: "SANADA",          winner: null },
      { block: "A", a: "Konosuke Takeshita", b: "Ryohei Oiwa",     winner: null },
    ]
  },
  {
    id: "night17",
    date: "2026-08-13T09:00:00Z",
    label: "N17 · Aug 13",
    venue: "Korakuen Hall, Tokyo",
    matches: [
      { block: "B", a: "Shota Umino",     b: "Drilla Moloney",  winner: null },
      { block: "B", a: "Callum Newman",   b: "HENARE",          winner: null },
      { block: "B", a: "Gabe Kidd",       b: "Ren Narita",      winner: null },
      { block: "B", a: "Zack Sabre Jr",   b: "Aaron Wolf",      winner: null },
      { block: "B", a: "Yuya Uemura",     b: "OSKAR",           winner: null },
    ]
  },
  {
    id: "night18",
    date: "2026-08-15T08:00:00Z",
    label: "N18 · Aug 15",
    venue: "Ryōgoku Sumo Hall, Tokyo",
    matches: [
      { block: "SF", a: "A Block winner", b: "B Block runner-up", winner: null },
      { block: "SF", a: "B Block winner", b: "A Block runner-up", winner: null },
    ]
  },
  {
    id: "night19",
    date: "2026-08-16T08:00:00Z",
    label: "N19 · Aug 16 — FINAL",
    venue: "Ryōgoku Sumo Hall, Tokyo",
    matches: [
      { block: "F", a: "Semifinal 1 winner", b: "Semifinal 2 winner", winner: null },
    ]
  },
];

const BLOCK_A = ["Konosuke Takeshita","Yota Tsuji","Hirooki Goto","SANADA","Shingo Takagi","Jake Lee","Yuto-Ice","Great-O-Khan","Boltin Oleg","Ryohei Oiwa"];
const BLOCK_B = ["Zack Sabre Jr","Shota Umino","Yuya Uemura","Callum Newman","Aaron Wolf","HENARE","Ren Narita","OSKAR","Gabe Kidd","Drilla Moloney"];

/* Generates a simple original avatar for each wrestler: a silhouette
   bust with their initials, colored by block. No external image files,
   no real photos — just an abstract graphic in the site's own palette. */
function initials(name){
  const parts = name.replace(/[^A-Za-z\s-]/g, "").split(/\s+/).filter(Boolean);
  if(parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function avatarDataUri(name, block){
  const accent = block === "B" ? "#22C7E5" : "#E31C5F";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#0B0A0D"/>
    <polygon points="0,100 60,100 100,40 100,0 40,0" fill="${accent}" opacity="0.22"/>
    <circle cx="50" cy="36" r="18" fill="${accent}" opacity="0.4"/>
    <path d="M18 100 Q18 60 50 60 Q82 60 82 100 Z" fill="${accent}" opacity="0.4"/>
    <text x="50" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#EDE7DA">${initials(name)}</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* ============================================
   RATINGS — shared across everyone, stored in a
   real database via /api/rate and /api/ratings.
   The only thing kept locally is an anonymous
   "voter ID" (so a refresh doesn't double-count
   a rating) and a copy of *your own* last pick
   per match, purely for the slider's starting
   position and the "(your pick)" label.
   ============================================ */
const VOTER_KEY = "g1-tracker-voter-id";
function getVoterId(){
  let id = localStorage.getItem(VOTER_KEY);
  if(!id){
    id = "v-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(VOTER_KEY, id);
  }
  return id;
}

const MY_RATINGS_KEY = "g1-tracker-my-ratings";
function getMyRating(id){
  try{
    const all = JSON.parse(localStorage.getItem(MY_RATINGS_KEY)) || {};
    return all[id] ?? null;
  }catch(e){ return null; }
}
function setMyRating(id, stars){
  try{
    const all = JSON.parse(localStorage.getItem(MY_RATINGS_KEY)) || {};
    all[id] = stars;
    localStorage.setItem(MY_RATINGS_KEY, JSON.stringify(all));
  }catch(e){}
}

function matchId(nightId, index){ return `${nightId}-m${index}`; }

let ratingsCache = {}; // { matchId: { avg, count } }, populated from the server

async function loadRatingsFromServer(){
  try{
    const res = await fetch("/api/ratings");
    if(!res.ok) throw new Error("bad response");
    ratingsCache = await res.json();
  }catch(e){
    console.error("Couldn't load ratings from server:", e);
  }
  render();
}

async function rateMatch(id, stars){
  setMyRating(id, stars);
  // optimistic bump so the UI feels instant while the request is in flight
  ratingsCache[id] = ratingsCache[id] || { avg: stars, count: 1 };
  render();
  try{
    const res = await fetch("/api/rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matchId: id, voterId: getVoterId(), stars }),
    });
    if(!res.ok) throw new Error("bad response");
    ratingsCache[id] = await res.json(); // { avg, count } straight from the server
    render();
  }catch(e){
    console.error("Couldn't save rating:", e);
  }
}

function avgRating(id){
  return ratingsCache[id]?.avg ?? null;
}
function ratingCount(id){
  return ratingsCache[id]?.count ?? 0;
}

/* ============================================
   STANDINGS
   ============================================ */
function computeStandings(block){
  const names = block === "A" ? BLOCK_A : BLOCK_B;
  const table = {};
  names.forEach(n => table[n] = { name:n, w:0, l:0, d:0, pts:0 });

  NIGHTS.forEach(night => {
    night.matches.forEach(m => {
      if(m.block !== block || !m.winner) return;
      if(m.winner === "DRAW"){
        table[m.a].d++; table[m.b].d++;
        table[m.a].pts++; table[m.b].pts++;
      } else {
        const loser = m.winner === m.a ? m.b : m.a;
        table[m.winner].w++; table[m.winner].pts += 2;
        table[loser].l++;
      }
    });
  });

  return Object.values(table).sort((x,y) => y.pts - x.pts);
}

/* Looks up a wrestler's current W-L-D / points in their block.
   Returns null for placeholder semifinal/final names. */
function getRecord(name){
  const block = BLOCK_A.includes(name) ? "A" : BLOCK_B.includes(name) ? "B" : null;
  if(!block) return null;
  return computeStandings(block).find(r => r.name === name) || null;
}

function spotlightHTML(name, block, rec){
  const recText = rec ? `${rec.w}-${rec.l}${rec.d ? "-" + rec.d : ""} &middot; ${rec.pts} PTS` : "record TBD";
  return `
    <img src="${avatarDataUri(name, block)}" alt="">
    <div class="sp-name">${name}</div>
    <div class="sp-record">${recText}</div>
  `;
}

function showSpotlight(m){
  const l = document.getElementById("spotlightLeft");
  const r = document.getElementById("spotlightRight");
  l.innerHTML = spotlightHTML(m.a, m.block, getRecord(m.a));
  r.innerHTML = spotlightHTML(m.b, m.block, getRecord(m.b));
  l.classList.add("visible");
  r.classList.add("visible");
}

function hideSpotlight(){
  document.getElementById("spotlightLeft").classList.remove("visible");
  document.getElementById("spotlightRight").classList.remove("visible");
}

/* ============================================
   RENDERING
   ============================================ */
let activeView = "nights";
let activeNight = NIGHTS[0].id;

function renderTabs(){
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.view === activeView);
  });
  document.querySelectorAll(".view").forEach(v => {
    v.classList.toggle("active", v.id === `view-${activeView}`);
  });
}

function renderNightPicker(){
  const wrap = document.getElementById("nightPicker");
  wrap.innerHTML = "";
  NIGHTS.forEach(n => {
    const chip = document.createElement("button");
    chip.className = "night-chip" + (n.id === activeNight ? " active" : "");
    chip.textContent = n.label;
    chip.onclick = () => { activeNight = n.id; render(); };
    wrap.appendChild(chip);
  });
}

function starRow(id, avg){
  const row = document.createElement("div");
  row.className = "rate-row";

  const display = document.createElement("div");
  display.className = "star-display";
  const pct = avg ? (avg / 5) * 100 : 0;
  display.innerHTML = `
    <span class="star-back">★★★★★</span>
    <span class="star-front" style="width:${pct}%">★★★★★</span>
  `;

  const count = ratingCount(id);
  const mine = getMyRating(id);

  const label = document.createElement("span");
  label.className = "rate-avg";
  if(avg && mine !== null){
    label.textContent = `${avg.toFixed(2)}★ · ${count} vote${count === 1 ? "" : "s"} · you: ${mine.toFixed(2)}★`;
  } else if(avg){
    label.textContent = `${avg.toFixed(2)}★ · ${count} vote${count === 1 ? "" : "s"}`;
  } else if(mine !== null){
    label.textContent = `you: ${mine.toFixed(2)}★ · waiting on others`;
  } else {
    label.textContent = "be the first to rate it";
  }

  const slider = document.createElement("input");
  slider.type = "range";
  slider.className = "rate-slider";
  slider.min = "0";
  slider.max = "5";
  slider.step = "0.25";
  slider.value = mine ?? avg ?? 0;
  slider.title = "Drag to rate — quarter-star precision";

  slider.addEventListener("input", () => {
    const val = parseFloat(slider.value);
    display.querySelector(".star-front").style.width = `${(val / 5) * 100}%`;
    label.textContent = `${val.toFixed(2)}★ (your pick)`;
  });
  slider.addEventListener("change", () => {
    rateMatch(id, parseFloat(slider.value));
  });

  row.appendChild(display);
  row.appendChild(slider);
  row.appendChild(label);
  return row;
}

function renderCards(){
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = "";
  const night = NIGHTS.find(n => n.id === activeNight);
  night.matches.forEach((m, i) => {
    const id = matchId(night.id, i);
    const avg = avgRating(id);

    const card = document.createElement("div");
    card.className = "match-ticket";

    const badge = document.createElement("span");
    badge.className = "ticket-block " + (m.block === "SF" || m.block === "F" ? "final" : m.block.toLowerCase());
    badge.textContent = m.block === "SF" ? "SEMIFINAL" : m.block === "F" ? "FINAL" : `BLOCK ${m.block}`;
    card.appendChild(badge);

    const bout = document.createElement("div");
    bout.className = "bout";
    bout.innerHTML = `
      <div class="wrestler left ${m.winner===m.a ? 'winner':''}">${m.a}</div>
      <div class="vs">VS</div>
      <div class="wrestler right ${m.winner===m.b ? 'winner':''}">${m.b}</div>
    `;
    card.appendChild(bout);
    card.addEventListener("mouseenter", () => showSpotlight(m));
    card.addEventListener("mouseleave", hideSpotlight);

    const result = document.createElement("div");
    if(m.winner){
      result.className = "result-line";
      result.innerHTML = `<strong>${m.winner}</strong> wins${m.method ? ` — ${m.method}` : ""}${m.time ? ` (${m.time})` : ""}`;
    } else {
      result.className = "result-line pending";
      result.textContent = "Not yet contested";
    }
    card.appendChild(result);

    if(m.winner){
      card.appendChild(starRow(id, avg));
    }

    grid.appendChild(card);
  });
}

function renderStandingsTable(block, tbodySelector){
  const tbody = document.querySelector(`${tbodySelector} tbody`);
  tbody.innerHTML = "";
  computeStandings(block).forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-name"><span class="rank-num">${i+1}</span>${row.name}</td>
      <td>${row.w}</td><td>${row.l}</td><td>${row.d}</td>
      <td class="pts">${row.pts}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderStars(){
  const wrap = document.getElementById("starLeaderboard");
  if(!wrap) return; // COMMUNITY board is currently hidden from the page
  wrap.innerHTML = "";
  const entries = [];
  NIGHTS.forEach(night => {
    night.matches.forEach((m, i) => {
      const id = matchId(night.id, i);
      const avg = avgRating(id);
      if(avg) entries.push({ id, a:m.a, b:m.b, night: night.label, avg, count: ratingCount(id) });
    });
  });
  entries.sort((x,y) => y.avg - x.avg);

  if(!entries.length){
    wrap.innerHTML = `<div class="empty-state">No ratings yet — go star some matches on the CARDS tab.</div>`;
    return;
  }
  entries.forEach((e, i) => {
    const row = document.createElement("div");
    row.className = "leader-row";
    row.innerHTML = `
      <span class="leader-rank">${i+1}</span>
      <span class="leader-bout">${e.a} vs ${e.b}</span>
      <span class="leader-meta">${e.night} &middot; ${e.count} vote${e.count === 1 ? "" : "s"}</span>
      <span class="leader-avg">${e.avg.toFixed(2)}★</span>
    `;
    wrap.appendChild(row);
  });
}

function renderMyStars(){
  const wrap = document.getElementById("myLeaderboard");
  if(!wrap) return;
  wrap.innerHTML = "";
  const entries = [];
  NIGHTS.forEach(night => {
    night.matches.forEach((m, i) => {
      const id = matchId(night.id, i);
      const mine = getMyRating(id);
      if(mine !== null) entries.push({ id, a:m.a, b:m.b, night: night.label, mine });
    });
  });
  entries.sort((x,y) => y.mine - x.mine);
  const top = entries.slice(0, 10);

  if(!top.length){
    wrap.innerHTML = `<div class="empty-state">You haven't rated anything yet — go star some matches on the CARDS tab.</div>`;
    return;
  }
  top.forEach((e, i) => {
    const row = document.createElement("div");
    row.className = "leader-row";
    row.innerHTML = `
      <span class="leader-rank">${i+1}</span>
      <span class="leader-bout">${e.a} vs ${e.b}</span>
      <span class="leader-meta">${e.night}</span>
      <span class="leader-avg">${e.mine.toFixed(2)}★</span>
    `;
    wrap.appendChild(row);
  });
}

/* Ranks wrestlers by the average of YOUR ratings across every match of
   theirs you've rated. e.g. 8 matches you rated 4★ + 2 matches at 5★
   = (8*4 + 2*5) / 10 = 4.2★ for that wrestler. */
function renderWrestlerRanking(){
  const wrap = document.getElementById("wrestlerLeaderboard");
  if(!wrap) return;
  wrap.innerHTML = "";

  const tally = {}; // name -> { total, count }
  NIGHTS.forEach(night => {
    night.matches.forEach((m, i) => {
      const id = matchId(night.id, i);
      const mine = getMyRating(id);
      if(mine === null) return;
      [m.a, m.b].forEach(name => {
        if(!tally[name]) tally[name] = { total: 0, count: 0 };
        tally[name].total += mine;
        tally[name].count += 1;
      });
    });
  });

  const entries = Object.entries(tally).map(([name, { total, count }]) => ({
    name, count, avg: total / count
  }));
  entries.sort((x, y) => y.avg - x.avg || y.count - x.count);

  if(!entries.length){
    wrap.innerHTML = `<div class="empty-state">Rate some matches to build wrestler rankings.</div>`;
    return;
  }
  entries.forEach((e, i) => {
    const row = document.createElement("div");
    row.className = "leader-row";
    row.innerHTML = `
      <span class="leader-rank">${i+1}</span>
      <span class="leader-bout">${e.name}</span>
      <span class="leader-meta">${e.count} rated match${e.count === 1 ? "" : "es"}</span>
      <span class="leader-avg">${e.avg.toFixed(2)}★</span>
    `;
    wrap.appendChild(row);
  });
}

function render(){
  renderTabs();
  renderNightPicker();
  renderCards();
  renderStandingsTable("A", "#blockA");
  renderStandingsTable("B", "#blockB");
  renderStars();
  renderMyStars();
  renderWrestlerRanking();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeView = tab.dataset.view;
    render();
  });
});

/* ============================================
   NEXT CARD COUNTDOWN
   ============================================ */
function formatCountdown(ms){
  if(ms <= 0) return "LIVE NOW";
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return `${days}d ${hours}h ${mins}m ${secs}s`;
}

function updateNextCard(){
  const labelEl = document.getElementById("nextCardLabel");
  const cdEl = document.getElementById("nextCardCountdown");
  if(!labelEl || !cdEl) return;

  const now = new Date();
  const next = NIGHTS.find(n => n.date && new Date(n.date) > now);

  if(!next){
    labelEl.textContent = "Tournament complete";
    cdEl.textContent = "";
    return;
  }

  const nightNum = next.id.replace("night", "");
  const dateText = next.label.split(" · ")[1] || next.label;
  labelEl.textContent = `Night ${nightNum} · ${dateText}`;
  cdEl.textContent = formatCountdown(new Date(next.date) - now);
}

render();
updateNextCard();
setInterval(updateNextCard, 1000);
loadRatingsFromServer();
