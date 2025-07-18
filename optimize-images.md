# Image Optimization Guide

## Quick Image Optimization Steps

### 1. Generate OG Image (CRITICAL - Do This First!)
1. Open `public/generate-og-image.html` in your browser
2. Click "Download og-image.png"
3. Save the file as `public/og-image.png`
4. This fixes the broken social media preview issue

### 2. Optimize Existing Images
The logo files are quite large for web use. Here's how to optimize them:

**Current Sizes:**
- SGCG Logo BW.png: 17KB
- SGCG Logo Color.png: 29KB
- favicon.ico: Actually a 1000x1000 PNG (needs optimization)

**Recommended Actions:**

1. **Create optimized logo versions:**
   ```bash
   # If you have ImageMagick installed:
   convert "public/images/logo/SGCG Logo Color.png" -resize 300x300 -quality 85 public/images/logo/sgcg-logo-optimized.png
   
   # Or use an online tool like TinyPNG.com
   ```

2. **Create a proper favicon:**
   ```bash
   # Convert the current favicon to proper ICO format with multiple sizes
   convert public/favicon.ico -resize 16x16 -resize 32x32 -resize 48x48 public/favicon-proper.ico
   ```

3. **Create additional image assets:**
   - Twitter Card image (1200x600 or 1200x675)
   - Facebook preview (1200x630) - same as OG image
   - LinkedIn preview (1200x627)

### 3. Image Format Recommendations
- Use WebP format for better compression (30-50% smaller)
- Provide fallbacks for older browsers
- Consider lazy loading for below-fold images

### 4. Next.js Image Optimization
Update the logo reference in HeroVictoryLane.tsx to use optimized version:
```tsx
<Image 
  src="/images/logo/sgcg-logo-optimized.png" 
  alt="Sycamore Grove Claims Group"
  width={100}
  height={100}
  priority
  quality={90}
/>
```

## Performance Impact
- Current logo load: ~30KB
- After optimization: ~10-15KB
- Savings: 50% reduction in initial load

## Tools for Image Optimization
1. **Online Tools:**
   - TinyPNG.com - Great for PNG optimization
   - Squoosh.app - Google's image optimizer
   - ImageOptim (Mac) - Drag and drop optimizer

2. **Command Line:**
   ```bash
   # Install imagemin CLI
   npm install -g imagemin-cli imagemin-pngquant
   
   # Optimize all PNGs
   imagemin "public/images/**/*.png" --out-dir=public/images --plugin=pngquant
   ```

3. **Next.js Built-in:**
   - Already configured in next.config.js
   - Automatically optimizes images served through Image component

## Priority Actions
1. ✅ Generate og-image.png using the HTML tool
2. ⚡ Optimize the main logo (currently 29KB)
3. 🎯 Create proper favicon with multiple sizes
4. 📱 Test social media previews after adding og-image.png