const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
const assetsSrc = path.join(__dirname, 'assets');
const assetsDst = path.join(dist, 'assets');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(assetsDst, { recursive: true });
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(dist, 'index.html'));
if (fs.existsSync(assetsSrc)) {
  for (const file of fs.readdirSync(assetsSrc)) {
    fs.copyFileSync(path.join(assetsSrc, file), path.join(assetsDst, file));
  }
}
console.log('Static site built into dist/');
