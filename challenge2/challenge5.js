//Write a JavaScript program that calculates the power of an integer baseraised to an exponent exposant. 
// Use a loop to perform the calculation. For example, for base= 3 and exposant= 4, the result is 3^4 = 81.

const prompt = require("prompt-sync")();
let n1 = prompt("enter base : ");
let n2 = prompt("enter exposant : ");
var res = 1;
for(let i = 0 ; i < n2 ; i++)
{
	res = res * n1;
}
console.log(res);
