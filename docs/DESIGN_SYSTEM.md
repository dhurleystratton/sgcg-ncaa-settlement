# NCAA Settlement Design System

## Overview
This design system provides a comprehensive framework for creating an athletic-inspired, youth-focused landing page that breaks away from traditional financial website conventions while maintaining trust and professionalism.

## Color Palettes

### Theme 1: Victory Lane
**Primary Colors**
- Victory Red: `#E31837` - Bold, energetic call-to-action color
- Deep Black: `#0A0A0A` - High contrast backgrounds
- Pure White: `#FFFFFF` - Clean, modern spacing

**Accent Colors**
- Electric Green: `#00FF87` - Success states, highlights
- Steel Gray: `#3A3A3A` - Secondary text
- Light Gray: `#F5F5F5` - Background variations

**Usage**
- Red for primary CTAs and important elements
- Black/white for high contrast sections
- Green for calculator results and positive actions

### Theme 2: Championship Gold
**Primary Colors**
- Championship Gold: `#FFB81C` - Premium, achievement-focused
- Midnight Navy: `#0F1B2E` - Deep, sophisticated base
- Arena White: `#FAFAFA` - Clean surfaces

**Accent Colors**
- Power Blue: `#0099FF` - Interactive elements
- Concrete Gray: `#757575` - Supporting text
- Light Mist: `#F8F9FA` - Subtle backgrounds

**Usage**
- Gold for primary actions and hero elements
- Navy for rich, deep sections
- Blue for interactive calculator elements

### Theme 3: Athletic Energy
**Primary Colors**
- Energy Orange: `#FF6B35` - Dynamic, youthful primary
- Carbon Black: `#1A1A1A` - Strong foundation
- Court White: `#FFFFFF` - Breathing space

**Accent Colors**
- Neon Lime: `#BFFF00` - Attention-grabbing highlights
- Graphite: `#4A4A4A` - Body text
- Cool Gray: `#E8E8E8` - Section dividers

**Usage**
- Orange for high-energy CTAs and focal points
- Lime for calculator highlights and success states
- Black/white for strong contrast and readability

## Typography

### Font Families
**Primary Heading Font**
- Font: `'Bebas Neue', 'Impact', sans-serif`
- Characteristics: Bold, condensed, athletic
- Usage: Hero headlines, section titles

**Secondary Heading Font**
- Font: `'Montserrat', 'Helvetica Neue', sans-serif`
- Weight: 700-900
- Usage: Subheadings, important callouts

**Body Font**
- Font: `'Inter', 'San Francisco', 'Helvetica Neue', sans-serif`
- Weight: 400-600
- Usage: Body text, UI elements

### Type Scale (Mobile-First)
```
Hero Title:      48px / 56px (3rem / 3.5rem)
Section Title:   32px / 40px (2rem / 2.5rem)
Heading 1:       28px / 36px (1.75rem / 2.25rem)
Heading 2:       24px / 32px (1.5rem / 2rem)
Heading 3:       20px / 28px (1.25rem / 1.75rem)
Body Large:      18px / 28px (1.125rem / 1.75rem)
Body:            16px / 24px (1rem / 1.5rem)
Small:           14px / 20px (0.875rem / 1.25rem)
Caption:         12px / 16px (0.75rem / 1rem)
```

### Desktop Scale Adjustments
```
Hero Title:      80px / 88px (5rem / 5.5rem)
Section Title:   48px / 56px (3rem / 3.5rem)
Heading 1:       40px / 48px (2.5rem / 3rem)
Heading 2:       32px / 40px (2rem / 2.5rem)
```

## Spacing System (8px Grid)

### Base Unit: 8px (0.5rem)

**Spacing Scale**
```
space-0:   0px      (0rem)
space-1:   8px      (0.5rem)
space-2:   16px     (1rem)
space-3:   24px     (1.5rem)
space-4:   32px     (2rem)
space-5:   40px     (2.5rem)
space-6:   48px     (3rem)
space-7:   56px     (3.5rem)
space-8:   64px     (4rem)
space-10:  80px     (5rem)
space-12:  96px     (6rem)
space-16:  128px    (8rem)
space-20:  160px    (10rem)
```

