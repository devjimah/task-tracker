/**
 * TaskSummary component — displays counts of total, pending, and completed tasks.
 *
 * @param {Object} props
 * @param {Array} props.tasks - The full array of task objects.
 */
export default function TaskSummary({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="task-summary">
      <span>Total: {total}</span> |
      <span>Pending: {pending}</span> |
      <span>Completed: {completed}</span>
    </div>
  );
}
