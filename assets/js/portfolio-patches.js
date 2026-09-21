const portfolioPatchCss = document.createElement("link");
portfolioPatchCss.rel = "stylesheet";
portfolioPatchCss.href = "/assets/css/portfolio-patches.css?v=2";
document.head.appendChild(portfolioPatchCss);

const exactGameIcons = {
  "Arrow Puzzle Games: Arrow Play": "https://play-lh.googleusercontent.com/LwU9o0ySVEOaDVG2q3lOcVD9AKynrYad9A10q6fesbElWut9RxjbidqWpI8OCXhAwgXTy7_AqtoKYwG6cy23Rw=w240-h480",
  "Mini Games": "https://play-lh.googleusercontent.com/oNf74glg7hATHG3uWA_M-jnk7nEODWJ1Sej9b3lgjNof_V-11WU482epPUEAcL7WB5J44JKl44yc4OGf4YL7SQ=w240-h480",
  "Bus Color Sort: Parking Jam": "https://play-lh.googleusercontent.com/GvB9nDhK2uoJuK1eLliNV-_ra7f_ad616iEjbUZPraWLD4vBO8zL5tCKCf7guK8MjR1ztd9apREScofNpH6J=w240-h480",
  "Color Sort Puzzle Game": "https://play-lh.googleusercontent.com/9GJkYQqYcL-MB5ainUiEK7-5ZlaD11DhyVE0s0cP6SydWSY7JVcbeepRRRj97M64wsIfjivb76HdUcrm_Ibliw=w240-h480",
  "Cooking Shawarma Idle Game": "https://play-lh.googleusercontent.com/Ub0AxWD8GQzWEhuLsIK2J54Y_UuhU8jRQ2Jlfw1BAZ_WyZJXswKz_iD_VJ5ZFvvzqlqpw9pDW1wWJphr6-FO1Q=w240-h480",
  "Antistress Relaxing Mini Game": "https://play-lh.googleusercontent.com/dlIVwFVOA5r_RfeRaIB__YQsdIlrOpQ-Q6s4vJuWOIFZ-7qwhW6p2OnPDWm0nVU9ZxdzlUExpkwRWqHgibUv=w240-h480",
  "3D Bike Stunt Game: Bike Race": "https://play-lh.googleusercontent.com/eRzidnSfa-uAvoa4H6P2oLZcWcQXHmOEhp-KH3gFtvrYAAxy2Mr7WUosJL-wFmT8zq2wLZa1zdqoNH-vgUBJ=w240-h480",
  "Rescue Girl: Solve the Puzzle": "https://play-lh.googleusercontent.com/nDNlB4CIAq0fK248hK0DjOZbF1SA4ibnHLEMBijDFOdyBJ9XxHneh3nT5WbfJ25Ep1ImD5lLQMx5hle64JdcWms=w240-h480",
  "Worldcup Soccer Game Champion": "https://play-lh.googleusercontent.com/ajVgTpSuzexRkwC11xy3QtXtR6ispeJ5Vuvn9oJNmfAwEGw-Sdmud4-KbmqiqS4R2A=w240-h480"
};

function applyExactGameIcons() {
  document.querySelectorAll(".game-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const iconUrl = exactGameIcons[title];
    if (!title || !iconUrl) return;

    const frame = card.querySelector(".game-icon-frame");
    if (frame && frame.dataset.exactIcon !== iconUrl) {
      frame.dataset.exactIcon = iconUrl;
      frame.innerHTML = `<img src="${iconUrl}" alt="${title} app icon" loading="lazy" referrerpolicy="no-referrer">`;
    }

    const visual = card.querySelector(".game-visual");
    if (visual) {
      let backdrop = visual.querySelector(".game-backdrop");
      if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "game-backdrop";
        visual.prepend(backdrop);
      }
      backdrop.style.backgroundImage = `url('${iconUrl}')`;
    }
  });
}

