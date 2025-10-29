# KSHITIJ 2026 Landing Page

A cutting-edge, premium React-based landing page for KSHITIJ 2026 (IIT Kharagpur's Techno-Management Symposium).

## ✅ What's Been Built

### Core Structure
- ✅ Next.js 16 with TypeScript
- ✅ Lenis smooth scrolling integrated
- ✅ Framer Motion for animations
- ✅ Awwwards-inspired side navigation menu
- ✅ Responsive design with Tailwind CSS
- ✅ Production-ready build

### ✅ Completed Sections
1. **Hero Section** - Full-screen hero with animated watermark, parallax gradients, scroll indicator
2. **Who Are We** - Animated text sections with gradient highlights, "TO THE NEXT HORIZON" finale
3. **Why Associate** - Interactive benefit cards (5 cards) with hover effects and stagger animations
4. **75 Years** - Animated counter (0→75), mouse tracking, particle effects, celebration text
5. **Flagship Events** - Grid of 8 event cards with hover animations and glow effects
6. **Graphs** - **✅ Horizontal scroll section** with up to 6 graph cards and parallax effects
7. **PDFs** - Placeholder section ready for document showcase
8. **Previous Sponsors** - Placeholder section ready for infinite carousel
9. **Videos** - Placeholder section ready for video showcase
10. **Glimpses** - **✅ Mouse Scale Gallery** with interactive 3D tilt effects
11. **Sponsor Us** - **✅ Text clip mask effect** with contact form

### ✅ Advanced Features Implemented

#### 1. SVG Curve Loading ✅
- Beautiful SVG path animations on page load
- Smooth entrance effect
- Location: `app/components/animations/SVGCurveLoader.tsx`

#### 2. Perspective Transitions ✅
- 3D rotation effects between sections
- Smooth fade and scale transitions
- Applied to all sections
- Location: `app/components/animations/PerspectiveTransition.tsx`

#### 3. Horizontal Scroll Graphs ✅
- Horizontal scrolling graph cards
- Parallax effects on scroll
- Up to 6 graph cards with different data visualizations
- Scroll indicator
- Location: `app/components/sections/Graphs.tsx`

#### 4. Mouse Scale Gallery ✅
- Interactive image gallery with mouse tracking
- 3D tilt and scale effects on hover
- Smooth animations
- Location: `app/components/ui/MouseScaleGallery.tsx`

#### 5. Text Clip Mask ✅
- Video/text masking effect
- Scroll-triggered animations
- Used in Sponsor Us section
- Location: `app/components/ui/TextClipMask.tsx`

## 🚀 Getting Started

```bash
cd landing
npm install
npm run dev
```

Visit http://localhost:3000 to see the landing page.

## 📦 Cloned Component Libraries

All referenced component libraries have been cloned into the `../components/` directory (relative to landing):

- `components/awwwards-side-menu/` - Premium navigation menu
- `components/svg-curve-loading/` - SVG curve loading animations
- `components/text-clip-mask/` - Text/video masking effects
- `components/mouse-scale-gallery/` - Interactive image gallery
- `components/react-bits/` - DomeGallery, BounceCards, and 100+ components
- `components/parallax-scroll/` - Parallax scrolling effects

## 🎯 Remaining Enhancements

### High Priority
1. **DomeGallery Integration** - Add 3D photo sphere to Glimpses section
2. **GSAP ScrollTrigger** - Enhanced scroll-triggered animations
3. **React Three Fiber** - Add 3D elements (logo, particles, interactive objects)
4. **Chart.js Integration** - Real data visualization for graphs
5. **PDF Document Showcase** - 3D folder presentation with page flip
6. **Video Section** - Custom video player with SVG masking
7. **Infinite Carousel** - For previous sponsors section

### Medium Priority
- Electric border effects for event cards
- Animated list components
- Footer with links and social media
- Loading screen animation
- Scroll progress indicator
- Back to top button

## 📐 Project Structure

```
landing/
├── app/
│   ├── components/
│   │   ├── sections/           # All 11 section components
│   │   ├── common/              # NavigationMenu
│   │   ├── animations/          # SVGCurveLoader, PerspectiveTransition
│   │   └── ui/                   # MouseScaleGallery, TextClipMask
│   ├── page.tsx                 # Main page with all sections
│   └── layout.tsx               # Root layout
├── components/                   # Cloned component libraries
└── README.md                     # This file
```

## 🎨 Design Features

- ✅ **Glassmorphism effects** throughout (Navigation, cards)
- ✅ **Gradient backgrounds** with smooth transitions
- ✅ **3D transformations** with perspective transitions
- ✅ **Parallax scrolling** on multiple layers
- ✅ **Stagger animations** (Navigation, benefit cards, graphs)
- ✅ **Mouse tracking** effects (75 Years, Mouse Scale Gallery)
- ✅ **Particle effects** (Hero and 75 Years sections)
- ✅ **SVG curve loading** animation
- ✅ **Text clip masking** for video effects
- ✅ **Responsive design** (Mobile, tablet, desktop)
- ✅ **Performance optimizations** (Static generation, type safety)

## 🔧 Technologies

- **Next.js 16** (App Router)
- **TypeScript** for type safety
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Tailwind CSS** for styling
- **GSAP** (installed, ready to integrate)
- **React Three Fiber** (installed, ready to integrate)
- **Chart.js/Recharts** (installed, ready to integrate)
- **@use-gesture/react** (installed for gesture support)

## ✨ Key Achievements

1. ✅ Updated vision document with all requested enhancements
2. ✅ Cloned all 6 component libraries
3. ✅ Built functional Next.js landing page with 11 sections
4. ✅ Integrated Lenis smooth scrolling
5. ✅ Created Awwwards-inspired navigation menu
6. ✅ Implemented parallax effects, animations, and hover states
7. ✅ **Added SVG Curve Loading** component
8. ✅ **Added Perspective Transitions** to all sections
9. ✅ **Built Horizontal Scroll Graphs** section
10. ✅ **Created Mouse Scale Gallery** with 3D effects
11. ✅ **Implemented Text Clip Mask** effect
12. ✅ Production build successful with zero errors

## 💻 Development Tips

1. Test animations in development: `npm run dev`
2. Build for production: `npm run build`
3. Start production server: `npm start`
4. Component libraries are ready to integrate from `../components/` directory
5. Use `@/components/...` imports for any new components
6. All sections are client components with animations
7. Consider lazy loading for heavy components (DomeGallery, 3D elements)

## 📄 License

Built for KSHITIJ 2026, IIT Kharagpur

---

**Status**: Advanced features implemented ✅ | Ready for DomeGallery and 3D integration ⏳
