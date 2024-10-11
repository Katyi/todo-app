import TaskList from './TaskList';

interface UncompletedTasksListProps {
  tasks: string[];
  markTaskAsCompleted: (task: string) => void;
}

const UncompletedTasksList: React.FC<UncompletedTasksListProps> = ({
  tasks,
  markTaskAsCompleted,
}) => {
  return (
    <TaskList
      tasks={tasks}
      title="Uncompleted Tasks"
      onTaskClick={markTaskAsCompleted}
      isCompleted={false}
    />
  );
};

export default UncompletedTasksList;
