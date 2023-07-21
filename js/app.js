let x = 0;
const y = 100;
let starPositon = false;

let getprogressiconOne = document.getElementById("progressIconOne");
let getprogressiconTwo = document.getElementById("progressIconTwo");
let getprogressiconThree = document.getElementById("progressIconThree");
let getprogressiconFour = document.getElementById("progressIconFour");
let getInprogressText = document.getElementById("inprogressText");

const getNumberOne = document.getElementById("numberOne");
const getNumberTwo = document.getElementById("numberTwo");
const getNumberThree = document.getElementById("numberThree");
const getNumberFour = document.getElementById("numberFour");

addEventListener("scroll", () => {
    if (window.scrollY > 650) {
        if (starPositon == false) {
            myInterval = setInterval(counterNumber, 100);
        }
        starPositon = true;
    }
})

function counterNumber() {

    x++;
    getNumberOne.innerText = x;
    getNumberTwo.innerText = x;
    getNumberThree.innerText = x;
    getNumberFour.innerText = x;

    if (x == y) {
        getprogressiconOne.style.color = "green";
        getprogressiconTwo.style.color = "green";
        getprogressiconThree.style.color = "green";
        getprogressiconFour.style.color = "green";
        getInprogressText.style.color = "red";
        clearInterval(myInterval);
        return;
    }
}
// courner menu 

let clickFlag = false;
const cornerBtn = document.getElementById("toggle-btn");
// const contenButton = document.getElementById("contenButton");
const menuItem = document.querySelectorAll(".menu a");



cornerBtn.addEventListener("click", () => {

    if (!clickFlag) {
        cornerBtn.classList.add("activeMode");
        menuItem[0].style.transform = "translate(2px, 101px)";
        menuItem[1].style.transform = "translate(43px, 59px)";
        menuItem[2].style.transform = "translate(70px, 9px)";
        // for (let i = 0; i < menuItem.length; i++) {
        //     menuItem[i].style.display = "grid";
        // }
        clickFlag = true;
    }

    else{
        cornerBtn.classList.remove("activeMode");
        menuItem[0].style.transform = "translate(0, 0)";
        menuItem[1].style.transform = "translate(0, 0)";
        menuItem[2].style.transform = "translate(0, 0)";
        clickFlag = false;
    }
  
})

// anout me 
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function onConcat() {
    document.getElementById("concatInfo").style.display = "block";
  }
  function offConcat() {
    document.getElementById("concatInfo").style.display = "none";
  }

  function onMessage() {
    document.getElementById("messageinfo").style.display = "block";
  }
  function offMessage() {
    document.getElementById("messageinfo").style.display = "none";
  }

  function onlinkedin() {
    document.getElementById("linkedinInfo").style.display = "block";
  }
  function offlinkedin() {
    document.getElementById("linkedinInfo").style.display = "none";
  }




