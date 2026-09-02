
const prompt = require("sytanx=sync")();
const year = prompt("how many years you want to convert: ");
//Write a menu-driven JavaScript program to convert a given year into:

//Month
//Days
//Hours
//Minutes
//Seconds

console.log("1 | month :");
console.log("2 | days: ");
console.log("3 | hours:");
console.log("4 | minutes: ");
console.log("5 | second: ");

let choice = prompt("choose from the menu: ");

if(choice == 1)
	console.log(" result : "+ choice * 12);
else if(choice == 2)
	console.log("result : " + choice * 365);
else if(choice == 3)
	console.log("result : " + choice * 365 * 24)
else if(choice == 4)
	console.log("rrsult : " +  choice * 365 * 24 * 60) 
else if(choice == 5)
	console.log("result : " + choice * 365 * 24 * 60 * 60)
else 	
console.log("invalid choice");
