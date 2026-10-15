# 🍕 The Time Out — Pure Vegetarian Cafe & Rooftop Restaurant

> **Jaipur's favorite rooftop & poolside pure veg cafe in Jaisinghpura Khor.**
> Built with Next.js 16 (App Router), Tailwind CSS v4, TypeScript, and Zustand with a Neo-Brutalist / Warm Retro-Modern aesthetic.

---

## 🌟 Key Features

- **🌿 100% Pure Vegetarian Menu:** 46 authentic, curated pure veg cafe items with customizable sizes (Regular/Medium, Half/Full, Single/Double), add-ons, and allergen/prep-time tags.
- **⚡ Interactive Menu & Instant Filtering:**
  - Category carousel with circular thumbnails and item counts.
  - Multi-criteria filter chips (Pure Veg, 4.5+ Rating, Bestsellers, Under ₹250, Fast Prep ≤20m, Price/Popularity sorting).
  - Real-time search by name, description, and tags.
- **🔥 Continuous Marquee Bestsellers:** Single-row moving marquee showcasing top-rated customer favorites.
- **🛒 Dynamic Cart & Ordering System:**
  - Slide-over cart drawer with Dine-in, Takeout, and Delivery modes.
  - Automatic 5% GST computation and dynamic delivery fees.
  - Instant WhatsApp checkout handoff (`wa.me/917023399845`) generating itemized orders.
- **🌙 Rooftop & Poolside Table Reservations:**
  - Interactive reservation modal with date, 30-min time slots, guest counter, and seating selector (Rooftop, Poolside, Indoor).
  - One-click WhatsApp booking dispatch with instant confirmation.
- **📸 Authentic Venue Photography:**
  - Handcrafted stone-baked pizza in the Hero visual showcase.
  - Real rooftop cafe ambience, scooter seating, and swing chairs in the About section.
- **🎨 Neo-Brutalist / Warm Retro-Modern Design System:**
  - Custom color palette: Cream Primary (`#FAF2E1`), Brand Red (`#E14825`), Accent Yellow (`#F5C242`), Ink Dark (`#141413`).
  - Distinctive hard-edge brutalist shadows (`2px 3px 0px #141413`), tilted badges, and fluid responsive typography (`Barlow Condensed` + `Plus Jakarta Sans`).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** Native inline SVGs
- **Deployment:** Vercel / Node.js

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Nirajmeena2008/time-out.git

# Navigate to project directory
cd time-out

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
the-time-out/
├── app/
│   ├── globals.css          # Design system tokens, brutalist shadows, animations
│   ├── layout.tsx           # Fonts (Barlow Condensed, Plus Jakarta Sans), SEO metadata
│   └── page.tsx             # Composed single-page layout
├── components/
│   ├── cart/                # CartDrawer, CartItem, CartSummary
│   ├── layout/              # Navbar (sticky, badges, mobile drawer), Footer
│   ├── menu/                # CategoryCarousel, FilterChipBar, ProductCard, ProductGrid, ItemCustomizer
│   ├── reservation/         # ReservationModal
│   ├── sections/            # HeroSection, InteractiveMenu, BestsellersMarquee, BrandStory, CTABanner
│   └── ui/                  # WhatsAppFAB
├── docs/                    # PRD, Architecture breakdown, and Menu specs
├── lib/
│   ├── cart-store.ts        # Zustand cart state & WhatsApp checkout generator
│   ├── filters.ts           # Filtering & sorting algorithms
│   └── menu-data.ts         # Complete 46-item menu catalog with images
├── public/
│   └── images/              # Hero pizza photo, rooftop cafe photos
└── types/
    └── index.ts             # TypeScript interfaces for menu, cart, filters
```

---

## 📞 Contact & Location

- **Venue:** The Time Out Cafe & Restaurant
- **Address:** Jaisinghpura Khor, Jaipur, Rajasthan
- **WhatsApp / Phone:** +91 70233 99845
- **Hours:** Open Daily 11:00 AM – 11:00 PM

---

## 📄 License

This project is proprietary and built for **The Time Out, Jaipur**. All rights reserved.
