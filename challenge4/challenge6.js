function coun(str , chara)
{
let i = 0;
let counter = 0;
while(str[i] !== undefined)
{
	if(str[i] == chara)
		counter++;
	i++;
}
	console.log(counter);
}
coun("dodo",  'o');
