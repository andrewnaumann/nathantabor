// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// hold a reference to the cover image's DOM element
var hero = document.getElementById('js-hero__image');

//window.onscroll = function() {
//    
//  var offset = window.pageYOffset;
//
//  var translateY = "translateY(" + -(offset / 3) +"px)";
//  
//  hero.style.transform = translateY;
//};







// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             // IE Fallback, you can even fallback to onscroll
             function(callback){ window.setTimeout(callback, 1000/60) };

var lastPosition = -1;

function loop(){
  if (lastPosition == window.pageYOffset) {
      scroll(loop);
      return false;
  } else lastPosition = window.pageYOffset;


  var offset = window.pageYOffset;
  
  if (offset < 400) {
    var translateY = "translateY(" + -(offset / 5) +"px)";
    hero.style.transform = translateY;
  }
  // Recall the loop
  scroll( loop )
}

// Call the loop for the first time
loop();