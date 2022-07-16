// Tutorial 15 interfaces to defined the basic structure of objects
export interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
