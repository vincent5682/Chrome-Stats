$('#refreshBtn').click(function() {
    spin()
})

function spin() {
    $('#refreshBtn').addClass("animate-spin")
    setTimeout(() => {
        $('#refreshBtn').removeClass("animate-spin") 
    }, 1500);
}