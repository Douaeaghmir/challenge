function rev(str)
{
let i = 0; 
while(str[i] !== undefined)
{
	i++;
}
while(str[i - 1] !== undefined)
{
	process.stdout.write(str[i - 1]);
i--;
}
}
rev("douae");
