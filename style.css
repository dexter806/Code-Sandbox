/* ============================================
   TOKENS
   ============================================ */
:root{
  --sumi:        #0B0A0D;
  --sumi-raised: #17151A;
  --paper:       #EDE7DA;
  --paper-dim:   #948e82;
  --vermillion:  #E31C5F;
  --vermillion-deep: #A8113F;
  --cyan:        #22C7E5;
  --flash:       #E8FF29;
  --gold:        #E8FF29;
  --line:        rgba(237,231,218,0.14);
  --line-strong: rgba(237,231,218,0.28);

  --font-display: 'Bebas Neue', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}

*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; }
body{
  background: var(--sumi);
  color: var(--paper);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

/* ============================================
   BRAND STRIPE — hazard-diagonal band, poster-style
   ============================================ */
.brand-stripe{
  height: 6px;
  background: repeating-linear-gradient(
    -45deg,
    var(--vermillion) 0 16px,
    var(--sumi) 16px 18px,
    var(--flash) 18px 20px,
    var(--sumi) 20px 22px,
    var(--cyan) 22px 38px,
    var(--sumi) 38px 40px
  );
}

/* ============================================
   MASTHEAD
   ============================================ */
.masthead{
  position: relative;
  background:
    radial-gradient(ellipse 120% 100% at 50% -20%, rgba(225,65,39,0.28), transparent 60%),
    var(--sumi);
  border-bottom: 1px solid var(--line-strong);
  padding: 2.75rem 1.5rem 2.1rem;
  overflow: hidden;
}
.masthead::after{
  /* faint grain / halftone texture for a printed-poster feel */
  content:"";
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(237,231,218,0.05) 1px, transparent 1px);
  background-size: 4px 4px;
  pointer-events: none;
}
.masthead-inner{
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.9rem;
  flex-wrap: wrap;
}

/* Original G1-style mark: bold wordmark on a diagonal-cut red plate,
   with the tournament number in a broken ring — evokes the tournament's
   own bold red/black poster energy without copying the real logotype. */
.event-mark{
  position: relative;
  flex-shrink: 0;
  width: 60px; height: 60px;
  margin-left: -10px;
  display: flex; align-items: center; justify-content: center;
}
.event-logo{
  width: 100%; height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 14px rgba(0,0,0,0.5));
}

.eyebrow{
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  color: var(--gold);
  margin: 0 0 0.3rem;
  text-transform: uppercase;
}
.masthead-text h1{
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  letter-spacing: 0.01em;
  margin: 0;
  line-height: 0.9;
}
.masthead-text .dot{ color: var(--vermillion); }
.masthead-sub{
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--paper-dim);
  margin: 0.35rem 0 0;
  letter-spacing: 0.02em;
}

.masthead-meta{
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}
.meta-row{ display:flex; gap: 0.6rem; justify-content: flex-end; color: var(--paper-dim); }
.meta-row strong{ color: var(--paper); font-weight: 600; }

/* ============================================
   TABS
   ============================================ */
