export {};

// const username = "johan";
//     ^?

let username = "johan";
//    ^?

type TypeOfUsername = typeof username;
//        ^?

/*
const users = [
//        ^?
	"johan",
	"pelle",
	"kajsa",
	"mimmi",
] as const;

// users.push("kalle");
*/

type Users = readonly ["johan", "pelle"];
const users: Users = ["johan", "pelle"];

type BetterTodo = {
	readonly id: number;
	title: string;
	completed: boolean;
}

const todo1: BetterTodo = {
	id: 1,
	title: "My first todo",
	completed: false,
}
// todo1.id = 1337;  // Not allowed as "id" is readonly
todo1.title = "My very first todo";
