import { Author } from "../types/Author.types";
import { Book } from "../types/Book.types";
import { JSendResponse } from "../types/JSend.types";

export type AuthorResponse = JSendResponse<Author>;
export type BookResponse = JSendResponse<Book>;
export type BooksResponse = JSendResponse<Book[]>;
