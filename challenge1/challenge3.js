//Write a JavaScript program to calculate the sum of two given integer values.
//  If the two values ​​are identical, the program should return three times their sum.


const prompt = require("prompt-sync")();

const n1 = Number(prompt("Enter the first number: "));
const n2 = Number(prompt("Enter the second number: "));

if (n1 === n2)
    console.log((n1 + n2) * 3);
 else 
    console.log(n1 + n2);