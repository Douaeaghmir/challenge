//Write a JavaScript program that calculates the possible solutions of a quadratic equation
const prompt = require("prompt-sync")();

const a = Number(prompt("Enter a: "));
const b = Number(prompt("Enter b: "));
const c = Number(prompt("Enter c: "));

const delta = b ** 2 - 4 * a * c;

if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("Two solutions:");
    console.log("x1 =", x1);
    console.log("x2 =", x2);
} 
else if (delta === 0) {
    const x = -b / (2 * a);

    console.log("One solution:");
    console.log("x =", x);
} 
else {
    console.log("No real solutions");
}