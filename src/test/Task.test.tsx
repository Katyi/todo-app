import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../components/Task';

test('renders task title', () => {
  render(<Task task="Task 1" isCompleted={false} onTaskClick={() => {}} />);
  const taskTitleElement = screen.getByText('Task 1');
  expect(taskTitleElement).toBeInTheDocument();
});

test('renders checkbox', () => {
  render(<Task task="Task 1" isCompleted={true} onTaskClick={() => {}} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});

test('clicking checkbox changes isCompleted', () => {
  const handleChange = vi.fn();
  render(<Task task="Task 1" isCompleted={false} onTaskClick={handleChange} />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeInTheDocument();
  expect(handleChange).toHaveBeenCalledWith('Task 1');
  expect(handleChange).toHaveBeenCalledTimes(1);
});
