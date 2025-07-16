# NCAA Settlement Landing Page - Detailed Wireframe

## 1. Page Structure Overview

### Single Page Flow
```
┌─────────────────────────────────────┐
│ HERO                                │ <- Immediate impact
├─────────────────────────────────────┤
│ TRUST BUILDING                      │ <- Credibility without boring
├─────────────────────────────────────┤
│ PROCESS                             │ <- Simple 3-step guide
├─────────────────────────────────────┤
│ CALCULATOR ZONE                     │ <- Interactive engagement
├─────────────────────────────────────┤
│ SOCIAL PROOF                        │ <- Peer validation
├─────────────────────────────────────┤
│ FINAL CTA                           │ <- Conversion push
└─────────────────────────────────────┘
```

### Responsive Breakpoints
- **Mobile**: 320px - 767px (primary focus)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1440px
- **Wide**: 1440px+

### Mobile vs Desktop Philosophy
- **Mobile-First**: All designs start at 375px width
- **Progressive Enhancement**: Add complexity on larger screens
- **Touch-First**: All interactions work with thumbs
- **Performance**: Mobile loads < 2 seconds on 4G

---

## 2. Hero Section

### Desktop Layout (1440px)
```
┌──────────────────────────────────────────────────────────────┐
│ [Logo]                                              [Get Paid]│ <- Sticky nav
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    GET YOUR NCAA                             │ <- 120px bold
│                   SETTLEMENT CASH                            │
│                        NOW                                   │ <- Animated entrance
│                                                              │
│               Former D1 athlete? You're owed                 │ <- 24px subhead
│                  $2,000 to $25,000+                         │
│                                                              │
│              [CHECK MY ELIGIBILITY →]                        │ <- Primary CTA
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │   2016+    │  │  $135M+    │  │   5 MIN    │            │ <- Trust stats
│  │  Athletes  │  │ Settlement │  │  Process   │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375px)
```
┌─────────────────────┐
│ [≡]     [Logo]      │
├─────────────────────┤
│                     │
│    GET YOUR NCAA    │ <- 48px
│   SETTLEMENT CASH   │
│        NOW          │
│                     │
│  Former D1 athlete? │ <- 18px
│   You're owed       │
│  $2,000 to $25,000+ │
│                     │
│ [CHECK ELIGIBILITY] │ <- Full width
│                     │
│ ┌─────┬─────┬─────┐ │
│ │2016+│$135M│5 MIN│ │ <- Horizontal scroll
│ └─────┴─────┴─────┘ │
└─────────────────────┘
```

### Animation Concepts
1. **Text Entrance**: Words slide up with stagger (0.1s delay each)
2. **CTA Pulse**: Subtle scale animation on hover/focus
3. **Stats Counter**: Numbers count up on scroll trigger
4. **Background**: Subtle particle effect or gradient animation

### Key Messaging Hierarchy
1. Primary: "GET YOUR NCAA SETTLEMENT CASH NOW"
2. Secondary: Dollar amounts (immediate value prop)
3. Supporting: Quick stats for credibility

---

## 3. Trust Building Section

### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    Why Athletes Trust Us                     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │              │  │              │  │              │      │
│  │   [Icon]     │  │   [Icon]     │  │   [Icon]     │      │
│  │              │  │              │  │              │      │
│  │  Founded by  │  │  No Hidden   │  │  Get Paid    │      │
│  │   Athletes   │  │    Fees      │  │   Faster     │      │
│  │              │  │              │  │              │      │
│  │ We've been   │  │ Simple 25%   │  │ Cash in days │      │
│  │ where you    │  │ only if you  │  │ not months   │      │
│  │    are       │  │  get paid    │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ "The NCAA owes athletes $2.8 billion. We make      │     │ <- Pull quote
│  │  sure you get your share - fast and fair."         │     │
│  │                          - CEO, Former D1 Athlete   │     │
│  └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Approach
- Stack cards vertically
- Swipeable carousel for trust points
- Condensed messaging
- Visual icons over text

### Visual Elements
- **Icons**: Athletic/speed themed (stopwatch, trophy, handshake)
- **Colors**: Contrasting accent colors for each point
- **Motion**: Cards fade in on scroll
- **Background**: Subtle texture or pattern

---

## 4. Process Section

### Desktop 3-Step Visual
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    How It Works                              │
│                                                              │
│     (1)                    (2)                    (3)        │
│  ┌────────┐           ┌────────┐           ┌────────┐       │
│  │        │  ───────> │        │  ───────> │        │       │
│  │ CHECK  │           │ SUBMIT │           │  GET   │       │
│  │        │           │        │           │  PAID  │       │
│  └────────┘           └────────┘           └────────┘       │
│                                                              │
│  Answer 3         We handle all      Receive your           │
│  questions        the paperwork      money fast             │
│                                                              │
│              [START YOUR CLAIM →]                            │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌─────────────────────┐
│                     │
│    How It Works    │
│                     │
│  ┌───────────────┐  │
│  │   STEP 1      │  │
│  │   [Icon]      │  │
│  │   CHECK       │  │
│  │ Answer 3      │  │
│  │ questions     │  │
│  └───────────────┘  │
│         ↓           │
│  ┌───────────────┐  │
│  │   STEP 2      │  │
│  │   [Icon]      │  │
│  │   SUBMIT      │  │
│  │ We handle     │  │
│  │ paperwork     │  │
│  └───────────────┘  │
│         ↓           │
│  ┌───────────────┐  │
│  │   STEP 3      │  │
│  │   [Icon]      │  │
│  │   GET PAID    │  │
│  │ Money in      │  │
│  │ days          │  │
│  └───────────────┘  │
│                     │
│ [START YOUR CLAIM]  │
└─────────────────────┘
```

