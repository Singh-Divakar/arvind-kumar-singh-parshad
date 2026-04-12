# Arvind Kumar Singh — Parshad, Ward No. 01, Gorakhpur

> **Official portfolio website** for Arvind Kumar Singh, Parshad (Ward Councillor) of Ward No. 01, Gorakhpur Nagar Nigam, Uttar Pradesh, India.

> *"Har Ghar Ki Awaaz, Har Kaam Ki Zimmedari"*
> Voice of Every Home, Responsibility of Every Task

---

## 🌐 Live Site

**[https://singh-divakar.github.io/arvind-kumar-singh-parshad/](https://singh-divakar.github.io/arvind-kumar-singh-parshad/)**

---

## 📋 About

A static, fast-loading, mobile-friendly single-page website built to:

- ✅ Highlight **completed development work** in Ward No. 01
- 🔄 Show **ongoing projects** with live progress bars
- 🎯 Communicate the **future vision and roadmap**
- 📞 Provide a **public channel for citizen queries** and complaint resolution
- 🤝 Build **trust** through transparency and accountability

---

## ✨ Features

| Feature | Description |
|---|---|
| **Sticky Navigation** | Smooth-scroll links + mobile hamburger menu |
| **Animated Impact Counters** | Numbers count up as the user scrolls |
| **Progress Bars** | Live ongoing project status with animated fill |
| **Roadmap Timeline** | Visual 3-phase development plan |
| **Public Query Section** | Stats + issue types + 5-step resolution flow |
| **Trust Pillars** | Transparency, Accountability, Accessibility, Integrity |
| **Fully Responsive** | Works on phones, tablets, desktops |
| **No Frameworks** | Pure HTML / CSS / Vanilla JS — host anywhere |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — CSS variables, Flexbox, Grid
- **Vanilla JavaScript (ES6+)** — IntersectionObserver-based animations
- **Google Fonts** — Inter (body) + Playfair Display (headings)

No build tools. No npm. No frameworks. Pure static.

---

## 📂 Project Structure

```
portfolio-website/
├── index.html              # Shell — just placeholders, no content
├── README.md               # This file
├── REQUIREMENTS.md         # Full requirements document
├── .gitignore
├── sections/               # ⭐ Edit content here — one file per section
│   ├── header.html         # Navigation menu
│   ├── hero.html           # Top banner with name & slogan
│   ├── impact-strip.html   # Number counters strip
│   ├── about.html          # About the Parshad
│   ├── achievements.html   # Completed work
│   ├── ongoing.html        # In-progress projects with progress bars
│   ├── vision.html         # Future plans + roadmap
│   ├── queries.html        # Public queries handling
│   ├── trust.html          # 4 trust pillars
│   ├── message.html        # Personal letter to citizens
│   ├── contact.html        # Contact info
│   └── footer.html         # Footer
├── css/
│   └── style.css           # All styles + theme variables
├── js/
│   ├── loader.js           # Fetches sections & boots main.js
│   └── main.js             # Interactivity, counters, animations
└── assets/                 # Images / icons (placeholder)
```

**How it works:** `index.html` is a thin shell with `<div data-section="name"></div>` placeholders. `loader.js` fetches each `sections/*.html` file and injects it into the matching placeholder, then boots `main.js` for interactivity. This keeps each section in its own small, editable file.

---

## 🚀 Run Locally

> ⚠️ **A local server is required** — the loader uses `fetch()` which browsers block on `file://` URLs. Don't double-click `index.html`; run a server instead.

```bash
# Python 3 (pre-installed on most systems)
python -m http.server 8000

# Node
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

On GitHub Pages this "just works" — Pages serves over HTTPS so `fetch()` functions normally.

---

## ✏️ How to Update Content

The site is designed so a non-technical volunteer can update it. **Each section lives in its own file in `sections/`** — edit one file, the rest stay untouched.

| Task | File | What to Edit |
|---|---|---|
| Change menu / navigation | `sections/header.html` | Edit the `<nav>` list |
| Update hero title / slogan | `sections/hero.html` | Edit the headline & quote |
| Update impact counters | `sections/impact-strip.html` | Change `data-target="120"` values |
| Update biography | `sections/about.html` | Edit paragraph text |
| Add a completed achievement | `sections/achievements.html` | Copy-paste an `.achievement-item` block |
| Add an ongoing project | `sections/ongoing.html` | Copy-paste a `.progress-item` block |
| Update progress bar % | `sections/ongoing.html` | Change `data-progress="50"` value |
| Update vision / roadmap | `sections/vision.html` | Edit vision cards or roadmap phases |
| Add a trust pillar | `sections/trust.html` | Copy-paste a `.trust-card` block |
| Edit public message | `sections/message.html` | Edit the letter paragraphs |
| Update contact info | `sections/contact.html` | Edit `.contact-card` blocks |
| Change theme colors | `css/style.css` | `:root` variables at the very top |
| Change fonts | `css/style.css` | `--font-main` / `--font-heading` |

> 🎯 **Only ever touch `index.html` if you're adding or removing a whole section.** For content updates, always go to `sections/`.

> 📖 See **[REQUIREMENTS.md](REQUIREMENTS.md)** for the full requirements and update workflow.

---

## 🚢 Deployment

This site is deployed via **GitHub Pages**.

### Re-deploying after updates

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will rebuild automatically within ~1 minute.

### Enable GitHub Pages (one-time setup)

1. Go to repo **Settings → Pages**
2. Under **Source**, select branch `main` + folder `/ (root)`
3. Click **Save**
4. Site goes live at `https://<username>.github.io/<repo-name>/`

---

## 📱 Browser Support

- ✅ Chrome 100+
- ✅ Firefox 100+
- ✅ Edge 100+
- ✅ Safari 15+
- ✅ Mobile: iOS Safari 15+, Android Chrome 100+

---

## 🎨 Design Tokens

All colors are centralized at the top of `css/style.css`:

```css
:root {
  --color-primary:  #1B4F8A;   /* deep civic blue */
  --color-accent:   #E87722;   /* saffron / orange */
  --color-green:    #2E8B57;   /* welfare / growth green */
  /* ...spacing, fonts, shadows, radii */
}
```

Change one variable → entire site re-themes.

---

## 📞 Contact

**Arvind Kumar Singh**
*Parshad (Ward Councillor) · Ward No. 01*
Gorakhpur Nagar Nigam, Uttar Pradesh – 273001, India

**Office Hours:** Mon–Sat, 10:00 AM – 1:00 PM
**Weekly Ward Sabha:** Every Sunday

---

## 📄 License

All content and code is the property of Arvind Kumar Singh. For official use only.

---

> Built with care for the people of Ward No. 01, Gorakhpur. 🇮🇳
