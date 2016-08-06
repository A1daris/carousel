// Code goes here
var numSlides = 7; // total number of slides
var width = 0; // width of a slide
var curr = 0; //слайд который показываем current slide
var slideList = document.querySelector("#s-list"); //all slides (UL)
var slides = {}; // all slides in obj
for (var i = 0; i < numSlides; i++) {
  var tmp = '#slide-' + i;
slides[i] = slideList.querySelector(tmp);
};

//начну с клика на точки
function pointMove(pointid) {
  tab(+pointid.id.slice(6));
};

//тупо крутит влево
function rollLeft() {
  slideList.insertBefore(document.getElementById("s-list").lastChild, slideList.firstChild)
}
//тупо крутит right
function rollRight() {
  slideList.appendChild(document.getElementById("s-list").firstChild)
}
//choose your slide
function tab(num) {
  var id = slideList.firstChild.id.slice(6);
  
  if (id > num) {
    var tmp3 = id-num;
    while (tmp3 > 0) {
      rollLeft();
      --tmp3;
    }
  } else if(id < num) {
    var tmp4 = id-num;
    while (tmp4 < numSlides) {
      rollRight();
      ++tmp4;
    }
  }
}