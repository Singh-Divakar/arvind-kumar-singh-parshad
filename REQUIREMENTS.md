# REQUIREMENT GATHERING DOCUMENT
## Portfolio Website — Arvind Kumar Singh, Parshad Ward No. 01, Gorakhpur

| Field | Detail |
|---|---|
| **Document Version** | 1.0 |
| **Date Prepared** | April 2026 |
| **Project Type** | Public Representative Portfolio Website |
| **Client** | Arvind Kumar Singh — Parshad, Ward No. 01 |
| **Municipal Body** | Gorakhpur Nagar Nigam, Uttar Pradesh |
| **Status** | Initial Build Completed |

---

## 1. PROJECT OVERVIEW

### 1.1 Purpose
To create a professional, trustworthy, and easy-to-update web presence for Arvind Kumar Singh that:
- Strengthens his public image as a credible local representative
- Documents his completed and ongoing work
- Provides residents an accessible channel to raise issues
- Supports his future re-election campaign

### 1.2 Scope
A static, single-page (one-pager) website hosted online, optimized for both desktop and mobile users, with content easily updateable by a non-technical person or volunteer.

### 1.3 Out of Scope (Phase 1)
- Backend / database
- Online complaint submission form (only contact info shown)
- Multi-language toggle
- User login / admin panel
- Blog / news system
- Photo gallery management system

---

## 2. STAKEHOLDERS

| Stakeholder | Role | Interest |
|---|---|---|
| **Arvind Kumar Singh** | Parshad / Site Owner | Public image, accessibility, accountability |
| **Ward Residents** | End Users | Information, query resolution, transparency |
| **Campaign Team** | Content Updaters | Easy updates, no technical skills needed |
| **Voters / Public** | Visitors | Trust evaluation, work verification |
| **Media / Press** | Visitors | Quick access to track record |
| **Nagar Nigam Officials** | Indirect Audience | Coordination reference |

---

## 3. OBJECTIVES (BUSINESS GOALS)

The website **must strongly highlight**:

1. **Work already done (achievements)** — Build credibility through visible delivered work
2. **Ongoing development** — Show active commitment and current effort
3. **Future plans** — Communicate vision and long-term thinking
4. **Public problem-solving** — Show how citizen queries are handled
5. **Trust & positive public image** — Establish transparency and accountability

---

## 4. FUNCTIONAL REQUIREMENTS

### 4.1 Navigation & Structure

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Sticky top navigation bar with smooth-scroll links | Must Have |
| FR-02 | Mobile hamburger menu for small screens | Must Have |
| FR-03 | Active section highlight in navigation as user scrolls | Should Have |
| FR-04 | "Report Issue" CTA button in navigation (orange / accent) | Must Have |
| FR-05 | Back-to-top floating button after scrolling 400px | Should Have |

### 4.2 Hero Section

| ID | Requirement | Priority |
|---|---|---|
| FR-06 | Display name, designation, ward, city prominently | Must Have |
| FR-07 | Show campaign slogan in Hindi + English translation | Must Have |
| FR-08 | Two CTA buttons: "View Work Done" + "Report an Issue" | Must Have |
| FR-09 | Trust badges row (Transparent, Accessible, etc.) | Must Have |
| FR-10 | Background — gradient (with option to swap to photo later) | Should Have |

### 4.3 Impact Strip (Live Counters)

| ID | Requirement | Priority |
|---|---|---|
| FR-11 | Display 6 key metrics directly below hero | Must Have |
| FR-12 | Numbers must animate (count up) when scrolled into view | Should Have |
| FR-13 | Each metric easily editable via `data-target` attribute | Must Have |

### 4.4 Achievements Section (Work Done)

| ID | Requirement | Priority |
|---|---|---|
| FR-14 | Display 6 completed work categories as cards | Must Have |
| FR-15 | Each card must show "✓ Delivered" badge | Must Have |
| FR-16 | Each card must show location tag (mohalla / area) | Should Have |
| FR-17 | Adding a new achievement = copy-paste a card block | Must Have |

### 4.5 Ongoing Work Section

| ID | Requirement | Priority |
|---|---|---|
| FR-18 | Show currently in-progress projects with progress bars | Must Have |
| FR-19 | Each project must display percentage completion | Must Have |
| FR-20 | Progress bars must animate when scrolled into view | Should Have |
| FR-21 | Status badge (Active / Planning) on each item | Must Have |
| FR-22 | Expected completion date visible | Must Have |
| FR-23 | Update progress = change `data-progress` value (0–100) | Must Have |

### 4.6 Vision & Future Plans Section

| ID | Requirement | Priority |
|---|---|---|
| FR-24 | Display 4 vision pillars as cards | Must Have |
| FR-25 | Visual roadmap timeline (3 phases: past / present / future) | Must Have |
| FR-26 | Phases color-coded (green / amber / blue) | Should Have |

