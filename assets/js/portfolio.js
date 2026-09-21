const games = [
  { title: "Nut & Bolt: Screw Puzzle games", studio: "Mishi Games Studio", genre: "Puzzle", icon: "🔩", accent: "#39e7ff", url: "https://play.google.com/store/apps/details?id=com.mgs.nuts.and.bolts.puzzle.game" },
  { title: "Antistress: Relaxing Toy Games", studio: "Mishi Games Studio", genre: "Simulation", icon: "🫧", accent: "#ff4fd8", url: "https://play.google.com/store/apps/details?id=com.mishi.antistress.relief.relaxing.calming.games" },
  { title: "Arrow Puzzle Games: Arrow Play", studio: "Mishi Games Studio", genre: "Puzzle", icon: "🏹", accent: "#8b5cff", url: "https://play.google.com/store/apps/details?id=com.mgs.snakeescape.arrow.path.pencil.out" },
  { title: "Western Girls Fashion Game", studio: "Mishi Games Studio", genre: "Casual", icon: "👗", accent: "#ff71cf", url: "https://play.google.com/store/apps/details?id=com.msh.fashion.girl.game.offline.free" },
  { title: "Ultimate Bottle Flip 3D Game", studio: "Mishi Games Studio", genre: "Casual", icon: "🧴", accent: "#7dff9b", url: "https://play.google.com/store/apps/details?id=com.fc.p.jb.water.bottle.flip.tap.jump.game" },
  { title: "Car Racing - Car Race 3D Game", studio: "Mishi Games Studio", genre: "Racing", icon: "🏎️", accent: "#ff7849", url: "https://play.google.com/store/apps/details?id=com.mishi.traffic.rider.car.racing.game" },
  { title: "Car Stunt Games 3D Racing Game", studio: "Mishi Games Studio", genre: "Racing", icon: "🚗", accent: "#ffd66b", url: "https://play.google.com/store/apps/details?id=com.mega.stunt.games.mishi.car.racing" },
  { title: "Tile Match Puzzle Game", studio: "Mishi Games Studio", genre: "Puzzle", icon: "🧩", accent: "#a37bff", url: "https://play.google.com/store/apps/details?id=com.mgs.tilematch.puzzle.explorer.game" },
  { title: "Gun Game 3d-fps Shooting Games", studio: "Mishi Games Studio", genre: "FPS", icon: "🎯", accent: "#ff5d5d", url: "https://play.google.com/store/apps/details?id=com.mishi.commando.shooting.real.fps" },
  { title: "Mini Games", studio: "Mishi Games Studio", genre: "Casual", icon: "🎮", accent: "#39e7ff", url: "https://play.google.com/store/apps/details?id=com.msh.fun.mini.games.calm.relax.puzzle" },
  { title: "Mega Ramp Bike Stunt Games 3D", studio: "Mishi Games Studio", genre: "Stunt", icon: "🏍️", accent: "#ff8a3d", url: "https://play.google.com/store/apps/details?id=bike.stunt.racing.games.moto.master" },
  { title: "Bus Driving Games : Bus Driver", studio: "Mishi Games Studio", genre: "Simulation", icon: "🚌", accent: "#7dff9b", url: "https://play.google.com/store/apps/details?id=com.coach.bus.simulator.driving.games" },
  { title: "Car Games: Car Parking 3d Game", studio: "Mishi Games Studio", genre: "Simulation", icon: "🅿️", accent: "#3ad8ff", url: "https://play.google.com/store/apps/details?id=com.parking.games.mishi.simulator" },
  { title: "Sniper 3D: City Gun Shooting", studio: "Mishi Games Studio", genre: "Shooting", icon: "🔭", accent: "#ff6262", url: "https://play.google.com/store/apps/details?id=com.sniper.shooting.assassin3d.game" },
  { title: "Zoo Cube: Pop Blast", studio: "gamesodo", genre: "Puzzle", icon: "🦁", accent: "#ffd66b", url: "https://play.google.com/store/search?q=Zoo%20Cube%3A%20Pop%20Blast%20gamesodo&c=apps" },
  { title: "Supermarket Store Simulator", studio: "gamesodo", genre: "Simulation", icon: "🛒", accent: "#7dff9b", url: "https://play.google.com/store/apps/details?id=com.go.supermarket.store.simulator.game" },
  { title: "Antistress: Mini Relaxing Game", studio: "gamesodo", genre: "Casual", icon: "🧘", accent: "#ff4fd8", url: "https://play.google.com/store/apps/details?id=com.antistress.relief.relaxing.calming.games" },
  { title: "Color Water Sort Puzzle Fun", studio: "gamesodo", genre: "Puzzle", icon: "🧪", accent: "#39e7ff", url: "https://play.google.com/store/apps/details?id=com.water.color.sort.puzzle.games3d" },
  { title: "Garage Tycoon: Idle Car Empire", studio: "gamesodo", genre: "Simulation", icon: "🔧", accent: "#ff8a3d", url: "https://play.google.com/store/apps/details?id=com.go.garage.empire.idle.tycoon.fix.car.mechanic" },
  { title: "Knock Blast: Ball Smash", studio: "gamesodo", genre: "Arcade", icon: "💥", accent: "#8b5cff", url: "https://play.google.com/store/apps/details?id=com.go.knockblast.ballsmash" },
  { title: "Bus Color Sort: Parking Jam", studio: "Malam", genre: "Puzzle", icon: "🚍", accent: "#39e7ff", url: "https://play.google.com/store/apps/details?id=com.ma.color.bus.parking.jam.sort.puzzle" },
  { title: "Color Sort Puzzle Game", studio: "Malam", genre: "Puzzle", icon: "🌈", accent: "#8b5cff", url: "https://play.google.com/store/apps/details?id=com.mlm.offline.water.sort.color.puzzle.games" },
  { title: "Cooking Shawarma Idle Game", studio: "Malam", genre: "Idle", icon: "🌯", accent: "#ffb454", url: "https://play.google.com/store/apps/details?id=com.mnm.idle.cooking.game.offline" },
  { title: "Antistress Game Box", studio: "Malam", genre: "Casual", icon: "🕹️", accent: "#ff4fd8", url: "https://play.google.com/store/apps/details?id=com.msht.casual.fun.relaxing.pocket.game" },
  { title: "3D Bike Stunt Game: Bike Race", studio: "Malam", genre: "Stunt", icon: "🏍️", accent: "#ff7849", url: "https://play.google.com/store/apps/details?id=com.msh.bike.racing.ramps.offline.casual.free" },
  { title: "Rescue Girl: Solve the Puzzle", studio: "Malam", genre: "Puzzle", icon: "🧠", accent: "#a37bff", url: "https://play.google.com/store/apps/details?id=com.malam.rescue.offline.casual.girl.game" },
  { title: "Worldcup Soccer Game Champion", studio: "Malam", genre: "Sports", icon: "⚽", accent: "#7dff9b", url: "https://play.google.com/store/apps/details?id=com.msh.ft.soccer.football.game.free" },
  { title: "Bus Simulator: Driving Games", studio: "Malam", genre: "Simulation", icon: "🚌", accent: "#39e7ff", url: "https://play.google.com/store/search?q=Bus%20Simulator%3A%20Driving%20Games%20Malam&c=apps" }
];

