let x = 0;
const y = 100;
const countOfScroll = window.scrollY;

const getNumberOne = document.getElementById("numberOne");
const getNumberTwo = document.getElementById("numberTwo");
const getNumberThree = document.getElementById("numberThree");
const getNumberFour = document.getElementById("numberFour");


if(window.scrollY > 500){
    alert("hi")
}

myInterval = setInterval(counterNumber, 100);


function counterNumber(){

    x++;
    getNumberOne.innerText = x;
    getNumberTwo.innerText = x;
    getNumberThree.innerText = x;
    getNumberFour.innerText = x;

   if(x == 100){
    clearInterval(myInterval);
   }
}




function test (){
    console.log(screenPosition);
}

// getNumberOne.innerText = "yunes";
// getNumberTwo.innerText = "ali";
// getNumberThree.innerText = "aksd";
// getNumberFour.innerText = "yu";
