// //todo: hea kasutada, et lisada märkuseid, et asjad ei ununeks
//
// const firstNumber = document.getElementById('num1');
// const secondNumber = document.getElementById('num2');
//
// const additionButton = document.getElementById("addition");
//
// additionButton.addEventListener("click", addition);
//
// console.log(firstNumber)
// console.log(secondNumber)
//
// let displayResult = document.getElementById("answer")
//
// // ADDITION
// function addition() {
//
//     // let nummer1 = firstNumber.valueAsNumber;
//     // let nummer2 = secondNumber.valueAsNumber;
//     //
//     // let res = nummer1 + nummer2;
//     displayResult.textContent = firstNumber.valueAsNumber + secondNumber.valueAsNumber;
// }
//
// // SUBTRACTION
// // function firstSubtraction(firstNumber, secondNumber) {
// //
// //     return firstNumber - secondNumber;
// // }
// //
// // let printOutSubtracion = firstSubtraction(5, 95);
// // console.log(printOutSubtracion);
// //
//
var output = [];
var count = 1;

function fizzBuzz() {

    if (count%3 === 0) {
        output = output.push("Fizz")
    } else if (count%5 === 0) {
        output = output.push("Buzz")
    } else {
        output = output.push(count);
        count++;
    }

    console.log(output);

}

fizzBuzz()