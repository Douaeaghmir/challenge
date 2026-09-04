//Write a JavaScript program that asks the user for a number and displays its multiplication table in descending order, from 10 to 1.
//  For example, for the number 5, display:
//5 * 10 = 50 5 * 9 = 45 5 * 8 = 40 ... 5 * 1 = 5
const prompt = require("prompt-sync")();
function table(num)
{
 num = Number(prompt("enter number : "));

for (let i = 9; i >= 1; i--)
{
    let res = num * i;

    console.log(num + " x " + i + " = " + res);
}
}
table();