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

	return (
		<>
			<h1 className="mb-3">Books</h1>

			<AddBookForm onAddBook={addBook} />

			{isError && <Warning heading="Bollocks!">Something went terribly wrong, sorry about that</Warning>}

			{isLoading && <Spinner />}

			{books && books.length > 0 && (
				<>
					<ListGroup className="booklist">
						{books.map(book => (
							<BookListItem
								key={book.id}
								book={book}
							/>
						))}
					</ListGroup>

					<Warning heading="Such books">
						<p>Very many</p>
						<p>Much stress</p>
					</Warning>
				</>
			)}

			{books && books.length === 0 && <Success>Great success! 👍🏻</Success>}

		</>
	)
}

export default BooksPage
