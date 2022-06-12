import React from 'react';
import Todo from '../Models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

export default Todos;

/**
 * @FC - gives us the weay to define props type gernerically.
 * -stands for Functional component
 * -- FC is already, generic, we do not need to create generic function.
 * @Todo - we define our items as Todo object type, which is inside an array. an array full of our list (OBJECT type)
 */
