"use strict";
// Tutorial 7
// tsc --init
//  "include": ["src"]
// Tutorial 8
// Function type
// let greet: Function;
// greet = () => {
//   console.log(`hello, world`);
// };
// greet();
// const add = (a: number, b: number, c?: number | string) => {
//   return a * b;
// };
// always put optional parameters at the end
// a function in typescript returns it void value when we don't return anything
// const add = (a: number, b: number, c: number | string = 40) => {
//   console.log(c);
//   console.log(a + b);
// };
// // explicitly tell type script what to return
// const minus = (a: number, b: number): number => {
//   return a - b;
// };
// let result = add(5, 6, 1);
// Tutorial 9
// Type Aliases
// type StringorNum = string | number;
// type objWithName = { name: string; uid: StringorNum };
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: { name: string; uid: StringorNum }) => {
//   console.log(`${user.name} says hello`);
// };
// const greetAgain = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };
// Tutorial 10
// function signature
// let greet:Function
// example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };
// // example 3
// let logDetails: (obj: { name: String; age: number }) => void;
// type person = { name: String; age: number };
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };
