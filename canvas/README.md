This directory is for housing assets and utilities for publishing our content on Canvas.

### Chrome Extension

In `chrome://extensions/` tab, turn Developer Mode on, then click "Load unpacked" and select the `build` folder from this repo. The extension will inject the build CSS and JS files into the browser when you navigate to https://trilogyed.instructure.com/courses/89/pages/*. To see your code changes, click the [C] extension icon to reload the extension assets.

### CSS/SASS

If you run `npm start`, the node-sass package will begin watching for any changes in the `src/css/` directory and output an updated, compiled style sheet to `build/canvas-fsfo-theme.css`. Any secondary SASS files should be prefixed with an underscore to prevent them from being pulled into the `build` folder. For example: `_learning-blocks.scss`.