function tolupper(str)
{
let i = 0;
while(str[i] !== undefined)
{
        if(str.charCodeAt(i) >= 97  && str.charCodeAt(i) <= 122)
        {
        let store = str.charCodeAt(i);
        store -= 32;
                process.stdout.write(String.fromCharCode(store));
        }
        else
                process.stdout.write( str[i]);
        i++;
}
}
tolupper("DOUae");