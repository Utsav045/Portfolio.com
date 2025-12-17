const fs = require('fs');
const path = require('path');
const svg2png = require('svg2png');

async function generateFavicons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(path.join(__dirname, 'public', 'favicon.svg'));
    
    // Generate 16x16 favicon
    const png16 = await svg2png(svgBuffer, { width: 16, height: 16 });
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon-16x16.png'), png16);
    console.log('Generated favicon-16x16.png');
    
    // Generate 32x32 favicon
    const png32 = await svg2png(svgBuffer, { width: 32, height: 32 });
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon-32x32.png'), png32);
    console.log('Generated favicon-32x32.png');
    
    // Generate 180x180 apple touch icon
    const appleTouchIcon = await svg2png(svgBuffer, { width: 180, height: 180 });
    fs.writeFileSync(path.join(__dirname, 'public', 'apple-touch-icon.png'), appleTouchIcon);
    console.log('Generated apple-touch-icon.png');
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();