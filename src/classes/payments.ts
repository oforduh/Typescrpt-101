import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  // Access modifiers
  // readonly,public and private
  // private modifier can not be access outside the invoice class
  //   readonly can not be changed after it has been declared in the constructor

  readonly recipient: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.recipient = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
