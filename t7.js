$(document).ready(function() {
    let counter = 1;
    let progressBar= $("#progress-bar").width()
    $("#progress-bar-button").click(function() {
        counter++;
        if (counter <= 8) {
            $("#progress-bar div").css("width", counter * (progressBar / 10))
        }
    })
})