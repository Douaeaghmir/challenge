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
	let max = str[0];
	for(let i = 0 ; i < str.length ; i++)
	{
		if(max < str[i])
			max = str[i];
		i++;
	}
	process.stdout.write(max + "\n");
