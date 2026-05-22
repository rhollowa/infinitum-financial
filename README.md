# Infinitum Financial

Static site for [infinitum-financial.com](https://infinitum-financial.com). Served via GitHub Pages from the `main` branch.

## Pages

- `index.html` — Home
- `the-company.html`, `the-mission.html` — About
- `services.html` — Services index
- `valuation-services.html`, `automation.html`, `corporate-finance.html`, `investment-management.html`, `accounting-support.html` — Service pages
- `contact.html` — Contact form (Formspree)

## Editing

Plain HTML. No build step. Edit a file, commit, push — GitHub Pages picks it up within a minute.

Shared styles in `assets/css/styles.css`. Header/footer markup is duplicated on each page; if you edit nav links, edit them everywhere.

## Contact form

The contact form posts to Formspree. Replace `YOUR_FORM_ID` in `contact.html` with a real Formspree endpoint before going live.

## Domain

`infinitum-financial.com` is configured in `CNAME`. Point the apex A records and the `www` CNAME at GitHub Pages per their docs.
