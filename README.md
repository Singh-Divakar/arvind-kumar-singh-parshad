# Arvind Kumar Singh — Parshad, Ward No. 01, Gorakhpur

Official portfolio website for **Arvind Kumar Singh**, Parshad (Ward Councillor) of Ward No. 01, Gorakhpur Nagar Nigam, Uttar Pradesh, India.

> *"Har Ghar Ki Awaaz, Har Kaam Ki Zimmedari"*
> Voice of Every Home, Responsibility of Every Task

---

## About

A static, fast-loading, mobile-friendly single-page website built to:

- Highlight **completed development work** in Ward No. 01
- Show **ongoing projects** with live progress bars
- Communicate the **future vision and roadmap**
- Provide a **public channel for citizen queries** and complaint resolution
- Build **trust** through transparency and accountability

## Tech Stack

- HTML5
- CSS3 (CSS variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts: Inter + Playfair Display

No frameworks. No build tools. Pure static — host it anywhere.

## Project Structure

```
portfolio-website/
├── index.html          # Main page
├── README.md           # This file
├── REQUIREMENTS.md     # Full requirements document
├── css/
│   └── style.css       # All styles + theme variables
├── js/
│   └── main.js         # Interactivity, counters, animations
└── assets/             # Images / icons (placeholder)
```

## Run Locally

Open `index.html` directly in any browser. No server needed.

Or run a simple local server:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Then visit `http://localhost:8000`.

## How to Update Content

| Task | Where | What to Edit |
|---|---|---|
| Change theme colors | `css/style.css` | `:root` variables at the top |
| Add a completed achievement | `index.html` | Copy-paste an `.achievement-item` block |
| Add an ongoing project | `index.html` | Copy-paste a `.progress-item` block |
| Update progress bar % | `index.html` | Change `data-progress="50"` value |
| Update impact counter | `index.html` | Change `data-target="120"` value |
| Update contact info | `index.html` | Edit `.contact-card` blocks |

See `REQUIREMENTS.md` for the full requirements and update workflow.

## Deployment

This site is deployed via **GitHub Pages** and runs at:

`https://<your-username>.github.io/<repo-name>/`

### Re-deploying after updates

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will rebuild automatically within ~1 minute.

## License

All content and code is the property of Arvind Kumar Singh. For official use only.

---

**Contact:** Ward Office, Ward No. 01, Gorakhpur Nagar Nigam, Uttar Pradesh – 273001
