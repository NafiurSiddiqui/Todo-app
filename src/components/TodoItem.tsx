import React from 'react';
import classes from './Todoitem.module.css';

const TodoItem: React.FC<{
	text: string;
	onRemoveTodo: () => void;
}> = (props) => {
	//if list item is clicked

	//get the id of the recent list item

	//run a loop and see which one matches the id

	//return a new array without the selected id

	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

export default TodoItem;

/**
 * Any props we have need to have explicit type set.
 */
