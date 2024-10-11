import { useState } from 'react';

interface NewTaskFormProps {
  addNewTask: (newTask: string) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      addNewTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoInput"
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className="todoBtn">
        Add Task
      </button>
    </form>
  );
};

export default NewTaskForm;
