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
	z?: number;
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
	return coords.z
		? `x=${coords.x}, y=${coords.y}, z=${coords.z}`
		: `x=${coords.x}, y=${coords.y}`;
}
const alertCoords = (coords: Point) => {
	alert(`x=${coords.x}, y=${coords.y}`);
}
console.log(printCoords(eliteCoords));
console.log(printCoords({ x: 42, y: 3 }));
// console.log(printCoords({ lalala: "tjo vad skoj" }));  // also nope

// alertCoords({ x: 42, y: 3 });

type StringOrNumber = string | number;
let s: StringOrNumber = 42;
s = "3LiT3";

const makeMoreInteresting = (msg: StringOrNumber) => {
	// Type Narrowing
	return typeof msg === "number"
		? String(msg) + "!!!!!"
		: msg.toUpperCase() + "!!!!!";
}

console.log(makeMoreInteresting("lolcats are funny"));
console.log(makeMoreInteresting(1337));
// console.log(makeMoreInteresting(null));

interface IPoint {
	x: number;
	y: number;
	z?: StringOrNumber;
}

type Num = number;
type NumOrNumArray = number | number[];

interface IAnimal {
	name: string;
}

// Interface Merging 🤯
interface IAnimal {
	isMammal: boolean;
}
// interface IAnimal {
// 	name: string;
// 	isMammal: boolean;
// }

interface IDog extends IAnimal {
	legs: number;
}

const doggo: IDog = {
	name: "Mr Fluffles",
	isMammal: true,
	legs: 4,
}

interface ISnake extends IAnimal {
	eatsThings: boolean;
}

type Animal = {
	name: string;
}

// 🙅🏻‍♂️
// type Animal = {
// 	isMammal: boolean;
// }

// Dog is an Intersection between Animal and the type we create inline
type Dog = Animal & {
	legs: number;
}

const nando: Dog = {
	name: "Nando",
	legs: 4,
}

/**
 * Literal Type
 */
const username = "drblue";
//       ^?

type AllowedGitHubUsernames = "drblue" | "pelle";

// We can only assign "drblue" OR "pelle" to a variable of type
// AllowedGitHubUsernames. We also get autocomplete for valid values.
const githubUsername: AllowedGitHubUsernames = "drblue";
const githubUsername2: AllowedGitHubUsernames = "pelle";

// const validHttpVerbs = ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"];
type HttpVerbs = "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTIONS" | "HEAD";

const makeHttpRequest = (method: HttpVerbs, endpoint: string) => {
	// if (!validHttpVerbs.includes(method)) {
	// 	throw new Error("Not a valid HTTP method");
	// }
	return `Would ${method} from/to ${endpoint}`;
}

// makeHttpRequest("PSOT", "/memes");  // would throw Type Exception
makeHttpRequest("GET", "/memes");

/*
// Recap of Type Unions
type Todo = { id: number, title: string, completed: boolean };
type TodoOrTodos = Todo | Todo[];

const maybeATodoOrMaybeAList: TodoOrTodos = [{ id: 1337, title: "Look mom, no hands!", completed: false }];

const printDemTodos = (todo: TodoOrTodos) => {
	todo
	if (Array.isArray(todo)) {
		// it's a array
		todo;
		return;
	}
	todo
}
*/

/**
 * Tuples
 */
type DivisionResult = [number, number];

const divide = (a: number, b: number): DivisionResult => {
	const floored = Math.floor(a / b);  // 10 / 3 = 3
	const remainder = a % b;  // 10 % 3 = 1

	return [floored, remainder];
}

const [tenByThreeInt, tenByThreeMod] = divide(10, 3);
//             ^?
