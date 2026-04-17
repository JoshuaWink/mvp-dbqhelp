# DBQ Help — Launch Checklist

**Goal**: Complete all items below → site enters **maintenance mode**.

---

## SEO — Fixed ✅ (April 17 2026)

- [x] **JSON-LD cleaned** — Removed obfuscation junk from all 5 pages, valid JSON-LD confirmed
- [x] **Schema.org updated** — `medicalSpecialty` → `"Medical Evaluation"`, `serviceType` → `"Disability Evaluation"`
- [x] **Favicon added** — `favicon.ico` (16/32/48px) + `apple-touch-icon.png` (180px) on all pages
- [x] **OG share image** — `img/og-share.jpg` (1200×630) with branded design, `og:image` on all pages
- [x] **Twitter cards** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` on all 5 pages
- [x] **Sitemap dates** — All `<lastmod>` updated to `2026-04-17`

---

## SEO — Already Good ✅

- [x] Unique `<title>` tags on every page with keywords
- [x] Unique `<meta description>` on every page (under 160 chars, keyword-rich)
- [x] `<link rel="canonical">` on every page
- [x] Open Graph tags (og:type, og:url, og:title, og:description, og:site_name) on all pages
- [x] `robots.txt` present and correct (`Allow: /`, sitemap reference)
- [x] `sitemap.xml` present with all 5 pages
- [x] Single `<h1>` per page (confirmed on all 6 files including 404)
- [x] Semantic heading hierarchy (h1 → h2 → h3)
- [x] `lang="en"` on `<html>` tag
- [x] `meta viewport` on all pages
- [x] `meta robots` set to `index, follow`
- [x] Schema.org JSON-LD present on all 5 pages (valid JSON, just needs decontamination)
- [x] FAQ page uses native `<details>/<summary>` — fully crawlable
- [x] FAQPage schema with Question/Answer markup
- [x] All images have descriptive `alt` text
- [x] Images lazy-loaded with `loading="lazy"`
- [x] Skip-to-content link for accessibility
- [x] `aria-label`, `aria-current`, `role` attributes throughout
- [x] Preconnect to Google Fonts
- [x] No broken internal links (Cypress-verified)
- [x] Phone number in header on every page (local SEO signal)
- [x] NAP consistency (Name, Address, Phone) across all pages
- [x] 404 page exists

---

## Web Component Rendering & SEO

**Status**: Acceptable for this site.

- **Content pages** (Home, About, Services, FAQ): All meaningful content is in standard HTML (`<h1>`, `<h2>`, `<p>`, `<details>`, `<a>`, `<section>`). Google crawls this without JavaScript.
- **Contact form**: Uses `cup-field`, `cup-select`, `cup-textarea`, `cup-checkbox`, `cup-button` — these are web components rendered in Shadow DOM. Forms are **not indexed by Google** regardless, so this has zero SEO impact.
- **cup-skeleton**: Placeholder only, disappears when images load. No content value.
- **cup-powered-by**: Footer badge. Not content Google needs to index.
- **Conclusion**: No SEO risk from web component usage. All indexable content is standard HTML.

---

## Service Agreement & Documents

### Service Agreement Status
- [x] Agreement drafted and PDF generated (`service-agreement.pdf`)
- [ ] **Agreement needs signing** — Neither party has signed yet
- [ ] **First installment needed** — Work formally begins upon receipt of $1,630.00

### Definition of Done (from contract §2)
Per the service agreement, the second installment ($1,630.00) becomes due when ALL of:
1. [x] Website deployed and publicly accessible *(live at joshuawink.github.io/mvp-dbqhelp)*
2. [x] All 5 pages functional with client-approved content
3. [x] Mobile-responsive, loads without errors on Chrome/Safari/Firefox
4. [ ] **Google Analytics and Search Console connected and receiving data**
5. [ ] **Client written acceptance of deployed site**

### Domain Migration
- [ ] **Domain credentials from client** — Need hosting/registrar access to point `dbqhelp.com` to production
- [ ] **DNS cutover** — Currently on GitHub Pages staging URL; needs to move to production domain
- [ ] **Update all canonical URLs** — `joshuawink.github.io/mvp-dbqhelp/` → `dbqhelp.com`
- [ ] **Update sitemap.xml** — Same URL change
- [ ] **Update robots.txt** — Same URL change
- [ ] **Update Schema.org URLs** — Same URL change
- [ ] **Update OG URLs** — Same URL change

### FormSubmit.co Activation
- [ ] **First form submission needed** — Must submit the contact form once to trigger FormSubmit's confirmation email
- [ ] **Click confirmation link** — Sent to `info@dbqhelp.com` — activates email delivery
- [ ] **Verify delivery** — Test that submissions reach both `info@dbqhelp.com` and `kay@dbqhelp.com`

### Google Integrations (contract requirement)
- [ ] **Google Analytics** — Create GA4 property, add measurement ID to all pages
- [ ] **Google Search Console** — Verify domain ownership, submit sitemap
- [ ] **Google Business Profile** — Set up or claim listing for DBQ Help

---

## SignWell Service Agreement
- [ ] **Upload agreement PDF to SignWell** — For electronic signature
- [ ] **Configure signature fields** — Provider + Client signature blocks
- [ ] **Send for signature** — To Dr. Eric Greene

---

## Cypress Test Suite
- [x] 91 tests across 6 spec files — all passing
- [ ] **Run tests after SEO fixes** — Verify nothing breaks: `npx cypress run`

---

## Summary: What Must Happen to Reach Maintenance Mode

### Today (Can Push Now)
1. Fix JSON-LD contamination on all 5 pages
2. Add favicon
3. Add OG image + twitter:image to all pages
4. Update sitemap dates
5. Fix Schema.org serviceType/medicalSpecialty
6. Add twitter card meta to 4 pages
7. Run Cypress tests
8. Push + verify

### Needs Client Action
9. Sign service agreement (via SignWell)
10. First installment payment ($1,630.00)
11. Provide domain/hosting credentials for `dbqhelp.com`
12. Provide photos/bios if any final changes desired
13. Submit contact form once to activate FormSubmit

### Post-Payment / Go-Live
14. Set up Google Analytics (GA4)
15. Set up Google Search Console + submit sitemap
16. Set up/claim Google Business Profile
17. DNS cutover to `dbqhelp.com`
18. Update all URLs (canonical, sitemap, robots, Schema.org, OG)
19. Verify FormSubmit delivery to both email addresses
20. Client written acceptance → triggers second installment

### Then: Maintenance Mode 🎯
- 6-month retainer: ≤2 hours/month for content updates, SEO, bugs
- Monitor Search Console for indexing issues
- Monitor GA4 for traffic patterns
