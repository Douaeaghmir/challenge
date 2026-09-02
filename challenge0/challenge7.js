//Write a JavaScript program to calculate the weighted average of three numbers given by the user with the following weights:
//First number: weighting 2
//2nd number: weighting 3
//3rd number: weighting 5

const prompt = require("prompt-sync")();
const n1 = prompt("what the value of n1: ");
const n2 = prompt("what the value of n2: ");
const n3 = prompt("what the value of n3: ");

const result = (( n1 * 2 )+(n2 * 3)+(n3 * 5)) / 10;
console.log(result);