### 4.7 Public Queries & Problem-Solving Section

| ID | Requirement | Priority |
|---|---|---|
| FR-27 | Stats bar showing query handling metrics | Must Have |
| FR-28 | Grid of common issue types with priority tags | Must Have |
| FR-29 | List of 5+ ways to reach the Parshad | Must Have |
| FR-30 | 5-step resolution process visualization | Must Have |
| FR-31 | Personal commitment quote at bottom | Should Have |

### 4.8 Trust Pillars Section

| ID | Requirement | Priority |
|---|---|---|
| FR-32 | 4 trust pillars: Transparency, Accountability, Accessibility, Integrity | Must Have |
| FR-33 | Dark contrasting background to stand out | Should Have |

### 4.9 Message to Citizens Section

| ID | Requirement | Priority |
|---|---|---|
| FR-34 | Personal letter from the Parshad | Must Have |
| FR-35 | Signature block with name + designation | Must Have |

### 4.10 Contact Section

| ID | Requirement | Priority |
|---|---|---|
| FR-36 | Ward office address, hours, weekly Sabha info | Must Have |
| FR-37 | Promise badge: "Every complaint acknowledged within 24 hours" | Should Have |

### 4.11 Footer

| ID | Requirement | Priority |
|---|---|---|
| FR-38 | Brand line, slogan, copyright | Must Have |

---

## 5. NON-FUNCTIONAL REQUIREMENTS

### 5.1 Performance
| ID | Requirement |
|---|---|
| NFR-01 | Page must load fully in under 3 seconds on a 3G mobile connection |
| NFR-02 | Total page weight under 1 MB (excluding optional images) |
| NFR-03 | Must function with no backend or server — pure static files |

### 5.2 Responsiveness
| ID | Requirement |
|---|---|
| NFR-04 | Must work on screens from 320px (small phones) to 1920px (desktop) |
| NFR-05 | Tested breakpoints: 400px, 600px, 900px, 1200px |
| NFR-06 | Touch-friendly tap targets (minimum 44×44px) on mobile |

### 5.3 Accessibility
| ID | Requirement |
|---|---|
| NFR-07 | Semantic HTML5 tags (header, main, section, footer, nav) |
| NFR-08 | Alt text on all images (when added) |
| NFR-09 | Sufficient color contrast (WCAG AA minimum) |
| NFR-10 | Keyboard navigable |
| NFR-11 | aria-labels on icon-only buttons |

### 5.4 Maintainability
| ID | Requirement |
|---|---|
| NFR-12 | All colors centralized in CSS `:root` variables |
| NFR-13 | Code organized in 3 files only: HTML / CSS / JS |
| NFR-14 | Inline comments mark every editable section |
| NFR-15 | Adding a new project / achievement = copy-paste a single block |
| NFR-16 | No build tools / npm / frameworks required |

### 5.5 Compatibility
| ID | Requirement |
|---|---|
| NFR-17 | Works on Chrome, Firefox, Edge, Safari (latest 2 versions) |
| NFR-18 | Works on Android Chrome and iOS Safari |
| NFR-19 | Graceful degradation if JavaScript is disabled (content still visible) |

### 5.6 SEO
| ID | Requirement |
|---|---|
| NFR-20 | Meta description present in `<head>` |
| NFR-21 | Page title includes name + designation + ward + city |
| NFR-22 | Single H1 per page (the Parshad's name) |
| NFR-23 | Logical heading hierarchy (H1 → H2 → H3) |

### 5.7 Trust & Image
| ID | Requirement |
|---|---|
| NFR-24 | Tone must be formal, impactful, and trustworthy |
| NFR-25 | All numbers shown must be realistic and grounded — no exaggerated claims |
| NFR-26 | No political party branding (cross-party appeal) |
| NFR-27 | Color palette must convey civic authority (deep blue + saffron accent) |

---

## 6. CONTENT REQUIREMENTS

### 6.1 Content Sections (Must Have)
- [x] Cover Title
- [x] About the Leader
- [x] Personal Background (Education, Roots, Social Involvement)
- [x] Roles & Responsibilities (covered in About)
- [x] Development Work & Achievements (6 categories)
- [x] Ongoing Development (5 projects with % progress)
- [x] Key Numbers / Impact Strip
- [x] Vision & Future Plans (4 pillars + roadmap)
- [x] Public Engagement / Queries Handling
- [x] Trust Pillars
- [x] Message to Citizens
- [x] Contact Information

### 6.2 Tone & Style
- Formal, impactful, trustworthy
- Suitable for public distribution
- No exaggeration or unverifiable claims
- Realistic to Indian municipal governance
- Bullet points used for scannability
- Hindi slogan retained (with English translation)

### 6.3 Languages
- **Phase 1:** English only
- **Phase 2 (future):** Add Hindi version with toggle

---

## 7. TECHNICAL REQUIREMENTS

### 7.1 Tech Stack (Phase 1)
| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (CSS variables, Flexbox, Grid) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Inter + Playfair Display) |
| Hosting | Static (GitHub Pages / Netlify / Vercel / shared hosting) |
| Version Control | Git (recommended) |

