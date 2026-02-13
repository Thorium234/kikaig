# KIKAI Girls High School Website

A static, frontend-only, magazine-style school website built with HTML, CSS, and Vanilla JavaScript.

## Project Direction

This project has been refactored from a portal-style prototype into a public information website.

It now works as:
- A school magazine
- A digital notice board
- A parent and student information hub

## Important Scope

- Frontend only
- No backend
- No databases
- No authentication
- No account or portal system

## Target Audience

- Parents and guardians
- Current and prospective students
- School staff
- Community visitors and stakeholders

## Website Sections

- Home (`index.html`)
- About the School (`about.html`)
- Academics (`academics.html`)
- Admissions (`admissions.html`)
- School Life (`school-life.html`)
- News & Announcements (`news.html`)
- Gallery (`gallery.html`)
- Library & E-Learning (`library-elearning.html`)
- Downloads (`downloads.html`)
- Contact (`contact.html`)

Additional static article pages are linked from the News section.

## Frontend Features

- Magazine-style article cards and highlight blocks
- Mobile-first responsive layout (Grid + Flexbox)
- Semantic content structure (`section`, `article`, `figure`)
- Mobile navigation toggle
- News filtering by category (content-only)
- Accessible image gallery lightbox
- Keyboard support for close interactions (`Esc` in lightbox)

## Removed Legacy Features

The following legacy files/features were removed to match the new information architecture:
- Student registration and login pages
- Dashboard pages
- Authentication logic
- `localStorage` user/account handling
- Portal/account navigation concepts

## Running Locally

1. Clone or download the project.
2. Open the folder in your editor.
3. Open `index.html` directly in a browser.

Optional local static server:

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

## Deployment

### GitHub Pages

1. Push to GitHub.
2. Go to `Settings` > `Pages`.
3. Select `Deploy from a branch`.
4. Choose `main` and `/ (root)`.
5. Save and use the generated URL.

### Netlify

1. Import the GitHub repository into Netlify.
2. Build command: leave empty.
3. Publish directory: `/` (root).
4. Deploy.

## Future Enhancements (Optional)

Not implemented in this version:
- CMS integration for easy article publishing
- Backend API for dynamic news and events
- Search and tagging for archive content
- Admin editorial workflow

## Academic Evaluation Notes

This project is suitable for academic frontend review because it demonstrates:
- Information architecture refactoring
- Content-focused UX design
- Responsive, accessible static pages
- Clear separation of structure (HTML), style (CSS), and interactions (JS)
