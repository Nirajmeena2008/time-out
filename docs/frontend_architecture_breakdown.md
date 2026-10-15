# Front-End Design System & Architecture Blueprint

This document breaks down the structural, visual, and functional anatomy of the one-page food and beverage template. It abstracts all content and provides exact styling tokens, color palettes, and CSS specifications so you can use it as a repeatable front-end blueprint for any restaurant, cafe, or cloud kitchen project.

## 1. Complete Color Palette & Design Tokens

The visual identity relies on a high-contrast **Warm Retro-Modern / Neo-Brutalist** food aesthetic. Warm appetizing creams and whites are paired with fiery reds, mustard yellows, and crisp charcoal borders.

### 1.1 Surface & Background Colors

| Token Name | Hex Code | RGB | Usage | 
| ----- | ----- | ----- | ----- | 
| `--bg-cream-primary` | `#FAF2E1` | `rgb(250, 242, 225)` | Main page canvas (Navbar, Specials, Interactive Menu). | 
| `--bg-cream-secondary` | `#F4E7CE` | `rgb(244, 231, 206)` | Secondary warm strip (Sub-hero divider / announcement bar). | 
| `--bg-surface-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Hero section, Brand Story section, Product Card interiors, Search inputs. | 
| `--bg-surface-dark` | `#181715` | `rgb(24, 23, 21)` | Dark Mode Promotional Combo section & Main Footer. | 
| `--bg-dark-gradient` | `radial-gradient(circle at 85% 15%, #3A2218 0%, #181715 65%)` | — | Subtle warm ambient glow in the top-right corner of the dark promo section. | 

### 1.2 Brand & Accent Colors

| Token Name | Hex Code | RGB | Usage | 
| ----- | ----- | ----- | ----- | 
| `--brand-red` | `#E14825` | `rgb(225, 72, 37)` | Primary CTA buttons, active filter pills, price text, hero accent text, bottom CTA banner. | 
| `--brand-red-hover` | `#C83817` | `rgb(200, 56, 23)` | Hover state for primary red buttons. | 
| `--accent-yellow` | `#F5C242` | `rgb(245, 194, 66)` | Floating promo tags, section eyebrow badges, high-contrast CTA button on the red banner. | 
| `--accent-yellow-soft` | `#FDE8B2` | `rgb(253, 232, 178)` | Soft icon circle background in the hero trust bar. | 
| `--accent-green` | `#538D4E` | `rgb(83, 141, 78)` | Freshness/Eco badges, trust icon circles, and the 3rd feature highlight box in the About section. | 

### 1.3 Dietary & Filter Chip Semantic Colors

| Token Name | Hex Code | RGB | Usage | 
| ----- | ----- | ----- | ----- | 
| `--diet-veg-green` | `#108548` | `rgb(16, 133, 72)` | Pure Veg square-dot icon and active border indicator. | 
| `--diet-nonveg-red` | `#E41D36` | `rgb(228, 29, 54)` | Non-Veg square-dot icon and active border indicator. | 
| `--diet-egg-amber` | `#E67E22` | `rgb(230, 126, 34)` | Contains Egg square-dot icon. | 
| `--filter-star-gold` | `#F59E0B` | `rgb(245, 158, 11)` | Rating 4.5+ star icon and Bestsellers flame icon. | 
| `--filter-offer-purple` | `#8B5CF6` | `rgb(139, 92, 246)` | Great Offers percentage `%` icon. | 
| `--filter-price-blue` | `#2563EB` | `rgb(37, 99, 235)` | Price threshold tag icon (e.g., Under ₹250). | 

### 1.4 Typography & Ink Colors

| Token Name | Hex Code | RGB | Usage | 
| ----- | ----- | ----- | ----- | 
| `--ink-primary` | `#141413` | `rgb(20, 20, 19)` | Main headings, card titles, button outlines, and primary body text. | 
| `--ink-secondary` | `#5A5751` | `rgb(90, 87, 81)` | Subtitles, dish descriptions, and muted UI labels. | 
| `--ink-inverse` | `#FFFFFF` | `rgb(255, 255, 255)` | Headings and text inside dark sections, red buttons, and red banners. | 
| `--ink-inverse-muted` | `#A39E93` | `rgb(163, 158, 147)` | Footer links and subtitles on dark charcoal backgrounds. | 

