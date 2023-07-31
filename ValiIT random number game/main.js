const randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);

const inputField = document.getElementById("inputField");
// let inputNumber = inputField.valueAsNumber
// console.log(inputNumber);

document.getElementById("123").addEventListener("click", checkValue);

function checkValue () {

    let inputNumber = inputField.valueAsNumber;
    console.log(inputNumber);

    document.getElementById("inputNumber").textContent = inputNumber;

    if (inputNumber < 1 || inputNumber > 20) {
        document.getElementById("response").textContent = "Please enter number from 1 to 20";
    }else if (inputNumber === randomNumber) {
        document.getElementById("response").textContent = "Correct guess!";
    } else if (inputNumber%1 !== 0) {
        document.getElementById("response").textContent = "Plese enter whole number";
    } else {
        document.getElementById("response").textContent = "Incorrect guess, try again!";
    }
}




//
// const celcius = document.querySelector("#celcius");
// const fahrenheit = document.querySelector("#fahrenheit");
//
// document.querySelector("#cToFbutton").addEventListener("click", celciusToFahrenheit);
// document.querySelector("#fToCbutton").addEventListener("click", fahrenheitToCelcius);
//
// function celciusToFahrenheit () {
//
//     let cel = celcius.valueAsNumber;
//
//     document.querySelector("#cToFAnswer").textContent = (9 * cel + (32 * 5)) / 5;
//
// }
//
//
// function fahrenheitToCelcius () {
//
//     let fah = fahrenheit.valueAsNumber;
//
//     document.querySelector("#fToCAnswer").textContent = (5 * (fah - 32))/9;
//
// }