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
  // required fields: title, body
  async updatePage(wiki_page) {
    let title = wiki_page.title.toLowerCase().replace(/ /g, '-');

    return await axios.put(
      `${apiURL}/courses/${courseID}/pages/${title}`, 
      { wiki_page }, 
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

  // upload single image to canvas
  // required: path to file
  async uploadImage(image) {
    let stats = fs.statSync(image);

    // initial request preps canvas for file upload
    const {data} = await axios.post(
      `${apiURL}/courses/${courseID}/files`, 
      {
        name: image.split("/").pop(),
        size: stats.size,
        content_type: "image/jpeg",
        // TODO: get/make different folders based on lesson
        parent_folder_id: 194,
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
    await axios.post(
      data.upload_url, 
      fData, 
      { headers: { ...fData.getHeaders() } }
    );
  }
}

module.exports = new Canvas();