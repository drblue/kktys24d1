import { useEffect, useRef, useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import { NewBook } from '../types/Book.types'

interface AddBookFormProps {
	onAddBook: (book: NewBook) => void
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAddBook }) => {
	const [newBookTitle, setNewBookTitle] = useState("");
	const [newBookPages, setNewBookPages] = useState(0);
	const [newBookPublisherId, setNewBookPublisherId] = useState(1);
	const newBookTitleRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		// Stop form from submitting
		e.preventDefault();

		// Create a new book
		const newBook = {
			title: newBookTitle,
			pages: newBookPages,
			publisherId: newBookPublisherId,
		}

		// Pass the new book to the parent
		onAddBook(newBook);

		// Clear input field
		setNewBookTitle("");
		setNewBookPages(0);
		setNewBookPublisherId(1);
	}

	// On component mount, focus on input field
	useEffect(() => {
		newBookTitleRef.current?.focus();
	}, []);

	return (
		<Form onSubmit={handleSubmit} className="mb-4">
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control
					ref={newBookTitleRef}
					type="text"
					placeholder="Enter the new title"
					onChange={e => setNewBookTitle(e.target.value)}
					value={newBookTitle}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter the number of pages"
					onChange={e => setNewBookPages(prevPages => parseInt(e.target.value) || prevPages)}
					value={newBookPages}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="publisherId">
				<Form.Label>Publisher ID</Form.Label>
				<InputGroup>
					<Form.Control
						type="number"
						placeholder="Enter the publisher ID"
						onChange={e => setNewBookPublisherId(prevId => parseInt(e.target.value) || prevId)}
						value={newBookPublisherId}
					/>
				</InputGroup>
			</Form.Group>

			<Button variant="primary" type="submit">
				Save
			</Button>
		</Form>
	)
}

export default AddBookForm
