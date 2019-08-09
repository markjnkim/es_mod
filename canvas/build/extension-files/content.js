// inject js file
var script = document.createElement("script");
script.setAttribute("src", chrome.extension.getURL("canvas-fsfo-script.js"));
script.setAttribute("defer", "defer");

document.body.appendChild(script);

// inject css file
var link = document.createElement("link");
link.setAttribute("href", chrome.extension.getURL("canvas-fsfo-theme.css"));
link.setAttribute("rel", "stylesheet");

document.head.appendChild(link);