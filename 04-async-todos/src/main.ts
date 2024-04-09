import { createTodo, getTodos } from "./api";
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
		.map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}">
				${todo.title}
			</li>`
		).join("");
}

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
