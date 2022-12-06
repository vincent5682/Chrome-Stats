let tabsCount = 0

chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status === 'complete') {
        tabsCount++
        chrome.storage.sync.set({ "tabs": tabsCount }, function(){})
    }
});