//Two real numbers, a and b, are entered from the keyboard. 
// Calculate and display a + b, a - b, a * b, and a / b 
// with decimal precision.

const prompt = require("prompt-sync")();
const a = prompt("what is the value of a: ");
const b = prompt("what is the value of b: ");

console.log(parseFloat(a) + parseFloat(b));  
console.log(parseFloat(a) - parseFloat(b));  
console.log(parseFloat(a) * parseFloat(b));  
console.log(parseFloat(a) / parseFloat(b));  