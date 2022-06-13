import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;
		//only use this ! if you know that the connection is established.

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}

		props.onAddToDo(enteredText);
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add todo</button>
		</form>
	);
};

export default NewTodo;

/**
 * Here in the FC we defined a FUNCTION type, which typescript has. Inside, we set void if nothing is returned from the function.
 */
