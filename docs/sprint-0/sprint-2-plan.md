# Sprint 2 Plan

## Sprint Goal
Extend the application with delete, filtering, persistence, and task count features. Add application-level monitoring and logging. Apply process improvements identified in the Sprint 1 Retrospective.

## Sprint Duration
1 week (simulated)

## Selected User Stories

| ID   | Story                          | Points | Priority    |
|------|--------------------------------|--------|-------------|
| US-4 | Delete a Task                  | 2      | Should Have |
| US-5 | Filter Tasks by Status         | 3      | Should Have |
| US-6 | Persist Tasks in Local Storage | 3      | Could Have  |
| US-7 | Display Task Counts            | 2      | Could Have  |

**Total Story Points:** 10

## Tasks Breakdown

### US-4: Delete a Task
- Add a "Delete" button to `TaskItem`
- Implement `deleteTask` handler in `App.jsx`
- Write unit tests for delete functionality

### US-5: Filter Tasks by Status
- Create `TaskFilter` component with All / Pending / Completed buttons
- Implement filtering logic in `App.jsx`
- Write unit tests for filter behavior

### US-6: Persist Tasks in Local Storage
- Add `useEffect` to save tasks to `localStorage` on change
- Load tasks from `localStorage` on initial render
- Write unit tests for persistence logic

### US-7: Display Task Counts
- Create `TaskSummary` component showing total, pending, completed counts
- Write unit tests for summary display

### DevOps / Monitoring Tasks
- Add application-level logging utility
- Implement health check endpoint or component
- Apply Sprint 1 retrospective improvements

## Definition of Done
All items must satisfy the [Definition of Done](../sprint-0/definition-of-done.md) before being marked complete.
