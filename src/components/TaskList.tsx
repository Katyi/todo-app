import Task from './Task';

interface TaskListProps {
  tasks: string[];
  title: string;
  onTaskClick: (task: string) => void;
  isCompleted: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  title,
  onTaskClick,
  isCompleted,
}) => {
  return (
    <div className={`${title.split(' ')[0]}`}>
      <h2 className="title_2">{title}</h2>
      {tasks.map((task) => (
        <Task
          key={task}
          task={task}
          isCompleted={isCompleted}
          onTaskClick={onTaskClick}
        />
      ))}
    </div>
  );
};

export default TaskList;
