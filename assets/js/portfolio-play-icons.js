const playStoreApps = {
  "Zoo Cube: Pop Blast": "https://play.google.com/store/apps/details?id=com.go.animal.pop.blast.puzzle.game",
  "Supermarket Store Simulator": "https://play.google.com/store/apps/details?id=com.go.supermarket.store.simulator.game",
  "Knock Blast: Ball Smash": "https://play.google.com/store/apps/details?id=com.go.knockblast.ballsmash",
  "Bus Simulator: Driving Games": "https://play.google.com/store/apps/details?id=com.mlm.city.bus.simulator.racing.challenge.pakring.game"
};

function microlinkPlayImage(playUrl) {
  return `https://api.microlink.io/?url=${encodeURIComponent(playUrl)}&embed=image.url`;
}

function applyRemainingPlayStoreIcons() {
  document.querySelectorAll('.game-card').forEach((card) => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const playUrl = playStoreApps[title];
    if (!playUrl) return;

    const iconUrl = microlinkPlayImage(playUrl);
    const frame = card.querySelector('.game-icon-frame');
    const link = card.querySelector('.game-link');
    const visual = card.querySelector('.game-visual');

    if (link) link.href = playUrl;

    if (frame && frame.dataset.playListing !== playUrl) {
      frame.dataset.playListing = playUrl;
      const fallback = frame.innerHTML;
      const img = document.createElement('img');
      img.src = iconUrl;
      img.alt = `${title} Google Play icon`;
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('error', () => { frame.innerHTML = fallback; }, { once: true });
      frame.replaceChildren(img);
    }

    if (visual) {
      let backdrop = visual.querySelector('.game-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'game-backdrop';
        visual.prepend(backdrop);
      }
      backdrop.style.backgroundImage = `url("${iconUrl}")`;
    }
  });
}

function initRemainingPlayIcons() {
  applyRemainingPlayStoreIcons();
  const grid = document.getElementById('gamesGrid');
  if (grid) {
    new MutationObserver(applyRemainingPlayStoreIcons).observe(grid, { childList: true, subtree: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRemainingPlayIcons);
} else {
  initRemainingPlayIcons();
}
