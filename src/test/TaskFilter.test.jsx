import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskFilter from '../components/TaskFilter';

describe('TaskFilter', () => {
  it('renders All, Pending, and Completed filter buttons', () => {
    render(<TaskFilter current="all" onFilterChange={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('applies the active class to the current filter', () => {
    render(<TaskFilter current="pending" onFilterChange={() => {}} />);
    expect(screen.getByText('Pending')).toHaveClass('active');
    expect(screen.getByText('All')).not.toHaveClass('active');
    expect(screen.getByText('Completed')).not.toHaveClass('active');
  });

  it('calls onFilterChange when a filter button is clicked', async () => {
    const onFilterChange = vi.fn();
    const user = userEvent.setup();
    render(<TaskFilter current="all" onFilterChange={onFilterChange} />);

    await user.click(screen.getByText('Completed'));
    expect(onFilterChange).toHaveBeenCalledWith('completed');
  });

  it('sets aria-pressed correctly for the active filter', () => {
    render(<TaskFilter current="completed" onFilterChange={() => {}} />);
    expect(screen.getByText('Completed')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('All')).toHaveAttribute('aria-pressed', 'false');
  });
});
