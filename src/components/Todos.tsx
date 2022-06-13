import React from 'react';
import classes from './Todos.module.css';

import Todo from '../Models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;

/**
 * @FC - gives us the weay to define props type gernerically.
 * -stands for Functional component
 * -- FC is already, generic, we do not need to create generic function.
 * -- we always set Object here because props are always object with key:value and Children.
 * @Todo - we define our items as Todo object type, which is inside an array. an array full of our list (OBJECT type)
 */
