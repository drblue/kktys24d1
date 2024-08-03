export {};

/*
console.log("Hello, world!");

let myName: string;
myName = "Johan";
myName = "Bob";
myName = 1337;

let myAge: number;
myAge = 42;
myAge = 18;
myAge = false;

let needsCoffee: boolean;
needsCoffee = true;
// needsCoffee = false;  // 😤
// needsCoffee = null;
*/

/*
// Explicit typing 😕
let myName: string = "Johan";
let myAge: number = 42;
let needsCoffee: boolean = true;
*/

// Implicit typing 🤩
let myName = "Johan";		// Typen blir automatiskt string
let myAge = 42;				// Typen blir automatiskt number
let needsCoffee = true;		// Typen blir automatiskt boolean

needsCoffee = null;			// Type 'null' is not assignable to type 'boolean'
