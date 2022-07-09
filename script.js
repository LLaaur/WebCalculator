const screen = document.querySelector('.calculator-display');
const numbers = document.querySelectorAll('.show.number');
const operators = document.querySelectorAll('.show.operator');
const remove = document.querySelector('.del');
const allClear = document.querySelector('.ac');
const decimal = document.querySelector('.show.decimal');


let operandX = '';
let operandY = '';
let currentOperation = null;

let cleanCalculatorDisplay = false;

const currentOperationDisplay = document.querySelector('.current-display');
const lastOperationDisplay = document.querySelector('.last-display');

const clearAll = function () {
    currentOperationDisplay.textContent = '0';
    lastOperationDisplay.textContent = '';
    operandX = '';
    operandY = '';
    currentOperation = null;
};

allClear.addEventListener('click', clearAll);

const removeElement = function () {
    currentOperationDisplay.textContent = currentOperationDisplay.textContent.toString().slice(0, -1);
}

remove.addEventListener('click', removeElement);

const displayNumbers = function (number) {
    if (currentOperationDisplay.textContent === '0' || cleanCalculatorDisplay) {
        cleanDisplay();
    }
    currentOperationDisplay.textContent += number;
};


numbers.forEach(button => {
    button.addEventListener('click', () => displayNumbers(button.textContent))
});

operators.forEach(button => {
    button.addEventListener('click', () => declareOperation(button.textContent))
})


const cleanDisplay = function () {
    currentOperationDisplay.textContent = '';
    cleanCalculatorDisplay = false;
}

const decimals = function(){
    if (currentOperationDisplay.textContent.includes('.')){
        return
    }
    if (currentOperationDisplay.textContent === ''){
        currentOperationDisplay.textContent = '0'
    }
    if (cleanCalculatorDisplay) cleanDisplay()

    currentOperationDisplay.textContent += decimal.textContent
}



const declareOperation = function (operator) {
    if (currentOperation !== null) calculate();
    operandX = currentOperationDisplay.textContent;
    currentOperation = operator;
    lastOperationDisplay.textContent = `${operandX} ${currentOperation}`;
    cleanCalculatorDisplay = true;
}

const calculate = function () {
    if (currentOperation === null || cleanCalculatorDisplay) return;
    if (currentOperation === '÷' && currentOperationDisplay.textContent === '0') {
        alert('Division by 0 not possible')
        return
    };
    operandY = currentOperationDisplay.textContent
    currentOperationDisplay.textContent = roundNumber(
        operate(currentOperation, operandX, operandY)
    );
    lastOperationDisplay.textContent = `${operandX} ${currentOperation} ${operandY} ${'='}`
    currentOperation = null
};

const roundNumber = function (num) {
    return Math.round(num * 100) / 100;
};

const add = function (x, y) {
    return x + y
};

const subtract = function (x, y) {
    return x - y
};

const multiply = function (x, y) {
    return x * y
};

const divide = function (x, y) {
    return x / y
}

const operate = function (operator, x, y) {
    x = Number(x);
    y = Number(y);
    // CHECKING FOR ALL OPERATORS
    if (operator === '+') {
        return add(x, y)
    }
    else if (operator === '-') {
        return subtract(x, y)
    }
    else if (operator === '*') {
        return multiply(x, y)
    }
    else if (operator === '÷') {
        return divide(x, y)
    }
    else {
        return null
    }
};

const equal = document.querySelector('.equals');
equal.addEventListener('click', calculate);

decimal.addEventListener('click', decimals);