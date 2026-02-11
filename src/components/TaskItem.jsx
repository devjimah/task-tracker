/**
 * TaskItem component — renders a single task with checkbox toggle and optional delete button.
 *
 * @param {Object} props
 * @param {{ id: number, title: string, completed: boolean }} props.task - The task object.
 * @param {(id: number) => void} props.onToggle - Callback to toggle task completion.
 * @param {(id: number) => void} [props.onDelete] - Optional callback to delete the task.
 */
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'pending' : 'complete'}`}
        />
        <span className="task-title">{task.title}</span>
      </label>
      {onDelete && (
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete "${task.title}"`}
        >
          Delete
        </button>
      )}
    </li>
  );
}
