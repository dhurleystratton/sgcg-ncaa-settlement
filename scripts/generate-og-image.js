const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with standard OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Colors from the site
const colors = {
  midnight: '#0A1628',
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
let currentY = 200;

// HOUSE
ctx.font = 'bold 120px Arial, sans-serif';
ctx.fillStyle = colors.white;
ctx.fillText('HOUSE', centerX, currentY);

// VS
currentY += 90;
ctx.font = 'bold 120px Arial, sans-serif';
ctx.fillStyle = colors.teal;
ctx.fillText('VS', centerX, currentY);

// NCAA
currentY += 90;
ctx.font = 'bold 120px Arial, sans-serif';
ctx.fillStyle = colors.white;
ctx.fillText('NCAA', centerX, currentY);

// (NIL) SETTLEMENT subtitle
currentY += 70;
ctx.font = '32px Arial, sans-serif';
ctx.fillStyle = colors.teal;
ctx.letterSpacing = '0.3em';
ctx.fillText('(NIL) SETTLEMENT', centerX, currentY);

// SELL YOUR CLAIM button
currentY += 100;

// Button background with glow effect
ctx.shadowColor = colors.teal;
ctx.shadowBlur = 30;
ctx.fillStyle = colors.midnight;
ctx.fillRect(centerX - 250, currentY - 35, 500, 70);

// Button border
ctx.strokeStyle = colors.teal;
ctx.lineWidth = 3;
ctx.strokeRect(centerX - 250, currentY - 35, 500, 70);

// Button text
ctx.shadowBlur = 0;
ctx.font = 'bold 48px Arial, sans-serif';
ctx.fillStyle = colors.teal;
ctx.fillText('SELL YOUR CLAIM', centerX, currentY);

// Add small branding at bottom
ctx.font = '16px Arial, sans-serif';
ctx.fillStyle = colors.white;
ctx.globalAlpha = 0.7;
ctx.fillText('Sycamore Grove Claims Group', centerX, height - 30);

// Save the image
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'og-image-new.png');
fs.writeFileSync(outputPath, buffer);

console.log('OG image generated successfully at:', outputPath);
console.log('Image dimensions:', width + 'x' + height);