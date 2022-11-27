chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "message": "opened_new_tab" });
        });
    }
  });

function setTab() {
    tabs = tabs + 1
    document.getElementById('allTabs').innerHTML = tabs
}