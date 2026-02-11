import { useState } from 'react';

/**
 * TaskForm component — renders an input field and "Add" button for creating new tasks.
 *
 * @param {Object} props
 * @param {(title: string) => void} props.onAddTask - Callback invoked with the trimmed title string.
 */
export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAddTask(trimmed);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Task title"
      />
      <button type="submit" className="btn btn-add">
        + Add
      </button>
    </form>
  );
}
