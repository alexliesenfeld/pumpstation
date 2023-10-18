var slideIndex=1;var msToNextSlide=8000;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n);timer.reset(msToNextSlide);}
function currentSlide(n){showSlides(slideIndex=n);}
function showSlides(n){var i;var slides=document.getElementsByClassName("slideshow-image");var dots=document.getElementsByClassName("dot");if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","");}
slides[slideIndex-1].style.display="block";dots[slideIndex-1].className+=" active";}
document.addEventListener('touchstart',handleTouchStart,false);document.addEventListener('touchmove',handleTouchMove,false);var xDown=null;var yDown=null;function getTouches(evt){return evt.touches||evt.originalEvent.touches;}
function handleTouchStart(evt){const firstTouch=getTouches(evt)[0];xDown=firstTouch.clientX;yDown=firstTouch.clientY;};function handleTouchMove(evt){if(!xDown||!yDown){return;}
var xUp=evt.touches[0].clientX;var yUp=evt.touches[0].clientY;var xDiff=xDown-xUp;var yDiff=yDown-yUp;if(Math.abs(xDiff)>Math.abs(yDiff)){if(xDiff>0){plusSlides(-1)}else{plusSlides(+1)}}else{if(yDiff>0){}else{}}
xDown=null;yDown=null;};function Timer(fn,t){var timerObj=setInterval(fn,t);this.stop=function(){if(timerObj){clearInterval(timerObj);timerObj=null;}
return this;}
this.start=function(){if(!timerObj){this.stop();timerObj=setInterval(fn,t);}
return this;}
this.reset=function(newT){t=newT;return this.stop().start();}}
var timer=new Timer(function(){plusSlides(1);},msToNextSlide);timer.start();