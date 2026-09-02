//Write a program to check if a given number is positive, negative, or zero.
//  If the number is less than zero, then the number is negative, and if the number is greater than zero, 
// then the number is positive. 
// If both conditions are false, the number is equal to zero.
const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if (number < 0)
    console.log("The number is negative");
else if (number > 0)
    console.log("The number is positive");
else
    console.log("The number is zero");