### 1.5 Borders, Dividers & Shadows

| Token Name | Value | Usage | 
| ----- | ----- | ----- | 
| `--border-ink` | `1.5px solid #141413` | Default crisp border for product cards, inputs, badges, and buttons. | 
| `--border-ink-thick` | `2px solid #141413` | Hero image frame, floating tilted badges, and primary callout containers. | 
| `--border-gold-glow` | `1.5px solid #F5C242` | Special highlight border used on the 2-column dark-mode promo cards. | 
| `--shadow-brutal-sm` | `2px 3px 0px #141413` | Hard offset shadow for pill buttons, category tabs, and floating badges. | 
| `--shadow-brutal-md` | `4px 5px 0px #141413` | Elevated hard offset shadow for product cards on hover or featured frames. | 
| `--shadow-soft-card` | `0 10px 25px -5px rgba(20, 20, 19, 0.06)` | Ambient elevation paired with the crisp dark border on white product cards. | 

## 2. Typography & Scannability System

### 2.1 Font Stack Recommendations

* **Display / Headings (`--font-display`):** `'Barlow Condensed'`, `'Oswald'`, `'Bebas Neue'`, or `'Anton'` (700/800 ExtraBold).

  * *Characteristics:* Tall x-height, condensed width, punchy geometric forms that feel bold and editorial.

* **UI & Body Copy (`--font-sans`):** `'Plus Jakarta Sans'`, `'DM Sans'`, or `'Inter'` (400 Regular, 500 Medium, 600 SemiBold, 700 Bold).

  * *Characteristics:* Clean, warm geometric sans-serif that remains highly legible at `12px–14px` inside dense menu cards.

### 2.2 Type Scale & Line Heights

* **Hero Display Title:** `clamp(2.5rem, 5vw, 3.75rem)` (`40px–60px`), `line-height: 1.05`, `letter-spacing: -0.02em`, `font-weight: 800`.

* **Section Heading (H2):** `clamp(1.75rem, 3.5vw, 2.5rem)` (`28px–40px`), `line-height: 1.15`, `letter-spacing: -0.01em`, `font-weight: 800`.

* **Card Title (H3):** `1.125rem` (`18px`), `line-height: 1.3`, `font-weight: 700`, color `--ink-primary`.

* **Price Display:** `1.375rem` (`22px`), `line-height: 1`, `font-weight: 800`, color `--brand-red` (uses `--font-display`).

* **Body / Subtitle:** `0.9375rem` (`15px`), `line-height: 1.5`, color `--ink-secondary`.

* **Card Description (Micro-Copy):** `0.8125rem` (`13px`), `line-height: 1.45`, color `--ink-secondary`, restricted to 3 lines (`line-clamp-3`).

* **Badge / Pill Text:** `0.75rem` (`12px`), `font-weight: 700`, `letter-spacing: 0.02em`.

## 3. Core Styling Rules & Component Anatomy

### 3.1 Neo-Brutalist Card & Container Recipe

Every card on the site avoids blurry, frameless drop shadows in favor of **crisp framed containment**:

* **Outer Card Shell:**

  * Background: `#FFFFFF`

  * Border: `1.5px solid #141413`

  * Border Radius: `14px` (`0.875rem`)

  * Padding: `10px` (`0.625rem`) around the image and content.

  * Transition: `transform 0.2s ease, box-shadow 0.2s ease`

  * Hover Effect: `transform: translateY(-3px); box-shadow: 4px 5px 0px #141413;`

* **Inner Image Container:**

  * Border Radius: `10px` (`0.625rem`)

  * Aspect Ratio: `4 / 3` for standard items; `16 / 10` for wide combo cards.

  * Photography Style: High-contrast, warm food lighting against dark wood or slate backgrounds so the food pops against the white card frame.

### 3.2 Button & Pill Styling Matrix

