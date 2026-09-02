//Write a program to check whether a given character is an uppercase letter or not using a conditional statement if-else.
//  Uppercase letters range from 'A' to 'Z'. The ASCII values ​​of 'A' and 'Z' are 65 and 90 respectively.
//  If the ASCII value of a character is between 65 and 90, it is an uppercase letter.
const prompt = require("prompt-sync")();

const character = prompt("Enter a character: ");

const ascii = character.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) 
    console.log("The character is an uppercase letter");
else 
    console.log("The character is not an uppercase letter");
