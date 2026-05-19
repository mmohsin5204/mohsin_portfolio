const fs = require('fs');

const copies = [
  ['C:/Users/Abdul Wahid/Desktop/1.png', 'C:/Users/Abdul Wahid/Desktop/react_projects/Mantra Clothing/src/assets/1.png'],
  ['C:/Users/Abdul Wahid/Desktop/2.png', 'C:/Users/Abdul Wahid/Desktop/react_projects/sizzle-bbq/src/assets/2.png'],
  ['C:/Users/Abdul Wahid/Desktop/3.png', 'C:/Users/Abdul Wahid/Desktop/react_projects/Gym Website/Gym Website/src/assets/3.png'],
  ['C:/Users/Abdul Wahid/Desktop/4.png', 'C:/Users/Abdul Wahid/Desktop/react_projects/vintage/src/assets/4.png']
];

for (const [src, dest] of copies) {
  try {
    const destDir = dest.substring(0, dest.lastIndexOf('/'));
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`Failed to copy ${src}: ${err.message}`);
  }
}
