import './App.css';
import {useState} from 'react';

function App() {

	const [todo, setTodo] = useState({
		text: '',
	});
  
  	const [todosArray, setTodosArray] = useState([]);

	return (
		<div className="App">

			<h1>Todos</h1>
			
			<input 
				type="text" 
				value={todo.text} 
				onChange={(e) => setTodo({text: e.target.value})} />

			<button onClick={() => setTodosArray([...todosArray, todo])}>Add</button>
			
			<ul>
				{todosArray.map((todo, i) => (
					<div key={i}>{todo.text}</div>
				))}
			</ul>
		</div>
	);
}

export default App;
