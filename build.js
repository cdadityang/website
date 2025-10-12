const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Copies a single file from one path to another
function copyFileSync(from, to) {
  // Ensure the directory of the destination file exists
  const destDir = path.dirname(to);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(from, to);
}


// Copies a folder from one path to another
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach((element) => {
    const srcPath = path.join(from, element);
    const destPath = path.join(to, element);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Deletes a folder and all its contents
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

// Ensures a directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Delete dist/ before build
console.log('Clear dist/ folder...');
deleteFolderRecursive('dist');

// 2. Ensure output directories exist
console.log('Ensure output directories exist...');
ensureDir('dist/styles');
ensureDir('dist/scripts');
ensureDir('dist/images');
ensureDir('dist/fonts');

// 3. Purge and minify CSS
console.log('Processing CSS...');
execSync('npx postcss src/styles/*.css --dir dist/styles', { stdio: 'inherit' });

// 4. Minify JS
console.log('Minifying JS...');
execSync('npx terser src/scripts/*.js -o dist/scripts/main.js --compress --mangle', { stdio: 'inherit' });

// 5. Minify HTML
console.log('Minifying HTML...');
execSync('npx html-minifier-terser src/index.html -o dist/index.html --collapse-whitespace --remove-comments --remove-optional-tags --minify-css true --minify-js true', { stdio: 'inherit' });

// 6. Copy images and fonts
console.log('Copying assets...');
copyFolderSync('src/images', 'dist/images');
copyFolderSync('src/fonts', 'dist/fonts');
copyFileSync('src/favicon.ico', 'dist/favicon.ico');

console.log('Build complete!');
