class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}

export default Todo;

/**
 * WE created TS file not TSX, since we are just writing plain TS here.
 * Here we wanna create how our todo looks like
 * In TS we dont need constructor, we just simily define our properties that should be initiated
 * We can also use our className as a type
 */
