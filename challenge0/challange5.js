//Write a program that asks for the temperature in Celsius and displays the state of water at that temperature (solid, liquid, gas). Rule:
//C < 0: Solid
//0 <= C < 100: Liquid
//C >= 100: Gas

const prompt = require("prompt-sync")();
const temp = prompt("what is the temperature in Celsius? ");
const tempn = parseFloat(temp);

if (tempn < 0 )
	console.log("solid");
else if (tempn == 0 || tempn < 100)	

	console.log("liquid");
else
	console.log("gas");
 
