//Write a program that asks for the speed in kilometers per hour (km/h) and converts it to meters per second (m/s). Formula:
//m/s = km/h * 0.27778
const prompt = require("prompt-sync")();
const kmh = prompt("what is the speed in km/h? : ");
const ms = kmh * 0.27778;
console.log("the result : " + ms + "m/s");
