interface TaskProps {
  task: string;
  isCompleted: boolean;
  onTaskClick: (task: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, isCompleted, onTaskClick }) => {
  return (
    <div onClick={() => onTaskClick(task)} className="task">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
        className="taskInput"
      />
      <div>{task}</div>
    </div>
  );
};

export default Task;
