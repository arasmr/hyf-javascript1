"use strict"


let first = "my string";
console.log("the value of my variable is: " + first)
let second = 13;
console.log("the value of my variable is: " + second)
let third = true;
console.log("the value of my variable is: " + third)
let fourth = 34;
console.log("the value of my variable is: " + fourth)

console.log("the type of my variable first is : string")
console.log("the type of my variable second is : number")
console.log("the type of my variable third is : boolean")
console.log("the type of my variable fourth is : number")

console.log(typeof first)
console.log(typeof second)
console.log(typeof third)
console.log(typeof fourth)

if (typeof first == typeof second) {
    console.log("SAME TYPE")
} else {
    console.log("NOT SAME TYPE")
}