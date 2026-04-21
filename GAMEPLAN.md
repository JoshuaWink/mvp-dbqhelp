# DBQ Help — Game Plan

**Date**: April 21, 2026
**Source**: Dr. Green meeting debrief

---

## Status: Already Done

- [x] **SSL certificate** — Migrated from GitHub Pages to GoDaddy Economy hosting. Valid GoDaddy cert issued for `dbqhelp.com` (expires Nov 5, 2026). No more "insecure page" warnings.
- [x] **GoDaddy hosting** — Site live at `https://dbqhelp.com`, cPanel provisioned, DNS pointing to `107.180.116.7`.

---

## Work Items

### 1. Dr. Green's Personal Presence on the Site
**Priority: High** — Core trust signal

- Add a professional photo of Dr. Green to the site
- Write a personal message section ("A Message from Dr. Green") on the homepage or About page
- Include his title, credentials, and role (CEO / Psychologist)
- This replaces the generic "Built by VA Professionals" placeholder on the homepage

**Needs from Eric/Dr. Green:**
- Professional headshot photo
- Preferred title/credential line (e.g., "Dr. Pete Green, PsyD, CEO")
- Short personal message or approval to draft one

### 2. California-Specific Targeting
**Priority: High** — SEO + business strategy shift

- Update all copy from "nationwide" to California-focused
- Pages to update: homepage hero, services, about, contact, meta descriptions
- Update schema.org markup: `areaServed` from "United States" → "California"
- Update meta descriptions and page titles to include "California"
- Add California-specific keywords: "California veteran DBQ", "CA disability evaluation", "California nexus letter"
- Consider adding city-specific landing pages (Sacramento, LA, San Diego, San Francisco) for local SEO

### 3. SEO Optimization
**Priority: High** — Dr. Green's main ask

- **On-page SEO**: Title tags, meta descriptions, H1/H2 hierarchy, keyword density
- **Local SEO**: Google Business Profile setup (if not already done), California targeting
- **Technical SEO**: Sitemap.xml (already present), robots.txt (already present), canonical URLs, page speed
- **Content SEO**: Blog or FAQ expansion with California veteran disability keywords
- **Competitor analysis**: Research top California DBQ/nexus letter providers, identify keyword gaps

### 4. Site Design Refresh
**Priority: Medium** — "Jazz it up"

- Create 2-3 mockup options, each as its own GitHub Pages site
- Dr. Green can review each at a live URL and pick a direction
- Focus on: professional feel, trustworthiness, clear CTAs
- Keep the green forest theme (already branded)
- Improve imagery — real photos vs. SVG icons where possible
- Consider testimonials section (with permission)

**Mockup repos** (each auto-deploys to GitHub Pages):
| Mockup | Repo | Preview URL |
|--------|------|-------------|
| A | `JoshuaWink/dbqhelp-mockup-a` | `joshuawink.github.io/dbqhelp-mockup-a` |
| B | `JoshuaWink/dbqhelp-mockup-b` | `joshuawink.github.io/dbqhelp-mockup-b` |
| C | `JoshuaWink/dbqhelp-mockup-c` | `joshuawink.github.io/dbqhelp-mockup-c` |

### 5. Staging + Deployment Pipeline
**Priority: Medium** — Developer workflow

- **Staging**: Separate GitHub Pages site for pre-production review
  - Repo: `JoshuaWink/dbqhelp-staging`
  - URL: `joshuawink.github.io/dbqhelp-staging`
  - Push here first, review, then promote to production
- **Production**: GoDaddy cPanel at `dbqhelp.com`
- **Pipeline**: GitHub Actions workflow that:
  1. Push to staging repo → auto-deploys to GitHub Pages (staging preview)
  2. Manual trigger or tag → deploys to GoDaddy via FTP/cPanel API
- Keep it simple: zip + upload or rsync over FTP

**Site map:**
| Environment | Where | URL |
|-------------|-------|-----|
| Production | GoDaddy cPanel | `https://dbqhelp.com` |
| Staging | GitHub Pages | `joshuawink.github.io/dbqhelp-staging` |
| Mockup A | GitHub Pages | `joshuawink.github.io/dbqhelp-mockup-a` |
| Mockup B | GitHub Pages | `joshuawink.github.io/dbqhelp-mockup-b` |
| Mockup C | GitHub Pages | `joshuawink.github.io/dbqhelp-mockup-c` |

### 6. Analytics & Metrics
**Priority: Medium** — Track what matters

- Set up Google Analytics 4 (GA4) on the site
- Set up Google Search Console for `dbqhelp.com`
- Track: page views, bounce rate, call button clicks, contact form submissions
- Monthly check-in cadence on metrics with Dr. Green
- Consider heatmap tool (Hotjar free tier or Microsoft Clarity — free)

---

## Execution Order

| Phase | Items | Target |
|-------|-------|--------|
| **Now** | SSL ✅, hosting ✅ | Done |
| **Phase 1** | California copy update, SEO basics, Dr. Green photo/bio | This week |
| **Phase 2** | Analytics setup, Search Console, staging pipeline | Next week |
| **Phase 3** | Design mockups, competitor research, local SEO pages | Following week |

---

## Waiting On

| Item | Owner | Status |
|------|-------|--------|
| Professional headshot | Dr. Green / Eric | Needed |
| Personal message copy or approval to draft | Dr. Green | Needed |
| Google Business Profile access (if exists) | Eric | Check |

---

## Key Principles (from Dr. Green)

> **Reputable. Professional. Trustworthy. A face behind the brand. California-focused. Right metrics.**
