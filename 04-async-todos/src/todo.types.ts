export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export type CreateTodoData = Omit<Todo, "id">;

export type UpdateTodoData = Partial<Todo>;
//           ^?