const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("gameSearch");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const gameCount = document.getElementById("gameCount");
let activeStudio = "all";
let query = "";

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

function renderGames() {
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGames = games.filter((game) => {
    const studioMatch = activeStudio === "all" || game.studio === activeStudio;
    const searchMatch = !normalizedQuery || game.title.toLowerCase().includes(normalizedQuery) || game.genre.toLowerCase().includes(normalizedQuery) || game.studio.toLowerCase().includes(normalizedQuery);
    return studioMatch && searchMatch;
  });

  gameCount.textContent = games.length;
  if (!visibleGames.length) {
    grid.innerHTML = '<div class="no-games">No games match that filter. Try another studio or search term.</div>';
    return;
  }

  grid.innerHTML = visibleGames.map((game, index) => `
    <article class="game-card" style="--card-accent:${escapeHtml(game.accent)}">
      <div class="game-cover">
        <span class="game-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="game-cover-icon" aria-hidden="true">${game.icon}</div>
      </div>
      <div class="game-body">
        <div class="game-studio"><span>${escapeHtml(game.studio)}</span><i class="fa-brands fa-google-play" aria-label="Google Play"></i></div>
        <h3>${escapeHtml(game.title)}</h3>
        <div class="game-meta"><span>Unity</span><span>${escapeHtml(game.genre)}</span><span>Android</span></div>
        <a class="game-link" href="${game.url}" target="_blank" rel="noreferrer">View on Google Play <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </article>
  `).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeStudio = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderGames();
  });
});

searchInput.addEventListener("input", (event) => { query = event.target.value; renderGames(); });
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
renderGames();
