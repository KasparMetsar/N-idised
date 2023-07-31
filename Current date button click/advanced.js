//TODO: Write a JavaScript program to compare two objects to determine if the first one contains the same value in a given key. Console log ‚true‘ or ‚false.

const car1 = {
    make: "Audi",
    model: "A4",
    year: 2016
};

const car2 = {
    make: "VolksWagen",
    model: "Passat",
    year: 2016,
    color: "Blue"
};

// console.log(JSON.stringify(car1.year) === JSON.stringify(car2.year));

// TODO: Write a JavaScript program to extract out the value at the specified index from a specified
//  array. To do so, create an array containing at least 3 family objects with the key-value pairs
//  papa, mama, kid1. Console log the extracted value. Console log the kid1 name of the
//  extracted family object

const family1 = {
    papa: "Art",
    mama: "Juuli",
    kid1:"Marta"
};

const family2 = {
    papa: "Pärt",
    mama: "Liina",
    kid1: "Robi"
};

const family3 = {
    papa: "Rudolf",
    mama: "Riin",
    kid1: "Liis"
};

const families = [family1, family2, family3]

const specific = families[2].kid1;
// console.log(specific)

// TODO: Advanced 4. Write a JavaScript program to remove specified elements from the left of a given array of
//  elements. Write a JavaScript program to remove specified elements from the right of a given array of elements.
//  Console log the result. Hint�: have a look at array manipulation

// remove all elements in the array from the RIGHT of the specified element. Please type element value to "input":
let input = "four";

const array = ["one","two","three","four","five", "six","seven","eight","nine"];
let indexSElement = array.indexOf(input);
let aLen = array.length;

// for (let i = aLen; i > (indexSElement + 1); i--) {
//
//     array.pop();
//     console.log(array);
// }

// remove all elements in the array from the LEFT of the specified element. Please type element value to "input":

for (let i = 0; i < (indexSElement); i++) {

    array.shift();
    // console.log(array);
}

// TODO: Advanced 5. Write a JavaScript program to get every nth element in a given array. For ex every 3rd element.

const array5 = ["one","two","three","four","five", "six","seven","eight","nine", "ten", "eleven"];
let a4Len = array5.length;

let everyThirdArray = [];
let everyThird = "";

for (let i = 0; i < a4Len; i += 3) {

    everyThird = array5[i]
    // console.log(everyThird);
    everyThirdArray.push(everyThird);
    // console.log(everyThirdArray)
}

// TODO: Advanced 6. Write a JavaScript program to find every element that exists in both of the two given arrays once.

// const array6A = ["one","two","theee","four","five", "six", "jaak","seen","eigh","nne", "tn", "eleen", "two"];
// const array6B = ["eleven","ome","two","three","foud","fise", "six","seven","eight","nine", "ten", "jak", "six", "six"];
//
// let arrayResult6 = [];
//
// for (let i = 0; i < array6A.length; i++) {
//
//     let elementOfA = array6A[i];
//     let j = 0;
//
//     for (j = 0; j < array6B.length; j++) {
//
//         let elementOfB = array6B[j];
//
//         if (arrayResult6.includes(elementOfA) === true) {
//             break;
//         }
//
//         if (elementOfB === elementOfA) {
//             arrayResult6.push(elementOfB);
//
//         }
//     }
// }
//
// console.log(arrayResult6)

// TODO: Advanced 6. Write a JavaScript program to find every element that exists in any of the two
//  given arrays once, using a provided comparison function.

const array6A = [ "tn", "eleen", "two", "four", "eleen"];
const array6B = [ "six", "six", "two"];

const sumOfArrays = array6A.concat(array6B);
let sumOfArraysT = sumOfArrays;
let arrayResult6 = [];

for (let i = 0; i < sumOfArrays.length; i++) {

    let element = sumOfArrays[i];
    sumOfArraysT[i] = "";

    if (sumOfArraysT.includes(element) !== true) {
        arrayResult6.push(element);
    } else {
        sumOfArraysT[sumOfArraysT.indexOf(element)] = "";
    }
}
console.log(arrayResult6);

    // let element= array6A[i];
//     array6AT[i] = "";
//     console.log(array6AT);
//
//     let j = 0;
//     for (j = 0; j < array6B.length; j++) {
//
//         let elementOfB = array6B[j];
//         array6BT[j] = "";
//         console.log(array6BT);
//
//         if (array6BT.includes(elementOfA) === true) {
//             break;
//         } else if (array6AT.includes(elementOfA) === true) {
//             break;
//         } else if (array6BT.includes(elementOfB) === true) {
//             break;
//         } else {
//             arrayResult6.push(elementOfA);
//             arrayResult6.push(elementOfB);
//         }
//     }
// }
// console.log(arrayResult6)





// const sumOfArrays = array6A.concat(array6B);
// console.log(sumOfArrays);
//
// let unique = [...new Set(sumOfArrays)];
// console.log(unique)


// const result = sumOfArrays.filter(onlyUnique);
//
// function onlyUnique() {
//
// for (let i = 0;i < LSoA; i++) {
//
// }
// }

// for (let i = 0; i < array6A.length; i++) {
//
// }

//     let elementOfA = array6A[i];
//     let j = 0;
//
//     for (j = 0; j < array6B.length; j++) {
//
//         let elementOfB = array6B[j];
//
//         if (array6A.includes(elementOfA) === true) {
//             break;
//         } else if (array6B.includes(element))
//
//         // if (arrayResult6.includes(elementOfA) === true) {
//         //     break;
//         // }
//
//         if (elementOfB === elementOfA) {
//             arrayResult6.push(elementOfB);
//
//         }
//     }
// }
//
// console.log(arrayResult6)