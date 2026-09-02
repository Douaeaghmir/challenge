//Write a program that asks for the temperature in Celsius and converts it to Kelvin. Formula:
//K = C + 273.15
const prompt = require("prompt-sync")();
const k = prompt("what is the temperature in celsius? ");
const numberK = parseFloat(k);
const result = numberK + 273.15;
console.log("The temperature in kelvin is: " + result + " K");
