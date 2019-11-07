# Detailed Lesson Outline for 19.3

## Introduction

• Modularity is a best practice in object oriented and functional programming for maintainability. 
• Long JavaScript files are discouraged due to the overhead in time needed for debugging and extensibility.
• While our previous webpack config is great for bundling single files, this would not scale with a large application with hundreds of files.
• We will use webpack to aid us in splitting our code and decreasing our bundle sizes even further.
• We will load bundles only with the necessary HTML file, essentially “lazy-loading” our JS.
  • This will further decrease our initial load times by not loading assets that aren’t needed immediately.
• We will use plugins to analyze the size of each of our newly created bundles
• We will use the file loader plugin to allow us to dynamically import images in our JavaScript. 
• We will chain the webpack-image-loader to our file loader to minify our images.

• Highlight what we’ll learn overall. We’ll learn:
  • How to analyze code and split it based on proper separation of concerns
  • How to add plugins to improve performance or developer productivity
> **On the Job:** Webpack is having a surge in popularity due to its usefulness in performance building and maintenance of a web application

## Preview
• Screenshot of our deployed project’s network tab
• Screenshot of our network tab post-webpack plugins.
• Highlight how the size of javascript files and images are smaller with webpack plugins.

## 1. Introduce Webpack

• Open source JavaScript software build tool.
• What is a build?
  • Code from your IDE must be converted into
• Creates static files from interdependent JavaScript files.
• Webpack Dev Server
• -p flag for minification of js

## 2. Code Split

• Open `script.js` and analyze the code
• Add Learnosity Call Out @JoeGood to categorize functions into proper files
• Break createEl into a separate file called domMethods.js
• Break dateConverter and createLoremIpsum into a separate file called helpers.js
• Even if we were to only use it in one file, it’s still best to break it into a utility file, best practices, separation of concerns
• Require createEl in schedule.js and events.js
• Require createLoremIpsum and dateConverter in schedule.js
• Update `webpack.config` with the new entry points
• Update the html files to use {name}.bundle.js instead of app.bundle.js.
• Import bootstrap in script.js, events.js, tickets.js, and schedule.js
• Make sure dist/app.bundle.js is linked in index.html
• Ask students how would we evaluate our bundles and their impact 

### 3. Plugins

• Introduce the Bundle Analyzer Plugin.
• Npm i -D webpack-bundle-analyzer
• Add the plugin to webpack.config.js
• Run `npm run webpack` and examine the page that opens up in the browser
• Explain why jQuery/bootstrap takes up a lot of the js file
• Add file-loader to webpack.config.js
• Change JS in script.js to import a single image file in the carousel instead of hardcoding the path.
• This causes the path for that file to be dynamically generated. 
• View the new resource in the browser
• Open `index.html` in the browser and open the developer tools. Navigate to the network tab and find the image that was imported
• Repeat these steps for the rest of the images in the carousel.
• Take note of the file size of each image. File loader does not make the image size any smaller.
• Add the image-webpack-loader 
• Npm install image-webpack-loader
• Add to webpack.config.js
• Chain it to file-loader
• Go to each image in your file explorer and ensure that each image’s size has been reduced.
• Since minifying the images can cause the build to take longer, students can provide the option to only minify in production mode.
• Navigate to network tab and view the difference in image file sizes.
• Deep Dive into other loaders and plugins 
Push to GitHub pages and run a lighthouse audit
• Checkpoint Learnosity 

## Reflection

•Review what the student has accomplished in this lesson:
•Specific skills learned:
•Analyzing large blocks of code and splitting them up with separation of concerns in mind 
•Adding plugins and loaders

### Assessment

•Does file-loader minimize images?
•No



 
