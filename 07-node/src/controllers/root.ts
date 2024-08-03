import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
	console.log("Yayyy, someone visited my root :D :D :D");
	res.send({ message: "I AM (G)ROOT" });
}

export const store = (req: Request, res: Response) => {
	console.log("Yayyy, someone wants to create something :D :D :D");
	res.send({ message: "THE POSTMAN ALWAYS RINGS TWICE" });
}
