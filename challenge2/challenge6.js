//Write a JavaScript program that asks for an integer nand displays the nfirst even numbers.
//  For example, for n= 4, display: 2, 4, 6, 8.
const prompt = require("prompt-sync")();
let num = parseFloat(prompt("enter number : "));
let num1 = num * 2;
for(let i = 1 ; i <= num1 ; i++)
{
    if(i % 2 == 0)
            console.log(i);
} 