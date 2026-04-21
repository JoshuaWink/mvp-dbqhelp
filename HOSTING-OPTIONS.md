# DBQ Help — Hosting & SSL Options

**Date:** April 21, 2026
**Current status:** Site is live at http://dbqhelp.com but **HTTPS is not working**. The SSL certificate from GitHub Pages has not provisioned after 24+ hours.

---

## The Problem

The site is currently hosted on GitHub Pages (free). GitHub uses Let's Encrypt to issue SSL certificates for custom domains, but the certificate for `dbqhelp.com` has failed to provision. Without HTTPS:

- Browsers show a "Not Secure" warning
- Google penalizes non-HTTPS sites in search rankings
- Form submissions (contact page) should not be sent over plain HTTP
- Users (especially veterans) may not trust a site marked insecure

---

## Option A: GoDaddy Economy Hosting (Recommended)

**Cost:** $5.99/mo (3-year term) or ~$11.99/mo (monthly)

Everything stays under one roof — domain + hosting + SSL all managed in GoDaddy.

### What You Get
- 25 GB NVMe storage (site is under 1 MB — plenty of room)
- Free SSL certificate (AutoSSL — automatic renewal, no manual steps)
- cPanel control panel for file management
- Free email included
- Daily automatic backups
- 99.9% uptime guarantee
- 30-day money-back guarantee

### What We Do
1. Purchase Economy hosting plan in GoDaddy account
2. Upload site files via cPanel File Manager (zip upload, one click)
3. GoDaddy auto-configures DNS since the domain is already on the account
4. SSL activates automatically via AutoSSL (usually within 1 hour)
5. Verify HTTPS is working on https://dbqhelp.com
6. Remove old GitHub Pages configuration

### Pros
- One account for everything (domain, hosting, SSL, email)
- SSL is automatic and renews automatically
- cPanel makes future file updates simple
- GoDaddy support available 24/7
- Eric already has the account — no new signups

### Cons
- Monthly cost ($5.99–$11.99/mo depending on term)
- Slightly slower than GitHub Pages CDN for static sites

---

## Option B: Cloudflare Free (No Hosting Change)

**Cost:** Free

Keep GitHub Pages hosting but put Cloudflare in front for SSL and CDN.

### What We Do
1. Create a free Cloudflare account
2. Change GoDaddy nameservers to Cloudflare's
3. Cloudflare provides SSL (Flexible or Full mode)
4. Cloudflare also adds CDN caching (faster page loads)

### Pros
- Free forever
- Fast global CDN
- SSL works immediately
- DDoS protection included
- GitHub Pages stays free

### Cons
- Third account to manage (GoDaddy + GitHub + Cloudflare)
- Nameserver change means DNS is managed in Cloudflare, not GoDaddy
- Slightly more complex setup
- If Cloudflare has issues, site goes down

---

## Option C: Wait for GitHub Pages SSL

**Cost:** Free

GitHub Pages sometimes takes up to 48–72 hours for new custom domain certs.

### What We Do
1. Verify the domain in GitHub settings
2. Wait for Let's Encrypt to issue the certificate
3. Enable "Enforce HTTPS" once cert is ready

### Pros
- Free
- No changes needed

### Cons
- No guaranteed timeline — could be hours or days
- Site stays insecure until then
- GitHub Pages cert provisioning has been unreliable for this domain

---

## Comparison

| | GoDaddy Economy | Cloudflare Free | Wait for GitHub |
|---|---|---|---|
| **Cost** | $5.99/mo | Free | Free |
| **SSL working** | ~1 hour | ~30 min | Unknown |
| **Accounts to manage** | 1 (GoDaddy) | 3 | 2 |
| **Email included** | Yes | No | No |
| **Backups** | Daily (automatic) | No | No (git only) |
| **Support** | 24/7 phone/chat | Community | Community |
| **Future updates** | cPanel upload | Git push | Git push |
| **Simplicity** | Highest | Medium | Lowest control |

---

## Recommendation

**GoDaddy Economy Hosting** is the simplest path for a client site. One login manages the domain, hosting, SSL, and email. No juggling between GitHub and GoDaddy. AutoSSL handles certificates automatically — no manual renewal, no waiting for third-party provisioning.

For a business site serving veterans, the $5.99/mo cost is negligible compared to the simplicity and reliability of having everything in one place.

---

## Ready to Proceed?

Once a decision is made, we can have SSL working within the hour:

- **Option A:** Purchase hosting in GoDaddy → we upload files → SSL auto-activates
- **Option B:** We set up Cloudflare → change nameservers → SSL works immediately
- **Option C:** We wait and check back periodically

Just let us know which direction to go.
