import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from '../components/TaskItem';

describe('TaskItem', () => {
  const pendingTask = { id: 1, title: 'Write tests', completed: false };
  const completedTask = { id: 2, title: 'Setup CI', completed: true };

  it('renders the task title', () => {
    render(
      <TaskItem task={pendingTask} onToggle={() => {}} />,
      { wrapper: ({ children }) => <ul>{children}</ul> }
    );
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  it('renders a checkbox that is unchecked for pending tasks', () => {
    render(
      <TaskItem task={pendingTask} onToggle={() => {}} />,
      { wrapper: ({ children }) => <ul>{children}</ul> }
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders a checkbox that is checked for completed tasks', () => {
    render(
      <TaskItem task={completedTask} onToggle={() => {}} />,
      { wrapper: ({ children }) => <ul>{children}</ul> }
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('calls onToggle with the task id when checkbox is clicked', async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(
      <TaskItem task={pendingTask} onToggle={onToggle} />,
      { wrapper: ({ children }) => <ul>{children}</ul> }
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it('applies the completed CSS class when task is completed', () => {
    const { container } = render(
      <TaskItem task={completedTask} onToggle={() => {}} />,
      { wrapper: ({ children }) => <ul>{children}</ul> }
    );
    expect(container.querySelector('.task-item')).toHaveClass('completed');
  });
});
