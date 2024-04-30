import { useQuery } from "@tanstack/react-query";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Success from "../components/alerts/Success";
import Warning from "../components/alerts/Warning";
import AddTodoForm from "../components/AddTodoForm";
import TodoListItem from "../components/TodoListItem";
import {
	createTodo as TodosAPI_createTodo,
	getTodos as TodosAPI_getTodos,
} from "../services/TodosAPI";
import { NewTodo } from "../types/Todo.types";

const TodosPage = () => {
	const { data: todos, isLoading } = useQuery({
		queryKey: ["todos"],
		queryFn: TodosAPI_getTodos,
	});

	// Create a new todo in the API
	const addTodo = async (todo: NewTodo) => {
		await TodosAPI_createTodo(todo);

		// Get todos
		// getTodos();
	}

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<AddTodoForm onAddTodo={addTodo} />

			{isLoading && <Spinner />}

			{todos && todos.length > 0 && (
				<>
					<ListGroup className="todolist">
						{todos.map(todo => (
							<TodoListItem
								key={todo.id}
								todo={todo}
							/>
						))}
					</ListGroup>

					<Warning heading="Such todos">
						<p>Very many</p>
						<p>Much stress</p>
					</Warning>
				</>
			)}

			{todos && todos.length === 0 && <Success>Great success! 👍🏻</Success>}

		</>
	)
}

export default TodosPage
