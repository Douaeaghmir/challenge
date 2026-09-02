//Write a JavaScript program to find the distance between two given points in a 3D space. Formula:
//Distance = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
const prompt = require('prompt-sync')();
const x1 = prompt("value of x1: ");
const x2 = prompt("value of x2: ");
const y1 = prompt("value of y1: ");
const y2 = prompt("value of y2: ");
const z1 = prompt("value of z1: ");
const z2 = prompt("value of z2: ");

const spaceformula = ((x2 - x1) ** 2) + ((y2 - y1) ** 2) +  ((z2 - z1) ** 2);

