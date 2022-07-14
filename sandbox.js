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
var character;
var age;
var isLoggedIn;
// arrays
// it should be a string array and wear initializing in an empty array
var ninjas = [];
// union types
// array
var mixed = [];
mixed.push("yes");
mixed.push(true);
console.log(mixed);
// string
var uid;
uid: 123;
uid: "123";
// object
var ninjaOne;
ninjaOne = {
    name: "yoshi",
    age: 45
};
