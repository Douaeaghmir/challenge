//Write a JavaScript program that calculates the factorial of a positive integer nentered by the user. 
// The factorial of nis the product of all positive integers less than or equal to n. For example, for n= 5,
//  display: 5! = 120.

const prompt = require("prompt-sync")();
var num = prompt("enter number : ");
var res = 1;
var i = num;
do 
{
var res =  res * i ;
i--;
}while(i != 0)
console.log(res);
