//Write a JavaScript program that checks whether a 
//character entered by the user is a vowel or not using the instruction switch.
const prompt = require ("prompt-sync")();
const ch = prompt("what your character: ");

switch(ch)
{
	case 'a':
	case 'o':
	case 'i':
	case 'u':
	case 'e':
	case 'y':
	console.log("Vowel");
	break;
	default:
	console.log("no vowel");
}