### Interactive Elements
- **Progress Animation**: Line draws between steps
- **Hover States**: Steps expand with more detail
- **Mobile**: Vertical timeline with scroll-triggered animations
- **Micro-interactions**: Icons animate on view

---

## 5. Calculator Integration Zone

### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│               See What You Could Be Owed                     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │                                                    │     │
│  │         [Calculator Preview/Teaser]                │     │
│  │                                                    │     │
│  │    Sport: [Dropdown  v]  Years: [2016-2024 v]    │     │
│  │                                                    │     │
│  │    Estimated Settlement: $X,XXX - $XX,XXX         │     │
│  │                                                    │     │
│  │         [CALCULATE MY EXACT AMOUNT →]             │     │
│  │                                                    │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  * Calculation based on sport and years played               │
└──────────────────────────────────────────────────────────────┘
```

### Placement Strategy
- **Below fold**: Natural progression after trust/process
- **Teaser approach**: Show potential without requiring full engagement
- **Smooth scroll**: Auto-scroll anchor from hero CTA
- **Exit intent**: Can trigger as modal on bounce

### Mobile Optimization
```
┌─────────────────────┐
│                     │
│   See What You're   │
│       Owed          │
│                     │
│ ┌─────────────────┐ │
│ │                 │ │
│ │ Sport:          │ │
│ │ [Dropdown    v] │ │
│ │                 │ │
│ │ Years Played:   │ │
│ │ [2016-2024  v] │ │
│ │                 │ │
│ │ Est. Settlement:│ │
│ │   $X,XXX -      │ │
│ │   $XX,XXX       │ │
│ │                 │ │
│ │ [CALCULATE →]   │ │
│ └─────────────────┘ │
└─────────────────────┘
```

---

## 6. Social Proof Section

### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                   Athletes Are Getting Paid                   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │              │  │              │  │              │      │
│  │   $15,000    │  │   $8,500     │  │   $22,000    │      │
│  │              │  │              │  │              │      │
│  │ "Process was │  │ "Got my      │  │ "Wish I knew │      │
│  │  so easy"    │  │  money in    │  │  about this  │      │
│  │              │  │  5 days"     │  │  sooner"     │      │
│  │  - Sarah K.  │  │  - Mike T.   │  │  - Jordan L. │      │
│  │  Basketball  │  │  Football    │  │  Track       │      │
│  │  2018-2022   │  │  2016-2020   │  │  2019-2023   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│                    [← →] More Stories                        │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  12,000+        $45M+          4.9★               │     │
│  │  Athletes       Distributed     Rating             │     │
│  └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Layout
- Swipeable carousel for testimonials
- Single card view with navigation dots
- Stats bar scrolls horizontally
- Emphasis on dollar amounts

### Trust Indicators
- **Real Names**: First name, last initial
- **Sport & Years**: Relatable context
- **Dollar Amounts**: Big, bold numbers
- **Star Ratings**: Visual trust signal
- **Aggregate Stats**: Total payouts, athlete count

---

## 7. CTA Section

### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                Ready to Get Your Money?                      │
│                                                              │
│          It only takes 5 minutes to start                    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │                                                    │     │
│  │  Email: [_________________________]               │     │
│  │                                                    │     │
│  │  Phone: [_________________________]               │     │
│  │                                                    │     │
│  │         [GET MY SETTLEMENT →]                     │     │
│  │                                                    │     │
│  │  ✓ No upfront costs  ✓ Get paid in days          │     │
│  │                                                    │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│         Questions? Text us at 1-800-XXX-XXXX                │
└──────────────────────────────────────────────────────────────┘
```

