//Write a program that asks for the distance in kilometers and converts it to yards. Formula:
//Yards = Km * 1093.61
const prompt = require("prompt-sync")();

const km = prompt("what is the distance in km? ");

const yard = km * 1093.61;

console.log ("the result is : " + yard + " yard");
