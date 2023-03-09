// задание-1
// function minNum(num1, num2, num3, num4, num5, ) {
//     console.log(Math.min(num1, num2, num3));
// }
// minNum(789, 514, 597, 456, 159 )

// задание-2
// function getStringLength() {
//     const userInput = prompt("Введите цифру чтобы увидеть длину строки!!!");
//     console.log("Длина строки: " + userInput.length);
// }
// getStringLength()

// задание-3
function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}
console.log(calculator(7, "+", 3));
console.log(calculator(98, "-", 2)); 
console.log(calculator(78, "*", 5));
console.log(calculator(56, "/", 2));
console.log(calculator(10, "&", 2));
calculator()


