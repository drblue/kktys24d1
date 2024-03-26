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

const fancyGreet = (name = "Anonymous", age?: number) => {
	if (!age) {
		return `Oh hello there good sir/ma'am, ${name}!`;
	}
	return `Oh hello there good sir/ma'am, ${name}! You look splendid for being ${age} years old.`;
}

const msg = fancyGreet("Johan", 1337);
//     ^?

fancyGreet();
fancyGreet("Harold");
fancyGreet(undefined, 42);
// fancyGreet(null, 50);

const pets = ["cat", "dog", "hamster", "goldfish"];
//      ^?
pets.push("rabbit");

pets.forEach(pet => {
//             ^?
	console.log(pet.toLocaleUpperCase());
});

const ages = [1, 3, 5, 7, 13, 21];
//      ^?
ages.forEach(age => {
//            ^?
	// console.log(age.toLocaleUpperCase());  // Property 'toLocaleUpperCase' does not exist on type 'number'.
});

/*
// 😩
let x = 13;
let y = 37;
const printCoords = (x: number, y: number) => {
	return `x=${x}, y=${y}`;
}
console.log(printCoords(x, y));
console.log(printCoords(42, 1337));
*/

// type MyString = string;
// let name: MyString = "Johan";

// type StringOrNumber = string | number;
// let x: StringOrNumber = "Pelle";
// x = 42;
//x = false; // nope!

type Point = {
	x: number;
	y: number;
}

const eliteCoords = {
	x: 13,
	y: 37,
	z: -1,
}

const notSoEliteCoords: Point = {
	x: 1,
	y: 18,
	// z: -42,  // nope
}

const printCoords = (coords: Point) => {
	return `x=${coords.x}, y=${coords.y}`;
}
const alertCoords = (coords: Point) => {
	alert(`x=${coords.x}, y=${coords.y}`);
}
console.log(printCoords(eliteCoords));
console.log(printCoords({ x: 42, y: 3 }));
// console.log(printCoords({ lalala: "tjo vad skoj" }));  // also nope

alertCoords({ x: 42, y: 3 });
