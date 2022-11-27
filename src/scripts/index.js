let tabs = 0

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "opened_new_tab") {
            tabs++
            console.log("aaaa" + tabs);
        }
    }
);
