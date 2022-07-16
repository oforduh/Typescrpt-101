"use strict";
// TUTORIAL 18
// generics
// extends an object which has a name property
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// console.log(docOne.name);
// Tutorial 19
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 30,
    resourceName: ResourceType.BOOK,
    data: "Hassan",
};
const docTwo = {
    uid: 30,
    resourceName: ResourceType.DIRECTOR,
    data: ["sell", "money", "daniel"],
};
// Tutorial 20
// Tupple
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
// console.log(`before tuples ${arr}`);
// Tuples
// tuples defines how an array would look
let tup = ["ryu", 25, true];
tup[0] = "ken";
tup[1] = 100;
// console.log(tup);
