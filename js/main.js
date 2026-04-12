/* ==========================================================
   PORTFOLIO WEBSITE – Arvind Kumar Singh, Parshad Ward 01
   main.js
   ----------------------------------------------------------
   Features:
   1.  Sticky header shadow on scroll
   2.  Mobile hamburger menu toggle
   3.  Scroll-spy: active nav link highlighting
   4.  Back-to-top button visibility
   5.  Impact counter: animates numbers up when strip enters view
   6.  Progress bar fill: animates bars when section enters view
   7.  Scroll-triggered fade-in on all cards
   ========================================================== */

/* ── 1. STICKY HEADER SHADOW ─────────────────────────────── */
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.28)'
    : '';
}, { passive: true });

/* ── 2. MOBILE HAMBURGER MENU ────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav when a nav link is tapped on mobile
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── 3. SCROLL SPY ───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const activeStyle = document.createElement('style');
activeStyle.textContent = `.main-nav a.active { background: rgba(255,255,255,0.20); color: #fff !important; }`;
document.head.appendChild(activeStyle);

function updateActiveLink() {
  let currentId = '';
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top <= 90) currentId = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ── 4. BACK-TO-TOP BUTTON ───────────────────────────────── */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ── 5. IMPACT COUNTER ANIMATION ─────────────────────────── */
//
// Counts up from 0 to data-target value when the strip
// scrolls into view. Runs once per page load.
//
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1600; // ms
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    // Ease-out quad
    const eased = 1 - (1 - progress) * (1 - progress);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterEls  = document.querySelectorAll('.impact-num');
const impactStrip = document.querySelector('.impact-strip');
let countersRun   = false;

const counterObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersRun) {
    countersRun = true;
    counterEls.forEach(el => animateCounter(el));
    counterObserver.disconnect();
  }
}, { threshold: 0.3 });

if (impactStrip) counterObserver.observe(impactStrip);

/* ── 6. PROGRESS BAR ANIMATION ───────────────────────────── */
//
// Fills each .progress-bar-fill to its data-progress width
// when the progress-section scrolls into view. Runs once.
//
const progressFills    = document.querySelectorAll('.progress-bar-fill');
const progressSection  = document.querySelector('.progress-section');
let progressAnimated   = false;

const progressObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !progressAnimated) {
    progressAnimated = true;
    // Small stagger between bars for a polished feel
    progressFills.forEach((bar, i) => {
      const pct = bar.getAttribute('data-progress');
      setTimeout(() => {
        bar.style.width = pct + '%';
      }, i * 120);
    });
    progressObserver.disconnect();
  }
}, { threshold: 0.1 });

if (progressSection) progressObserver.observe(progressSection);

/* ── 7. SCROLL-TRIGGERED FADE-IN ─────────────────────────── */
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);

// Apply fade-in to all major card types
const fadeTargets = [
  '.stat-card', '.bg-card', '.role-block',
  '.achievement-item', '.project-card',
  '.vision-card', '.contact-card',
  '.trust-card', '.progress-item',
  '.roadmap-phase', '.issue-type', '.reach-channel'
];

document.querySelectorAll(fadeTargets.join(',')).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
});

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10 }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
