$(document).ready(function() {
    setData()
})

$('#refreshBtn').click(function () {
    setData()
})

function setData() {
    chrome.storage.local.get(["tabs"], function(items){
        $('#allTabs').text(items.tabs)
    });
}