### 7.2 File Structure
```
portfolio-website/
├── index.html              # Single-page main file
├── REQUIREMENTS.md         # This document
├── css/
│   └── style.css           # All styles + CSS variables
├── js/
│   └── main.js             # All interactivity
└── assets/                 # Images, icons (placeholder)
```

### 7.3 Browser Support
- Chrome 100+
- Firefox 100+
- Edge 100+
- Safari 15+
- Mobile: iOS Safari 15+, Android Chrome 100+

---

## 8. UPDATE & MAINTENANCE WORKFLOW

The website is designed so a non-technical person (campaign volunteer) can update it.

### 8.1 How to Update Common Items

| Update Task | File | What to Change |
|---|---|---|
| Add a new completed achievement | `index.html` | Copy-paste a `.achievement-item` block |
| Add a new ongoing project | `index.html` | Copy-paste a `.progress-item` block |
| Update progress bar % | `index.html` | Change `data-progress="50"` to new value |
| Update impact counter number | `index.html` | Change `data-target="120"` to new value |
| Update contact info | `index.html` | Edit `.contact-card` blocks |
| Change theme colors | `css/style.css` | Edit `:root` variables at top |
| Change fonts | `css/style.css` | Update `--font-main` / `--font-heading` |

### 8.2 Update Frequency Recommendations
- **Impact numbers** — Monthly
- **Achievements** — As work is completed
- **Ongoing projects** — Every 2 weeks
- **Vision / Roadmap** — Quarterly review

---

## 9. SUCCESS CRITERIA

The website is considered successful when:

| Metric | Target |
|---|---|
| Mobile usability | 100% functional on phones |
| Page load (3G) | Under 3 seconds |
| Update time (non-technical user) | A new project added in under 5 minutes |
| Sections meet 5 objectives | All 5 highlighted clearly |
| Content credibility | No exaggerated or false claims |
| Visual trust | Site visually conveys authority + accessibility |

---

## 10. FUTURE ENHANCEMENTS (PHASE 2+)

| ID | Feature | Priority |
|---|---|---|
| FE-01 | Add Hindi language version with toggle | High |
| FE-02 | Replace gradient hero with real photo of the Parshad | High |
| FE-03 | Add a photo gallery of completed work (before/after) | High |
| FE-04 | Online complaint submission form (with backend) | High |
| FE-05 | Integration with WhatsApp click-to-chat | Medium |
| FE-06 | News / press coverage section | Medium |
| FE-07 | Citizen testimonials section | Medium |
| FE-08 | Live activity feed / events calendar | Medium |
| FE-09 | Newsletter signup | Low |
| FE-10 | Multi-page expansion (separate pages for projects, gallery, blog) | Low |
| FE-11 | Admin dashboard for content updates without editing HTML | Low |
| FE-12 | Analytics integration (Google Analytics / Plausible) | Medium |
| FE-13 | Social media share buttons | Low |
| FE-14 | Downloadable PDF version of the portfolio | Medium |
| FE-15 | Multilingual: add Bhojpuri (regional language) | Low |

---

## 11. ASSUMPTIONS

- All numbers and project details provided are sample/realistic placeholders to be replaced by verified data.
- The Parshad will provide a high-quality professional photograph for Phase 2.
- Hosting will be on a free static hosting service initially.
- The website will be promoted through WhatsApp ward groups and physical posters with a QR code.
- Updates will be performed by a designated volunteer with basic tech literacy.

---

## 12. RISKS & MITIGATIONS

| Risk | Mitigation |
|---|---|
| Outdated content reduces credibility | Set monthly update calendar |
| Volunteer cannot edit HTML | Provide a one-page printed editing guide |
| Site looks too "political" and alienates voters | Maintain neutral civic tone, no party colors |
| Numbers cannot be verified | Only publish numbers that have documentation |
| Mobile users majority of audience | Mobile-first design (already done) |
| Slow loading on poor networks | Lightweight static site, no heavy assets |
| Public posts about unresolved complaints | Always acknowledge in 24 hours; track resolution publicly |

---

## 13. APPROVAL

| Role | Name | Signature | Date |
|---|---|---|---|
| Site Owner | Arvind Kumar Singh | ____________ | ____ |
| Campaign Lead | ____________ | ____________ | ____ |
| Developer / Maintainer | ____________ | ____________ | ____ |

---

## DOCUMENT REVISION HISTORY

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | April 2026 | — | Initial requirements document |

---

**End of Document**
