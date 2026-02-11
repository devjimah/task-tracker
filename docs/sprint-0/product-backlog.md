# Product Backlog

## Prioritization Method
Stories are prioritized using **MoSCoW** (Must have, Should have, Could have, Won't have) and estimated with **Fibonacci story points** (1, 2, 3, 5, 8).

---

### US-1: Add a New Task
**Priority:** Must Have | **Story Points:** 3

> *As a user, I want to add a new task with a title so that I can capture work I need to do.*

**Acceptance Criteria:**
- [ ] A text input field and an "Add" button are visible on the page.
- [ ] When a user types a title and clicks "Add", the task appears in the task list.
- [ ] The input field is cleared after a task is successfully added.
- [ ] An empty title cannot be submitted (validation prevents it).

---

### US-2: View Task List
**Priority:** Must Have | **Story Points:** 2

> *As a user, I want to see all my tasks in a list so that I can review what I need to do.*

**Acceptance Criteria:**
- [ ] All added tasks are displayed in a vertical list.
- [ ] Each task shows its title and current status (pending or completed).
- [ ] The most recently added task appears at the top of the list.
- [ ] If there are no tasks, a friendly empty-state message is shown.

---

### US-3: Mark a Task as Complete
**Priority:** Must Have | **Story Points:** 2

> *As a user, I want to mark a task as complete so that I can track my progress.*

**Acceptance Criteria:**
- [ ] Each task has a checkbox or toggle to mark it as complete.
- [ ] Completed tasks are visually distinguished (e.g., strikethrough text, muted color).
- [ ] A completed task can be toggled back to pending.

---

### US-4: Delete a Task
**Priority:** Should Have | **Story Points:** 2

> *As a user, I want to delete a task so that I can remove items I no longer need.*

**Acceptance Criteria:**
- [ ] Each task has a visible "Delete" button.
- [ ] Clicking "Delete" immediately removes the task from the list.
- [ ] The remaining tasks re-render correctly after deletion.

---

### US-5: Filter Tasks by Status
**Priority:** Should Have | **Story Points:** 3

> *As a user, I want to filter tasks by their status (All, Pending, Completed) so that I can focus on specific groups of tasks.*

**Acceptance Criteria:**
- [ ] Filter buttons for "All", "Pending", and "Completed" are displayed.
- [ ] Clicking a filter shows only the matching tasks.
- [ ] The currently active filter is visually highlighted.
- [ ] The filter defaults to "All" on page load.

---

### US-6: Persist Tasks in Local Storage
**Priority:** Could Have | **Story Points:** 3

> *As a user, I want my tasks to be saved in the browser so that they persist when I refresh the page.*

**Acceptance Criteria:**
- [ ] Tasks are saved to `localStorage` whenever the task list changes.
- [ ] On page load, tasks are loaded from `localStorage`.
- [ ] If no saved data exists, the app starts with an empty list.

---

### US-7: Display Task Counts
**Priority:** Could Have | **Story Points:** 2

> *As a user, I want to see how many tasks are pending and completed so that I can gauge my progress at a glance.*

**Acceptance Criteria:**
- [ ] A summary line displays the count of total, pending, and completed tasks.
- [ ] Counts update dynamically as tasks are added, completed, or deleted.

---

## Backlog Summary

| ID   | Story                        | Priority   | Points | Sprint   |
|------|------------------------------|------------|--------|----------|
| US-1 | Add a New Task               | Must Have  | 3      | Sprint 1 |
| US-2 | View Task List               | Must Have  | 2      | Sprint 1 |
| US-3 | Mark a Task as Complete      | Must Have  | 2      | Sprint 1 |
| US-4 | Delete a Task                | Should Have| 2      | Sprint 2 |
| US-5 | Filter Tasks by Status       | Should Have| 3      | Sprint 2 |
| US-6 | Persist Tasks in Local Storage| Could Have| 3      | Sprint 2 |
| US-7 | Display Task Counts          | Could Have | 2      | Sprint 2 |
