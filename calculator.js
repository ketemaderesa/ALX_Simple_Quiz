function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : "Error: Divide by 0";
}

function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

document.getElementById('add').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    displayResult(divide(number1, number2));
});
