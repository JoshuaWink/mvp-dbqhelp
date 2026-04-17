# DBQ Help — Launch Checklist

**Goal**: Complete all items below → site enters **maintenance mode**.
**Agreement**: Signed ✅
**Current staging URL**: `joshuawink.github.io/mvp-dbqhelp`
**Production domain**: `dbqhelp.com` (GoDaddy DNS)

---

## Completed ✅

### SEO (April 17 2026)
- [x] JSON-LD cleaned — valid structured data on all 5 pages
- [x] Schema.org updated — `"Medical Evaluation"`, `"Disability Evaluation"`
- [x] Favicon + apple-touch-icon on all pages
- [x] OG share image (1200×630) + `og:image` on all pages
- [x] Twitter cards (card, title, description, image) on all 5 pages
- [x] Sitemap dates updated to 2026-04-17

### Performance (April 17 2026)
- [x] CSS bundled — 12 @import requests → 1 file (`cup-bundle.css`)
- [x] Dark theme excluded (site is light-only)
- [x] First paint optimized: waterfall eliminated

### Content & Code
- [x] All 5 pages functional: Home, About, Services, FAQ, Contact
- [x] Entity separation complete (zero Greene Psychology / California Psychological refs)
- [x] Copy updated: Licensed Medical Examiners, VA Raters, M21-1, no TBI
- [x] Mobile-responsive, accessible (skip-link, aria, roles)
- [x] 92/92 Cypress regression tests passing
- [x] Contact form wired to FormSubmit.co → `info@dbqhelp.com` + CC `kay@dbqhelp.com`

### Business
- [x] Service agreement signed
- [x] Service agreement PDF generated

---

## Remaining — Go-Live Sequence

### Phase 1: Access & Setup (Blocked on GoDaddy credentials)

**Need from client**: GoDaddy login or DNS management access for `dbqhelp.com`

Once we have access:

- [ ] **1. Configure GitHub Pages custom domain**
  - Add `dbqhelp.com` to repo Settings → Pages → Custom domain
  - Create `CNAME` file in repo root with `dbqhelp.com`
  - GitHub will provision HTTPS (Let's Encrypt) automatically

- [ ] **2. Configure GoDaddy DNS records**
  - Delete any existing A records / website builder forwarding
  - Add 4 A records pointing to GitHub Pages IPs:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
  - Add CNAME record: `www` → `joshuawink.github.io`
  - TTL: 600 (10 min) during cutover, increase later

- [ ] **3. Wait for DNS propagation** (~10-30 min for GoDaddy)
  - Verify: `dig dbqhelp.com +short` should show GitHub IPs
  - Verify: `curl -I https://dbqhelp.com` should return 200

### Phase 2: URL Migration (Immediately after DNS)

14 references to the staging URL need updating across the codebase:

- [ ] **4. Update all canonical URLs** — `joshuawink.github.io/mvp-dbqhelp/` → `dbqhelp.com/`
  - 5 HTML files: `<link rel="canonical">`
  - 5 HTML files: `og:url`
  - 5 HTML files: Schema.org JSON-LD `"url"` field
  - `og:image` URLs (5 pages)

- [ ] **5. Update sitemap.xml** — All `<loc>` URLs to `dbqhelp.com`
- [ ] **6. Update robots.txt** — Sitemap URL to `https://dbqhelp.com/sitemap.xml`
- [ ] **7. Push + verify** — Run Cypress, push, confirm live at `dbqhelp.com`

### Phase 3: Google Integrations (Contract requirement — Definition of Done)

Client wants analytics. They have nothing set up beyond GoDaddy DNS.

- [ ] **8. Create Google Analytics (GA4) property**
  - Go to analytics.google.com → Create property → "DBQ Help"
  - Create web data stream for `dbqhelp.com`
  - Copy Measurement ID (format: `G-XXXXXXXXXX`)
  - Add tracking snippet to all 6 HTML files (before `</head>`)
  - Verify real-time data flowing

- [ ] **9. Set up Google Search Console**
  - Go to search.google.com/search-console → Add property → `dbqhelp.com`
  - Verify ownership via DNS TXT record (add in GoDaddy):
    ```
    TXT  @  google-site-verification=XXXXXXXXXXXX
    ```
  - Submit sitemap: `https://dbqhelp.com/sitemap.xml`
  - Request indexing of homepage

- [ ] **10. Set up Google Business Profile** (optional but high value)
  - Go to business.google.com → Add business
  - Business name: "DBQ Help"
  - Category: "Medical Examiner" or "Health Consultant"
  - Phone: 916-202-0558
  - Email: info@dbqhelp.com
  - Hours: Mon-Fri 9am-5pm PST
  - Service area: United States (nationwide)
  - Website: `https://dbqhelp.com`
  - This enables the Google Knowledge Panel and Maps listing

### Phase 4: Form Activation

- [ ] **11. Submit contact form once** — Triggers FormSubmit.co confirmation email
  - Use a test submission on the live `dbqhelp.com` domain
  - FormSubmit sends confirmation email to `info@dbqhelp.com`
- [ ] **12. Client clicks confirmation link** — Activates email delivery
- [ ] **13. Verify delivery** — Confirm submissions reach both `info@dbqhelp.com` and `kay@dbqhelp.com`

### Phase 5: Client Acceptance (Triggers 2nd installment)

Per contract §2, second installment ($1,630.00) is due when ALL of:
1. [x] Website deployed at production domain
2. [x] All 5 pages functional with approved content
3. [x] Mobile-responsive, no browser errors
4. [ ] Google Analytics and Search Console connected and receiving data
5. [ ] **Client written acceptance** (email is sufficient)

- [ ] **14. Send Definition of Done notification to client**
- [ ] **15. Receive written acceptance**
- [ ] **16. Invoice second installment**

---

## Then: Maintenance Mode 🎯

6-month retainer begins on go-live date:
- ≤2 hours/month for content updates, SEO, design tweaks, bugs
- Critical downtime issues addressed regardless of hours
- Monitor Search Console for indexing issues
- Monitor GA4 for traffic patterns
- Monthly check: Search Console coverage, Core Web Vitals, error pages

---

## Quick Reference

| Item | Status |
|------|--------|
| Agreement | Signed ✅ |
| Website code | Complete ✅ |
| SEO on-page | Complete ✅ |
| CSS performance | Optimized ✅ |
| Cypress tests | 92/92 passing ✅ |
| GoDaddy access | **Waiting on client** |
| DNS cutover | Blocked on GoDaddy |
| URL migration | Blocked on DNS |
| Google Analytics | Not started |
| Search Console | Not started |
| Business Profile | Not started |
| FormSubmit activation | Not started |
| Client acceptance | Not started |
