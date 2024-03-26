import "./assets/scss/app.scss";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

// Get JSON of Todos from localStorage
const json = localStorage.getItem("todos") ?? "[]";  // null coalesing operator FTW
//     ^?

// Parse JSON into an array of Todo objects
const todos: Todo[] = JSON.parse(json) as Todo[];

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
	// Convert todos-array to JSON
	const json = JSON.stringify(todos);

	// Save JSON to localStorage
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

// Render initial list of todos
renderTodos();
