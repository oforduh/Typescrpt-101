import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  // Access modifiers
  // readonly,public and private
  // private modifier can not be access outside the invoice class
  //   readonly can not be changed after it has been declared in the constructor

  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  //   short hand format
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
