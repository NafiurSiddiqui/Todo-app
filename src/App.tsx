import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './Models/todo';

function App() {
	const [todos, setToDos] = useState<Todo[]>([]);

	// const todos = [new Todo('learn react'), new Todo('Build Projects')];

	const addToDoHandler = (todoText: string) => {
		const newToDo = new Todo(todoText);

		setToDos((prevTodo) => {
			return prevTodo.concat(newToDo);
		});
	};

	//deleting item

	const removeTodoHandler = (todoId: string) => {
		setToDos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};
	return (
		<div className="App">
			<NewTodo onAddToDo={addToDoHandler} />
			<Todos items={todos} onRemoveTodo={removeTodoHandler} />
		</div>
	);
}

export default App;
