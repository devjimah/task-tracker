import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskSummary from '../components/TaskSummary';

describe('TaskSummary', () => {
  it('shows zero counts when there are no tasks', () => {
    render(<TaskSummary tasks={[]} />);
    const counts = screen.getAllByText('0');
    expect(counts).toHaveLength(3);
  });

  it('shows correct counts for a mix of pending and completed tasks', () => {
    const tasks = [
      { id: 1, title: 'A', completed: false },
      { id: 2, title: 'B', completed: true },
      { id: 3, title: 'C', completed: false },
    ];
    render(<TaskSummary tasks={tasks} />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('updates counts dynamically when tasks change', () => {
    const { rerender, container } = render(
      <TaskSummary tasks={[{ id: 1, title: 'A', completed: false }]} />
    );
    expect(container.querySelector('.summary-card.total .count').textContent).toBe('1');

    rerender(
      <TaskSummary
        tasks={[
          { id: 1, title: 'A', completed: true },
          { id: 2, title: 'B', completed: false },
        ]}
      />
    );
    expect(container.querySelector('.summary-card.total .count').textContent).toBe('2');
    expect(container.querySelector('.summary-card.done .count').textContent).toBe('1');
  });
});
