import TaskItem from './TaskItem';

/**
 * TaskList component — renders a list of tasks or an empty-state message.
 *
 * @param {Object} props
 * @param {Array} props.tasks - Array of task objects to display.
 * @param {(id: number) => void} props.onToggle - Callback to toggle a task's completion.
 * @param {(id: number) => void} [props.onDelete] - Optional callback to delete a task.
 */
export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
