import { Todo } from "./todo.types";

export type Response<T> = {
	status: "success" | "fail" | "error";
	data?: T;
	message?: string;
};

export type TodosResponse = Response<Todo[]>;

export type TodoResponse = Response<Todo>;
