# cdadityang Website

<div align="center">
  <img src="./src/images/cdadityang-welcome-180x180.png"/>

  **[https://cdadityang.xyz](https://cdadityang.xyz)**
</div>

> The codebase for my personal website.

[![Issues](https://img.shields.io/github/issues/cdadityang/website.svg)](https://github.com/cdadityang/website/issues)
[![Issues closed](https://img.shields.io/github/issues-closed/cdadityang/website.svg)](https://github.com/cdadityang/website/issues)
[![Pulls](https://img.shields.io/github/issues-pr/cdadityang/website.svg)](https://github.com/cdadityang/website/pulls)
[![Pulls](https://img.shields.io/github/issues-pr-closed/cdadityang/website.svg)](https://github.com/cdadityang/website/pulls)
[![License](https://img.shields.io/github/license/cdadityang/website.svg)](https://choosealicense.com/licenses/agpl-3.0/)
[![CLA assistant](https://cla-assistant.io/readme/badge/cdadityang/website)](https://cla-assistant.io/cdadityang/website)

## Tech Stack
- HTML, CSS, JavaScript
- Bootstrap
- PostCSS (with `autoprefixer` and `cssnano`)
- PurgeCSS
- Terser (JavaScript minifier)
- html-minifier-terser (HTML minifier)

## Installation
1. Clone the repository
```bash
git clone https://github.com/cdadityang/website
```

2. Navigate to the project directory
```bash
cd website
```

3. Open `src/index.html` in your browser to view the development version

## Build
1. Build the optimized production version
```bash
npm run build
```

2. Open the `dist/index.html` in your browser to view production version.


The build process includes:
- **Clean**: Removes the existing `dist/` folder and creates fresh output directories (styles, scripts, images, fonts)
- **CSS Processing**: PostCSS pipeline that purges unused CSS rules with PurgeCSS, adds vendor prefixes with autoprefixer for cross-browser compatibility, and minifies CSS with cssnano for optimal file size
- **JS Minification**: Terser compresses JavaScript by removing whitespace, shortening variable names (mangling), and eliminating dead code while preserving functionality
- **HTML Minification**: html-minifier-terser removes unnecessary whitespace, comments, and optional HTML tags while also minifying any inline CSS and JavaScript for maximum compression
- **Asset Copying**: Copies static assets (images and fonts) from `src/` to `dist/` folder maintaining the same directory structure for production deployment

## Contributing
If you would like to contribute, please check [this contributing guide](https://github.com/cdadityang/website/blob/master/CONTRIBUTING.md)

Please check [this Code of Conduct guide](https://github.com/cdadityang/website/blob/master/CODE_OF_CONDUCT.md) before contributing or having any kind of discussion(issues, pull requests etc.)