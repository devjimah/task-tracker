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
    <div className="summary-grid">
      <div className="summary-card total">
        <span className="count">{total}</span>
        <span className="label">Total</span>
      </div>
      <div className="summary-card pending">
        <span className="count">{pending}</span>
        <span className="label">Pending</span>
      </div>
      <div className="summary-card done">
        <span className="count">{completed}</span>
        <span className="label">Done</span>
      </div>
    </div>
  );
}
