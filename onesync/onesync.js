var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const slideshowContainer = document.getElementById("slideshower");
const slideCards = document.getElementsByClassName("slide-card");
var seconds = 0;
let prev;
setInterval(function () {
  var style = window.getComputedStyle(slideshowContainer);
  var matrix = new WebKitCSSMatrix(style.transform);

  //reverse on 600
  //reverse on -900
  if (matrix.m41 < 600) {
    slideshowContainer.style.transform += "translateX(420px)";
  } else {
    slideshowContainer.style.transform = "translateX(-900px)";
  }
}, 3000);

const smallCards = [...document.getElementsByClassName("small-card")];
const toBeStyled = document.getElementById("styling-card");

let myClicked;

smallCards.forEach((element) => {
  element.addEventListener("click", function (e) {
    myClicked = e.target.classList[1];
    //prem,sec,thir,four
    if (myClicked === "prem") {
      toBeStyled.classList.remove(toBeStyled.classList.item(1));
      toBeStyled.classList.add("card-one");
    } else if (myClicked === "sec") {
      toBeStyled.classList.remove(toBeStyled.classList.item(1));
      toBeStyled.classList.add("card-two");
    } else if (myClicked === "thir") {
      toBeStyled.classList.remove(toBeStyled.classList.item(1));
      toBeStyled.classList.add("card-three");
    } else if (myClicked === "four") {
      toBeStyled.classList.remove(toBeStyled.classList.item(1));
      toBeStyled.classList.add("card-four");
    }
  });
});

let myArray = ["card-one", "card-two", "card-three", "card-four"];
let k = 0;
let lengthOfArray = myArray.length;

setInterval(function () {
  toBeStyled.classList.remove(toBeStyled.classList.item(1));
  if (k == 4) {
    k = 0;
  }
  toBeStyled.classList.add(myArray[k]);

  k += 1;
}, 3000);

const navdrawer = document.getElementById("navdraw");
const toShow = document.getElementById("navitemss");

navdrawer.addEventListener("click", function () {
  if (toShow.style.display === "none") {
    toShow.style.display = "flex";
  } else {
    toShow.style.display = "none";
  }
});

const mobileShow = document.getElementById("mobile-show");

setInterval(function () {
  var style = window.getComputedStyle(mobileShow);
  var matrix = new WebKitCSSMatrix(style.transform);

  if (matrix.m41 > -600) {
    mobileShow.style.transform += "translateX(-240px)";
  } else {
    mobileShow.style.transform = "translateX(0px)";
  }
}, 3000);

const dropper = document.getElementById("dropdown");
const dropping = document.getElementById("cities");
let visible = false;

dropper.addEventListener("click", function () {
  console.log(visible);
  if (!visible) {
    dropping.style.display = "block";
    visible = true;
  } else {
    dropping.style.display = "none";
    visible = false;
  }
});
