const inputNumber = document.querySelector("#input-number");


inputNumber.addEventListener("input",isInputValid);
   


function isInputValid(){
    var inputNumberLength = inputNumber.value.length;
    if(inputNumberLength === 10 && isNaN(inputNumber.value)==false){
        inputNumber.style.color = "green";
    }
    else
    inputNumber.style.color = "red";
}