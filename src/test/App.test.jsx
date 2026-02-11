import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App – Integration', () => {
  let store;

  beforeEach(() => {
    store = {};
    const mockStorage = {
      getItem: vi.fn((key) => store[key] ?? null),
      setItem: vi.fn((key, value) => { store[key] = String(value); }),
      removeItem: vi.fn((key) => { delete store[key]; }),
      clear: vi.fn(() => { store = {}; }),
      get length() { return Object.keys(store).length; },
      key: vi.fn((i) => Object.keys(store)[i] ?? null),
    };
    vi.stubGlobal('localStorage', mockStorage);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });
  it('adds a task and displays it in the list', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'Integration test task');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(screen.getByText('Integration test task')).toBeInTheDocument();
  });

  it('toggles a task between pending and completed', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'Toggle me');
    await user.click(screen.getByRole('button', { name: /add/i }));

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('shows empty state when no tasks exist', () => {
    render(<App />);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });

  it('deletes a task when Delete is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'Delete me');
    await user.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByText('Delete me')).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: /delete/i })[0]);
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
  });

  it('filters tasks by status', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Add two tasks
    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'Task A');
    await user.click(screen.getByRole('button', { name: /add/i }));
    await user.type(input, 'Task B');
    await user.click(screen.getByRole('button', { name: /add/i }));

    // Complete Task A
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[1]); // Task A is the second (added first)

    // Filter to Completed
    await user.click(screen.getByRole('button', { name: /completed/i }));
    expect(screen.getByText('Task A')).toBeInTheDocument();
    expect(screen.queryByText('Task B')).not.toBeInTheDocument();

    // Filter to Pending
    await user.click(screen.getByRole('button', { name: /pending/i }));
    expect(screen.queryByText('Task A')).not.toBeInTheDocument();
    expect(screen.getByText('Task B')).toBeInTheDocument();

    // Back to All
    await user.click(screen.getByRole('button', { name: /^all$/i }));
    expect(screen.getByText('Task A')).toBeInTheDocument();
    expect(screen.getByText('Task B')).toBeInTheDocument();
  });

  it('displays task summary counts', async () => {
    const user = userEvent.setup();
    render(<App />);

    // All three summary cards should show 0 initially
    const summaryCards = document.querySelectorAll('.summary-card .count');
    summaryCards.forEach((card) => expect(card.textContent).toBe('0'));

    const input = screen.getByPlaceholderText(/enter a new task/i);
    await user.type(input, 'Count task');
    await user.click(screen.getByRole('button', { name: /add/i }));

    const totalCard = document.querySelector('.summary-card.total .count');
    expect(totalCard.textContent).toBe('1');
  });
});
