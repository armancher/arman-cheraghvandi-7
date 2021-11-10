$(document).ready(function() {
    $("#slide-up").click(function() {
        $("#content").slideUp()
    })
    $("#slide-down").click(function() {
        $("#content").slideDown()
    })
    $("#slide-toggle").click(function() {
        $("#content").slideToggle()
    })
})