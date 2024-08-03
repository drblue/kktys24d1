/**
 * All communication with the backend REST API (`json-server`)
 */
import axios from "axios";
import { CreateTodoData, Todo, UpdateTodoData } from "./todo.types";

const baseUrl = import.meta.env.VITE_API_BASEURL || "http://localhost:3000";

export const getTodosFetch = async () => {
	const response = await fetch(baseUrl + "/todos");    // Content-Type: "application/json"
	if (!response.ok) {
		// throw a tantrum
		throw new Error("Response was not OK!");
	}

	const data: Todo[] = await response.json();
//       ^?

	return data as Todo[];
}

/**
 * Make a generic HTTP GET request
 *
 * @param endpoint Endpoint to get
 * @returns
 */
const get = async <T>(endpoint: string) => {
	const response = await axios.get<T>(baseUrl + endpoint);
	return response.data;
}

const post = async <Payload, Return>(endpoint: string, data: Payload) => {
	const response = await axios.post<Return>(baseUrl + endpoint, data);
	return response.data;
//                 ^?
}

export const getTodos = async () => {
	return get<Todo[]>("/todos");
}

export const getTodo = async (id: number) => {
	return get<Todo>("/todos/" + id);
}

export const createTodo = async (data: CreateTodoData) => {
	return post<CreateTodoData, Todo>("/todos", data);
}

export const updateTodo = async (id: number, data: UpdateTodoData) => {
	const response = await axios.patch<Todo>(baseUrl + "/todos/" + id, data);
	return response.data;
}

export const deleteTodo = async (id: number) => {
	const response = await axios.delete<Todo>(baseUrl + "/todos/" + id);
	return response.data;
}
