function remove(str)
{
let i = 0 ;
while(str[i] !== undefined)
{
	if(str[i] == " ")
	{
	i++;
		continue;
	}
	else 
		process.stdout.write(str[i])
	i++;
}
}
remove("douae aghmir");
