# Dave Gulli — portfolio site

A static, animated portfolio site built from my resume. Plain HTML, CSS and JavaScript, no build step, hosted on GitHub Pages.

## Editing content

All content lives in **`js/data.js`**. Edit the text there and both the site (`index.html`) and the printable resume (`resume.html`) update.

| File | What it does |
| --- | --- |
| `js/data.js` | All resume content, in one object |
| `js/main.js` | Renders the sections and runs the menu, theme toggle and scroll animations |
| `css/style.css` | Styles. Colours and fonts are variables at the top |
| `resume.html` | Print-friendly resume, generated from the same data |
| `assets/Dave-Gulli-Resume.pdf` | The downloadable resume |

To refresh the PDF after changing `js/data.js`:

```bash
npm i playwright && node scripts/build-pdf.js
```

To change the photo, replace `assets/dave-gulli.jpg` (square crop works best). Removing the `photo` line in `js/data.js` falls back to an initials avatar.

## Publishing on GitHub Pages

In the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick the branch and the `/ (root)` folder, and save. The site appears at `https://dgulli.github.io/dgulliresume/` a minute or two later.

## Previewing locally

```bash
python3 -m http.server 8000
```
