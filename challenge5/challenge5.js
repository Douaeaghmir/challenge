const prompt = require("prompt-sync")();
const n = prompt("enter how many elements : ");
let i = 0;
let element = [];
let str = [];
	for(let i = 0 ; i < n ; i++)
	{
		element = prompt("eneter num of each element : ");
			str.push(element);
	}
	let min = str[0];
	for(let i = 1 ; i < str.length ; i++)
	{
		if(min > str[i])
			min = str[i];
	}
	process.stdout.write(min + "\n");