import App from '../App';
import { fireEvent, render, screen } from '@testing-library/react';

describe('simple working test', () => {
  it('the titles are visible', () => {
    render(<App />);
    expect(screen.getByText(`YOUR TODO'S`)).toBeInTheDocument();
    expect(screen.getByText('Uncompleted Tasks')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks')).toBeInTheDocument();
  });

  it('adds new task to uncompleted list', () => {
    const { container } = render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    const uncompletedListElement = container.querySelector('.Uncompleted');
    fireEvent.submit(inputElement);
    const taskElement = screen.queryByText('New Task');
    expect(uncompletedListElement).toContainElement(taskElement);
  });

  it('does not add new task to completed list', () => {
    const { container } = render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    const uncompletedListElement = container.querySelector('.Completed');
    fireEvent.submit(inputElement);
    const taskElement = screen.queryByText('New Task');
    expect(uncompletedListElement).not.toContainElement(taskElement);
  });
});
