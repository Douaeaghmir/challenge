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
	if(flag)
		console.log("substring is found");
	else
		console.log("substring is not found");
}
comp("douae" , "ue");