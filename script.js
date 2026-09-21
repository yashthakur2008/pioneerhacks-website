const root = document.documentElement;
function updateScrollIntro() {
  const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.95, 1), 1);
  root.style.setProperty('--scroll', progress.toFixed(4));
}
updateScrollIntro();
window.addEventListener('scroll', updateScrollIntro, { passive: true });
window.addEventListener('resize', updateScrollIntro);
