This directory is for housing assets and utilities for publishing our content on Canvas.

### Webpack

Webpack is currently set up to watch JS and SCSS files. Simply run `npm start` to get started. The entry point for JavaScript is `src/js/index.js`. The entry point for SASS is `src/css/main.scss`. Compiled files with appear in the `build` folder with prefix `canvas-fsfo-`.

### Chrome Extension

In `chrome://extensions/` tab, turn Developer Mode on, then click "Load unpacked" and select the `build` folder from this repo. The extension will inject the build CSS and JS files into the browser when you navigate to any Canvas course page. To see your code changes, click the [C] extension icon to reload the extension assets.

Note: If older JS and CSS files have already been uploaded to Canvas through the admin interface, the extension will automatically block them to avoid conflicting with your local changes.