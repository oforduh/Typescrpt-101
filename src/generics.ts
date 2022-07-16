// TUTORIAL 18
// generics
// extends an object which has a name property
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

// console.log(docOne.name);

// Tutorial 19
// enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

//an interface defines how an object will look
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<string> = {
  uid: 30,
  resourceName: ResourceType.BOOK,
  data: "Hassan",
};

const docTwo: Resource<string[]> = {
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
let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = "ken";
tup[1] = 100;
// console.log(tup);
