$(document).ready(function() {
    $('#cParent').click(function() {
        let parentT = $('#parent').text()   
        $('#target').prepend(parentT)
    })
    $('#cChild').click(function() {
        let childT = $('#child').text()
        $('#target').prepend(childT)
    })
})