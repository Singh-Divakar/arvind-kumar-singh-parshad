# Assets Folder

Drop image files here. The website expects the following filenames:

| File | Purpose | Recommended Size |
|---|---|---|
| `pm-india.jpg` | Photo of the Prime Minister of India | 300×300 px, square |
| `cm-up.jpg` | Photo of the Chief Minister of Uttar Pradesh | 300×300 px, square |

## How the images are used

Both appear in the **hero section** of the home page as circular portraits
(60×60 px rendered) under the label *"Guided by the Vision of"*.

If an image is missing, the site automatically falls back to a styled
silhouette placeholder — so the page never looks broken.

## Formats

- `.jpg` is preferred for photos (smaller file size)
- `.png` also works
- Keep each file under **200 KB** for fast loading

## How to update

1. Save the official photograph as `pm-india.jpg` (or `cm-up.jpg`)
2. Place the file in this `assets/` folder
3. Commit & push — GitHub Pages will update automatically

```bash
git add assets/pm-india.jpg assets/cm-up.jpg
git commit -m "Add official leader photos to hero"
git push
```

> Always use official/public-domain photographs released for public use.
