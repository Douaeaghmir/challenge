//Write a JavaScript program that reads a multi-digit integer and displays it in reverse order without using arrays. 
// For example, if the input is 12345, display 54321.
const prompt = require("prompt-sync")();
let num = prompt("enter number : ");

let res = 0;
let m = 0;
while(num > 0)
{
    m = num % 10;
    res = (res * 10) + m;
    num = (num - m) / 10;
}
console.log(res);