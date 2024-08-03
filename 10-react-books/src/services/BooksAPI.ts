/**
 * Service for communicating with the backend (`09-prisma-books`)
 */
import axios from "axios";
import { NewBook, PartialBook } from "../types/Book.types";
import { BookResponse, BooksResponse } from "./BooksAPI.types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const FAKE_DELAY = 0;

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
 * Execute a generic HTTP PATCH request.
 *
 * @param endpoint Endpoint to HTTP PATCH
 * @param data Data to PATCH
 */
const patch = async <Payload, Response = unknown>(endpoint: string, data: Payload) => {
	const res = await instance.patch<Response>(endpoint, data)
	return res.data
}

/**
 * Execute a generic HTTP DELETE request.
 *
 * @param endpoint Endpoint to HTTP DELETE
 */
const del = async <Response = unknown>(endpoint: string) => {
	const res = await instance.delete<Response>(endpoint)
	return res.data
}

/**
 * Get all books
 */
export const getBooks = async () => {
	return get<BooksResponse>("/books");
}

/**
 * Get a single book
 */
export const getBook = async (id: number) => {
	return get<BookResponse>(`/books/${id}`);
}

/**
 * Create a new book
 */
export const createBook = async (book: NewBook) => {
	return post<NewBook, BookResponse>("/books", book);
}

/**
 * Update a book
 */
export const updateBook = async (id: number, book: PartialBook) => {
	return patch<PartialBook, BookResponse>(`/books/${id}`, book);
}

/**
 * Delete a book
 */
export const deleteBook = async (id: number) => {
	return del(`/books/${id}`);
}
