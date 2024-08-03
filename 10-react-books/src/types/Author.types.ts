export type Author = {
	id: number;
	name: string;
	birthyear: number;
};

export type PartialAuthor = Partial<Author>;
export type NewAuthor = Omit<Author, "id">;
