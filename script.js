var numSlides = 7; // total number of slides
var slideList = document.querySelector("#s-list"); //all slides (UL)

// крутит влево
function rollLeft() {
  slideList.insertBefore(document.getElementById("s-list").lastChild, slideList.firstChild)
}
// крутит вправо
function rollRight() {
  slideList.appendChild(document.getElementById("s-list").firstChild)
}

//слушает клики по точке с номером слайда
function pointMove(pointid) {
  tab(+pointid.id.slice(6));
}
//крутит до выбраного слайда
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