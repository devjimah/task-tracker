/**
 * TaskFilter component — displays filter buttons (All, Pending, Completed)
 * to allow the user to view tasks by status.
 *
 * @param {Object} props
 * @param {'all' | 'pending' | 'completed'} props.current - The currently active filter.
 * @param {(filter: string) => void} props.onFilterChange - Callback when a filter is selected.
 */
export default function TaskFilter({ current, onFilterChange }) {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={`btn btn-filter ${current === f ? 'active' : ''}`}
          onClick={() => onFilterChange(f)}
          aria-pressed={current === f}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
