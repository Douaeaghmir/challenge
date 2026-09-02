//Write a JavaScript program to find the geometric mean of three numbers entered by the user. Formula:
//Moyenne géométrique = (a * b * c)^(1/3)
const prompt = require('prompt-sync')();
const a = prompt("what is the value of a: ");
const b = prompt("what is the value of b: ");
const c = prompt("what is the value of c: ");

const result = (a * b * c)**(1/3);
console.log(result);