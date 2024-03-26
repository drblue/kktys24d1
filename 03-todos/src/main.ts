import "./assets/scss/app.scss";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const todos: Todo[] = [
	// { id: 1, title: "Learn about Everyday Types", completed: true },
	// { id: 2, title: "Learn about DOM Manipulation", completed: true },
	// { id: 3, title: "Learn about typing fetch/axios responses", completed: false },
];

// Render todos
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}">
				${todo.title}
			</li>`
		).join("");
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

	// Re-render todos
	renderTodos();
});

// Render initial list of todos
renderTodos();
