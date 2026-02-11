import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskSummary from '../components/TaskSummary';

describe('TaskSummary', () => {
  it('shows zero counts when there are no tasks', () => {
    render(<TaskSummary tasks={[]} />);
    expect(screen.getByText(/Total: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Pending: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 0/)).toBeInTheDocument();
  });

  it('shows correct counts for a mix of pending and completed tasks', () => {
    const tasks = [
      { id: 1, title: 'A', completed: false },
      { id: 2, title: 'B', completed: true },
      { id: 3, title: 'C', completed: false },
    ];
    render(<TaskSummary tasks={tasks} />);
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Pending: 2/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
  });

  it('updates counts dynamically when tasks change', () => {
    const { rerender } = render(
      <TaskSummary tasks={[{ id: 1, title: 'A', completed: false }]} />
    );
    expect(screen.getByText(/Total: 1/)).toBeInTheDocument();

    rerender(
      <TaskSummary
        tasks={[
          { id: 1, title: 'A', completed: true },
          { id: 2, title: 'B', completed: false },
        ]}
      />
    );
    expect(screen.getByText(/Total: 2/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
  });
});
