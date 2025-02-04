const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const srcDir = path.join(__dirname, '..', 'config', 'ssl');
const destDir = path.join(__dirname, '..', 'dist', 'config', 'ssl');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Copy SSL files
['server.key', 'server.cert'].forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, path.join(destDir, file));
        console.log(`Copied ${file} to ${destDir}`);
    } else {
        console.error(`Source file ${srcPath} not found`);
    }
});
