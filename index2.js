console.log("js connected")
let number2;
document.getElementById("mainbtn").onclick = function() {
    if(check1.checked){
        console.log("It is checked")
        number2 = number + number1
        console.log(number2)
        document.getElementById("num2").innerHTML = number2
    }
    if(check2.checked){
        console.log("It is checked")
        number2 = number - number1
        console.log(number2)
        document.getElementById("num2").innerHTML = number2
    }
    if(check3.checked){
        console.log("It is checked")
        number2 = number / number1
        console.log(number2)
        document.getElementById("num2").innerHTML = number2
    }
    if(check4.checked){
        console.log("It is checked")
        number2 = number * number1
        console.log(number2)
        document.getElementById("num2").innerHTML = number2
    }
}
