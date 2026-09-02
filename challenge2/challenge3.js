//nWrite a JavaScript program that asks the user for an integer and calculates the sum of the nfirst few natural numbers.
//  For example, for n n= 4, the sum is 4 1 + 2 + 3 + 4 = 10.

const prompt = require("prompt-sync")();
var num = parseFloat(prompt("enter number : "));
var res = 0;
var i = num;
do 
{
var res = res  + i ;
i--;
}while(i != 0)

console.log(res);