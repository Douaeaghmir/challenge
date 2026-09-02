//Write a JavaScript program that displays your personal information: name, 
// surname, age, gender, and email address. 
// The data is entered by the user
const promt = require("prompt-sync")()
const name = promt("what is your name? ")
const surname = promt("what is your surname? ")
const age = promt("what is your age? ")
const gender = promt("what is your gender? ")
const email = promt("what is your email? ")
console.log("Name : " + name );
console.log("Surname  : " + surname);
console.log("Age : " + age);
console.log("Gender : " + gender);
console.log("Email : " + email);;