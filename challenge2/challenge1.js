//Write a JavaScript program that asks the user for a number and displays its multiplication table from 1 to 10. For example, for the number 4, display:

//4 * 1 = 4 4 * 2 = 8 4 * 3 = 12 ... 4 * 10 = 40
const prompt = require("prompt-sync")();
let num = prompt("enter number : ");
for(i = 1 ; i <= 10 ; i++)
{
    let res = num * i;
        console.log(num + "x" + i + "=" + res);
}
