
const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");

document.querySelector("#cToFbutton").addEventListener("click", celciusToFahrenheit);
document.querySelector("#fToCbutton").addEventListener("click", fahrenheitToCelcius);

function celciusToFahrenheit () {

    let cel = celcius.valueAsNumber;

    document.querySelector("#cToFAnswer").textContent = (9 * cel + (32 * 5)) / 5;

}


function fahrenheitToCelcius () {

    let fah = fahrenheit.valueAsNumber;

    document.querySelector("#fToCAnswer").textContent = (5 * (fah - 32))/9;

}