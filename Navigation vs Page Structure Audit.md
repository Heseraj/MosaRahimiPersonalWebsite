# MosaRahimi.com — Navigation vs. Page Structure Audit

**Date:** August 20, 2026  
**Focus:** Mismatch between top navigation labels and actual page section order/content

---

## Navigation Bar (Left to Right)

The sticky header navigation reads:

```
PIVOT | IMPACT | JOURNEY | WORK | EDUCATION | STORY | ASK MY AI TWIN
```

---

## Actual Page Flow (Top to Bottom, As Rendered)

| # | Section Content | Closest Nav Match | Anchor ID |
|---|----------------|-------------------|-----------|
| 1 | Hero — "I build and scale complex operations…" + intro bio, skill chips (AI, Deep Learning, Economic Modeling, Data Science), LinkedIn CTA | *None (unlabeled landing)* | `#top` |
| 2 | Rotating carousel — "Based in the United States / Amazon Leo · Project Kuiper" + domain labels (AI & Data, Operations Leadership, Strategic Systems, Public Service, Cross-Cultural Leadership) | *None* | — |
| 3 | Family / origin statement — "Before the boardrooms… there was family" + year markers (1999, 2013, 2022) | **STORY** | — |
| 4 | "Selected Impact — Measured in outcomes" — 4 quantified metrics (364K units, 70+ programs, 12K force, 40% faster reporting) | **IMPACT** | `#impact` |
| 5 | "Why This Pivot — Not reinvention for its own sake…" — explanation of AI/operations expansion | **PIVOT** | `#pivot` |
| 6 | "The Journey — One throughline. Many arenas." — full interactive timeline (1999–2026) | **JOURNEY** | `#journey` |
| 7 | Work experience cards (13 roles, Amazon Leo → Afghan Border Police) | **WORK** | `#work` |
| 8 | "Education — Policy mind. Business lens. Technical curiosity." — Wharton, Harvard, AUAF, Police Academy | **EDUCATION** | `#education` |
| 9 | Pull quote / personal statement — "My story is a humble journey…" | **STORY** | `#story` |
| 10 | Ask My AI Twin — conversational interface | **ASK MY AI TWIN** | `#digital-twin` |

---

## Mismatches Identified

### 1. Navigation Order ≠ Page Flow Order

| Nav Position | Nav Label | Actual Position on Page |
|:------------:|-----------|:-----------------------:|
| 1st | PIVOT | **5th section** |
| 2nd | IMPACT | **4th section** |
| 3rd | JOURNEY | **6th section** |
| 4th | WORK | **7th section** |
| 5th | EDUCATION | **8th section** |
| 6th | STORY | **3rd + 9th** (split across two locations) |
| 7th | ASK MY AI TWIN | **10th section** |

**Only JOURNEY → WORK → EDUCATION → ASK MY AI TWIN appear in their correct sequential order.** The first two nav items (PIVOT, IMPACT) are inverted on the page, and STORY content appears *before* either of them.

---

### 2. "STORY" Is Split Across Two Locations

The family/origin statement ("Before the boardrooms…") appears as section 3 — *above* both Impact and Pivot — but the actual `#story` anchor and the personal quote section appear much later at section 9. A visitor clicking "STORY" in the nav will jump to the bottom quote, missing the earlier narrative content that is arguably more of the "story."

**Recommendation:** Consolidate story content into one location, or rename the early section to something distinct (e.g., "ORIGIN" or "ROOTS").

---

### 3. No Nav Label for the Hero / Landing Section

The hero section (the first thing visitors see) has no corresponding nav item. This is common for portfolio sites, but it means the page's *strongest messaging* — "I build and scale complex operations" — is detached from the navigation mental model.

**Recommendation:** Consider adding a "HOME" or "ABOUT" nav item, or ensure the logo/name link (`MR / MOSA RAHIMI → #top`) is visually distinct enough to serve this purpose.

---

### 4. PIVOT Comes First in Nav but Fifth on Page

The nav declares PIVOT as the *first* destination after the hero — implying it's the most important framing. But the actual page flow puts Impact and a family/story section *before* the Pivot section. A visitor scrolling naturally will encounter the AI pivot framing only after seeing metrics and personal origin — which dilutes its nav-implied primacy.

**Recommendation:** Either:
- Move the Pivot section higher on the page to match its nav priority, OR
- Reorder the nav to match the actual scroll order: **IMPACT → PIVOT → JOURNEY → WORK → EDUCATION → STORY → ASK MY AI TWIN**

---

### 5. The Rotating Carousel Has No Nav Anchor

The domain-labels carousel (AI & Data, Operations Leadership, Strategic Systems, Public Service, Cross-Cultural Leadership) sits between the hero and the story section with no corresponding nav item. It functions as a secondary "about" section but isn't reachable via navigation.

**Recommendation:** Fold this content into the hero section or place it under a nav-anchored section so it doesn't float unattached.

---

## Summary: Expected vs. Actual User Experience

| If a user clicks… | They expect… | They actually get… |
|---|---|---|
| **PIVOT** | First section below hero | Lands at 5th section (below Impact and Story content) |
| **IMPACT** | Second section | Lands at 4th section (correct relative position to Pivot, but earlier than implied) |
| **STORY** | A narrative section | Lands at bottom pull-quote, missing the earlier family content |

---

## Recommended Fixes (Priority Order)

| # | Fix | Rationale |
|---|-----|-----------|
| 1 | **Reorder nav to match page flow** — IMPACT → PIVOT → JOURNEY → WORK → EDUCATION → STORY → ASK MY AI TWIN | Eliminates cognitive dissonance between nav order and scroll experience |
| 2 | **Consolidate STORY** — merge the early family/origin section with the bottom personal quote into one contiguous section | Prevents split-brain content and ensures the nav anchor leads to the full narrative |
| 3 | **Anchor the carousel** — either merge domain labels into the hero or place them inside a nav-linked section | Removes orphaned floating content |
| 4 | **Consider leading with IMPACT in nav** — it's the most compelling section for a recruiter or hiring manager scanning quickly | Puts quantified outcomes first, which builds credibility before the narrative context |

---

## Structural Integrity Score: 5 / 10

The page content is strong, but the navigation creates a promise about information architecture that the page doesn't deliver. For a hiring manager clicking through quickly — jumping via nav links rather than scrolling — the experience feels slightly disjointed.
