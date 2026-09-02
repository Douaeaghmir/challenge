//Write a JavaScript program that asks for an integer nand displays the nfirst odd numbers. 
// For example, for n= 5, display: 1, 3, 5, 7, 9.
const prompt = require("prompt-sync")();
let num = parseFloat(prompt("enter number : "));
let num1 = num * 2;
for(let i = 1 ; i <= num1 ; i++)
{
    if(i % 2 != 0)
            console.log(i);
} 