# Assets Needed - NCAA Settlement Landing Page

## Overview
This document outlines all required assets for the NCAA Settlement Landing Page, organized by category with detailed specifications. Assets are prioritized based on their impact on user experience and conversion goals.

---

## 1. Brand Assets

### Sycamore Grove Claims Group Logo
- **Priority**: Critical
- **Formats Required**: 
  - SVG (primary - scalable)
  - PNG (2x, 3x for retina)
  - WebP (performance optimization)
- **Variations**:
  - Full logo (horizontal)
  - Logo mark only (square/icon)
  - White/knockout version
  - Dark background version
- **Specifications**:
  - Minimum size: 120px width
  - Clear space: 20% of logo height
  - Must work on athletic/dynamic backgrounds
- **Usage**: Header, footer, loading states, social sharing
- **Fallback**: Text-based logo with athletic font

### Favicon & App Icons
- **Priority**: Critical
- **Formats Required**:
  - favicon.ico (16x16, 32x32)
  - Apple Touch Icon (180x180)
  - Android Chrome (192x192, 512x512)
  - Safari Pinned Tab (SVG)
- **Design**: Simplified version of logo mark
- **Source**: Generate from main logo using RealFaviconGenerator

### Brand Guidelines
- **Priority**: High
- **Requirements**:
  - Color codes (HEX, RGB, HSL)
  - Typography rules
  - Logo usage guidelines
  - Minimum sizes and clear space
- **Format**: PDF or Figma file

---

## 2. Typography

### Primary Font (Athletic/Bold)
- **Priority**: Critical
- **Suggestions**:
  - **Bebas Neue** - Athletic, impactful, free
  - **Montserrat Black** - Modern, bold, Google Font
  - **Anton** - Sports-inspired, high impact
  - **Oswald Bold** - Athletic feel, excellent readability
- **Usage**: Headlines, hero text, CTAs
- **Performance**: Variable font preferred for weight flexibility
- **Fallback**: system-ui, -apple-system, Arial Black

### Secondary Font (Body Text)
- **Priority**: Critical
- **Suggestions**:
  - **Inter** - Excellent readability, modern
  - **Source Sans 3** - Clean, professional
  - **Roboto** - Familiar, accessible
- **Weights Needed**: 400 (regular), 500 (medium), 700 (bold)
- **Usage**: Body copy, form fields, navigation
- **Performance**: Subset to Latin characters only

### Display Font (Numbers/Stats)
- **Priority**: High
- **Suggestions**:
  - **Teko** - Tall, athletic numerals
  - **Rajdhani** - Technical, sports scoreboard feel
  - **Barlow Condensed** - Space-efficient, bold
- **Usage**: Calculator displays, statistics, countdowns
- **Features**: Tabular numbers for alignment

### Web Font Loading Strategy
- **Priority**: High
- **Requirements**:
  - Font-display: swap
  - Preload critical fonts
  - WOFF2 format primary
  - Local font fallbacks
  - Maximum 3 font families total

---

## 3. Imagery

### Hero Section Background
- **Priority**: Critical
- **Options**:
  - Abstract athletic texture (running track, court lines)
  - Geometric pattern suggesting movement
  - Gradient mesh with energy
  - Particle system background
- **Specifications**:
  - 2400x1200px minimum
  - WebP with JPEG fallback
  - Dark overlay capability for text contrast
  - Mobile version (1200x1600px)
- **Source**: Custom design or Unsplash/Pexels athletic abstracts

### Athletic Graphics
- **Priority**: High
- **Requirements**:
  - Abstract sport shapes (NO athlete photos)
  - Dynamic lines suggesting movement
  - Equipment silhouettes (balls, goals, tracks)
  - Energy/motion blur effects
- **Formats**: SVG preferred for scalability
- **Style**: Modern, minimalist, high energy

### Background Patterns
- **Priority**: Medium
- **Options**:
  - Dot grid patterns
  - Diagonal speed lines
  - Hexagonal athletic mesh
  - Court/field line abstracts
- **Usage**: Section backgrounds, card textures
- **Format**: SVG patterns or CSS gradients

### Social Proof Images
- **Priority**: Medium
- **Requirements**:
  - University logos (grayscale/subtle)
  - Athletic conference badges
  - Trust badges/certifications
- **Format**: SVG sprite sheet
- **Legal**: Ensure usage rights

---

## 4. Animation Assets

### Hero Animation
- **Priority**: High
- **Options**:
  - Lottie animation (athletic motion)
  - SVG morph animations
  - WebGL particle system
  - CSS-only fallback
- **Suggestions**:
  - Running/sprinting motion lines
  - Ball trajectory paths
  - Energy burst effects
- **Performance**: Under 100KB, 60fps target

### Micro-Interactions
- **Priority**: High
- **Requirements**:
  - Button hover states (energy pulse)
  - Form field focus (glow effect)
  - Success states (celebration burst)
  - Loading spinners (athletic themed)
- **Tools**: Framer Motion, Lottie, or pure CSS

### Scroll Animations
- **Priority**: Medium
- **Elements**:
  - Number count-ups
  - Stagger reveals
  - Parallax effects (subtle)
  - Progress indicators
- **Library**: Intersection Observer API

### Calculator Animations
- **Priority**: High
- **Requirements**:
  - Number transitions
  - Result celebrations
  - Input feedback
  - Progress indicators
- **Style**: Smooth, sports-score inspired

---

## 5. Icons

