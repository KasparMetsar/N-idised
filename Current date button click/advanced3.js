// Write a JavaScript program to generate a random hexadecimal color code.
//
// Use a button in frontend to trigger the color generation and output the color in
// a div of width 100px and height 100px in the frontend

const hexadecimals = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let newColor = ""
document.getElementById("button-adv3").addEventListener("click", generateNewColor);

function generateNewColor() {

    for (i = 0; i < 6; i++) {
        let indexNumber = Math.floor(Math.random() * 15);
        // console.log(indexNumber);

        let decimal = hexadecimals[indexNumber];
        // console.log(decimal);

        newColor += decimal;
        console.log(newColor);
    }

    document.getElementById("box").style.backgroundColor = "#" + newColor;
    newColor = "";
}

// TODO:Advanced 7
let a;
if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    a = true ;
} else {
    a = false ;
}
console.log(a);