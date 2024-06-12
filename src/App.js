import './App.css';
import {useState} from 'react';

function App() {

	const initialTodoState = {text: ''};
	const initalTodosArrayState = [];

	const [todo, setTodo] = useState(initialTodoState);
  	const [todosArray, setTodosArray] = useState(initalTodosArrayState);

	const handleAdd = () => {
		setTodosArray([...todosArray, todo]);
		setTodo(initialTodoState);
	}

	const handleDeleteAll = () => {
		setTodosArray(initalTodosArrayState);
	}

	return (
		<div className="App">

			<h1>Todos</h1>
			
			<input 
				data-testid='todo-input'
				type="text" 
				value={todo.text} 
				onChange={(e) => setTodo({text: e.target.value})} />

			<button onClick={handleAdd}>Add</button>
			
			<ul>
				{todosArray.map((todo, i) => (
					<div key={i}>{todo.text}</div>
				))}
			</ul>

			<button onClick={handleDeleteAll}>Delete all</button>
		</div>
	);
}

export default App;