function addSdkPlatformSection() {
  if (document.getElementById("sdk-platforms")) return;
  const collaborate = document.getElementById("collaborate");
  if (!collaborate) return;

  const section = document.createElement("section");
  section.className = "section sdk-platform-section";
  section.id = "sdk-platforms";
  section.innerHTML = `
    <div class="section-heading reveal is-visible">
      <span class="section-kicker">05 // SDKs & PLATFORMS</span>
      <h2>SDKs, monetization & distribution <span>I work with.</span></h2>
      <p>Hands-on experience integrating monetization, analytics, live-ops services and publishing games across mobile, mini-game and web game platforms.</p>
    </div>

    <div class="sdk-platform-grid">
      <article class="sdk-platform-card reveal is-visible">
        <div class="sdk-platform-icon"><i class="fa-solid fa-coins"></i></div>
        <span class="sdk-platform-label">MONETIZATION & MEDIATION</span>
        <h3>Ad SDKs</h3>
        <p>Ad integration, mediation setup, debugging and release support for production games.</p>
        <div class="sdk-badges"><span><i class="fa-brands fa-google"></i> AdMob</span><span><i class="fa-solid fa-layer-group"></i> AppLovin MAX</span><span><i class="fa-solid fa-bullseye"></i> TopOn</span></div>
      </article>

      <article class="sdk-platform-card reveal is-visible">
        <div class="sdk-platform-icon"><i class="fa-solid fa-fire-flame-curved"></i></div>
        <span class="sdk-platform-label">ANALYTICS & LIVE OPS</span>
        <h3>Firebase</h3>
        <p>Production monitoring, player behavior analysis and remote tuning after release.</p>
        <div class="sdk-badges"><span><i class="fa-solid fa-chart-line"></i> Analytics</span><span><i class="fa-solid fa-bug"></i> Crashlytics</span><span><i class="fa-solid fa-sliders"></i> Remote Config</span></div>
      </article>

      <article class="sdk-platform-card reveal is-visible">
        <div class="sdk-platform-icon"><i class="fa-solid fa-gamepad"></i></div>
        <span class="sdk-platform-label">MINI-GAME & WEB DISTRIBUTION</span>
        <h3>Game Platforms</h3>
        <p>Experience adapting and publishing game experiences beyond traditional app stores.</p>
        <div class="sdk-badges"><span><i class="fa-brands fa-tiktok"></i> TikTok Mini Games</span><span><i class="fa-solid fa-play"></i> Playgama</span><span><i class="fa-solid fa-globe"></i> GameMonetize</span></div>
      </article>

      <article class="sdk-platform-card reveal is-visible">
        <div class="sdk-platform-icon"><i class="fa-solid fa-store"></i></div>
        <span class="sdk-platform-label">STORE PUBLISHING</span>
        <h3>Publishing Channels</h3>
        <p>Release preparation and publishing support across Google Play and alternative Android ecosystems.</p>
        <div class="sdk-badges"><span>Google Play</span><span>Transsion</span><span>XGames</span><span>XPlay</span><span>Vivo Store</span><span>Mi Store</span></div>
      </article>
    </div>`;

  collaborate.before(section);

  const nav = document.getElementById("navLinks");
  if (nav && !nav.querySelector('a[href="#sdk-platforms"]')) {
    const faqLink = nav.querySelector('a[href="#faq"]');
    const sdkLink = document.createElement("a");
    sdkLink.href = "#sdk-platforms";
    sdkLink.textContent = "SDKs";
    if (faqLink) nav.insertBefore(sdkLink, faqLink); else nav.appendChild(sdkLink);
    sdkLink.addEventListener("click", () => {
      nav.classList.remove("open");
      const toggle = document.getElementById("navToggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  [["collaborate","06 // COLLABORATE"],["faq","07 // FAQ"],["education","08 // EDUCATION"],["contact","09 // CONTACT"]].forEach(([id,text]) => {
    const kicker = document.querySelector(`#${id} .section-kicker`);
    if (kicker) kicker.textContent = text;
  });
}

function initializePortfolioPatches() {
  addSdkPlatformSection();
  applyExactGameIcons();
  const grid = document.getElementById("gamesGrid");
  if (grid) new MutationObserver(applyExactGameIcons).observe(grid,{childList:true,subtree:true});
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePortfolioPatches);
else initializePortfolioPatches();