All interactive buttons use `border-radius: 9999px` (full pill shape), `font-weight: 600`, `font-size: 13px`, and `display: inline-flex; align-items: center; gap: 6px;`.

1. **Primary Red CTA Button (`.btn-primary`):**

   * Background: `#E14825` | Text: `#FFFFFF` | Border: `1.5px solid #141413`

   * Shadow: `2px 3px 0px #141413`

   * Padding: `8px 18px` (Compact card button: `6px 14px`)

2. **Secondary Outlined Button (`.btn-outline`):**

   * Background: `#FFFFFF` | Text: `#141413` | Border: `1.5px solid #141413`

   * Hover: Background shifts to `#FAF2E1`.

3. **Mustard Accent Button (`.btn-yellow`):**

   * Background: `#F5C242` | Text: `#141413` | Border: `1.5px solid #141413`

   * Shadow: `2px 3px 0px #141413`

   * Used on the Red Conversion Banner and for section eyebrow tags.

4. **Dark Action Button (`.btn-dark`):**

   * Background: `#141413` | Text: `#FFFFFF` | Border: `1.5px solid #141413`

   * Used inside the white coupon bar in the dark promo section.

### 3.3 Floating & Tilted Badges

* **Hero Image Overlap Badges:**

  * Positioned `absolute` on the corners of the hero food frame.

  * Top-left badge: `background: #E14825; color: #FFF; transform: rotate(-6deg); border: 1.5px solid #141413; box-shadow: 2px 3px 0px #141413;`

  * Bottom-right badge: `background: #F5C242; color: #141413; transform: rotate(5deg); border: 1.5px solid #141413; box-shadow: 2px 3px 0px #141413;`

* **Card Corner Status Tags:**

  * Positioned `absolute; top: 8px; left: 8px;` inside the product image wrapper.

  * Variants: Red (`#E14825`) for "Bestseller/Hot", Yellow (`#F5C242`) for "Popular/Chef's Choice", Orange-Red for "Combo".

### 3.4 Circular Food Category Carousel (`<CategoryCarousel />`)

Located at the top of the Interactive Menu section, this horizontal scrollable strip displays visual dish categories with item count badges.

* **Track Layout:**

  * `display: flex; align-items: flex-start; gap: 20px; overflow-x: auto; padding: 8px 4px 16px;`

  * Hide scrollbars (`scrollbar-width: none; -ms-overflow-style: none;`).

* **Category Item Node (`.category-node`):**

  * Fixed width: `88px` (`display: flex; flex-direction: column; align-items: center; cursor: pointer;`).

* **Circular Thumbnail Wrapper:**

  * Dimensions: `80px × 80px`, `border-radius: 50%`, `background: #FFFFFF`, `padding: 3px`.

  * *Default State:* `border: 2px solid #FFFFFF`, `box-shadow: 0 4px 10px rgba(20, 20, 19, 0.08)` (or `1.5px solid #141413` for strict Neo-Brutalist framing).

  * *Active / Selected State ("All Dishes"):* `border: 2.5px solid #E14825` with a warm outer glow (`box-shadow: 0 0 0 3px rgba(225, 72, 37, 0.2)`).

  * *Hover State:* `transform: translateY(-3px);`

* **Corner Item-Count Pill Badge:**

  * Positioned `absolute; bottom: 0; right: 0;` overlapping the bottom-right edge of the circle.

  * Styling: `border-radius: 9999px`, `padding: 2px 7px`, `font-size: 11px`, `font-weight: 700`, `border: 1.5px solid #FFFFFF`.

  * *Active Count Badge:* `background: #E14825; color: #FFFFFF;` (e.g., `190`).

  * *Inactive Count Badge:* `background: #181715; color: #FFFFFF;` (e.g., `28`, `13`, `16`).

