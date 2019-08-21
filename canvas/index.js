require('dotenv').config();
const fs = require("fs");
const canvas = require("./tools/canvas.js");
const converter = require("./tools/converter.js");

// converter.transformMarkdown("../01-html/content/step-1-html-cmd-git.md");

// check for key
if (!process.env.CANVAS_TOKEN) {
  console.error("Must define CANVAS_TOKEN environment variable");
  process.exit();
}
// check for lesson argument
else if (!process.argv[2]) {
  console.error("Must provide lesson number argument (e.g. 1.2)");
  process.exit();
}

let mod = process.argv[2].split(".")[0];
let lesson = process.argv[2].split(".")[1];
let folder = "../";

// find folder that matches module number
fs.readdirSync(folder).forEach((file) => {
  if (file.match(new RegExp(`^0?${mod}-`))) {
    folder += file + "/content/assets/";
  }
});

if (folder.indexOf("/contents/assets") === -1) {
  console.error(`module ${mod} folder doesn't exist`);
  process.exit();
}

// find folder that matches lesson number
fs.readdirSync(folder).forEach((file) => {
  if (file.match(new RegExp(`-${lesson}$`))) {
    folder += file + "/";
  }
});

if (!folder.match(/-[0-9]+\/$/m)) {
  console.error(process.argv[2] + " assets directory doesn't exist");
  process.exit();
}

async function uploadPages() {
  // get or make module
  let moduleID = await canvas.getModuleId(mod);

  let page = await canvas.updatePage("API Test Page", "<h2>hello world 2</h2>");

  // page is brand new
  if (page.created_at === page.updated_at) {
    console.log(page.url + " page created");

    // append page to module
    canvas.addToModule(moduleID, page.url);
  }
  else {
    console.log(page.url + " page updated");
  }
}

async function uploadImages() {
  // get all images from folder
  const images = fs.readdirSync(folder);

  for (let image of images) {
    await canvas.uploadImage(`images/module-${mod}/lesson-${lesson}`, folder + image);
  
    console.log(image + " uploaded");
  }
}

uploadPages();
uploadImages();