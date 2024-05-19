import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Success from "../components/alerts/Success";
import Warning from "../components/alerts/Warning";
import AddBookForm from "../components/AddBookForm";
import BookListItem from "../components/BookListItem";
import useBooks from "../hooks/useBooks";
import {
	createBook as BooksAPI_createBook,
} from "../services/BooksAPI";
import { NewBook } from "../types/Book.types";

const BooksPage = () => {
	const { data: books, isError, isLoading, refetch } = useBooks();

	// Create a new book in the API
	const addBook = async (book: NewBook) => {
		await BooksAPI_createBook(book);

		// Get books
		refetch();
	}

	console.log("books:", books);

	return (
		<>
			<h1 className="mb-3">Books</h1>

			<AddBookForm onAddBook={addBook} />

			{isError && <Warning heading="Bollocks!">Something went terribly wrong, sorry about that</Warning>}

			{isLoading && <Spinner />}

			{books && books.data.length > 0 && (
				<ListGroup className="booklist">
					{books.data.map(book => (
						<BookListItem
							key={book.id}
							book={book}
						/>
					))}
				</ListGroup>
			)}
		</>
	)
}

export default BooksPage
