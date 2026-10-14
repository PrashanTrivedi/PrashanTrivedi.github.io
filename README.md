# Prashant Trivedi — Academic Homepage

Source for my personal academic website, hosted on GitHub Pages:
**https://prashantrivedi.github.io**

I am an Assistant Professor in the Department of Computer Science and Information Systems at BITS Pilani, Pilani Campus. My research is on multi-agent reinforcement learning, decision making, and the theory of generative models.

## Pages

| Page | Contents |
| --- | --- |
| [`index.html`](index.html) | About me, plus the News & Announcements feed (`index.html#news`) |
| [`bio.html`](bio.html) | Education and professional experience |
| [`research.html`](research.html) | Research overview, journal and conference publications, preprints |
| [`teaching.html`](teaching.html) | Current courses and past teaching experience |
| [`CV-Prashant.pdf`](assets/docs/CV-Prashant.pdf) | Full CV |

## Structure

```
.
├── index.html                 # Home / About / News
├── bio.html                   # Education & experience
├── research.html              # Publications
├── teaching.html              # Courses
├── README.md
└── assets/
    ├── css/
    │   └── style.css          # Single shared stylesheet for all pages
    ├── js/
    │   └── template.js        # Shared navigation bar and sidebar
    ├── images/
    │   ├── profile-pic.jpg    # Sidebar photo
    │   └── logos/             # Institution logos (BITS, IIT Bombay, UCF, etc.)
    └── docs/
        └── CV-Prashant.pdf    # CV
```

This is a plain static site with no build step and no dependencies.

- **Shared layout:** `assets/js/template.js` puts the same navigation bar and sidebar (photo, affiliation, contact links) into every page. Each page has an empty `<header id="main-header">` and `<aside id="main-sidebar">`, and loads the script at the end of `<body>`. To change a nav link or contact detail, edit `assets/js/template.js` and every page updates.
- **Styling:** every page links the same `assets/css/style.css`, which has sections for each page and a mobile layout below 768px, where the sidebar stacks above the content. Put new styles there, not in inline `<style>` blocks.

## Common updates

**Add a news item.** In `index.html`, add a block at the top of the News section:

```html
<div class="news-item">
    <div class="date">Mon YYYY</div>
    <p>What happened.</p>
</div>
```

**Add a publication.** Add an entry under the right heading in `research.html`: *Selected Journal Publications*, *Referred Conferences Publications*, or *Preprints*.

**Add a course.** Add it under *Current Courses* in `teaching.html`. When the semester ends, move it to *Past Teaching Experience*.

**Update the CV.** Replace `assets/docs/CV-Prashant.pdf` and keep the same filename so existing links still work.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Pushing to `main` publishes the site through GitHub Pages. Changes usually go live within a minute or two.

## Contact

- Email: prashant.trivedi@pilani.bits-pilani.ac.in
- [Google Scholar](https://scholar.google.com/citations?user=05_8-qUAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/prashant-trivedi-59784a143/)
