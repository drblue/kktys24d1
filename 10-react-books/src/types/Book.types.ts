export type Book = {
	id: number;
	title: string;
	pages: number;
	publisherId: number;
};

export type PartialBook = Partial<Book>;
export type NewBook = Omit<Book, "id">;
