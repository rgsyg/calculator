const display = document.querySelector(".calculator-display__wrapper");
const buttons = document.querySelectorAll(".btnNum");
const operatorButtons = document.querySelectorAll(".btnOperator");
const equalsButton = document.querySelector(".btnEquals");
const clearButton = document.querySelector(".btnClear");

let firstOperand = '', secondOperand = '';
let result;
let operator;
let isCleared = false;

function add(firstOperand, secondOperand) {
    result = Math.round((firstOperand + secondOperand) * 100) / 100;
    display.textContent = result;
}

function subtract(firstOperand, secondOperand) {
    result = Math.round((firstOperand - secondOperand) * 100) / 100;
    display.textContent = result;
}

function multiply(firstOperand, secondOperand) {
    result = Math.round((firstOperand * secondOperand) * 100) / 100;
    display.textContent = result;
}

function divide(firstOperand, secondOperand) {
    if (!(firstOperand / secondOperand === Infinity)) {
        result = Math.round((firstOperand / secondOperand) * 100) / 100;
        display.textContent = result;
    } else {
        display.textContent = 'Error';
        result = '';
    }
}

function operate() {
    if (!operator || !firstOperand || !secondOperand) return;
    switch (operator) {
        case '+':
            add(+firstOperand, +secondOperand);
            break;
        case '-':
            subtract(+firstOperand, +secondOperand);
            break;
        case '×':
            multiply(+firstOperand, +secondOperand);
            break;
        case '/':
            divide(+firstOperand, +secondOperand);
            break;
    }
    clear();
}

function displayValue() {
    isCleared = false;
    if (operator) {
        display.textContent = firstOperand;
        display.textContent += ' ' + operator;

        secondOperand += '' + this.value;
        display.textContent += ' ' + secondOperand;
    } else {
        firstOperand += '' + this.value;
        display.textContent = firstOperand;
    }
}

function displayOperator() {
    secondOperand = '';
    if (isCleared) firstOperand = result;
    if (!firstOperand) return;
    display.textContent = firstOperand;

    operator = this.value;
    display.textContent += ' ' + operator;
}

function clear() {
    [firstOperand, secondOperand, operator] = ['', '', ''];
    isCleared = true;
}

buttons.forEach((button) => button.addEventListener("click", displayValue));
operatorButtons.forEach((operator) => operator.addEventListener("click", displayOperator));
equalsButton.addEventListener("click", operate);
clearButton.addEventListener('click', () => {
    display.textContent = '0';
    clear();
});