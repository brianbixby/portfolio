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

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    windowWidth = $(window).innerWidth();
    console.log('height', windowHeight);
    console.log('width', windowWidth);
    $('#typingDiv').css('min-height', windowHeight);
    if(windowWidth > 767) {
      $('#about').css('min-height', windowHeight);
    }
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});




// If you don't care about changing the height when the window resizes then you can use the following simplified version instead:

// $(document).ready(function() {
//   windowHeight = $(window).innerHeight();
//   $('.sidebar').css('min-height', windowHeight);
// });
