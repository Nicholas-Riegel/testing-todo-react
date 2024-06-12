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

	fireEvent.change(input, { target: { value: 'Hello, World!' } });

	expect(input.value).toBe('Hello, World!');
})