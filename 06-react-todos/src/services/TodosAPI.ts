/**
 * Service for communicating with the json-server backend
 */
import axios from "axios";
import { NewTodo, Todo } from "../types/Todo.types.ts";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const FAKE_DELAY = 1500;

// Create a new axios instance
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

/**
 * Make a generic HTTP GET request
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async <T = any>(endpoint: string) => {
	const res = await instance.get<T>(endpoint);

	// Simulate a delay
	!!FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY));

	return res.data;
}

/**
 * Execute a generic HTTP POST request.
 *
 * @param endpoint Endpoint to HTTP POST
 * @param data Data to POST
 */
const post = async <Payload, Response = unknown>(endpoint: string, data: Payload) => {
	const res = await instance.post<Response>(endpoint, data)
	return res.data
}

/**
 * Get all todos
 */
export const getTodos = async () => {
	return get<Todo[]>("/todos");
};

/**
 * Create a todo
 */
export const createTodo = (todo: NewTodo) => {
	return post<NewTodo, Todo>("/todos", todo)
}
