import { useEffect, useRef, useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import { NewTodo } from '../types/Todo.types'

interface AddTodoFormProps {
	onAddTodo: (todo: NewTodo) => void
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
	const [newTodoTitle, setNewTodoTitle] = useState("");
	const newTodoTitleRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		// Stop form from submitting
		e.preventDefault();

		// Create a new todo
		const newTodo = {
			title: newTodoTitle,
			completed: false,
		}

		// Pass the new todo to the parent
		onAddTodo(newTodo);

		// Clear input field
		setNewTodoTitle("");
	}

	// On component mount, focus on input field
	useEffect(() => {
		newTodoTitleRef.current?.focus();
	}, []);

	return (
		<Form onSubmit={handleSubmit} className="mb-4">
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="What you got to do?"
					aria-label="Title of the new todo"
					onChange={e => setNewTodoTitle(e.target.value)}
					ref={newTodoTitleRef}
					value={newTodoTitle}
				/>

				<Button
					disabled={!newTodoTitle}
					type="submit"
					variant="success"
				>Create</Button>
			</InputGroup>
		</Form>
	)
}

export default AddTodoForm
