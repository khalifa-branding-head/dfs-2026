# CMS Foundation Specifications
## Database Custom Post Types, Schemas, and Role Mappings

This document defines the schema configuration, field validation types, relationship rules, and access control settings for the Dubai FinTech Summit CMS database.

---

## 1. Custom Post Types & Custom Fields

### CPT 1: Speaker (`dfs_speaker`)
* **Purpose**: Manages speaker directory profiles and bios.
* **Fields**:
  - `name` (Type: Text, Validation: Required, max 100 chars)
  - `job_title` (Type: Text, Validation: Required, max 100 chars)
  - `company` (Type: Text, Validation: Required, max 100 chars)
  - `bio` (Type: WYSIWYG, Validation: Optional)
  - `headshot` (Type: Image, Validation: Required, max file size `200KB`, WebP format)
  - `company_logo` (Type: Image, Validation: Required, max size `50KB`, SVG/WebP format)
  - `linkedin_url` (Type: URL, Validation: Optional, must match `linkedin.com/*`)
  - `twitter_url` (Type: URL, Validation: Optional)
  - `is_keynote` (Type: True/False, Validation: Required, default: `false`)

### CPT 2: Session (`dfs_session`)
* **Purpose**: Manages agenda items and panels.
* **Fields**:
  - `title` (Type: Text, Validation: Required, max 200 chars)
  - `description` (Type: WYSIWYG, Validation: Optional)
  - `date` (Type: Select, Options: `Day 1` or `Day 2`, Validation: Required)
  - `start_time` (Type: Time, Validation: Required)
  - `end_time` (Type: Time, Validation: Required)

### CPT 3: Sponsor / Partner (`dfs_sponsor`)
* **Purpose**: Manages sponsor logos and tiers.
* **Fields**:
  - `sponsor_name` (Type: Text, Validation: Required)
  - `logo` (Type: Image, Validation: Required, max size `50KB`, SVG/WebP)
  - `website_url` (Type: URL, Validation: Required)

### CPT 4: Exhibitor (`dfs_exhibitor`)
* **Purpose**: Manages exhibition pavilion grids.
* **Fields**:
  - `exhibitor_name` (Type: Text, Validation: Required)
  - `logo` (Type: Image, Validation: Required, SVG/WebP)
  - `booth_number` (Type: Text, Validation: Required, max 20 chars)
  - `description` (Type: WYSIWYG, Validation: Optional)
  - `website_url` (Type: URL, Validation: Optional)

### CPT 5: News / Blog (`dfs_news`)
* **Purpose**: Manages news articles and announcements.
* **Fields**:
  - `title` (Type: Text, Validation: Required)
  - `slug` (Type: Text, Validation: Required, unique, auto-generated)
  - `content` (Type: WYSIWYG, Validation: Required)
  - `featured_image` (Type: Image, Validation: Required, max size `300KB`)

### CPT 6: FAQ (`dfs_faq`)
* **Purpose**: Manages frequently asked questions.
* **Fields**:
  - `question` (Type: Text, Validation: Required)
  - `answer` (Type: WYSIWYG, Validation: Required)

### CPT 7: Ticket Pass (`dfs_ticket`)
* **Purpose**: Manages pass pricing options and checkout links.
* **Fields**:
  - `pass_name` (Type: Text, Validation: Required)
  - `price` (Type: Number, Validation: Required, positive)
  - `currency` (Type: Select, Options: `AED` or `USD`, Validation: Required, default: `AED`)
  - `checkout_url` (Type: URL, Validation: Required)

### CPT 8: Downloads (`dfs_download`)
* **Purpose**: Manages brochures and media kits.
* **Fields**:
  - `file_title` (Type: Text, Validation: Required)
  - `file` (Type: File, Validation: Required, max size `5MB`, PDF format)

---

## 2. Taxonomies (Category Groups)

* **Sponsor Tier (`dfs_sponsor_tier`)**:
  - Purpose: Categorizes sponsors into Diamond, Platinum, Gold, Silver, Associate, and Media Partner.
  - Linked to: CPT `dfs_sponsor`.
* **Session Track (`dfs_session_track`)**:
  - Purpose: Categorizes agenda sessions into AI, Regulation, Payments, Web3, etc.
  - Fields: `track_class` (Type: Select, Options: `dfs-track--ai`, `dfs-track--regulation`, `dfs-track--payments`, `dfs-track--web3`, Validation: Required). Maps tracks directly to static, approved CSS design tokens.
  - Linked to: CPT `dfs_session`.
* **FAQ Category (`dfs_faq_category`)**:
  - Purpose: Groups FAQs into Ticketing, Venue, Speaker Info.
  - Linked to: CPT `dfs_faq`.

---

## 3. Database Relationships Map

```
  ┌────────────────┐           ┌────────────────┐
  │  dfs_speaker   │◄─────────►│  dfs_session   │
  └────────────────┘           └────────────────┘
      (Speaker)                   (Session)
                                       │
                                       ▼ (Many-to-One)
                               ┌────────────────┐
                               │  session_track │
                               └────────────────┘
                                   (Taxonomy)
```

1. **Speaker <-> Session (Many-to-Many)**: A session can have multiple speakers, and a speaker can participate in multiple sessions.
2. **Session -> Session Track (Many-to-One)**: Each session is linked to exactly one track.
3. **Sponsor -> Sponsor Tier (Many-to-One)**: Each sponsor belongs to one tier.

---

## 4. Role-Based Access Control (RBAC)

The database publishing permissions restrict actions based on roles:

* **Administrator**: Full read, write, edit, delete capabilities across all CPTs, taxonomies, and global navigation settings.
* **Editorial Team**: Read, write, and edit rights for `dfs_news`, `dfs_faq`, and `dfs_download`. Cannot edit agenda schedules or speaker profiles.
* **Operations Team**: Read all; full write and edit access to `dfs_speaker`, `dfs_session`, and `dfs_exhibitor`. Cannot publish global sitemap settings.
* **Marketing Team**: Read all; write access to `dfs_sponsor` and `dfs_ticket`.
