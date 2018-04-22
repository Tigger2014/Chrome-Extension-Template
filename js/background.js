/Adding a Listener to Error Occured Event
chrome.webNavigation.onErrorOccurred.addListener(function (details) {
    // Updating the browser window with desired URL
    chrome.tabs.update(details.tabId, {
        url: chrome.extension.getURL("page.html")
    });
});
