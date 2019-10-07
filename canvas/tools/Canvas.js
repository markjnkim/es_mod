const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

module.exports = class Canvas {

  constructor(apiUrl, canvasToken, courseId) {
    this.courseApiBaseUrl = `${apiUrl}/courses/${courseId}`;
    this.authHeader = {
      headers: {
        Authorization: "Bearer " + canvasToken
      }
    };
  }

  // update page content or create new page if it doesn't exist
  async updatePage(title, body) {
    let url = title.toLowerCase().replace(/:|'|"/g, '').replace(/[^\w]/g, '-').replace('-', '-dot-');

    const {data} = await axios.put(
      `${this.courseApiBaseUrl}/pages/${url}`, 
      { wiki_page: {title, body} }, 
      this.authHeader
    );

    return data;
  }

  // put a page inside an existing module
  async addPageToModule(mod, page) {
    return await axios.post(
      `${this.courseApiBaseUrl}/modules/${mod}/items`, 
      {
        module_item: {
          type: "Page",
          page_url: page,
          indent: 1
        }
      },
      this.authHeader
    );
  }

  // add a lesson header to module, if not already there
  async addHeaderToModule(mod, lesson) {
    let title = "Lesson " + lesson;

    const {data: items} = await axios.get(
      `${this.courseApiBaseUrl}/modules/${mod}/items?per_page=100`, 
      this.authHeader
    );

    for (let item of items) {
      // look for match
      if (item.title.indexOf(title) === 0) {
        return item;
      }
    }

    // create new header
    const {data: newItem} = await axios.post(
      `${this.courseApiBaseUrl}/modules/${mod}/items`, 
      {
        module_item: {
          type: "SubHeader",
          title
        }
      },
      this.authHeader
    );

    return newItem;
  }

  // check for existing module in canvas or create new if it doesn't exist
  async getModuleId(mod) {
    let {data: modules} = await axios.get(
      `${this.courseApiBaseUrl}/modules?per_page=100`,
      this.authHeader
    );

    for (let module of modules) {
      // look for match
      if (module.name.match(new RegExp(`Module ${mod}[^0-9]`))) {
        return module.id;
      }
    }

    // never found module, so make a new one
    let {data: newModule} = await axios.post(
      `${this.courseApiBaseUrl}/modules`,
      {
        module: {
          name: `Module ${mod}: [Insert Name]`,
          position: mod
        }
      },
      this.authHeader
    );

    return newModule.id;
  }

  // upload single image to canvas
  async uploadImage(folder, image) {
    let stats = fs.statSync(image);

    // initial request preps canvas for file upload
    const {data: prep} = await axios.post(
      `${this.courseApiBaseUrl}/files`, 
      {
        name: image.split("/").pop(),
        size: stats.size,
        content_type: "image/jpeg",
        parent_folder_path: folder,
        on_duplicate: "overwrite"
      }, 
      this.authHeader
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