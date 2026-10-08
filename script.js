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
  { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Header gets a hairline once the page has moved
const head = document.querySelector('.site-head');
const onScroll = () => head.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

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
