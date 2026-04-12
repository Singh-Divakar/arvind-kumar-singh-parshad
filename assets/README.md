# Assets Folder

Drop image files here. The website expects the following filenames:

| File | Purpose | Recommended Size |
|---|---|---|
| `pm-india.png` | Photo of the Prime Minister of India | 300×300 px, square |
| `cm-up.png` | Photo of the Chief Minister of Uttar Pradesh | 300×300 px, square |

## How the images are used

Both appear in the **hero section** of the home page as circular portraits
(60×60 px rendered) under the label *"Guided by the Vision of"*.

If an image is missing, the site automatically falls back to a styled
silhouette placeholder — so the page never looks broken.

## Formats

- `.png` is used here (supports transparent backgrounds nicely)
- Keep each file under **250 KB** for fast loading
- Compress PNGs at [tinypng.com](https://tinypng.com) if needed

## How to update

1. Save the official photograph as `pm-india.png` (or `cm-up.png`)
2. Place the file in this `assets/` folder
3. Commit & push — GitHub Pages will update automatically

```bash
git add assets/pm-india.png assets/cm-up.png
git commit -m "Add official leader photos to hero"
git push
```

> Always use official/public-domain photographs released for public use.
