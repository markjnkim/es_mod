const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');

class Markup {
  constructor(path) {
    let mdFilePath = fs.readFileSync(path, 'utf-8');
  
    // initial conversion by showdown
    this.html = new showdown.Converter().makeHtml(mdFilePath);

    // apply any custom transformations afterwards
    this.customizeComponents();
  }

  customizeComponents() {
    // learning block class names
    this.html = this.html.replace(/<blockquote>\n  <p><strong>(.*?)<\/strong>/gm, (match, name) => {
      let title = name.replace(":", "").toLowerCase();
      let className = title.replace(/ /g, "-");

      return `<blockquote class="${className}">\n  <strong>${title}</strong>\n  <p>`;
    });
  }

  insertImage(localFile, remoteFile) {
    this.html = this.html.replace(new RegExp(`(?<=<img src=").*?${localFile}(?=")`, "g"), remoteFile);
  }

  getPageChunks() {
    // split on <h2> tags
    return this.html.match(/<h2.*?(?=<h2|$)/gs).map((page) => {
      // separate title and content
      return {
        title: page.match(/(?<=<h2.*?>).*?(?=<\/h2>)/)[0],
        body: `<div id="bootcamp">${page.replace(/^.*?\n/, '')}</div>`
      }
    });
  }
}

module.exports = Markup;