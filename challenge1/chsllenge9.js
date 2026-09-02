//Write a JavaScript program that reads a character and determines whether it belongs to the alphabet or not.
//  If it does, indicate whether it is lowercase or uppercase.
const prompt = require("prompt-sync")();

const character = prompt("Enter a character: ");

const ascii = character.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
    console.log("The character is an uppercase letter");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("The character is a lowercase letter");
}
else {
    console.log("The character is not an alphabet letter");
}