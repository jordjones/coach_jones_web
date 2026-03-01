# coach_jones_web — Coach Jones LLC Corporate Website

Static marketing site for Coach Jones LLC, an ML/AI consulting firm specializing in predictive analytics for alternative assets.

## Stack

- Static HTML5 / CSS3 / vanilla JS (no build tools, no backend)
- Google Fonts: Raleway (body/brand), Cormorant Garamond (headings)
- Responsive: single breakpoint at 768px

## Brand Identity

| Element | Value |
|---------|-------|
| Primary green | `#1a5d1a` (--color-green) |
| Accent gold | `#c9920e` (--color-gold) |
| Body font | Raleway |
| Heading font | Cormorant Garamond |
| Logo (full) | `images/logo-full.svg` |
| Logo (mark) | `images/logomark.svg` |
| Favicon | `images/favicon.png` |

## Site Structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero + tagline + service overview |
| About | `about.html` | Company mission, predictive analytics focus |
| Offices | `offices.html` | Locations: Puerto Rico, Texas, Belize |
| Contact | `contact.html` | General inquiries, media, careers |
| Login | `login.html` | Client portal placeholder (non-functional) |

## File Layout

```
coach_jones_web/
├── index.html, about.html, contact.html, login.html, offices.html
├── css/styles.css          # All styles, CSS custom properties
├── js/main.js              # Mobile nav toggle only
├── images/                 # Logo SVGs + favicon
├── Branding/               # Source logo files (logo/, logo_black/, MP Tigers/)
└── screen_shots/           # Page screenshots + PDFs from initial build
```

## Page Template Pattern

Every page follows: Header (logo + nav + login button) → `<hr class="divider">` → Main content → Footer.

CSS custom properties defined in `:root` of `css/styles.css`. All styling in one file — no per-page stylesheets except inline `<style>` in `login.html`.

## Known Limitations

- **Login form is non-functional** — `action="#"`, no backend auth
- **No deployment pipeline** — local-only, no hosting configured
- **No build process** — plain files served as-is
- **Contact form** — static display only, no form submission handler

## Related Projects

- **token_coach** (`~/Documents/GitHub/token_coach`) — Tokenized Reg D 506(b) private placement infrastructure for Coach Jones LLC. Legal/smart contract companion to this marketing site.

## Session Workflow

- Start sessions with `/resume` to load active workstreams
- End sessions with `/handoff` to log progress

See @WORKLOG.md for workstreams and session history.
