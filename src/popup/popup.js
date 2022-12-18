$('#refreshBtn').click(function() {
    spin()
})

$(document).ready(function() {
    $('#slider').addClass('animate-enter animate-enter-active')
})


function spin() {
    $('#refreshBtn').addClass("animate-spin")
    setTimeout(() => {
        $('#refreshBtn').removeClass("animate-spin") 
    }, 1500);
}