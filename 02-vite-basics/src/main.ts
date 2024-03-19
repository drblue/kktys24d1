import './style.css';

let myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;

let myName: any = "Johan";
myName = 1337;
myName = null;
myName = [];

const greet = (name: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${name}!`);
		return;
	}
	console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Johan", 42);
greet("Script-kiddo", 4);
greet("Charlie");
// greet("David", false);
