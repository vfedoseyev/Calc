for (var keys = document.querySelectorAll("#calculator span"),
        operators = ['+', "-", "x", "÷"],
        decimalAdded = false, 
        i = 0; i < keys.length; i++) 
        
        keys[i].onclick = function (e) {
        console.log(this);    
    var input = document.querySelector(".screen"),
        inputVal = input.innerHTML,
        btnVal = this.innerHTML,
        total;
    if ("=" == btnVal) {
        var equation = inputVal,
            lastChar = equation[equation.length - 1];
        equation = equation.replace(/x/g, "*").replace(/÷/g, "/"),
            (operators.indexOf(lastChar) > -1 || "." == lastChar) && (equation = equation.replace(/.$/, "")),
            equation && (total = eval(equation), -1 != total.toString().indexOf(".") && (total = total.toFixed(2)), input.innerHTML = total),
            decimalAdded = !1
    } else if (btnVal == "C") {
        input.innerHTML = "0";
    } else if (operators.indexOf(btnVal) > -1) {
        var lastChar = inputVal[inputVal.length - 1];
        ("" != inputVal && -1 == operators.indexOf(lastChar) || "" == inputVal && "-" == btnVal) && (input.innerHTML += btnVal),
        operators.indexOf(lastChar) > -1 && inputVal.length > 1 && (input.innerHTML = inputVal.replace(/.$/, btnVal)),
            decimalAdded = !1
    } else "." == btnVal ? decimalAdded || (input.innerHTML += btnVal,
        decimalAdded = !0) : input.innerHTML += btnVal;
    e.preventDefault()
    console.log()
};
