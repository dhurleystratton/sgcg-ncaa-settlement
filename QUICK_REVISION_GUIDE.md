# Quick Revision Guide

## Common Changes & Where to Make Them

### Text Changes
**Hero Title/Subtitle**: `/components/HeroVictoryLane.tsx` (lines 134-141)
```tsx
<span className="block...">HOUSE</span>
<span className="block...">VS</span>
<span className="block...">NCAA</span>
```

**CTA Button Text**: Line 516
```tsx
SUBMIT CLAIM INFORMATION
```

**Footer Text**: Line 291
```tsx
SGCG & Affiliates paid over $380M to plaintiffs in 2024
```

### Color Changes
**Teal Color**: `/tailwind.config.ts`
```js
'brand-teal': '#439aa3',
'brand-dark-teal': '#0a423b',
```

**Background**: Change `bg-midnight` to desired color class

### Font Size Adjustments
**Mobile Hero Text**: Line 135-137
```tsx
text-5xl sm:text-6xl md:text-8xl lg:text-9xl
```

**Form Labels**: Search for `text-sm` in form section

### Layout Changes
**Two-Column Breakpoint**: Line 332
```tsx
grid grid-cols-1 md:grid-cols-2
```

**Padding/Spacing**: Look for `p-6`, `py-16`, `gap-8` classes

### Form Changes
**Add/Remove Fields**: Lines 410-502 in contact form
**Email Recipients**: `/app/api/contact/route.ts` line 4-9

### Link Updates
**Quick Update**: `/config/links-config.json`
**Component Update**: Search for `href=` in HeroVictoryLane.tsx

### Theme Switching
**Current Theme**: Athletic (HeroVictoryLane)
**To Change**: Edit `/app/page.tsx` line 40
```tsx
const [theme, setTheme] = useState<'athletic' | 'corporate' | 'athletic-imagery'>('athletic')
```

## Testing Checklist
- [ ] Run `npm run dev` to test locally
- [ ] Check mobile view (F12 → Mobile icon)
- [ ] Test form submission
- [ ] Verify all links work
- [ ] Check smooth scroll on CTA

## Build Commands
```bash
npm run dev    # Local development
npm run build  # Production build
npm run start  # Test production build
```

## File Structure
```
/components/
  ├── HeroVictoryLane.tsx (main component)
  ├── HeroVictoryLaneCorporate.tsx
  └── HeroVictoryLaneAthletic.tsx
/app/
  ├── page.tsx (theme switcher)
  ├── layout.tsx (SEO/meta)
  └── api/contact/route.ts (form handler)
/config/
  └── links-config.json (all URLs)
/public/
  ├── robots.txt
  └── sitemap.xml
```