* **Category Label:**

  * `margin-top: 8px`, `font-size: 13px`, `line-height: 1.2`, `max-width: 86px`.

  * Truncation: Single-line ellipsis (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`).

  * *Active Label:* `color: #E14825; font-weight: 700;`

  * *Inactive Label:* `color: #141413; font-weight: 600;`

* **"See All" End Node:**

  * `80px × 80px` circle with a dashed orange/gold border (`2px dashed #F5C242`), `background: #FFFFFF`, centered dark circular chevron button (`32px × 32px`), and `"See All"` label in `#F59E0B`.

### 3.5 Multi-Attribute Filter & Sort Chip Bar (`<FilterChipBar />`)

Positioned directly below the Circular Category Carousel (`margin-top: 12px; margin-bottom: 28px;`), providing granular dietary, rating, price, and prep-time filtering.

* **Track Layout:**

  * `display: flex; align-items: center; gap: 10px; overflow-x: auto; padding-bottom: 6px;`

* **Base Filter Pill (`.filter-chip`):**

  * `background: #FFFFFF`

  * `border: 1.5px solid #141413` (matches the site's crisp Neo-Brutalist stroke; can be softened to `#E5DCCB` for secondary states).

  * `border-radius: 10px` (or `9999px` full pill to match primary CTAs).

  * `padding: 7px 14px`, `height: 36px`.

  * `font-size: 13px`, `font-weight: 600`, `color: #141413`, `white-space: nowrap`.

  * `display: inline-flex; align-items: center; gap: 7px;`

  * *Hover / Active Toggle State:* `background: #FAF2E1; box-shadow: 2px 3px 0px #141413; transform: translateY(-1px);` (or `background: #E14825; color: #FFFFFF;` for selected primary state).

* **Standardized Chip Variants & Iconography:**

  1. **Filters Modal Trigger:** Sliders icon (`#5A5751`) + `"Filters"`.

  2. **Sort Dropdown:** Up/Down arrows icon + `"Sort by"` + downward caret `▾`.

  3. **Pure Veg Toggle:** `14px × 14px` green square border (`1.5px solid #108548`) with a `6px` solid green circle inside + `"Pure Veg"`.

  4. **Non-Veg Toggle:** `14px × 14px` red square border (`1.5px solid #E41D36`) with a `6px` solid red circle/triangle inside + `"Non-Veg"`.

  5. **Contains Egg Toggle:** `14px × 14px` amber square border (`1.5px solid #E67E22`) with a `6px` solid amber circle inside + `"Contains Egg"`.

  6. **High Rating Filter:** Gold star icon (`#F59E0B`) + `"Rating 4.5+"`.

  7. **Bestsellers Filter:** Warm orange/gold flame icon (`#F59E0B`) + `"Bestsellers"`.

  8. **Promotions Filter:** Purple percentage icon (`#8B5CF6`) + `"Great Offers"`.

  9. **Budget Filter:** Blue price-tag icon (`#2563EB`) + `"Under ₹250"`.

  10. **Prep Speed Filter:** Amber clock icon (`#E67E22`) + `"Fast Prep (≤ 20m)"`.

## 4. Global Layout & Grid System

* **Max Container Width:** `1140px` to `1200px`, centered (`margin: 0 auto`) with `20px` horizontal padding on mobile and `32px` on desktop.

* **Section Vertical Rhythm:** `64px` (`4rem`) top and bottom padding on standard sections; `48px` (`3rem`) on compact CTA banners.

* **Grid Topologies:**

  * **Hero & Brand Story:** 12-Column CSS Grid (`grid-template-columns: repeat(12, 1fr); gap: 32px;`). Left column spans 6 cols, right column spans 6 cols.

  * **3-Column Product Grid:** `grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 24px;`

  * **2-Column Promo Grid:** `grid-template-columns: repeat(auto-fit, minmax(440px, 1fr)); gap: 24px;`

## 5. Section-by-Section Structural & Visual Breakdown

### Section 1: Sticky Top Navigation Bar

* **Surface:** Warm Cream (`#FAF2E1`), `height: 72px`, sticky top with subtle bottom border (`1px solid rgba(20,20,19,0.08)`).

* **Layout:** 3-part Flexbox (`justify-between items-center`).

  * **Left:** Brand Logo (bold black & red typographic mark).

  * **Center:** 4–5 anchor links (`14px`, `font-weight: 500`, color `#141413`, hover color `#E14825`).

  * **Right:** Action Button Group (`gap: 10px`) featuring an outlined pill button (`#FFFFFF` bg) and a primary red pill button (`#E14825` bg).

### Section 2: Hero Section (2-Column Asymmetric Split)

* **Surface:** Pure White (`#FFFFFF`).

* **Left Column (Content & Conversion):**

  * **Top Eyebrow Badge:** Outlined pill (`#FFFFFF` bg, `1.5px solid #141413`, `padding: 4px 12px`).

  * **Main Headline:** Two-line stacked display text. Line 1 in `#141413`; Line 2 in `#E14825` with a decorative double-line underline in red.

  * **Subheadline:** 2 lines of muted grey body text (`#5A5751`).

  * **CTA Row:** Primary Red pill button + Secondary Outlined pill button.

  * **Trust/USP Bar:** 3 horizontal items (`gap: 20px`). Each has a `36px x 36px` rounded circle icon (`#FDE8B2` yellow, `#D7ECD9` green, `#FAF2E1` cream) + bold number/title + muted label.

* **Right Column (Visual Showcase):**

  * **Image Frame:** Rounded rectangle (`border-radius: 16px`), `2px solid #141413` border, dark moody food photography background, and the 2 tilted floating badges overlapping the top-left and bottom-right edges.

### Section 3: Sub-Hero Strip & Featured Bestsellers (3-Column Grid)

* **Top Divider Strip:** `#F4E7CE` background strip with a left-aligned Yellow pill badge (`#F5C242`).

* **Main Section Surface:** Warm Cream (`#FAF2E1`).

* **Section Header:** Bold dark title + muted subtitle.

* **Grid Layout:** 3 equal-width `<ProductCard />` components (`#FFFFFF` background, `1.5px solid #141413` border, red price text on bottom-left, red pill button on bottom-right).

### Section 4: Dark Mode Promotional Banner (2-Column Combos)

* **Surface:** Dark Charcoal (`#181715`) with a warm radial reddish-brown spotlight gradient in the top-right.

* **Section Header:** Red pill badge (`#E14825`) + White bold heading (`#FFFFFF`) + muted grey subtitle (`#A39E93`).

* **Grid Layout:** 2 wide combo cards.

  * **Card Styling:** `#FFFFFF` interior, framed with a high-contrast warm gold/yellow border (`1.5px solid #F5C242`) so the cards glow against the dark background.

* **Bottom Coupon/Announcement Bar:**

  * Full-width horizontal banner (`background: #FFFFFF`, `border-radius: 12px`, `padding: 12px 20px`, `margin-top: 24px`).

  * **Left:** Red circular icon (`#E14825`) + bold dark text with red highlighted promo terms.

  * **Right:** Solid Dark Charcoal pill button (`#141413` bg, `#FFFFFF` text).

### Section 5: Interactive Catalog / Full Menu Section

* **Surface:** Warm Cream (`#FAF2E1`).

* **Row 1 — Header & Search Bar:**

  * **Left:** Red pill badge + Main Heading + Subtitle.

  * **Right:** Pill-shaped search input (`background: #FFFFFF`, `border: 1.5px solid #141413`, `border-radius: 9999px`, `height: 42px`, `width: 320px`).

* **Row 2 — Visual Category Carousel (`<CategoryCarousel />`):**

  * Horizontal scrollable strip of `80px × 80px` circular food thumbnails with bottom-right item count badges (`190`, `28`, `13`, `12`, `16`, `17`, `18`, `20`, `10`, `9`, `20`, `13`, `14`) and truncated category titles underneath (`All Dishes`, `Bite Up & Snacks`, `Breads & Roti`, `Breakfast`, `Chai, Coffee & Beverages`, `De Thali & Meals`, `Desserts`, `Mains & Curries`, `Pizza & Pasta`, `Sandwiches`, `Shakes & Coolers`, `Soups & Salads`, `Tandoor & Starters`, plus a dashed `"See All"` end button).

* **Row 3 — Multi-Attribute Filter & Sort Bar (`<FilterChipBar />`):**

  * Horizontal scrollable row of interactive filter pills (`Filters`, `Sort by ▾`, `Pure Veg`, `Non-Veg`, `Contains Egg`, `Rating 4.5+`, `Bestsellers`, `Great Offers`, `Under ₹250`, `Fast Prep (≤ 20m)`), styled with crisp borders, semantic icons, and hard offset shadows when toggled active.

* **Row 4 — Product Grid:**

  * 3-column × 2-row (or infinite/paginated) grid of `<ProductCard />` items that dynamically filter based on the selected circular category and active filter chips.

### Section 6: Brand Story / Ambience Highlight (2-Column Split)

* **Surface:** Pure White (`#FFFFFF`).

* **Left Column (Interior Photo):**

  * Large rounded image (`border-radius: 16px`, `border: 1.5px solid #141413`) with a dark bottom gradient (`linear-gradient(to top, rgba(0,0,0,0.8), transparent)`) and bold white caption text overlaid at the bottom.

* **Right Column (Narrative & Color Blocks):**

  * Outlined cream pill badge (`#FAF2E1` bg, `#141413` border) + Bold Heading + 3 short paragraphs of body copy (`#5A5751`).

  * **3 Colored Feature Blocks (`grid-cols-3 gap-3`):**

    * **Block 1 (Red):** `background: #E14825; color: #FFFFFF; border-radius: 10px; padding: 12px;`

    * **Block 2 (Yellow):** `background: #F5C242; color: #141413; border-radius: 10px; padding: 12px;`

    * **Block 3 (Green):** `background: #538D4E; color: #FFFFFF; border-radius: 10px; padding: 12px;`

### Section 7: High-Impact Conversion / CTA Banner

* **Surface:** Solid Brand Red (`#E14825`).

* **Layout:** Centered single-column stack (`text-align: center`).

* **Elements:**

  1. **Top Pill Badge:** Mustard Yellow (`#F5C242`) with `#141413` border and text.

  2. **Headline:** Large `#FFFFFF` bold display text.

  3. **Subheadline:** Soft white (`rgba(255,255,255,0.85)`) text.

  4. **Primary CTA Button:** Large Mustard Yellow pill button (`#F5C242` bg, `#141413` text & border, `2px 3px 0px #141413` shadow).

  5. **Micro-Trust Row:** 3 horizontal items with yellow checkmarks (`#F5C242`) and small white labels (`12px`).

### Section 8: Multi-Column Dark Footer

* **Surface:** Dark Charcoal (`#181715`), text in `#A39E93`, headings in `#FFFFFF`.

* **Layout:** 4-Column Grid (`padding: 48px 0 24px`) + bottom copyright bar separated by a `1px solid #2A2825` divider.

## 6. Copy-Paste CSS Variables & Tailwind Config Starter

Drop this directly into your global stylesheet (`globals.css`) to initialize the exact color and shadow system for new projects:

```css
:root {
  /* Surfaces */
  --bg-cream-primary: #FAF2E1;
  --bg-cream-secondary: #F4E7CE;
  --bg-surface-white: #FFFFFF;
  --bg-surface-dark: #181715;

  /* Brand & Accents */
  --brand-red: #E14825;
  --brand-red-hover: #C83817;
  --accent-yellow: #F5C242;
  --accent-yellow-soft: #FDE8B2;
  --accent-green: #538D4E;

  /* Dietary & Filter Chip Semantics */
  --diet-veg-green: #108548;
  --diet-nonveg-red: #E41D36;
  --diet-egg-amber: #E67E22;
  --filter-star-gold: #F59E0B;
  --filter-offer-purple: #8B5CF6;
  --filter-price-blue: #2563EB;

  /* Typography Ink */
  --ink-primary: #141413;
  --ink-secondary: #5A5751;
  --ink-inverse: #FFFFFF;
  --ink-inverse-muted: #A39E93;

  /* Borders & Brutalist Shadows */
  --border-thin: 1.5px solid #141413;
  --border-thick: 2px solid #141413;
  --shadow-pill: 2px 3px 0px #141413;
  --shadow-card-hover: 4px 5px 0px #141413;
}
```