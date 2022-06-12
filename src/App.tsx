import Todos from './components/Todos';
import Todo from './Models/todo';
function App() {
	const todos = [new Todo('learn react'), new Todo('Build Projects')];
	return (
		<div className="App">
			<Todos items={todos} />
		</div>
	);
}

export default App;
