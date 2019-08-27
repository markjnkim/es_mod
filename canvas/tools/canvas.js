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
    let page = title.toLowerCase().replace(/ /g, '-');

    return await axios.put(
      `${apiURL}/courses/${courseID}/pages/${page}`, 
      { wiki_page: {title, body} }, 
      authHeader
    )
    .then((res) => {
      
    })
    .catch((err) => {
      console.log(err.response.statusText);
    });
  }

  // put a page inside an existing module
  async updateModule() {
    // TODO: make dynamic
    axios.post(
      `${apiURL}/courses/${courseID}/modules/115/items`, 
      {
        module_item: {
          type: "Page",
          page_url: "api-page-test"
        }
      },
      authHeader
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.statusText);
    });
  }

  // check for existing folder on canvas or create new if it doesn't exist
  async getFolderId(path) {
    // get existing folders
    let {data: folders} = await axios.get(
      `${apiURL}/courses/${courseID}/folders`,
      authHeader
    );

    for (let folder of folders) {
      // look for match
      if (folder.full_name.indexOf(path) !== -1) {
        return folder.id;
      }
    }

    // never found folder, so make a new one
    let {data: newFolder} = await axios.post(
      `${apiURL}/courses/${courseID}/folders`,
      {
        name: path.split("/").pop(),
        parent_folder_path: path.split("/").slice(0, -1).join("/")
      },
      authHeader
    );

    return newFolder.id;
  }

  // upload single image to canvas
  async uploadImage(folderID, image) {
    let stats = fs.statSync(image);

    // initial request preps canvas for file upload
    const {data} = await axios.post(
      `${apiURL}/courses/${courseID}/files`, 
      {
        name: image.split("/").pop(),
        size: stats.size,
        content_type: "image/jpeg",
        parent_folder_id: folderID,
        on_duplicate: "overwrite"
      }, 
      authHeader
    );

    // format post data
    let fData = new FormData();
    fData.append("filename", data.upload_params.filename);
    fData.append("content_type", data.upload_params.content_type);
    fData.append("file", fs.createReadStream(image));
  
    // use returned url to send actual file to canvas
    return await axios.post(
      data.upload_url, 
      fData, 
      { headers: { ...fData.getHeaders() } }
    );
  }
}

module.exports = new Canvas();