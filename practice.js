// Simple Calculator

// Function to perform calculation
function calculator(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        // Prevent divide by zero
        result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid operator";
    }

    return result;
}

// Example: Using a loop to test multiple operations
const numbers = [
    {a: 10, b: 5, op: "+"},
    {a: 10, b: 5, op: "-"},
    {a: 10, b: 5, op: "*"},
    {a: 10, b: 5, op: "/"},
    {a: 10, b: 5, op: "%"}
];

for (let item of numbers) {
    const output = calculator(item.a, item.b, item.op);
    console.log(`Calculation: ${item.a} ${item.op} ${item.b} = ${output}`);
}
