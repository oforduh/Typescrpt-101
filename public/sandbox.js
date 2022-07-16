"use strict";
// Tutorial 1
// const character = "mario";
// console.log(character);
// const input = document.querySelectorAll("input");
// console.log(input);
// input.forEach((input) => {
//   console.log(input);
// });
// tsc sandbox ts -w
// Tutorial 2
// let character = "mario";
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(false));
// Tutorial 3
// arrays
// let names = ["luigi", "mario", "harrison"];
// // names.push(false);
// // names[4] = 45;
// let mixed = ["luigi", 45, "harrison", false];
// mixed.push(false);
// // objects
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 50,
// };
// ninja.age = 50;
// can't charge the property type of an object
// ninja.age = "yes";
// once an object is defined we cant add additional properties to it
// ninja.skills = ["fighting,throwing"];
// Tutorial 4
// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// arrays
// it should be a string array and wear initializing in an empty array
// let ninjas: string[] = [];
//  Tutorial 5
// union types
// array
// let mixed: (string | number | boolean)[] = [];
// mixed.push("yes");
// mixed.push(true);
// console.log(mixed);
// // string
// let uid: string | number;
// uid: 123;
// uid: "123";
// object
// let ninjaOne: object;
// ninjaOne = {
//   name: "yoshi",
//   age: 45,
// };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   won: boolean;
// };
// ninjaTwo = {
//   name: "Harrison",
//   age: 45,
//   won: false,
// };
// console.log(ninjaTwo);
// Tutorial 6
// Any
let age;
age = 50;
// console.log(age);
age = false;
// console.log(age);
let mixed = [];
mixed.push(55);
mixed.push(false);
mixed.push("Mario");
// console.log(mixed);
let ninja;
ninja = {
    name: ["gold", "harrison"],
    age: false,
};
// console.log(ninja);
// console.log(ninja);
