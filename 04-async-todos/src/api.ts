/**
 * All communication with the backend REST API (`json-server`)
 */
import axios from "axios";
import { Todo } from "./todo.types";

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

export const getTodos = async () => {
	const response = await axios.get<Todo[]>(baseUrl + "/todos");
	return response.data;
}

export const createTodo = () => {}
