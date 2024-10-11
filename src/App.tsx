import { useState } from 'react';
import CompletedTasksList from './components/CompletedTasksList';
import NewTaskForm from './components/NewTaskForm';
import UncompletedTasksList from './components/UncompletedTasksList';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const addNewTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  const markTaskAsCompleted = (task: string) => {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };

  const markTaskAsUncompleted = (task: string) => {
    setCompletedTasks(completedTasks.filter((t) => t !== task));
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <h1 className="title_1">YOUR TODO'S</h1>
      <NewTaskForm addNewTask={addNewTask} />

      <UncompletedTasksList
        tasks={tasks}
        markTaskAsCompleted={markTaskAsCompleted}
      />

      <CompletedTasksList
        tasks={completedTasks}
        markTaskAsUncompleted={markTaskAsUncompleted}
      />
    </div>
  );
}

export default App;
