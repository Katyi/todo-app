import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders list of uncompleted tasks', () => {
  const tasks = ['Task 1', 'Task 2'];
  const { container } = render(
    <TaskList
      tasks={tasks}
      onTaskClick={() => {}}
      title={'Uncompleted Tasks'}
      isCompleted={false}
    />
  );
  const taskElements = container.querySelectorAll('.task');
  expect(taskElements.length).toBe(2);
  expect(taskElements.length).not.toBe(0);
});

test('renders list of completed tasks', () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3'];
  const { container } = render(
    <TaskList
      tasks={tasks}
      onTaskClick={() => {}}
      title={'Completed Tasks'}
      isCompleted={true}
    />
  );
  const taskElements = container.querySelectorAll('.task');
  expect(taskElements.length).toBe(3);
  expect(taskElements.length).not.toBe(0);
});

test;
