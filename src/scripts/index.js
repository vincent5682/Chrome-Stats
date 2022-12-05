let tabs = 0

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "openedNewTab") {
            console.log("inOpenedNewTab")
            updateCount()
        }
    }
)

function updateCount() {
    tabs++
    console.log("your tabs:", tabs)
    $('#allTabs').text(tabs)
}

$('#refreshBtn').click(function() {
    getData()
})

function getData() {
    console.log("tabs", tabs)
    $('#allTabs').text(tabs)
}
