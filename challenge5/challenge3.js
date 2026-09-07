const prompt = require("prompt-sync")();
const n  = prompt("how many element you want : ");
let str = 0;
let res = 0;
while(str < n)
{
 let ecr = Number(prompt("enter what you want inside : "));
	res += ecr;
	process.stdout.write(res.toString());
	str++;
}