### Process/Step Icons
- **Priority**: Critical
- **Set Requirements**:
  - Eligibility check
  - Calculate claim
  - Submit documents
  - Get paid
- **Style**: Outlined, athletic inspired
- **Format**: SVG sprite or React components

### Feature Icons
- **Priority**: High
- **Icons Needed**:
  - Fast/Speed (lightning, stopwatch)
  - Secure/Trust (shield, lock)
  - Support/Help (headset, chat)
  - Money/Payment (dollar, card)
- **Source**: Heroicons, Tabler Icons, or custom

### UI/Navigation Icons
- **Priority**: Critical
- **Set Includes**:
  - Menu/hamburger
  - Close/X
  - Arrows (athletic style)
  - Check marks
  - Information
  - External link
- **Format**: Inline SVG for styling flexibility

### Social Proof Indicators
- **Priority**: Medium
- **Icons Needed**:
  - Star ratings
  - Verified checkmark
  - User/athlete silhouette
  - Trophy/achievement
- **Style**: Filled versions for impact

---

## 6. Color Palette

### Primary Colors
- **Priority**: Critical
- **Athletic Energy**:
  - Electric Blue: #0066FF
  - Victory Gold: #FFB800
  - Power Red: #FF3B30
- **Usage**: Headlines, CTAs, accents
- **Accessibility**: Ensure WCAG AA contrast

### Accent Colors
- **Priority**: High
- **Supporting Palette**:
  - Highlight Green: #00C851 (success)
  - Alert Orange: #FF6B35 (warnings)
  - Info Cyan: #00D4FF (information)
- **Usage**: States, badges, highlights

### Neutral Colors
- **Priority**: Critical
- **Text & Backgrounds**:
  - Near Black: #0A0A0A
  - Dark Gray: #1A1A1A
  - Medium Gray: #666666
  - Light Gray: #E5E5E5
  - Off White: #FAFAFA
  - Pure White: #FFFFFF
- **Usage**: Text hierarchy, backgrounds

### Gradients
- **Priority**: High
- **Suggestions**:
  - Athletic Sunset: #FF6B35 → #FFB800
  - Electric Flow: #0066FF → #00D4FF
  - Victory Gradient: #FFB800 → #FFF1DC
- **Usage**: Hero backgrounds, CTAs
- **Direction**: 135deg for dynamic feel

---

## 7. Motion Design

### Transition Specifications
- **Priority**: High
- **Timing Functions**:
  - Default: cubic-bezier(0.4, 0, 0.2, 1)
  - Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
  - Swift: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Durations**:
  - Micro: 100-200ms
  - Standard: 300ms
  - Complex: 500-700ms

### Hover States
- **Priority**: Critical
- **Effects**:
  - Buttons: Scale(1.05) + glow
  - Cards: TranslateY(-4px) + shadow
  - Links: Underline slide-in
  - Icons: Rotate or pulse
- **Touch Feedback**: Active states for mobile

### Scroll Animations
- **Priority**: Medium
- **Triggers**:
  - Fade up on enter (stagger children)
  - Number counting
  - Progress bars filling
  - Parallax (subtle, 10-20% max)
- **Performance**: Use CSS transforms only

### Mobile Gestures
- **Priority**: High
- **Considerations**:
  - Swipe for calculators
  - Pull-to-refresh style feedback
  - Touch ripple effects
  - Momentum scrolling
- **Testing**: iOS and Android required

---

## Asset Delivery & Management

### File Organization
```
/src/assets/
├── fonts/
│   ├── primary/
│   ├── secondary/
│   └── display/
├── images/
│   ├── brand/
│   ├── backgrounds/
│   ├── patterns/
│   └── social-proof/
├── icons/
│   ├── ui/
│   ├── features/
│   └── process/
├── animations/
│   ├── lottie/
│   └── svg/
└── styles/
    ├── colors.css
    └── motion.css
```

### Performance Budget
- **Total Page Weight**: < 1.5MB
- **Hero Assets**: < 500KB
- **Fonts**: < 200KB
- **Icons**: < 50KB
- **Animations**: < 150KB

### Optimization Requirements
- **Images**: WebP with fallbacks
- **SVGs**: Optimized with SVGO
- **Fonts**: Subset and compressed
- **Sprites**: Combined icon sets
- **Lazy Loading**: Below-fold assets

---

## Recommended Sources

### Free Resources
- **Fonts**: Google Fonts
- **Icons**: Heroicons, Tabler Icons
- **Patterns**: Hero Patterns, SVG Backgrounds
- **Animations**: LottieFiles (free section)

### Premium Options
- **Icons**: Streamline Icons (athletic set)
- **Animations**: Motion Array
- **Patterns**: Creative Market
- **Fonts**: Athletic fonts from MyFonts

### Design Tools
- **Asset Creation**: Figma, Sketch
- **Animation**: After Effects + Bodymovin
- **Optimization**: ImageOptim, SVGOMG
- **Management**: Figma Libraries

---

## Next Steps

1. **Immediate Needs** (Week 1):
   - Obtain/create brand logo variations
   - Select and implement font stack
   - Create primary color system
   - Design core UI icons

2. **Short Term** (Week 2-3):
   - Develop hero section assets
   - Create animation library
   - Build icon system
   - Establish pattern library

3. **Ongoing**:
   - Performance optimization
   - A/B testing variations
   - Seasonal updates
   - Mobile-specific assets

---

*Last Updated: [Current Date]*
*Aligned with DESIGN_PRINCIPLES.md*