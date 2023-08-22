const display = document.querySelector(".calculator-display__wrapper");
const buttons = document.querySelectorAll(".btnNum");
const operatorButtons = document.querySelectorAll(".btnOperator");
const equalsButton = document.querySelector(".btnEquals");
const clearButton = document.querySelector(".btnClear");

let firstOperand = '', secondOperand = '';
let operator;

function add(firstOperand, secondOperand) {
    display.textContent = +firstOperand + +secondOperand;
}

function subtract(firstOperand, secondOperand) {
    display.textContent = firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
    display.textContent = firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
    display.textContent = firstOperand / secondOperand;
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
    if (!firstOperand) return;
    display.textContent = firstOperand;

    operator = this.value;
    display.textContent += ' ' + operator;
}

function clear() {
    [firstOperand, secondOperand, operator] = ['', '', ''];
}

buttons.forEach((button) => button.addEventListener("click", displayValue));
operatorButtons.forEach((operator) => operator.addEventListener("click", displayOperator));
equalsButton.addEventListener("click", operate);
clearButton.addEventListener('click', () => {
    display.textContent = '0';
    clear();
});