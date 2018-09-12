// 1. Foundation
// --------------------

var swup = new Swup()

$(document).foundation();

document.addEventListener('swup:contentReplaced', function () {

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

});