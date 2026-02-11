import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

const mockTasks = [
  { id: 1, title: 'Task A', completed: false },
  { id: 2, title: 'Task B', completed: true },
];

describe('TaskList', () => {
  it('renders an empty-state message when there are no tasks', () => {
    render(<TaskList tasks={[]} onToggle={() => {}} />);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });

  it('renders all tasks when given a list', () => {
    render(<TaskList tasks={mockTasks} onToggle={() => {}} />);
    expect(screen.getByText('Task A')).toBeInTheDocument();
    expect(screen.getByText('Task B')).toBeInTheDocument();
  });

  it('does not show empty-state message when tasks exist', () => {
    render(<TaskList tasks={mockTasks} onToggle={() => {}} />);
    expect(screen.queryByText(/no tasks yet/i)).not.toBeInTheDocument();
  });
});