.tabs{
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  gap: 0;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--line);
}
.tab{
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  background: none;
  border: none;
  color: var(--paper-dim);
  padding: 1rem 1.1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.tab:hover{ color: var(--paper); }
.tab.active{ color: var(--vermillion); border-bottom-color: var(--vermillion); }

main{ max-width: 1080px; margin: 0 auto; padding: 1.75rem 1.5rem 3rem; }
.view{ display: none; }
.view.active{ display: block; }

/* ============================================
   NIGHT PICKER
   ============================================ */
.night-picker{
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
.night-chip{
  font-family: var(--font-mono);
  font-size: 0.72rem;
  white-space: nowrap;
  background: var(--sumi-raised);
  border: 1px solid var(--line);
  color: var(--paper-dim);
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.night-chip:hover{ border-color: var(--line-strong); color: var(--paper); }
.night-chip.active{ background: var(--vermillion); border-color: var(--vermillion); color: var(--paper); }

/* ============================================
   MATCH CARDS (ticket-stub signature element)
   ============================================ */
.card-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.1rem;
}
.match-ticket{
  position: relative;
  background: var(--sumi-raised);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 1.1rem 1.2rem 1rem;
  background-image:
    repeating-linear-gradient(to bottom, transparent 0 7px, rgba(237,231,218,0.05) 7px 8px);
  background-size: 100% 100%;
  overflow: hidden;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.match-ticket:hover{
  border-color: rgba(225,65,39,0.45);
  box-shadow: 0 0 0 1px rgba(225,65,39,0.15), 0 8px 24px rgba(0,0,0,0.35);
}
.match-ticket::before{
  /* perforation notch */
  content:"";
  position: absolute;
  top: 50%; left: -9px;
  width: 18px; height: 18px;
  background: var(--sumi);
  border: 1px solid var(--line);
  border-radius: 50%;
  transform: translateY(-50%);
}
.match-ticket::after{
  content:"";
  position: absolute;
  top: 50%; right: -9px;
  width: 18px; height: 18px;
  background: var(--sumi);
  border: 1px solid var(--line);
  border-radius: 50%;
  transform: translateY(-50%);
}
.ticket-block{
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  margin-bottom: 0.7rem;
}
.ticket-block.a{ background: rgba(227,28,95,0.18); color: #ff6b9a; }
.ticket-block.b{ background: rgba(34,199,229,0.18); color: #7fe3f5; }
.ticket-block.final{ background: rgba(232,255,41,0.16); color: var(--flash); }

.bout{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.6rem;
}
.wrestler-wrap{
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  min-height: 2.2rem;
  display: flex;
  align-items: center;
}
.wrestler-wrap.left{ justify-content: flex-end; }
.wrestler-wrap.right{ justify-content: flex-start; }

.wrestler-photo{
  position: absolute;
  top: 0; bottom: 0;
  width: 48px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}
.wrestler-wrap.left .wrestler-photo{ left: 0; transform: translateX(-14px); mask-image: linear-gradient(to right, black 60%, transparent); }
.wrestler-wrap.right .wrestler-photo{ right: 0; transform: translateX(14px); mask-image: linear-gradient(to left, black 60%, transparent); }
.wrestler-wrap:hover .wrestler-photo{ opacity: 0.9; transform: translateX(0); }

.wrestler{ font-family: var(--font-display); font-size: 1.25rem; line-height: 1.05; letter-spacing: 0.01em; position: relative; z-index: 1; padding: 0.1rem 0.3rem; }
.wrestler.left{ text-align: right; }
.wrestler.right{ text-align: left; }
.wrestler.winner{ color: var(--gold); }
.vs{ font-family: var(--font-mono); font-size: 0.7rem; color: var(--paper-dim); }

.result-line{
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--paper-dim);
  text-align: center;
  margin-top: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px dashed var(--line);
}
.result-line strong{ color: var(--gold); font-weight: 600; }
.result-line.pending{ color: var(--paper-dim); font-style: italic; }

/* star rating widget */
.rate-row{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.65rem;
}
.star-btn{
  background: none; border: none; cursor: pointer;
  font-size: 1.1rem; line-height: 1;
  color: var(--line-strong);
  padding: 0.1rem;
  transition: color 0.1s ease, transform 0.1s ease;
}
.star-btn:hover{ transform: scale(1.15); }
.star-btn.filled{ color: var(--gold); }
.rate-avg{
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--paper-dim);
  margin-left: 0.4rem;
}

/* ============================================
   STANDINGS
   ============================================ */
.standings-wrap{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
@media (max-width: 700px){ .standings-wrap{ grid-template-columns: 1fr; } }

.block-title{
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.03em;
  margin: 0 0 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--line);
}
.block-title.block-a{ border-bottom-color: var(--vermillion); color: #ff6b9a; }
.block-title.block-b{ border-bottom-color: var(--cyan); color: #7fe3f5; }

.block-table table{ width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.82rem; }
.block-table th{
  text-align: center;
  color: var(--paper-dim);
  font-weight: 500;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  padding: 0.4rem 0.3rem;
  border-bottom: 1px solid var(--line);
}
.block-table th.col-name{ text-align: left; }
.block-table td{ text-align: center; padding: 0.5rem 0.3rem; border-bottom: 1px solid var(--line); }
.block-table td.col-name{ text-align: left; font-family: var(--font-body); font-weight: 600; }
.block-table tr:first-child td{ background: rgba(201,162,39,0.08); }
.block-table td.pts{ color: var(--gold); font-weight: 700; }
.rank-num{ display:inline-block; width:1.4em; color: var(--paper-dim); }

/* ============================================
   TOP RATED
   ============================================ */
.stars-intro{ color: var(--paper-dim); font-size: 0.85rem; max-width: 46ch; margin-bottom: 1.25rem; }
.star-leaderboard{ display: flex; flex-direction: column; gap: 0.6rem; }
.leader-row{
  display: flex; align-items: center; gap: 0.8rem;
  background: var(--sumi-raised);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.7rem 1rem;
}
.leader-rank{ font-family: var(--font-display); font-size: 1.3rem; color: var(--paper-dim); width: 1.6em; }
.leader-bout{ flex: 1; font-weight: 600; font-size: 0.9rem; }
.leader-meta{ font-family: var(--font-mono); font-size: 0.65rem; color: var(--paper-dim); }
.leader-avg{ font-family: var(--font-mono); color: var(--gold); font-weight: 700; }
.empty-state{ color: var(--paper-dim); font-family: var(--font-mono); font-size: 0.82rem; padding: 2rem 0; text-align: center; }

/* ============================================
   FOOTER
   ============================================ */
.site-footer{
  border-top: 1px solid var(--line);
  padding: 1.5rem;
  text-align: center;
}
.site-footer p{ font-family: var(--font-mono); font-size: 0.68rem; color: var(--paper-dim); max-width: 50ch; margin: 0 auto; }

@media (prefers-reduced-motion: reduce){
  .star-btn{ transition: none; }
}