### Mobile-First Form Design
```
┌─────────────────────┐
│                     │
│  Ready to Get       │
│  Your Money?        │
│                     │
│ Takes just 5 minutes│
│                     │
│ ┌─────────────────┐ │
│ │ Email           │ │
│ │ [____________]  │ │
│ │                 │ │
│ │ Phone           │ │
│ │ [____________]  │ │
│ │                 │ │
│ │ [GET STARTED]   │ │
│ │                 │ │
│ │ ✓ No upfront    │ │
│ │   costs         │ │
│ │ ✓ Paid in days  │ │
│ └─────────────────┘ │
│                     │
│ Questions? Text us  │
└─────────────────────┘
```

### Multiple Conversion Points
1. **Hero CTA**: "Check Eligibility"
2. **Process CTA**: "Start Your Claim"
3. **Calculator CTA**: "Calculate Amount"
4. **Final CTA**: "Get My Settlement"
5. **Sticky Mobile**: "Get Paid" button

---

## 8. Navigation Strategy

### Desktop Sticky Nav
```
┌──────────────────────────────────────────────────────────────┐
│ [Logo]  How It Works  Calculator  Testimonials  [Get Paid]  │
└──────────────────────────────────────────────────────────────┘
```
- Appears after scroll past hero
- Transparent → white background transition
- CTA button always visible

### Mobile Navigation
```
┌─────────────────────┐
│ [≡]  [Logo]  [CTA]  │ <- Persistent header
└─────────────────────┘

Hamburger Menu:
┌─────────────────────┐
│ ✕                   │
├─────────────────────┤
│ How It Works        │
│ Calculator          │
│ Testimonials        │
│ FAQ                 │
│                     │
│ [GET PAID NOW]      │
└─────────────────────┘
```

### Scroll Indicators
- Progress bar at top (mobile)
- Section dots on right (desktop)
- Smooth scroll anchoring
- Active section highlighting

### Interaction Patterns
1. **Smooth Scrolling**: All anchor links
2. **Parallax Effects**: Subtle, performance-conscious
3. **Hover States**: Clear, athletic-inspired
4. **Loading States**: Skeleton screens for calculator
5. **Error States**: Inline, friendly messaging
6. **Success States**: Celebratory micro-animations

---

## Animation Opportunities

### Performance-First Animations
1. **CSS-Only**: Transform, opacity for 60fps
2. **Intersection Observer**: Trigger on scroll
3. **GPU Acceleration**: Will-change properties
4. **Reduced Motion**: Respect user preferences

### Key Animation Moments
- Hero text entrance (stagger)
- Stats counting up
- Process line drawing
- Calculator preview reveal
- Testimonial card transitions
- CTA button interactions

---

## Technical Notes

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+
- Mobile data friendly: < 500KB initial load

### SEO Considerations
- Semantic HTML structure
- Schema markup for testimonials
- Meta descriptions per section
- Alt text for all images
- Structured data for calculator

### Accessibility
- WCAG AA compliant
- Keyboard navigation
- Screen reader optimized
- High contrast mode
- Focus indicators
- ARIA labels for interactions

---

*This wireframe prioritizes mobile experience, athletic aesthetics, and conversion optimization while maintaining trust and credibility for the target 22-30 year old former D1 athlete audience.*