let calInput = document.getElementById("calDisplay");
let numberOne = "";
let numberTwo = "";
let operand;

function whichOperator(operandString) {
    operand = operandString;
}

function whatNumber(numberValue) {
    let subZero = calInput.value;
    if (subZero == 0) {
        calInput.value = calInput.value.slice(1);
    }

    if (operand == null) {
        numberOne += numberValue;
        calInput.value = numberOne;
    } else {
        numberTwo += numberValue;
        calInput.value = numberTwo;
    }

}

function finalResult() {
    if (operand == "+") {
        calInput.value = parseInt(numberOne) + parseInt(numberTwo);
    } else if (operand == "-") {
        calInput.value = parseInt(numberOne) - parseInt(numberTwo);
    } else if (operand == "*") {
        calInput.value = parseInt(numberOne) * parseInt(numberTwo);
    } else if (operand == "/") {
        calInput.value = parseInt(numberOne) / parseInt(numberTwo);
    }

}

function resetCal() {
    calInput.value = 0;
    numberTwo = "";
    numberOne = "";
    operand = "";
}

// Edge Cases to be Considered
// Mutiple times click
// Order of clicks