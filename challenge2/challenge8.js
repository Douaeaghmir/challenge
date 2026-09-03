//Write a JavaScript program that generates the nfirst terms of the Fibonacci sequence,
//  where nis entered by the user. The Fibonacci sequence is defined as follows:
//  F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2).

const prompt = require("prompt-sync")();
let num = parseFloat(prompt("enter number : "));
let fn = 0;
let sn = 1;
let res = 0;
for(let i = 1 ; i <= num ; i++)
{
    console.log(res);
    res = fn + sn;
    fn = sn;
    sn = res;
}