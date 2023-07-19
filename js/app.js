let x = 0;
const y = 100;
let starPositon = false;

const getNumberOne = document.getElementById("numberOne");
const getNumberTwo = document.getElementById("numberTwo");
const getNumberThree = document.getElementById("numberThree");
const getNumberFour = document.getElementById("numberFour");

addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > 650){
        if(starPositon == false){
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
        clearInterval(myInterval);
        return;
    }
}

