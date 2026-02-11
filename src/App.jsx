import { useState, useEffect, useRef } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskSummary from './components/TaskSummary';
import HealthIndicator from './components/HealthIndicator';
import { logger } from './utils/logger';
import './App.css';

const STORAGE_KEY = 'task-tracker-tasks';

/**
 * Safely checks whether localStorage is available.
 * @returns {boolean}
 */
function isStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads tasks from localStorage, returning an empty array if none exist.
 * @returns {{ tasks: Array, nextId: number }}
 */
function loadFromStorage() {
  if (!isStorageAvailable()) return { tasks: [], nextId: 1 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const tasks = JSON.parse(raw);
      const maxId = tasks.reduce((max, t) => Math.max(max, t.id), 0);
      logger.info(`Loaded ${tasks.length} tasks from localStorage`);
      return { tasks, nextId: maxId + 1 };
    }
  } catch (err) {
    logger.error('Failed to load tasks from localStorage', err);
  }
  return { tasks: [], nextId: 1 };
}

/**
 * App — root component for the Task Tracker application.
 * Manages all task state and delegates to child components.
 */
function App() {
  const initialRef = useRef(null);
  if (initialRef.current === null) {
    initialRef.current = loadFromStorage();
  }
  const [tasks, setTasks] = useState(() => initialRef.current.tasks);
  const nextId = useRef(initialRef.current.nextId);
  const [filter, setFilter] = useState('all');

  // US-6: Persist tasks to localStorage whenever they change
  useEffect(() => {
    if (!isStorageAvailable()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      logger.info(`Saved ${tasks.length} tasks to localStorage`);
    } catch (err) {
      logger.error('Failed to save tasks to localStorage', err);
    }
  }, [tasks]);

  /** US-1: Add a new task with the given title */
  const addTask = (title) => {
    const newTask = { id: nextId.current++, title, completed: false };
    setTasks((prev) => [newTask, ...prev]);
    logger.info(`Task added: "${title}" (id: ${newTask.id})`);
  };

  /** US-3: Toggle a task between pending and completed */
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    logger.info(`Task toggled: id ${id}`);
  };

  /** US-4: Delete a task by its id */
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    logger.info(`Task deleted: id ${id}`);
  };

  /** US-5: Filter tasks by status */
  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pending') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <span className="header-icon">&#9745;</span>
          Task Tracker
        </h1>
        <p className="app-subtitle">Stay organized. Get things done.</p>
      </header>
      <TaskSummary tasks={tasks} />
      <TaskForm onAddTask={addTask} />
      <TaskFilter current={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <HealthIndicator />
    </div>
  );
}

export default App;
