export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
