let today = new Date;
let jaanipaev = new Date ("2023-06-24");

document.getElementById("button-today").addEventListener("click", printTodaysDate);
document.getElementById("button-tojaanipaev").addEventListener("click",printDaysToJaanipaev);
function printTodaysDate() {
    document.getElementById("result-today").textContent = today.toDateString();
}
function printDaysToJaanipaev() {

    let daysToJaanipaev = parseInt((jaanipaev - today)/1000/60/60/24);
    document.getElementById("result-tojaanipaev").textContent = daysToJaanipaev;
}

const num = 17;
const inputField = document.getElementById("easy3InputField");

document.getElementById("button-easy3").addEventListener("click", calculate17);
function calculate17() {

    let inputValue = inputField.valueAsNumber;

    if(inputValue <= 17) {
        let result1 = Math.abs((num - inputValue));
        document.getElementById("result-easy3").textContent = result1.toString();
    } else {
        let result2 = (inputValue - num)*2;
        document.getElementById("result-easy3").textContent = result2.toString();
    }
}



const inputField4 = document.getElementById("easy4InputField");

document.getElementById("button-easy4").addEventListener("click", check5or7);

function check5or7 () {
    let inputValue = inputField4.valueAsNumber;

    if (inputValue%5 === 0 || inputValue%7 === 0) {
        document.getElementById("result-easy4").textContent = "yes";
    } else {
        document.getElementById("result-easy4").textContent = "no";
    }
}

const inputField5A = document.getElementById("easy5AInputField");
const inputField5B = document.getElementById("easy5BInputField");

document.getElementById("button-easy5").addEventListener("click", near99);

function near99 () {

    let inputValueA = inputField5A.valueAsNumber;
    let inputValueB = inputField5B.valueAsNumber;

    let differenceA = Math.abs(99-inputValueA);
    let differenceB = Math.abs(99-inputValueB);

    document.getElementById("result-warning5").textContent = "";

    if (inputField5A.value.length === 0 || inputField5B.value.length === 0) {
        document.getElementById("result-warning5").textContent = "Please enter two values";
    } else if (differenceB === differenceA) {
        document.getElementById("result-easy5").textContent = "Two numbers are equally apart from 99";
    } else if (differenceB < differenceA) {
        document.getElementById("result-easy5").textContent = inputValueB.toString() + ' is closer to "99" than ' + inputValueA.toString();
    } else {
        document.getElementById("result-easy5").textContent = inputValueA.toString() + ' is closer to "99" than '  + inputValueB.toString();
    }
}

const inputField6 = document.getElementById("easy6InputField");

document.getElementById("button-easy6").addEventListener("click", uppercase);
function uppercase() {

    let inputValue6 = inputField6.value.toString();
    let lengthOfInput = inputValue6.length;
    console.log(lengthOfInput)

    if (lengthOfInput < 2) {
        let return1 = inputValue6.toUpperCase();
        document.getElementById("result-easy6").textContent = return1;
    } else if (lengthOfInput >= 2) {
        let part1 = inputValue6.substring(0,3);
        console.log(part1)
        let part2 = inputValue6.substring(3);
        let finalString = part1.toLowerCase() + part2.toUpperCase();
        document.getElementById("result-easy6").textContent = finalString;
    }
}

const inputField7 = document.getElementById("easy7InputField");
const alphabeth = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","Š","Z","Ž","T","U","Õ","Ä","Ö","Ü","W","X","Y"];

document.getElementById("button-easy7").addEventListener("click", changeLetters);

function changeLetters() {

    let inputValue7 = inputField7.value.toString();
    let value7Length = inputValue7.length;
    let finalResult = "";

    for (let i = 0; i < value7Length; i++) {

        let character = inputValue7.toUpperCase().charAt(i);
        let characterAt = alphabeth.indexOf(character);
        let newCharacter = 0;

        if(characterAt !== 30) {
            newCharacter = alphabeth[characterAt + 1].toString();
        } else if (characterAt === 30) {
            newCharacter = alphabeth[0].toString();
        }

        finalResult += newCharacter;
    }

    document.getElementById("result-easy7").textContent = finalResult;
}

const inputField8 = document.getElementById("easy8InputField");

document.getElementById("button-easy8").addEventListener("click", minutesAndHours);

function minutesAndHours() {

    let inputValue8 = inputField8.valueAsNumber;

    let hours = parseInt(inputValue8/60);
    let minutes = inputValue8%60;

    let result = hours + " hours and " + minutes + " minutes";

    document.getElementById("result-easy8").textContent = result;
}

