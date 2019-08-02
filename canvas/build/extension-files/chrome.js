// reload extension assets when icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.reload();
  chrome.runtime.reload();
});

// block currently live assets so local changes can override
// chrome.webRequest.onBeforeRequest.addListener(
//   function() { return {cancel: true}; },
//   {
//     urls: ["canvas-fsfo-theme.css", "canvas-fsfo-script.js"]
//   },
//   ["blocking"]
// );