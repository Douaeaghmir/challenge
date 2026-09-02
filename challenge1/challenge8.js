//We want to display a student's grade based on their average.
//  If their average is strictly below 10, they fail. If their average is between 10 (inclusive) and 12,
//  they receive a passing grade. If their average is between 12 (inclusive) and 14, they receive a passing grade. 
// If their average is between 14 (inclusive) and 16, they receive a high pass. If their average is above 16 (inclusive),
//  they receive a very high pass. Write the necessary instructions.


const prompt = require("prompt-sync")();

const average = Number(prompt("Enter the student's average: "));

if (average < 10) 
    console.log("Fail");
else if (average < 12) 
    console.log("Pass");
else if (average < 14) 
    console.log("Pass");
else if (average < 16) 
    console.log("High pass");
else 
    console.log("Very high pass");