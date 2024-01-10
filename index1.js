console.log("js connected")
let number1 = 0;
document.getElementById("btn4").onclick = function() {
    console.log("btn4 clicked")
    number1 = number1 + 1;
    console.log(number1)
    document.getElementById("num1").innerHTML = number1
}

document.getElementById("btn6").onclick = function() {
    console.log("btn6 clicked")
    number1 = number1 - 1;
    console.log(number1)
    document.getElementById("num1").innerHTML = number1
}

document.getElementById("btn5").onclick = function() {
    console.log("btn5 clicked")
    number1 = 0;
    console.log(number1)
    document.getElementById("num1").innerHTML = number1
}