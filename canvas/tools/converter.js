const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');

class Converter {
  transformMarkdown(path) {
    let mdFilePath = fs.readFileSync(path, 'utf-8');

    // convert videos first
    let dataWithVideos = mdFilePath.replace(/^video:(.*)$/gm, (match, url) => {
      return `<p><iframe src="${url}"></iframe></p>`;
    });
  
    // then let showdown convert everything else
    const converter = new showdown.Converter();
    console.log(converter.makeHtml(dataWithVideos));
  }
}

module.exports = new Converter();