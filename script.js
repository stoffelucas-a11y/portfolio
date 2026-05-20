// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));

// Hide broken image icons — placeholder cells stay clean
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => { img.style.opacity = '0'; });
});

// Moodboard hover glitch — brief distortion on mouse enter
document.querySelectorAll('.m').forEach((cell) => {
  cell.addEventListener('mouseenter', () => {
    cell.classList.add('glitch-active');
    setTimeout(() => cell.classList.remove('glitch-active'), 250);
  });
});
