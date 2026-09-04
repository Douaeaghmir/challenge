function tolower(str)
{
	let i = 0;
	while(str[i] !== undefined)
{
        if(str.charCodeAt(i) >= 65  && str.charCodeAt(i) <= 90)
        {
        let store = str.charCodeAt(i);
        store += 32;
                process.stdout.write(String.fromCharCode(store));
        }
        else
                process.stdout.write( str[i]);
        i++;
}
}
tolower("DOUae");