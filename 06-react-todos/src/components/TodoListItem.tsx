import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../types/Todo.types";

interface TodoListItemProps {
	todo: Todo
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
	return (
		<ListGroup.Item
			className={''}
		>
			{todo.title}
		</ListGroup.Item>
	)
}

export default TodoListItem;
