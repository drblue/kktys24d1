export {};

const user = {
	username: "johan",
	role: "meme-lord",
	level: 1337,
}

type User = typeof user;
//     ^?

type UserKey = keyof User;  // "username" | "role" | "level"

Object.keys(user);  // ["username", "role", "level"]
