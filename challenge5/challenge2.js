const prompt = require("prompt-sync")();
const n  = prompt("how many element you want : ");
let str = "";
let res = "";
while(str < n)
{
 let ecr = prompt("enter what you want inside : ");
	res = res + " " + ecr;
	process.stdout.write(res);
	str++;
}
