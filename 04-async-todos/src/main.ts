import { createTodo, deleteTodo, getTodos, updateTodo } from "./api";
import { Todo } from "./todo.types";
import "./assets/scss/app.scss";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;

// Local variable containing all the todos form the server
let todos: Todo[] = [];

// Get todos from API and render them
const getTodosAndRender = async () => {
	// Get todos from server and update local copy
	todos = await getTodos();

	// Render todos
	renderTodos();
}

// Render todos
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
				<span class="todo-title">${todo.title}</span>
				<div class="btn-group">
					<button class="btn btn-outline-primary btn-sm action-toggle">Toggle</button>
					<button class="btn btn-outline-warning btn-sm action-edit">Edit</button>
					<button class="btn btn-outline-danger btn-sm action-delete">Delete</button>
				</div>
			</li>`
		).join("");
}

// Listen for clicks in the todo-list
todosEl.addEventListener("click", async (e) => {
	// Get event target and type it as HTMLElement
	const target = e.target as HTMLElement;
	//      ^?

	// Check if we should toggle the todo
	if (target.classList.contains("action-toggle")) {
		// Find todo id
		const todoId = Number(target.closest("li")?.dataset.todoId);

		// Find the todo with the ID
		const todo = todos.find(todo => todo.id === todoId);
		if (!todo) {
			return;
		}

		// Update todo
		await updateTodo(todoId, {
			completed: !todo.completed,
		});

		// Get todos and re-render list
		getTodosAndRender();

	} else if (target.classList.contains("action-delete")) {
		// Find todo id
		const todoId = Number(target.closest("li")?.dataset.todoId);

		// Delete todo
		await deleteTodo(todoId);

		// Get todos and re-render list
		getTodosAndRender();
	}
});

// "Create a new Todo" form
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

	// POST todo to API
	await createTodo({
		title: newTodoTitleEl.value,
		completed: false,
	});

	// Get and re-render todos
	getTodosAndRender();
});

// Get the todos from API and render initial list of todos
getTodosAndRender();
