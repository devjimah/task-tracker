# Sprint 1 Plan

## Sprint Goal
Deliver the core task management functionality — users should be able to add tasks, view them in a list, and mark them as complete. Establish the CI/CD pipeline and testing framework.

## Sprint Duration
1 week (simulated)

## Selected User Stories

| ID   | Story                   | Points | Priority  |
|------|-------------------------|--------|-----------|
| US-1 | Add a New Task          | 3      | Must Have |
| US-2 | View Task List          | 2      | Must Have |
| US-3 | Mark a Task as Complete | 2      | Must Have |

**Total Story Points:** 7

## Tasks Breakdown

### US-1: Add a New Task
- Create `TaskForm` component with input field and submit button
- Implement `addTask` handler in `App.jsx`
- Add input validation (prevent empty submissions)
- Write unit tests for `TaskForm`

### US-2: View Task List
- Create `TaskList` component to render tasks
- Create `TaskItem` component for individual task display
- Show empty-state message when no tasks exist
- Write unit tests for `TaskList`

### US-3: Mark a Task as Complete
- Add toggle functionality to `TaskItem`
- Apply visual styling for completed tasks (strikethrough)
- Write unit tests for toggle behavior

### DevOps Tasks
- Set up Vitest as the testing framework
- Configure GitHub Actions CI pipeline (lint → test → build)
- Create initial test suite

## Definition of Done
All items must satisfy the [Definition of Done](./definition-of-done.md) before being marked complete.
