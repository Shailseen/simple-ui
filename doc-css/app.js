const inputNumber = document.querySelector("#input-number");
const floatingBtn = document.querySelector("#floating-button-main");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar-main");
const closeSideBar = document.querySelector("#close-button-side-bar");

inputNumber.addEventListener("input",isInputValid);

floatingBtn.addEventListener("click",goToTop);

hamburgerMenu.addEventListener("click",openDrawer);

closeSideBar.addEventListener("click",handlerForCloseSideBar);


function handlerForCloseSideBar(){
    document.getElementById("side-bar-mobile").style.display = "none";
}

function isInputValid(){
    var inputNumberLength = inputNumber.value.length;
    if(inputNumberLength === 10 && isNaN(inputNumber.value)==false){
        inputNumber.style.color = "green";
    }
    else
    inputNumber.style.color = "red";
}

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var displayDrawer = false;
function openDrawer(){
    document.getElementById("side-bar-mobile").style.display = "block";
}

