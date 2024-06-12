import './App.css';
import {useState} from 'react';

function App() {

	const initialTodoState = {text: '', completed: false};
	const initalTodosArrayState = [];

	const [todo, setTodo] = useState(initialTodoState);
  	const [todosArray, setTodosArray] = useState(initalTodosArrayState);

	const handleAdd = () => {
		setTodosArray([...todosArray, todo]);
		setTodo(initialTodoState);
	}

	const handleDelete = (todo) => {
		setTodosArray(todosArray.filter((x) => x !== todo));
	}

	return (
		<div id="todos-wrapper">

			<h1>Todos</h1>
			
			<div id='todos-container'>
				{todosArray.map((item, i) => (
					<div key={i} id='todo'>
						<input
							type="checkbox"
							checked={item.completed}
							onChange={(e) => setTodosArray(todosArray.map((x) => x === item ? {text: item.text, completed: e.target.checked} : x))}
						/>
						<span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>
						<button onClick={()=>handleDelete(item)}>Delete</button>
					</div>
				))}

				<div id='add-todo-container'>
					<input 
						data-testid='todo-input'
						type="text" 
						value={todo.text} 
						onChange={(e) => setTodo({text: e.target.value})} />

					<button onClick={handleAdd}>Add</button>
				</div>
			</div>
		</div>
	);
}

export default App;
