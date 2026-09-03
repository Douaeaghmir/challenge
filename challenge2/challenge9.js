//Write a JavaScript program that asks the user for a positive integer and counts the number of digits in that integer. 
// For example, for n= 12345, display: Nombre de chiffres = 5.
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a positive integer: "));
let count = 0;

while (n > 0) 
{
    n = Math.floor(n / 10);
    count++;
}
console.log("Nombre de chiffres =", count);