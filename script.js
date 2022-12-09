const btns = document.querySelectorAll(".btn");
let firstArrayInput = [];
let firstNumber;
let numberArray = new Array();
let result = null;
let operation;

const display = document.getElementById("display-text")
let displayValue = "";

function showing(a) {
    return display.innerText = a;
}

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const select = e.currentTarget.classList;
        let currentSelection = btn.textContent;
        displayValue += currentSelection;

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
                if (firstNumber == 0 && operation == "/") {
                    displayValue = 'ERROR ';
                    result = null;
                } else {
                    result = operate(operation, numberArray[0], numberArray[1]);
                    result = Number(result.toFixed(3));
                    numberArray = [];
                    numberArray.push(result);
                }
            }
            operation = currentSelection;
            if (result != null) {
                displayValue = result + operation;
            }
        }

        if (select.contains("clear")) {
            clear();
        }

        if (select.contains("equal")) {
            numberArray = [];
            firstNumber = result;
            displayValue = displayValue.slice(0,-1);
        }
       
        if (select.contains("del")) {
            if (displayValue.slice(-2,-1) == '+' || '-' || '/' || '*' || '='){
                displayValue = displayValue.slice(0,-2);
                operation = "";
                numberArray.pop()
                console.log(operation)
            } else {
            displayValue = displayValue.slice(0,-2);
            firstNumber = Math.floor(firstNumber/10);
            firstArrayInput.pop();
           }
        }
        showing(displayValue);
    })
})

function clear() {
    firstArrayInput = [];
    displayValue = "";
    numberArray = [];
    result = null;
}

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

