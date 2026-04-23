# Mockup Approach — 3 Story Structures

**Date**: April 21, 2026
**Purpose**: Give Dr. Greene three ways to tell DBQ Help's story. Same green theme, same branding — different page layouts and section flow that change what the visitor sees first and how they move toward calling.

---

## Current Baseline (What's Live Now)

Homepage section order:
1. Hero — headline + 2 CTAs (call + schedule)
2. Trust bar — 4 icons (licensed, veteran-focused, hours, California)
3. Service cards — 3 cards (DBQ Evaluations, Nexus Letters, Veteran Guidance)
4. 3 Steps — Contact → Get Evaluated → Receive Your DBQ
5. Team/Bio — "Built by VA Professionals" placeholder
6. Final CTA — call/email/contact

**What stays the same across all 3 mockups:**
- Forest green theme, Inter font, all branding
- California-focused copy
- Same 5 pages (Home, About, Services, FAQ, Contact)
- Mobile-responsive, accessible
- SEO markup + analytics placeholders

**What changes:** Section order, section layouts, what content gets prominence, how the story flows from landing to calling.

---

## Mockup A — "Credentials First"

**Story**: Lead with authority. The first thing a veteran sees is proof that these are real professionals — former VA staff, licensed examiners, the M21-1 manual reference. The message: "We know the system because we were the system."

**Repo**: `JoshuaWink/dbqhelp-mockup-a`
**Preview**: https://joshuawink.github.io/dbqhelp-mockup-a/

### Homepage Flow

| # | Section | What Changes |
|---|---------|--------------|
| 1 | **Hero** | Shorter headline. Subtext emphasizes "former VA raters" and licensing. Single CTA: the phone number. |
| 2 | **Credentials block** *(new)* | Large, prominent section: "Former VA Raters • Licensed Medical Examiners • M21-1 Procedure Experts". Not a small trust bar — a full section that sells the team's background. |
| 3 | **Dr. Greene intro** *(moved up)* | Photo placeholder + credentials + brief message. He's introduced before services because authority comes first. |
| 4 | **Service cards** | Same 3 cards, but each card opens with the credential: "Conducted by licensed medical examiners" / "Written by former VA staff". |
| 5 | **3 Steps** | Same flow, no change. |
| 6 | **FAQ preview** *(new)* | 3-4 top questions pulled from the FAQ page — "What is a DBQ?", "Do I need a nexus letter?". Answers the skeptic's questions before they leave. |
| 7 | **Final CTA** | Same. |

### Key Idea
The veteran who lands here is researching. They're comparing providers. They've been burned before. This layout front-loads the "why trust us" before the "what we do."

### What It Tests
Does leading with credentials convert better than leading with services?

---

## Mockup B — "Personal Connection"

**Story**: Lead with the human. Dr. Greene's face and message appear immediately. The site feels like meeting someone, not reading a brochure. The message: "There's a real person here who cares about your claim."

**Repo**: `JoshuaWink/dbqhelp-mockup-b`
**Preview**: https://joshuawink.github.io/dbqhelp-mockup-b/

### Homepage Flow

| # | Section | What Changes |
|---|---------|--------------|
| 1 | **Hero** | Same headline, but hero is a two-column layout: text on left, Dr. Greene's photo on right (placeholder until real photo provided). Feels like a personal introduction. |
| 2 | **"A Message from Dr. Greene"** *(new, prominent)* | Full-width section right after hero. Personal quote about why he started DBQ Help, his connection to veteran care. Humanizes the business immediately. |
| 3 | **Trust bar** | Same 4 items but as a compact row between the message and services. Bridges personal → professional. |
| 4 | **Service cards** | Same 3 cards. No change. |
| 5 | **Testimonial / Social proof** *(new)* | Placeholder section for future testimonials. Even without real quotes yet, having the structure says "others have used this service." Can start with a general statement: "Trusted by California veterans." |
| 6 | **3 Steps** | Same flow. |
| 7 | **Final CTA** | More personal: "Dr. Greene and his team are ready to help. Call today." |

