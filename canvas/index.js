const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const showdown = require('showdown');
showdown.setFlavor('github');

const mdFilePath = '../01-html/content/step-1-html-cmd-git.md';

async function transformMarkdown(path) {
  return await readFile(path, 'utf-8');
}

transformMarkdown(mdFilePath).then(data => {
  // convert videos first
  let dataWithVideos = data.replace(/^video:(.*)$/gm, (match, url) => {
    return `<p><iframe src="${url}"></iframe></p>`;
  });

  // then let showdown convert everything else
  const converter = new showdown.Converter();
  console.log(converter.makeHtml(dataWithVideos));
});



