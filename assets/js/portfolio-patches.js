const portfolioPatchCss = document.createElement("link");
portfolioPatchCss.rel = "stylesheet";
portfolioPatchCss.href = "/assets/css/portfolio-patches.css?v=3";
document.head.appendChild(portfolioPatchCss);

const svgIcon = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const portfolioGameIcons = {
  "Arrow Puzzle Games: Arrow Play": "https://play-lh.googleusercontent.com/LwU9o0ySVEOaDVG2q3lOcVD9AKynrYad9A10q6fesbElWut9RxjbidqWpI8OCXhAwgXTy7_AqtoKYwG6cy23Rw=w240-h480",
  "Mini Games": "https://play-lh.googleusercontent.com/oNf74glg7hATHG3uWA_M-jnk7nEODWJ1Sej9b3lgjNof_V-11WU482epPUEAcL7WB5J44JKl44yc4OGf4YL7SQ=w240-h480",
  "Bus Color Sort: Parking Jam": "https://play-lh.googleusercontent.com/GvB9nDhK2uoJuK1eLliNV-_ra7f_ad616iEjbUZPraWLD4vBO8zL5tCKCf7guK8MjR1ztd9apREScofNpH6J=w240-h480",
  "Color Sort Puzzle Game": "https://play-lh.googleusercontent.com/9GJkYQqYcL-MB5ainUiEK7-5ZlaD11DhyVE0s0cP6SydWSY7JVcbeepRRRj97M64wsIfjivb76HdUcrm_Ibliw=w240-h480",
  "Cooking Shawarma Idle Game": "https://play-lh.googleusercontent.com/Ub0AxWD8GQzWEhuLsIK2J54Y_UuhU8jRQ2Jlfw1BAZ_WyZJXswKz_iD_VJ5ZFvvzqlqpw9pDW1wWJphr6-FO1Q=w240-h480",
  "Antistress Relaxing Mini Game": "https://play-lh.googleusercontent.com/dlIVwFVOA5r_RfeRaIB__YQsdIlrOpQ-Q6s4vJuWOIFZ-7qwhW6p2OnPDWm0nVU9ZxdzlUExpkwRWqHgibUv=w240-h480",
  "3D Bike Stunt Game: Bike Race": "https://play-lh.googleusercontent.com/eRzidnSfa-uAvoa4H6P2oLZcWcQXHmOEhp-KH3gFtvrYAAxy2Mr7WUosJL-wFmT8zq2wLZa1zdqoNH-vgUBJ=w240-h480",
  "Rescue Girl: Solve the Puzzle": "https://play-lh.googleusercontent.com/nDNlB4CIAq0fK248hK0DjOZbF1SA4ibnHLEMBijDFOdyBJ9XxHneh3nT5WbfJ25Ep1ImD5lLQMx5hle64JdcWms=w240-h480",
  "Worldcup Soccer Game Champion": "https://play-lh.googleusercontent.com/ajVgTpSuzexRkwC11xy3QtXtR6ispeJ5Vuvn9oJNmfAwEGw-Sdmud4-KbmqiqS4R2A=w240-h480",

  "Zoo Cube: Pop Blast": svgIcon(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#25c8ff"/><stop offset="1" stop-color="#6758ff"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-opacity=".28"/></filter></defs><rect width="512" height="512" rx="104" fill="url(#b)"/><circle cx="72" cy="82" r="86" fill="#fff" opacity=".12"/><g filter="url(#s)"><rect x="82" y="92" width="154" height="154" rx="34" fill="#ffcf4b"/><rect x="276" y="92" width="154" height="154" rx="34" fill="#ff687d"/><rect x="82" y="278" width="154" height="154" rx="34" fill="#61df86"/><rect x="276" y="278" width="154" height="154" rx="34" fill="#9b6cff"/></g><g fill="#26324c"><circle cx="132" cy="156" r="12"/><circle cx="186" cy="156" r="12"/><path d="M130 195q29 27 58 0" fill="none" stroke="#26324c" stroke-width="12" stroke-linecap="round"/><circle cx="326" cy="156" r="12"/><circle cx="380" cy="156" r="12"/><path d="M325 195q28 25 56 0" fill="none" stroke="#26324c" stroke-width="12" stroke-linecap="round"/><circle cx="132" cy="342" r="12"/><circle cx="186" cy="342" r="12"/><path d="M130 381q29 27 58 0" fill="none" stroke="#26324c" stroke-width="12" stroke-linecap="round"/><circle cx="326" cy="342" r="12"/><circle cx="380" cy="342" r="12"/><path d="M325 381q28 25 56 0" fill="none" stroke="#26324c" stroke-width="12" stroke-linecap="round"/></g><path d="M112 117l-23-29 40 6M401 117l22-29-40 6" fill="#26324c" opacity=".8"/></svg>`),

  "Knock Blast: Ball Smash": svgIcon(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#24cfff"/><stop offset="1" stop-color="#3869ff"/></linearGradient><radialGradient id="ball"><stop stop-color="#fff59a"/><stop offset=".5" stop-color="#ffc739"/><stop offset="1" stop-color="#ff7f22"/></radialGradient></defs><rect width="512" height="512" rx="104" fill="url(#g)"/><g opacity=".98"><rect x="300" y="100" width="118" height="94" rx="16" fill="#ff654e" transform="rotate(10 359 147)"/><rect x="305" y="205" width="126" height="96" rx="16" fill="#ff914d" transform="rotate(-6 368 253)"/><rect x="284" y="316" width="132" height="98" rx="16" fill="#ffcb4d" transform="rotate(8 350 365)"/></g><g stroke="#fff" stroke-linecap="round" opacity=".95"><path d="M207 205l70-54" stroke-width="18"/><path d="M220 245l82-13" stroke-width="13"/><path d="M213 282l68 34" stroke-width="14"/></g><circle cx="175" cy="257" r="92" fill="url(#ball)"/><circle cx="145" cy="220" r="20" fill="#fff" opacity=".42"/><path d="M74 256h44M87 194l39 19M88 322l43-23" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".9"/></svg>`),

  "Supermarket Store Simulator": svgIcon(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#29d39f"/><stop offset="1" stop-color="#0f83d8"/></linearGradient></defs><rect width="512" height="512" rx="104" fill="url(#g)"/><rect x="78" y="130" width="356" height="272" rx="34" fill="#f7fbff"/><path d="M72 164h368l-28-80H100z" fill="#ff5a6d"/><path d="M114 84h60l-12 80h-74zM202 84h58v80h-70zM288 84h60l16 80h-70zM376 84h36l28 80h-52z" fill="#ffd95b"/><rect x="118" y="208" width="122" height="128" rx="16" fill="#3b93d8"/><rect x="269" y="208" width="118" height="52" rx="12" fill="#dff5ff"/><rect x="269" y="276" width="118" height="60" rx="12" fill="#dff5ff"/><path d="M258 365h129l20-73H281l-12-42h-45" fill="none" stroke="#33445f" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="288" cy="390" r="17" fill="#33445f"/><circle cx="378" cy="390" r="17" fill="#33445f"/><circle cx="178" cy="248" r="21" fill="#fff" opacity=".9"/></svg>`),

  "Bus Simulator: Driving Games": svgIcon(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#28b9ff"/><stop offset="1" stop-color="#6545e8"/></linearGradient></defs><rect width="512" height="512" rx="104" fill="url(#g)"/><path d="M58 414h396L356 270H158z" fill="#27334e"/><path d="M208 414l48-144M304 414l-48-144" stroke="#fff" stroke-width="12" stroke-dasharray="24 20" opacity=".85"/><g opacity=".42" fill="#dff5ff"><rect x="70" y="86" width="58" height="118" rx="8"/><rect x="140" y="62" width="66" height="142" rx="8"/><rect x="386" y="84" width="54" height="120" rx="8"/></g><g transform="translate(118 100)"><rect x="0" y="0" width="276" height="250" rx="44" fill="#ffca39"/><rect x="24" y="28" width="228" height="92" rx="20" fill="#163c60"/><rect x="32" y="140" width="212" height="52" rx="15" fill="#fff4cf"/><rect x="40" y="151" width="65" height="30" rx="8" fill="#ff7d4b"/><rect x="139" y="151" width="65" height="30" rx="8" fill="#ff7d4b"/><circle cx="60" cy="232" r="29" fill="#25314b"/><circle cx="216" cy="232" r="29" fill="#25314b"/><rect x="103" y="52" width="70" height="12" rx="6" fill="#7be5ff"/></g></svg>`)
};

const gameLinkOverrides = {
  "Bus Simulator: Driving Games": "https://play.google.com/store/apps/details?id=com.mlm.city.bus.simulator.racing.challenge.pakring.game"
};

function applyExactGameIcons() {
  document.querySelectorAll(".game-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const iconUrl = portfolioGameIcons[title];
    if (!title) return;

    if (iconUrl) {
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
        backdrop.style.backgroundImage = `url("${iconUrl}")`;
      }
    }

    const newLink = gameLinkOverrides[title];
    const anchor = card.querySelector(".game-link");
    if (newLink && anchor) anchor.href = newLink;
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
