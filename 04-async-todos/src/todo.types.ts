export interface Todo {
	id: number;
	title: string;
	completed: boolean;
	// [key: string]: any;
}

export type CreateTodoData = Omit<Todo, "id">;
export type TodoIdTitle = Pick<Todo, "id" | "title">;

export type UpdateTodoData = Partial<Todo>;
export type RequiredTodoData = Required<UpdateTodoData>;

/*
const fakedTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	project_manager: "Bob",
}
const secondFakedTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	client_id: 42,
}
*/
