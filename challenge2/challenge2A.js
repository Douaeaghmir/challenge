function draw(a)
{
    for (let i = 1; i <= a; i++)
    {
        //spaces
        for(let j = 1; j <= a - i; j++)
        {
            process.stdout.write(" ");
        }

        //etoils
        for(let k = 1; k <= 2 * i - 1; k++)
        {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}
draw(7);