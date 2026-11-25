# Mohammed Isa Dikko: Portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Folder structure

```
portfolio/
  index.html
  vercel.json
  css/style.css
  js/data.js      <- ALL your content (text, projects, links)
  js/main.js      <- behaviour (you rarely need to edit this)
  assets/
    favicon.svg
    portrait.jpg   <- add your photo (optional)
    projects/      <- add your project images here
```

## Edit your content

Open `js/data.js`. Change your email, social links, about text, stats, services,
toolbox and projects. To add a case study, copy one project block, give it a new
unique `slug`, and fill it in. To add images, put them in `assets/projects/` and set
`cover: "assets/projects/your-image.jpg"` and `gallery: [...]`.

Every case study has its own link: `yoursite.com/#case/sales-dashboard`.

## Run locally

Double-click `index.html`, or run `npx serve` in this folder.

## Deploy to Vercel

1. Put this folder in a GitHub repository and push it.
2. On vercel.com choose Add New, then Project, then import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click Deploy.

Or with the CLI: `npm i -g vercel`, then run `vercel` inside this folder.
