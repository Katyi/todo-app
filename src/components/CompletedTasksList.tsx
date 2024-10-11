import TaskList from './TaskList';

interface CompletedTasksListProps {
  tasks: string[];
  markTaskAsUncompleted: (task: string) => void;
}

const CompletedTasksList: React.FC<CompletedTasksListProps> = ({
  tasks,
  markTaskAsUncompleted,
}) => {
  return (
    <TaskList
      tasks={tasks}
      title="Completed Tasks"
      onTaskClick={markTaskAsUncompleted}
      isCompleted={true}
    />
  );
};

export default CompletedTasksList;
