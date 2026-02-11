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
    return (
      <div className="empty-state">
        <span className="empty-icon">&#128203;</span>
        <span className="empty-text">No tasks yet</span>
        <span className="empty-hint">Add your first task above to get started!</span>
      </div>
    );
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
