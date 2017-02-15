$(document).ready(function() {
  var link = document.querySelectorAll('#console a');
  for(var i = 0; i < link.length; i++){
    console.log(link[i].href);
  };
});



$(function() {
    $('.col-sm-6').matchHeight();
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});




// ,window.joinUs=function(){return console.log("%cWe're excited to have you! %c☃",e(!1,"#d22"),e(!1,"#333")),window.location.href="/_/_/about/careers/",""}}()}
