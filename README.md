# KIKAI Girls High School Website

A static institutional website for KIKAI Girls High School, built with HTML, CSS, and Vanilla JavaScript.

## Project Purpose

This project delivers a professional, public-facing school website inspired by institutional information architecture patterns used by higher education websites.

It is designed as:
- An institutional information portal
- A school news and events publication
- A parent and student information hub

## Scope

- Frontend only
- No backend
- No database
- No authentication/login system
- No user account persistence

## Target Audience

- Parents and guardians
- Current and prospective students
- School administrators and staff
- Community stakeholders and education partners

## Content Flow and Site Sections

- `index.html` - Home (hero, mission/vision snippets, carousel, highlights)
- `about.html` - About (history, values, governance)
- `academics.html` - Academics (programmes, departments, calendar overview)
- `news.html` - News & Events (article cards, filtering, expandable events)
- `school-life.html` - School Life (clubs, sports, extracurriculars)
- `resources.html` - Resources (library content, downloads, e-learning links)
- `contact.html` - Contact (contacts, map embed, frontend-only form stub)
- `gallery.html` - Gallery (image collections with captions and lightbox)
- `article-*.html` - Full article detail pages

## Frontend Features

- Mobile navigation toggle
- Active page navigation highlighting
- News category filtering
- Homepage news highlights carousel
- Expand/collapse event items
- Accessible gallery lightbox
- Contact form stub interaction (no backend submission)
- Responsive layout with CSS Grid/Flexbox

## Folder Structure

```text
kikaiwebsite/
├── index.html
├── about.html
├── academics.html
├── news.html
├── school-life.html
├── resources.html
├── contact.html
├── gallery.html
├── article-*.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

## Deployment

### Local preview

```bash
python -m http.server 8000
```

Open: `http://localhost:8000`

### GitHub Pages

1. Push repository to GitHub.
2. In repository settings, open `Pages`.
3. Select `Deploy from a branch`.
4. Choose `main` and root `/`.
5. Save and open generated site URL.

### Netlify

1. Import repository into Netlify.
2. Build command: none.
3. Publish directory: root `/`.
4. Deploy.

## UX Rationale

The site emphasizes institutional trust and content discoverability by:
- Grouping information by user intent (about, academics, events, resources, contact)
- Using card-based summaries for quick scanning
- Providing consistent navigation and content hierarchy
- Keeping interactions lightweight and accessible

## Future Frontend-Only Enhancements

- Multi-language support toggle
- Search and tag filtering across news posts
- Homepage featured announcements ticker
- Static yearly archive pages for institutional records
