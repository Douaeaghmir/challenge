function lengh(word)
{
let i = 1;
while(word[i] !== undefined)
{
i++;
}
return(i);
}
function comp(a , b)
{
let i = 0;
let flag = true;
	while( a[i] !== undefined && b[i] !== undefined )
	{
		if(a[i] !== b[i])
		{
			flag = false;
				break;
		}
		i++;
	}
	if(a[i] === undefined && b[i] !== undefined || a[i] !== undefined && b[i] === undefined)
		flag = false;
	return(flag);
}
const prompt = require("prompt-sync")();
const n = prompt("how many student you have : ");
var str = [];
let names = [];
for(let i = 0 ; i < n ; i++)
	{
		names = prompt("enter each name : ");
		str.push(names);
	}
	console.log(str);
	for(let i = 0 ; i < lengh(str) ; i++)
		{
			var counterv = 0;
			var counterc = 0;
			 for(let j = 0 ; j < lengh(str[i]) ; j++)
				{
					if(str[i][j] === "a" || str[i][j] === "e" || str[i][j] === "i" || str[i][j] === "o" || str[i][j] === "u")
						counterv++;
					else
						counterc++;
	}
	process.stdout.write("the number of vowels in " + str[i] + " is : " + counterv + "\n" + "the number of consonants in " + str[i] + " is : " + counterc + "\n");
	}
var search = prompt("enter the name you want to search : ");
for(let k = 0 ; k < lengh(str) ; k++)
{
var found = false;
		let get = comp(str[k] , search);
		if(get)
		{
			found = true;
			break;
		}
}
if(found)
	console.log("student found");
else
	console.log("student not found");
