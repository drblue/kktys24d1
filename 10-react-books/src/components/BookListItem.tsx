import ListGroup from "react-bootstrap/ListGroup";
import { Book } from "../types/Book.types";

interface BookListItemProps {
	book: Book
}

const BookListItem = ({ book }: BookListItemProps) => {
	return (
		<ListGroup.Item
			className={''}
		>
			#{book.id} - {book.title} ({book.pages} pages)
		</ListGroup.Item>
	)
}

export default BookListItem;