### Key Idea
The veteran who lands here wants to know there's a real person behind this, not a faceless company. Dr. Greene's ask — "a face behind the brand" — is the entire first impression.

### What It Tests
Does a personal introduction convert better than leading with services or credentials?

---

## Mockup C — "Problem → Solution"

**Story**: Lead with the veteran's pain point. The first thing they see is their own situation described back to them — then the site answers it. The message: "We know what you're going through. Here's how we fix it."

**Repo**: `JoshuaWink/dbqhelp-mockup-c`
**Preview**: https://joshuawink.github.io/dbqhelp-mockup-c/

### Homepage Flow

| # | Section | What Changes |
|---|---------|--------------|
| 1 | **Hero** | Rewritten headline focused on the problem, not the service: "Your VA Claim Deserves the Right Medical Evidence" or "Denied? Underprepared? Missing a Nexus Letter?" Subtext: "We help California veterans get the documentation that wins claims." |
| 2 | **Pain points** *(new)* | 3-column block addressing common frustrations: "Denied due to insufficient evidence" / "Don't know what a DBQ is" / "Need a nexus letter but don't know where to start." Each links to the relevant service. |
| 3 | **3 Steps** *(moved up)* | Immediately after identifying the problem, show the simple solution path. Contact → Evaluate → Receive. |
| 4 | **Service cards** | Same 3 cards, but positioned as "the answer" to the pain points above. |
| 5 | **Trust bar** | Same 4 items. Serves as reassurance after the solution is presented. |
| 6 | **Team/Bio** | Dr. Greene intro. Comes after the solution is laid out — "here's who does the work." |
| 7 | **Final CTA** | Urgency-oriented: "Don't wait on your claim. Call today." |

### Key Idea
The veteran who lands here is frustrated. They Googled something like "VA claim denied what do I do" or "how to get a nexus letter California." This layout mirrors their emotional state and then resolves it.

### What It Tests
Does naming the veteran's problem first convert better than leading with the provider's credentials or personality?

---

## Comparison

| Aspect | A: Credentials First | B: Personal Connection | C: Problem → Solution |
|--------|---------------------|------------------------|----------------------|
| **Opens with** | Authority / licensing | Dr. Greene's face + message | Veteran's pain point |
| **Tone** | "We're the experts" | "We're real people" | "We understand your struggle" |
| **Dr. Greene** | Section 3 (after credentials) | Section 1-2 (hero + message) | Section 6 (after solution) |
| **Trust mechanism** | Credentials, VA background | Personal connection, face | Empathy, problem recognition |
| **Best for** | Skeptical, research-mode vet | Vet wanting personal relationship | Frustrated, problem-mode vet |
| **Risk** | Could feel cold/clinical | Could feel too soft | Could feel salesy/manipulative |
| **Layout changes** | Credentials block, FAQ preview | Two-column hero, message section, testimonial placeholder | Pain point block, reordered sections |

---

## Execution Plan

1. ~~Copy baseline to all 3 repos~~ ✅ Done — all three repos pushed with identical baseline
2. **Mockup A** — Rearrange homepage: credentials block up, Dr. Greene up, add FAQ preview
3. **Mockup B** — Two-column hero, add Dr. Greene message section, testimonial placeholder
4. **Mockup C** — Rewrite hero copy, add pain-point block, reorder sections
5. **Push all 3** — Each auto-deploys to GitHub Pages
6. **Send Dr. Greene the 3 URLs** — He clicks through all three and says which story resonates

---

## Decision for Dr. Greene

> "Each of these tells your story differently. Same look, same branding — just different emphasis. Click through on your phone and desktop:"
>
> - **A**: https://joshuawink.github.io/dbqhelp-mockup-a/ — "Credentials first — we lead with your VA background"
> - **B**: https://joshuawink.github.io/dbqhelp-mockup-b/ — "Personal first — your face and message lead the page"
> - **C**: https://joshuawink.github.io/dbqhelp-mockup-c/ — "Problem first — we name the veteran's frustration, then solve it"
>
> Pick one, or tell us what you like from each and we'll combine.
