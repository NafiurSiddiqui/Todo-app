import React, { useRef } from 'react';

const NewTodo = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;
		//only use this ! if you know that the connection is established.

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add todo</button>
		</form>
	);
};

export default NewTodo;
