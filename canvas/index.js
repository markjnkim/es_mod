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

async function uploadImages() {
  // get ID of folder to dump images in
  let folderID = await canvas.getFolderId(`/images/module-${mod}/lesson-${lesson}`);

  // get all images from folder
  const images = fs.readdirSync(folder);

  for (let image of images) {
    await canvas.uploadImage(folderID, folder + image);
  
    console.log(image + " uploaded");
  }
}

uploadImages();