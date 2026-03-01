# WORKLOG — Coach Jones Web

> Last updated: 2026-03-01
> Active session: none

---

## Not Started

### client-portal
**Goal:** Make the login page functional with backend authentication
**Status:** NOT STARTED
**Context:** `login.html` exists with a styled form but `action="#"` — purely cosmetic. Likely ties into token_coach investor portal (Reg D 506(b) accredited investor access). Needs auth backend, session management, and protected content.
**Key files:** `login.html`
**Next steps:**
- [ ] Decide auth approach (standalone vs token_coach shared auth)
- [ ] Stand up backend or serverless function for login
- [ ] Add protected client dashboard page(s)

### deployment
**Goal:** Host the site publicly and set up CI/CD
**Status:** NOT STARTED
**Context:** Site is local-only. No hosting, no domain, no CI/CD. Domain `www.coachjones.co` referenced in `css/styles.css` comment but not confirmed active.
**Next steps:**
- [ ] Choose hosting (GitHub Pages, Netlify, or custom)
- [ ] Configure custom domain if available
- [ ] Add deployment workflow

### content-refresh
**Goal:** Audit and update site copy for accuracy
**Status:** NOT STARTED
**Context:** About page has aspirational copy ("quantum breakthroughs") that may need grounding. Contact page lists specific office addresses (PR, TX, Belize) — verify current. Service descriptions should align with token_coach offering language.
**Key files:** `about.html`, `contact.html`, `offices.html`
**Next steps:**
- [ ] Review about page claims against actual capabilities
- [ ] Verify office addresses are current
- [ ] Align service language with token_coach materials

---

## Completed

### static-site
**Goal:** Build the Coach Jones LLC marketing website
**Status:** COMPLETE
**Last session:** 2026-02-12
**Summary:** Built 5-page static site (home, about, contact, login, offices) with full branding — green/gold palette, Raleway + Cormorant Garamond typography, responsive layout at 768px breakpoint. Includes logo variants (full SVG, logomark, black versions), mobile hamburger nav, and page screenshot PDFs. Single CSS file with custom properties. No build tools or backend.
**Key files:** `index.html`, `about.html`, `contact.html`, `login.html`, `offices.html`, `css/styles.css`, `js/main.js`, `images/`, `Branding/`
