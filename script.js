//my carousel version 2
var numSlides = 7; // total number of slides
var width = 0; // width of a slide
var cur = 0; //слайд который показываем current slide
var slideList = document.querySelector("#s-list"); //all slides (UL)
var slides = {}; // all slides in obj
for (var i = 0; i < numSlides; i++) {
  var tmp = '#slide-' + i;
slides[i] = slideList.querySelector(tmp);
}
//console.log(slideList);
//console.log(slides);

//начну с клика на точки
function pointMove(pointid) {
  return +pointid.id.slice(6)
}
