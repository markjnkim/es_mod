require('dotenv').config();
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

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
  // get all images from folder
  const images = fs.readdirSync(folder);
  
  for (let image of images) {
    let stats = fs.statSync(folder + image);
    
    // initial request preps canvas for file upload
    const {data} = await axios.post("https://bootcampspot.instructure.com/api/v1/courses/85/files", {
      name: image,
      size: stats.size,
      content_type: "image/jpeg",
      parent_folder_path: "images/lesson-" + lesson,
      on_duplicate: "overwrite"
    },
    {
      headers: {
        // must include auth token
        Authorization: "Bearer " + process.env.CANVAS_TOKEN
      }
    });

    // add file info to form data
    let form = new FormData();
    form.append("filename", data.upload_params.filename);
    form.append("content_type", data.upload_params.content_type);
    form.append("file", fs.createReadStream(folder + image));
  
    // use returned url to send actual file to canvas
    await axios.post(data.upload_url, form, {
      headers: {
        ...form.getHeaders()
      }
    });

    console.log(image + " uploaded");
  }
}

uploadImages();