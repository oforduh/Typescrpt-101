import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { IsPerson } from "./interfaces/isPerson.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplates.js";

const anchor = document.querySelector("a")!;
// console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// get all input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  try {
    let doc: HasFormatter;

    // Tutorial 20
    // Tupple
    let values: [string, string, number] = [
      tofrom.value,
      details.value,
      amount.valueAsNumber,
    ];

    if (type.value === "invoice") {
      doc = new Invoice(...values);
    } else {
      doc = new Payment(...values);
    }
    generateTemplate.render(doc, type.value, "end");

    console.log(doc);
  } catch (error) {
    console.log(error);
  }
});

// Tutorial 17
// rendering HTML Template
const ul = document.querySelector(".item-list") as HTMLUListElement;
let generateTemplate = new ListTemplate(ul);

// class and interface tutorial starts here
// const invOne = new Invoice("mario", "work on the mario website", 300);

// const invTwo = new Invoice("luigi", "work on the mario website", 500);

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);
// invoices.forEach((invoice) =>
//   console.log(invoice.client, invoice.amount, invoice.format())
// );

// console.log(invoices);

// const me: IsPerson = {
//   name: "harrison",
//   age: 50,
//   speak(a: string): void {
//     console.log(a);
//   },
//   spend(a: number): number {
//     console.log(a);
//     return a;
//   },
// };

// console.log(me);
// const greetPerson = (person: IsPerson) => {
//   console.log(`This is the ${person.name}`);
// };
// console.log(
//   greetPerson({
//     name: "interface",
//     age: 50,
//     speak: (text: "yes") => {
//       console.log(text);
//     },
//     spend: (num: 50) => {
//       return num;
//     },
//   })
// );

// // Tutorial 16
// // interfaces with classes
// assigning formatter interface to the object
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "pluming work", 400);

// // making sure docs contains object for the formatter types
// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log();

// class and interface tutorial end here
