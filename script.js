const btns = document.querySelectorAll(".btn");
let firstArrayInput = [];
let firstNumber;
let secondArrayInput = [];
let secondNumber;
let numberArray = new Array();
let result = 0;
let operateArray = [];
let operation;

const display = document.getElementById("display-text")
let displayValue = "";

function showing(a) {
    return display.innerText = a;
}




btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
        const select = e.currentTarget.classList;
        let currentSelection = btn.textContent;

        displayValue += currentSelection;
        console.log(currentSelection);

        if (select.contains("operand" || "dot")) {
            firstArrayInput.push(btn.textContent);
            if (firstArrayInput.indexOf(".") !== firstArrayInput.lastIndexOf(".")) {
                firstArrayInput.pop();
            }
            let x = firstArrayInput.toString();
            firstNumber = Number(x.replace(/,/g, ''));
        }

        if (select.contains("operator")) {
            numberArray.push(firstNumber);
            firstArrayInput = [];
            if (numberArray.length == 2) {
                result = operate(operation, numberArray[0], numberArray[1]);
                numberArray = [];
                numberArray.push(result);
            }
            operation = currentSelection;
            if (result !== 0) {
                displayValue = result + operation;
            }
        }

        if (select.contains("equal")) {
            console.log(numberArray);
            displayValue = result;
            numberArray = [];
            firstNumber = result;
        }

        console.log(operateArray);
        console.log(result);
        showing(displayValue);

    })

})

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}


