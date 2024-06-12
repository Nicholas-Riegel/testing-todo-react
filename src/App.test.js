import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('page renders "Todos"', () => {
	
	render(<App />);
	
	const text = screen.getByText('Todos');
	
	expect(text).toBeInTheDocument();
});

test('todo input renders text input', () => {
	
	render(<App />);

	const input = screen.getByTestId('todo-input');

	fireEvent.change(input, { target: { value: 'Get milk' } });

	expect(input.value).toBe('Get milk');
})

test('page renders todo when "Add" button is pressed', () => {
	
	render(<App />);

	// get the add button
	const Addbutton = screen.getByText('Add');

	// check that todo isn't there initially
  	let todoText = screen.queryByText('Get milk');
	expect(todoText).toBeNull();

	// add a todo
	const input = screen.getByTestId('todo-input');
	fireEvent.change(input, { target: { value: 'Get milk' } });
	expect(input.value).toBe('Get milk');
	fireEvent.click(Addbutton); //add this line
	
	// check that todo is there
	todoText = screen.queryByText('Get milk');
	expect(todoText).toBeInTheDocument();
})

test('page deletes a todo when delete button is pressed', () => {
	
	render(<App />);

	// get the add button
	const Addbutton = screen.getByText('Add');

	// add a todo
	const input = screen.getByTestId('todo-input');
	fireEvent.change(input, { target: { value: 'Get milk' } });
	expect(input.value).toBe('Get milk');
	fireEvent.click(Addbutton); //add this line
	
	// check that todo is there
	let todoText = screen.queryByText('Get milk');
	expect(todoText).toBeInTheDocument();

	// get the delete button
	const deleteButton = screen.getByText('Delete');

	// delete the todo
	fireEvent.click(deleteButton);

	// check that todo is gone
	todoText = screen.queryByText('Get milk');
	expect(todoText).toBeNull();
})

test('todo is crossed out when completed button is pressed', () => {
	
	render(<App />);

	// get the add button
	const Addbutton = screen.getByText('Add');

	// add a todo
	const input = screen.getByTestId('todo-input');
	fireEvent.change(input, { target: { value: 'Get milk' } });
	expect(input.value).toBe('Get milk');
	fireEvent.click(Addbutton); //add this line
	
	// check that todo is there
	let todoText = screen.queryByText('Get milk');
	expect(todoText).toBeInTheDocument();

	// get the checkbox
	const completeCheckbox = screen.getByRole('checkbox');

	// complete the todo
	fireEvent.click(completeCheckbox);

	// check that todo is crossed out
	todoText = screen.queryByText('Get milk');
	expect(todoText).toHaveStyle('text-decoration: line-through');

});