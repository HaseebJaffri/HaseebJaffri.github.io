const enhancementStyles = document.createElement("link");
enhancementStyles.rel = "stylesheet";
enhancementStyles.href = "/assets/css/portfolio-enhancements.css?v=2";
document.head.appendChild(enhancementStyles);

const TOTAL_GAMES = 100;

const games = [
  { title: "Nut & Bolt: Screw Puzzle Games", genre: "Puzzle", category: "Puzzle", fallback: "🔩", iconUrl: "https://play-lh.googleusercontent.com/gccHQHPfVwnqhbkqNF7LddY3fHkDMK97xcfvEcwYLJMtwJZ3SHlX2JEJ9SDmLmLgayDoYME8T5lEr3dTiML6Kg=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mgs.nuts.and.bolts.puzzle.game" },
  { title: "Antistress: Relaxing Toy Games", genre: "Simulation", category: "Simulation", fallback: "🫧", iconUrl: "https://play-lh.googleusercontent.com/xNLY3UU-m7FOjOK3_8L9QEqJ5v1c8ifcg70JTsOpzDI_eBP67Vd-WVjaZ61yU4fVG4VKCz8sUmIcsQ8PQNk8=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mishi.antistress.relief.relaxing.calming.games" },
  { title: "Arrow Puzzle Games: Arrow Play", genre: "Puzzle", category: "Puzzle", fallback: "🏹", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.mgs.snakeescape.arrow.path.pencil.out" },
  { title: "Western Girls Fashion Game", genre: "Casual", category: "Casual", fallback: "👗", iconUrl: "https://play-lh.googleusercontent.com/XM1_02TR3_9HYQgTF7qAlul6WCz48Elc8h5gQmBERWBfiQQ1bufRqGT53voaaCBUEdbo56uhXklEs7sKM1E-JQ=w240-h480", url: "https://play.google.com/store/apps/details?id=com.msh.fashion.girl.game.offline.free" },
  { title: "Ultimate Bottle Flip 3D Game", genre: "Casual", category: "Casual", fallback: "🧴", iconUrl: "https://play-lh.googleusercontent.com/Yq_TYHmJ5hHtn9nVQtAqK-QZJJJ7qmhjLQ3RdiEDdXpZatSrDUeCLiuUqke6xmK_oUh32zvnWxzn5VTSUjRS9hU=w240-h480", url: "https://play.google.com/store/apps/details?id=com.fc.p.jb.water.bottle.flip.tap.jump.game" },
  { title: "Car Racing - Car Race 3D Game", genre: "Racing", category: "Racing", fallback: "🏎️", iconUrl: "https://play-lh.googleusercontent.com/HwESKoCG_fL9AdmXNIhd5r0utus20VNiKhN4ngP4jbQTbGYRavw_7XEF1TjNb9pRLjeLpIPKJ0jmxSVeqRltTA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mishi.traffic.rider.car.racing.game" },
  { title: "Impossible Car Stunt Game 3D", genre: "Stunt", category: "Racing", fallback: "🚗", iconUrl: "https://play-lh.googleusercontent.com/NDzTQLE2-xK9LnXRoVKqRNAanFcxIut3q7cpGkge_Xw9CVNgCpr2EFTqYVv0CQ87FYmkaKtvWVnYvZhxzSTpWA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mega.stunt.games.mishi.car.racing" },
  { title: "Tile Match Puzzle Game", genre: "Puzzle", category: "Puzzle", fallback: "🧩", iconUrl: "https://play-lh.googleusercontent.com/5x37WLPprpdpgC-OmZ_lKwJI5xzHARSTzDWedKNtjdpdIk4wmy4DsSDvlShjiCHlfT6SIwoNmlV2GU9BzXLP=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mgs.tilematch.puzzle.explorer.game" },
  { title: "Gun Game 3D - FPS Shooting", genre: "FPS", category: "Action", fallback: "🎯", iconUrl: "https://play-lh.googleusercontent.com/4AEDk39k0llssoGqKAdEUsiR1PvUNgbHxh8wbR5WoXPbmD2LtdBu_JPk2-XQYrP5ZQao4KCRd92zhUiMt27l=w240-h480", url: "https://play.google.com/store/apps/details?id=com.mishi.commando.shooting.real.fps" },
  { title: "Mini Games", genre: "Casual", category: "Casual", fallback: "🎮", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.msh.fun.mini.games.calm.relax.puzzle" },
  { title: "Mega Ramp Bike Stunt Games 3D", genre: "Racing", category: "Racing", fallback: "🏍️", iconUrl: "https://play-lh.googleusercontent.com/m6jaayR2e0Lae74S4ecWZhPnzglwjhpZeYbQHWj5r2qnOZ9dLf4H_pdUusWZ1hbU_E4WblwBWeD_YWuD5xkLYoM=w240-h480", url: "https://play.google.com/store/apps/details?id=bike.stunt.racing.games.moto.master" },
  { title: "Bus Driving Games: Bus Driver", genre: "Simulation", category: "Simulation", fallback: "🚌", iconUrl: "https://play-lh.googleusercontent.com/2dHcEt1EAn7gjbyp1EWNDtnby3UHHaeLljkucj7vDCigIdaFQxPw_YJvonQSZ2O53M2Y-Ar_OiDWg4BICSLwFA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.coach.bus.simulator.driving.games" },
  { title: "Car Games: Car Parking 3D", genre: "Simulation", category: "Simulation", fallback: "🅿️", iconUrl: "https://play-lh.googleusercontent.com/XQGZOY3uEnUMMKHmMFp8jHz7e_AiW3lZUi_hLcfMGdrrLMLqOogokoVb-giWBfudDxjrLOGajZnjoZK3ZlejmA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.parking.games.mishi.simulator" },
  { title: "Sniper 3D: City Gun Shooting", genre: "Shooting", category: "Action", fallback: "🔭", iconUrl: "https://play-lh.googleusercontent.com/twpnS9vcHgAcQIWLVEoheA4gvoWe-KLBDX927bx8c8aKig2xd0gJ07wCTTj3YgjGnT4=w240-h480", url: "https://play.google.com/store/apps/details?id=com.sniper.shooting.assassin3d.game" },
  { title: "Zoo Cube: Pop Blast", genre: "Puzzle", category: "Puzzle", fallback: "🦁", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.go.animal.pop.blast.puzzle.game" },
  { title: "Supermarket Store Simulator", genre: "Simulation", category: "Simulation", fallback: "🛒", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.go.supermarket.store.simulator.game" },
  { title: "Antistress: Mini Relaxing Game", genre: "Simulation", category: "Simulation", fallback: "🧘", iconUrl: "https://play-lh.googleusercontent.com/kFV3t_-KZ5aRY4nSVmi6i0ngKQNr7b9utGSyBt7P3Ye8jHiAPGeBuUT-gsHCuSLP9d9bHZRRjahmvVgP6Cjd=w240-h480", url: "https://play.google.com/store/apps/details?id=com.antistress.relief.relaxing.calming.games" },
  { title: "Color Sort - Water Sort Puzzle", genre: "Puzzle", category: "Puzzle", fallback: "🧪", iconUrl: "https://play-lh.googleusercontent.com/0f6MICbNlU6h5lZklpiKI6h1epdiZtIFNtYsco1AZJKlDKgz2J3B8dElH2s4G0VV6LbsrU7mObBCby4GofXnfA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.water.color.sort.puzzle.games3d" },
  { title: "Garage Tycoon: Idle Car Empire", genre: "Arcade / Simulation", category: "Simulation", fallback: "🔧", iconUrl: "https://play-lh.googleusercontent.com/-z15OyrgB63lT3b5t0pXRw1YWR5OMH8OKF5_0MRtXgwRZca3pncVVNwgSxNEM4-Vz2S7Fy9izcX44DnFeCqXMA=w240-h480", url: "https://play.google.com/store/apps/details?id=com.go.garage.empire.idle.tycoon.fix.car.mechanic" },
  { title: "Knock Blast: Ball Smash", genre: "Arcade", category: "Action", fallback: "💥", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.go.knockblast.ballsmash" },
  { title: "Bus Color Sort: Parking Jam", genre: "Puzzle", category: "Puzzle", fallback: "🚍", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.ma.color.bus.parking.jam.sort.puzzle" },
  { title: "Color Sort Puzzle Game", genre: "Puzzle", category: "Puzzle", fallback: "🌈", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.mlm.offline.water.sort.color.puzzle.games" },
  { title: "Cooking Shawarma Idle Game", genre: "Role Playing", category: "Casual", fallback: "🌯", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.mnm.idle.cooking.game.offline" },
  { title: "Antistress Relaxing Mini Game", genre: "Casual", category: "Casual", fallback: "🕹️", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.msht.casual.fun.relaxing.pocket.game" },
  { title: "3D Bike Stunt Game: Bike Race", genre: "Racing", category: "Racing", fallback: "🏍️", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.msh.bike.racing.ramps.offline.casual.free" },
  { title: "Rescue Girl: Solve the Puzzle", genre: "Strategy", category: "Puzzle", fallback: "🧠", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.malam.rescue.offline.casual.girl.game" },
  { title: "Worldcup Soccer Game Champion", genre: "Sports", category: "Casual", fallback: "⚽", iconUrl: "", url: "https://play.google.com/store/apps/details?id=com.msh.ft.soccer.football.game.free" },
  { title: "Bus Simulator: Driving Games", genre: "Simulation", category: "Simulation", fallback: "🚌", iconUrl: "", url: "https://play.google.com/store/search?q=Bus%20Simulator%3A%20Driving%20Games&c=apps" }
];

const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("gameSearch");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const gameCount = document.getElementById("gameCount");
const profileGameCount = document.getElementById("profileGameCount");
let activeFilter = "all";
let query = "";

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

function iconMarkup(game) {
  if (!game.iconUrl) return `<div class="game-fallback" aria-hidden="true">${game.fallback}</div>`;
  return `<img src="${game.iconUrl}" alt="${escapeHtml(game.title)} app icon" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.innerHTML='<div class=&quot;game-fallback&quot;>${game.fallback}</div>'">`;
}

function renderGames() {
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGames = games.filter((game) => {
    const filterMatch = activeFilter === "all" || game.category === activeFilter;
    const searchMatch = !normalizedQuery || `${game.title} ${game.genre} ${game.category}`.toLowerCase().includes(normalizedQuery);
    return filterMatch && searchMatch;
  });

  if (!visibleGames.length) {
    grid.innerHTML = '<div class="no-games">No games match that filter. Try another category or search term.</div>';
    return;
  }

  grid.innerHTML = visibleGames.map((game, index) => `
    <article class="game-card">
      <div class="game-visual">
        ${game.iconUrl ? `<div class="game-backdrop" style="background-image:url('${game.iconUrl}')"></div>` : ""}
        <span class="game-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="play-badge"><i class="fa-brands fa-google-play"></i> Play Store</span>
        <div class="game-icon-frame">${iconMarkup(game)}</div>
      </div>
      <div class="game-body">
        <div class="game-type">${escapeHtml(game.genre)}</div>
        <h3>${escapeHtml(game.title)}</h3>
        <div class="game-meta"><span>Unity</span><span>Android</span><span>${escapeHtml(game.category)}</span></div>
        <a class="game-link" href="${game.url}" target="_blank" rel="noreferrer">View game <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </article>
  `).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderGames();
  });
});

if (searchInput) searchInput.addEventListener("input", (event) => {
  query = event.target.value;
  renderGames();
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}

function setCounterTarget(element, target, suffix = "") {
  if (!element) return;
  element.dataset.counterTarget = String(target);
  element.dataset.counterSuffix = suffix;
  element.textContent = `0${suffix}`;
}

function animateCounter(element) {
  if (element.dataset.counterAnimated === "true") return;
  element.dataset.counterAnimated = "true";

  const target = Number(element.dataset.counterTarget || 0);
  const suffix = element.dataset.counterSuffix || "";
  const duration = target >= 100 ? 1600 : 1250;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function setupAnimatedMetrics() {
  setCounterTarget(profileGameCount, TOTAL_GAMES, "+");
  setCounterTarget(gameCount, TOTAL_GAMES, "+");

  const gameCountLabel = gameCount?.parentElement?.querySelector("span");
  if (gameCountLabel) gameCountLabel.textContent = "Games developed";

  const gamesDescription = document.querySelector(".games-section .section-heading p");
  if (gamesDescription) {
    gamesDescription.textContent = `A selected set of ${games.length} Google Play titles is linked below from 100+ games I have worked on across different genres.`;
  }

  const metricElements = [...document.querySelectorAll(".profile-stats strong, .stats-strip strong")];
  metricElements.forEach((element) => {
    if (!element.dataset.counterTarget) {
      const raw = element.textContent.trim();
      const target = Number.parseInt(raw.replace(/\D/g, ""), 10);
      const suffix = raw.includes("+") ? "+" : "";
      if (Number.isFinite(target)) setCounterTarget(element, target, suffix);
    }
  });

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.45 });

  metricElements.forEach((element) => counterObserver.observe(element));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

renderGames();
setupAnimatedMetrics();
