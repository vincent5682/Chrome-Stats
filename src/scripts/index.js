$(document).ready(function() {
    setData()
})

$('#refreshBtn').click(function () {
    setData()
})

function setData() {
    chrome.storage.sync.get(["tabs"], function(items){
        $('#alltimeTabs').text(items.tabs)
    });
}
