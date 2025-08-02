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

console.log(add(5, 3));        // just for testing
console.log(subtract(5, 3));   // just for testing
console.log(multiply(5, 3));   // just for testing
console.log(divide(5, 0));     // just for testing