**Usage Guidelines**
- Micro: space-1 to space-2 (component internal spacing)
- Small: space-3 to space-4 (related elements)
- Medium: space-5 to space-6 (section internal spacing)
- Large: space-8 to space-12 (section separation)
- Jumbo: space-16 to space-20 (major sections)

## Component Patterns

### Buttons
**Primary CTA**
- Bold, oversized (min-height: 56px mobile, 64px desktop)
- High contrast colors
- Subtle hover animations
- Full-width on mobile, auto on desktop

**Secondary Actions**
- Ghost or outlined style
- Slightly smaller than primary
- Clear but not competing for attention

### Cards
**Calculator Cards**
- Sharp corners or minimal radius (4px max)
- Strong shadows for depth
- Hover state lifts card
- Focus on content, minimal borders

### Forms
**Input Fields**
- Large touch targets (min 48px height)
- Clear labels and placeholders
- Inline validation
- Number inputs for calculator with large, clear typography

### Hero Sections
- Full viewport height option
- Bold typography overlay on athletic imagery
- Parallax or subtle animation effects
- Clear CTA placement

## Animation Standards

### Timing Functions
```
ease-swift:     cubic-bezier(0.4, 0.0, 0.2, 1)    // Default, smooth
ease-power:     cubic-bezier(0.4, 0.0, 0.0, 1)    // Aggressive, athletic
ease-smooth:    cubic-bezier(0.4, 0.0, 0.6, 1)    // Gentle, refined
ease-bounce:    cubic-bezier(0.68, -0.55, 0.265, 1.55)  // Playful emphasis
```

### Duration Standards
```
instant:    100ms   // Hover states, micro-interactions
quick:      200ms   // Button presses, small transitions
normal:     300ms   // Default transitions
moderate:   500ms   // Page elements, modals
slow:       700ms   // Major transitions
deliberate: 1000ms  // Hero animations, emphasis
```

### Animation Principles
- Performance-first: Use transform and opacity when possible
- Purposeful: Each animation should enhance, not distract
- Consistent: Similar elements animate similarly
- Respectful: Honor prefers-reduced-motion

## Responsive Breakpoints

### Core Breakpoints
```
xs:  0px     // Base mobile
sm:  640px   // Large phones
md:  768px   // Tablets
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // Extra large screens
```

### Container Widths
```
sm:  100%     (padding: 16px)
md:  100%     (padding: 24px)
lg:  1024px   (padding: 32px)
xl:  1200px   (padding: 32px)
2xl: 1400px   (padding: 32px)
```

### Design Approach
- Mobile-first development
- Touch-first interactions
- Progressive enhancement
- Fluid typography between breakpoints

## Accessibility Standards

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states
- Don't rely on color alone for information

### Interactive Elements
- Minimum touch target: 44x44px
- Clear focus indicators
- Keyboard navigation support
- Screen reader optimized

### Motion
- Respect prefers-reduced-motion
- Provide pause controls for auto-playing content
- Avoid flashing or strobing effects

## Implementation Notes

### Performance Priorities
1. Critical CSS inlined
2. Font loading optimized
3. Images lazy-loaded
4. Animations GPU-accelerated

### Progressive Enhancement
1. Core experience works without JavaScript
2. Enhanced features layer on top
3. Fallbacks for older browsers
4. Mobile performance prioritized

### Testing Checklist
- [ ] 3-second load time on 3G
- [ ] Touch-friendly on all devices
- [ ] Readable without custom fonts
- [ ] Navigable with keyboard only
- [ ] Screen reader tested
- [ ] Cross-browser verified

---

*This design system prioritizes athletic energy and youth appeal while maintaining the trust and clarity essential for financial services. Every decision should enhance the user experience for our target audience: young former athletes ready to claim their settlement.*