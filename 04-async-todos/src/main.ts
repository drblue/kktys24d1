import { getTodos } from "./api";
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

// Save todos to localStorage
const saveTodos = () => {
	const json = JSON.stringify(todos);
	localStorage.setItem("todos", json);
}

// "Create a new Todo" form
newTodoFormEl.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

	// Find the highest ID and add 1
	const todoIds = todos.map(todo => todo.id); // [1, 2, 3]
	const maxId = Math.max( 0, ...todoIds );   // Math.max( 1, 2, 3 )

	// Create the todo and push it into the array 🫸🏻
	todos.push({
		id: maxId + 1,
		title: newTodoTitleEl.value,
		completed: false,
	});

	// Save dem todos
	saveTodos();

	// Re-render todos
	renderTodos();
});

// Get the todos from API and render initial list of todos
getTodosAndRender();
