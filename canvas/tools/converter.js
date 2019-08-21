const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');

class Converter {
  getMarkup(path) {
    let mdFilePath = fs.readFileSync(path, 'utf-8');

    // convert videos first
    let dataWithVideos = mdFilePath.replace(/^video:(.*)$/gm, (match, url) => {
      return `<p><iframe src="${url}"></iframe></p>`;
    });
  
    // then let showdown convert everything else
    return new showdown.Converter().makeHtml(dataWithVideos);
  }

  insertImage(markup, localFile, remoteFile) {
    return markup.replace(new RegExp(`(?<=<img src=").*?${localFile}(?=")`), remoteFile);
  }

  chunkPages(markup) {
    // split on <h2> tags
    return markup.match(/<h2.*?(?=<h2|$)/gs).map((page) => {
      // separate title and content
      return {
        title: page.match(/(?<=<h2.*?>).*?(?=<\/h2>)/)[0],
        body: page.replace(/^.*?\n/, '')
      }
    });
  }
}

module.exports = new Converter();