//Write a JavaScript program that asks the user for an integer nand calculates
//  the sum of the nfirst few natural numbers using a loop.
//  For example, for n n= 3, the sum is 3 1 + 2 + 3 = 6.
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter n: "));
let sum = 0;

for (let i = 1; i <= n; i++)
{
    sum = sum + i;
}
console.log("Sum =", sum);