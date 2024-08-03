import axios from "axios";

export type Author = {
	id: number;
	name: string;
	birthyear: number;
};

export type Book = {
	id: number;
	title: string;
	pages: number;
	publisherId: number;
};

type ValidationError = {
	path: string;
	msg: string;
}

type JSendErrorResponse = {
	status: "error";
	message: string;
}

type JSendFailResponse = {
	status: "fail";
	data: ValidationError[];
}

/* Generic Type (Alias) */
type JSendSuccessResponse<T> = {
	status: "success";
	data: T;
}

type JSendResponse<T> = JSendSuccessResponse<T> | JSendErrorResponse | JSendFailResponse;


export type AuthorResponse = JSendResponse<Author>;
export type BookResponse = JSendResponse<Book>;


const successResponse: BookResponse = {
	status: "success",
	data: {
		id: 1,
		title: "Title 1",
		pages: 1,
		publisherId: 1
	}
};
successResponse.data;

const errorResponse: BookResponse = {
	status: "error",
	message: "Could not reach database server"
}

const failResponse: BookResponse = {
	status: "fail",
	data: [
		{ path: "title", msg: "has to be at least 3 chars" },
	]
}

/*
const logResponse = (response: BookResponse) => {
	if (!response.data) {
		// it was a error response
		return false;
	}
	if (Array.isArray(response.data)) {
		// it was a fail response
		return false;
	}

	console.log("Book title:", response.data.title);
}
*/

const createBook = async () => {
	const res = await axios.post<BookResponse>(
		"http://localhost:3000/books",
		{ title: "My book", pages: 1, publisherId: 1 }
	);
	return res.data;
}

const createBookResult = await createBook();

// was it an error?
if (createBookResult.status === "error") {
	console.log(createBookResult.message);
//           ^?
} else if (createBookResult.status === "fail") {
	console.log(createBookResult.data);
//           ^?
} else {
	console.log(createBookResult.data);
//            ^?
}
