import { render, screen, fireEvent } from '@testing-library/react';
import NewTaskForm from '../components/NewTaskForm';

test('renders input field', () => {
  render(<NewTaskForm addNewTask={() => {}} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('calls addNewTask when form is submitted', () => {
  const mockAddNewTask = vi.fn();
  render(<NewTaskForm addNewTask={mockAddNewTask} />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'New task' } });
  fireEvent.submit(inputElement);
  expect(mockAddNewTask).toHaveBeenCalledWith('New task');
});
