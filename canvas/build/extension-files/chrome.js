chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.reload();
  chrome.runtime.reload();
});