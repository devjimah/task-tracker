import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from '../components/TaskForm';

describe('TaskForm', () => {
  it('renders an input and an Add button', () => {
    render(<TaskForm onAddTask={() => {}} />);
    expect(screen.getByPlaceholderText(/enter a new task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('calls onAddTask with the trimmed title when submitted', async () => {
    const onAddTask = vi.fn();
    const user = userEvent.setup();
    render(<TaskForm onAddTask={onAddTask} />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, '  Buy groceries  ');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(onAddTask).toHaveBeenCalledWith('Buy groceries');
  });

  it('clears the input after successful submission', async () => {
    const user = userEvent.setup();
    render(<TaskForm onAddTask={() => {}} />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'New task');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(input).toHaveValue('');
  });

  it('does not call onAddTask when the input is empty', async () => {
    const onAddTask = vi.fn();
    const user = userEvent.setup();
    render(<TaskForm onAddTask={onAddTask} />);

    await user.click(screen.getByRole('button', { name: /add/i }));
    expect(onAddTask).not.toHaveBeenCalled();
  });

  it('does not call onAddTask when the input is only whitespace', async () => {
    const onAddTask = vi.fn();
    const user = userEvent.setup();
    render(<TaskForm onAddTask={onAddTask} />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, '   ');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(onAddTask).not.toHaveBeenCalled();
  });
});
