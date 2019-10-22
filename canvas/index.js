require('dotenv').config();
const fs = require("fs");
const Canvas = require("./tools/Canvas.js");
const Markup = require("./tools/Markup.js");

// check for key
if (!process.env.CANVAS_TOKEN) {
  console.error("Must define CANVAS_TOKEN environment variable");
  process.exit();
}

// check for course id
if (!process.env.CANVAS_COURSE_ID) {
  console.error("Must define CANVAS_COURSE_ID environment variable");
  process.exit();
}

// check for api url
if (!process.env.CANVAS_API_URL) {
  console.error("Must define CANVAS_API_URL environment variable");
  process.exit();
}

// check for lesson argument
else if (!process.argv[2]) {
  console.error("Must provide lesson number argument (e.g. 1.2)");
  process.exit();
}

let moduleArg = process.argv[2].split(".")[0];
let lessonArg = process.argv[2].split(".")[1];
let contentFolder = "../";

// find folder that matches module number
fs.readdirSync(contentFolder).forEach((file) => {
  if (file.match(new RegExp(`^0?${moduleArg}-`))) {
    contentFolder += file + "/content/";
  }
});

if (contentFolder.indexOf("/content/") === -1) {
  console.error(`module ${moduleArg} folder doesn't exist`);
  process.exit();
}

/**
 * 
 * @param {Canvas} canvas Canvas instance
 * @param {String} module Module number
 * @param {String} lesson Lesson number
 * @param {String} folder Local path to lesson content
 * 
 */
async function uploadLesson(canvas, module, lesson, folder) {

  // get or make module
  let moduleID = await canvas.getModuleId(module);
  let markup;
  let assets;

  // find matching lesson
  fs.readdirSync(folder).forEach((file) => {
    if (file.match(new RegExp(`-${lesson}-`))) {
      // run through markdown converter
      markup = new Markup(folder + file);
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
      let newFile = await canvas.uploadImage(`images/module-${module}/lesson-${lesson}`, assets + image);
    
      console.log(image + " uploaded");
  
      // replace local file in converted markdown
      markup.insertImage(newFile.display_name, newFile.preview_url);
    }
  }

  // create lesson header/label in module navigation
  await canvas.addHeaderToModule(moduleID, lesson);

  // split up into sub-lessons to become separate pages
  let chunks = markup.getPageChunks();

  for (let i = 0; i < chunks.length; i++) {
    // format for canvas
    let title = `${process.argv[2]}.${i+1}: ${chunks[i].title}`;
    let body = `${chunks[i].body} <!-- timestamp: ${Date.now()} -->`;

    let page = await canvas.updatePage(title, body);
  
    // page is brand new
    if (page.created_at === page.updated_at) {
      console.log(page.url + " page created");
  
      // append page to module navigation
      await canvas.addPageToModule(moduleID, page.url);
    }
    else {
      console.log(page.url + " page updated");
    }
  }
}

const canvas = new Canvas(
  process.env.CANVAS_API_URL,
  process.env.CANVAS_TOKEN,
  process.env.CANVAS_COURSE_ID
);

uploadLesson(canvas, moduleArg, lessonArg, contentFolder);
