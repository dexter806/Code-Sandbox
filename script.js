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
    label: "N2 · Jul 18",
    venue: "Hokkaido",
    matches: [
      { block: "A", a: "Konosuke Takeshita", b: "Jake Lee",       winner: null },
      { block: "A", a: "Hirooki Goto",       b: "Yota Tsuji",      winner: null },
      { block: "A", a: "Boltin Oleg",        b: "Yuto-Ice",        winner: null },
      { block: "A", a: "Great-O-Khan",       b: "SANADA",          winner: null },
      { block: "A", a: "Shingo Takagi",      b: "Ryohei Oiwa",     winner: null },
      { block: "B", a: "Gabe Kidd",          b: "Drilla Moloney",  winner: null },
    ]
  },
];

const BLOCK_A = ["Konosuke Takeshita","Yota Tsuji","Hirooki Goto","SANADA","Shingo Takagi","Jake Lee","Yuto-Ice","Great-O-Khan","Boltin Oleg","Ryohei Oiwa"];
const BLOCK_B = ["Zack Sabre Jr","Shota Umino","Yuya Uemura","Callum Newman","Aaron Wolf","HENARE","Ren Narita","OSKAR","Gabe Kidd","Drilla Moloney"];

/* ============================================
   RATINGS (stored in this browser only)
   ============================================ */
const RATINGS_KEY = "g1-tracker-ratings";

function loadRatings(){
  try{
    return JSON.parse(localStorage.getItem(RATINGS_KEY)) || {};
  }catch(e){ return {}; }
}
function saveRatings(ratings){
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
}
let ratings = loadRatings();

function matchId(nightId, index){ return `${nightId}-m${index}`; }

function rateMatch(id, stars){
  ratings[id] = ratings[id] || [];
  // one rating per browser: overwrite the last one instead of stacking
  ratings[id] = [stars];
  saveRatings(ratings);
  render();
}

function avgRating(id){
  const arr = ratings[id];
  if(!arr || !arr.length) return null;
  return arr.reduce((a,b)=>a+b,0) / arr.length;
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
  for(let i=1; i<=5; i++){
    const btn = document.createElement("button");
    btn.className = "star-btn" + (avg && i <= Math.round(avg) ? " filled" : "");
    btn.textContent = "★";
    btn.title = `Rate ${i} star${i>1?"s":""}`;
    btn.onclick = () => rateMatch(id, i);
    row.appendChild(btn);
  }
  const label = document.createElement("span");
  label.className = "rate-avg";
  label.textContent = avg ? `${avg.toFixed(1)}★ (you)` : "rate it";
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
    badge.className = "ticket-block " + m.block.toLowerCase();
    badge.textContent = `BLOCK ${m.block}`;
    card.appendChild(badge);

    const bout = document.createElement("div");
    bout.className = "bout";
    bout.innerHTML = `
      <div class="wrestler left ${m.winner===m.a ? 'winner':''}">${m.a}</div>
      <div class="vs">VS</div>
      <div class="wrestler right ${m.winner===m.b ? 'winner':''}">${m.b}</div>
    `;
    card.appendChild(bout);

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
  wrap.innerHTML = "";
  const entries = [];
  NIGHTS.forEach(night => {
    night.matches.forEach((m, i) => {
      const id = matchId(night.id, i);
      const avg = avgRating(id);
      if(avg) entries.push({ id, a:m.a, b:m.b, night: night.label, avg });
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
      <span class="leader-meta">${e.night}</span>
      <span class="leader-avg">${e.avg.toFixed(1)}★</span>
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
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeView = tab.dataset.view;
    render();
  });
});

render();
