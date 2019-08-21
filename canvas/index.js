require('dotenv').config();
const fs = require("fs");
const canvas = require("./tools/canvas.js");
const converter = require("./tools/converter.js");

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
    folder += file + "/content/";
  }
});

if (folder.indexOf("/content/") === -1) {
  console.error(`module ${mod} folder doesn't exist`);
  process.exit();
}

async function uploadLesson() {
  // get or make module
  let moduleID = await canvas.getModuleId(mod);
  let markup;
  let assets;

  // find matching lesson
  fs.readdirSync(folder).forEach((file) => {
    if (file.match(new RegExp(`-${lesson}-`))) {
      // run through markdown converter
      markup = converter.getMarkup(folder + file);
    }
  });
  
  if (!markup) {
    console.error(process.argv[2] + " lesson doesn't exist");
    process.exit();
  }

  // find assets folder that matches lesson number
  fs.readdirSync(folder + "assets/").forEach((file) => {
    if (file.match(new RegExp(`-${lesson}$`))) {
      assets = `${folder}assets/${file}/`;
    }
  });
  
  if (!assets) {
    console.error("no assets found for lesson " + process.argv[2]);
  }
  else {
    // get all images from folder
    const images = fs.readdirSync(assets);
  
    for (let image of images) {
      let newFile = await canvas.uploadImage(`images/module-${mod}/lesson-${lesson}`, assets + image);
    
      console.log(image + " uploaded");
  
      // replace local file in converted markdown
      markup = converter.insertImage(markup, newFile.display_name, newFile.preview_url);
    }
  }

  // split up into sub-lessons to become separate pages
  let chunks = converter.chunkPages(markup);

  for (let i = 0; i < chunks.length; i++) {
    // format for canvas
    let title = `${process.argv[2]}.${i+1}: ${chunks[i].title}`;
    let body = chunks[i].body + `<!-- timestamp: ${Date.now()} -->`;

    let page = await canvas.updatePage(title, body);
  
    // page is brand new
    if (page.created_at === page.updated_at) {
      console.log(page.url + " page created");
  
      // append page to module navigation
      await canvas.addToModule(moduleID, page.url);
    }
    else {
      console.log(page.url + " page updated");
    }
  }
}

uploadLesson();