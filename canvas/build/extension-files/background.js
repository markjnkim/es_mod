// reload extension assets when icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.reload();
  chrome.runtime.reload();
});

// block currently live assets so local changes can override
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    return {cancel: details.initiator.indexOf("instructure.com") !== -1}; 
  },
  {
    urls: ["*://*.amazonaws.com/*canvas-fsfo*"],
    types: ["stylesheet", "script"]
  },
  ["blocking"]
);