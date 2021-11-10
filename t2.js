$(document).ready(function(){
   $('#red').mouseover(function () { 
        $(this).css("background-color","blue")
    });
})

$(document).ready(function(){
    $('#red').mouseleave(function () { 
         $(this).css("background-color","red")
     });
 })