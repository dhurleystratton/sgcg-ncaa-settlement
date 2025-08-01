const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with standard OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Colors from the site (exact values from Tailwind config)
const colors = {
  midnight: '#0A0A0A',
  teal: '#439aa3',
  white: '#FFFFFF',
  tealDark: '#0a423b'
};

// Fill background with midnight color
ctx.fillStyle = colors.midnight;
ctx.fillRect(0, 0, width, height);

// Add subtle athletic texture background (similar to site)
ctx.globalAlpha = 0.05;
ctx.strokeStyle = colors.teal;
ctx.lineWidth = 1;

// Grid pattern
for (let i = 0; i < width; i += 100) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i, height);
  ctx.stroke();
}
for (let i = 0; i < height; i += 100) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(width, i);
  ctx.stroke();
}

ctx.globalAlpha = 1;

// Set up text styling
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Main title - HOUSE VS NCAA
const centerX = width / 2;
let currentY = 140; // Moved up from 180 to create more space below

// HOUSE - using condensed font style similar to Bebas Neue
ctx.font = 'bold 160px Arial Black, Impact, sans-serif';
ctx.fillStyle = colors.white;
ctx.fillText('HOUSE', centerX, currentY);

// VS - same size as other text, with proper spacing
currentY += 120; // Slightly reduced from 130
ctx.font = 'bold 160px Arial Black, Impact, sans-serif';
ctx.fillStyle = colors.teal;
ctx.fillText('VS', centerX, currentY);

// NCAA - same size as HOUSE
currentY += 120; // Consistent spacing
ctx.font = 'bold 160px Arial Black, Impact, sans-serif';
ctx.fillStyle = colors.white;
ctx.fillText('NCAA', centerX, currentY);

// SELL YOUR CLAIM button - add more space between NCAA and button
currentY += 150; // Increased from 110 to create breathing room

// Button background with glow effect
ctx.shadowColor = colors.teal;
ctx.shadowBlur = 40;
ctx.fillStyle = colors.midnight;
ctx.fillRect(centerX - 280, currentY - 40, 560, 80);

// Button border
ctx.strokeStyle = colors.teal;
ctx.lineWidth = 4;
ctx.strokeRect(centerX - 280, currentY - 40, 560, 80);

// Button text
ctx.shadowBlur = 0;
ctx.font = 'bold 56px Arial Black, Impact, sans-serif';
ctx.fillStyle = colors.teal;
ctx.fillText('SELL YOUR CLAIM', centerX, currentY);

// Removed Sycamore Grove Claims Group text to avoid overlap

// Save the image
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'og-image-new.png');
fs.writeFileSync(outputPath, buffer);

console.log('OG image generated successfully at:', outputPath);
console.log('Image dimensions:', width + 'x' + height);