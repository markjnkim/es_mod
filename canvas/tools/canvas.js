const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const apiURL = "https://bootcampspot.instructure.com/api/v1";
const courseID = 85;

const authHeader = {
  headers: {
    Authorization: "Bearer " + process.env.CANVAS_TOKEN
  }
};

class Canvas {
  // update page content or create new page if it doesn't exist
  async updatePage(title, body) {
    let url = title.toLowerCase().replace(/[^\w]/g, '-').replace('-', '-dot-');

    const {data} = await axios.put(
      `${apiURL}/courses/${courseID}/pages/${url}`, 
      { wiki_page: {title, body} }, 
      authHeader
    );

    return data;
  }

  // put a page inside an existing module
  async addToModule(mod, page) {
    return await axios.post(
      `${apiURL}/courses/${courseID}/modules/${mod}/items`, 
      {
        module_item: {
          type: "Page",
          page_url: page
        }
      },
      authHeader
    );
  }

  // check for existing module in canvas or create new if it doesn't exist
  async getModuleId(mod) {
    let {data: modules} = await axios.get(
      `${apiURL}/courses/${courseID}/modules`,
      authHeader
    );

    for (let module of modules) {
      // look for match
      if (module.name.match(new RegExp(`Module ${mod}[^0-9]`))) {
        return module.id;
      }
    }

    // never found module, so make a new one
    let {data: newModule} = await axios.post(
      `${apiURL}/courses/${courseID}/modules`,
      {
        module: {
          name: `Module ${mod}: [Insert Name]`,
          position: mod
        }
      },
      authHeader
    );

    return newModule.id;
  }

  // upload single image to canvas
  async uploadImage(folder, image) {
    let stats = fs.statSync(image);

    // initial request preps canvas for file upload
    const {data: prep} = await axios.post(
      `${apiURL}/courses/${courseID}/files`, 
      {
        name: image.split("/").pop(),
        size: stats.size,
        content_type: "image/jpeg",
        parent_folder_path: folder,
        on_duplicate: "overwrite"
      }, 
      authHeader
    );

    // format post data
    let fData = new FormData();
    fData.append("filename", prep.upload_params.filename);
    fData.append("content_type", prep.upload_params.content_type);
    fData.append("file", fs.createReadStream(image));
  
    // use returned url to send actual file to canvas
    let {data: newFile} = await axios.post(
      prep.upload_url, 
      fData, 
      { headers: { ...fData.getHeaders() } }
    );

    return newFile;
  }
}

module.exports = new Canvas();