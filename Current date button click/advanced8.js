// TODO:Use three input fields in frontend. Limit the number of characters which can be inserted to 4 (for each
//  field). Output a warning if one of the input fields contains more than 4 characters. Write a JavaScript
//  program to calculate the Checksum of all 12 numbers entered and output the Checksum in a h2 node.

//  Checksum algorithm means the addition of each of the twelve digits, then the addition of each digit
//  in the result until you have a single Int.
//
//  Example: 2345 8768 3456 2398 => 2+3+4+5+8+7+6+8+3+4+5+6+2+3+9+8 = 83, then 8+3 = 11, then 1+1 = 2

const field1 = document.getElementById("adv8AInputField");
const field2 = document.getElementById("adv8BInputField");
const field3 = document.getElementById("adv8CInputField");

document.getElementById("button-adv8").addEventListener("click", checksum);

function checksum() {

    if (field1.valueAsNumber > 9999 || field2.valueAsNumber > 9999 || field3.valueAsNumber > 9999) {
     return document.getElementById("result-adv8").textContent = "Please insert max 4 characers per field";
    } else if (field1.valueAsNumber < 0 || field2.valueAsNumber < 0 || field3.valueAsNumber < 0) {
        return document.getElementById("result-adv8").textContent = "Please insert positive value";
    }

    let fieldValue1 = field1.value;
    let fieldValue2 = field2.value;
    let fieldValue3 = field3.value;

    let allValuesAsString = fieldValue1.concat(fieldValue2, fieldValue3);
    let inputString = allValuesAsString;
    let result = 0;

    do {
        let inputAsArray = inputString.split("");
        let inputLength = inputAsArray.length;
        let sumAllDigits = 0;

        for (let i = 0; i < inputLength; i++) {

        let digitAsString = inputAsArray[i];
        sumAllDigits += Number(digitAsString);

        result = sumAllDigits;
        // console.log(sumAllDigits);
    }
        inputString = sumAllDigits.toString();
    }
    while (result > 9);

    document.getElementById("result-adv8").textContent = result.toString();



}

// function checksum() {
//     let fieldValue1 = field1.value.toString();
//     let fieldValue2 = field2.value.toString();
//     let fieldValue3 = field3.value.toString();
//
//     let allValuesAsString = fieldValue1.concat(fieldValue2, fieldValue3);
//
//     let allDigitsInArrayA = allValuesAsString.split("");
//     let lengthADArrayA = allDigitsInArrayA.length;
//     // console.log(allDigitsInArray);
//
//     let sumAllDigits = 0;
//
//     for (let i = 0; i < lengthADArrayA; i++) {
//
//         let digitAsString = allDigitsInArrayA[i];
//         sumAllDigits += Number(digitAsString);
//         // console.log(sumAllDigits);
//     }
//
//     let allDigitsInArrayB = sumAllDigits.toString().split("");
//     console.log(allDigitsInArrayB);
//     let lengthADArrayB = allDigitsInArrayB.length;
//
//     for (let i = 0; i < lengthADArrayB; i++) {
//
//         let digitAsString = allDigitsInArrayA[i];
//         finalResult += Number(digitAsString);
//         // console.log(sumAllDigits);
//     }

// }