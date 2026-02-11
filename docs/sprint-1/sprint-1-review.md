# Sprint 1 — Review

## Sprint Goal
> Deliver core task management functionality — add, view, and toggle tasks. Establish the CI/CD pipeline and testing framework.

## Completed User Stories

### US-1: Add a New Task ✅
- **Delivered:** `TaskForm` component with controlled input and submit handler.
- **Acceptance Criteria Met:**
  - Text input and "Add" button are visible.
  - Typing a title and clicking "Add" appends the task to the list.
  - Input clears after successful submission.
  - Empty / whitespace-only titles are rejected (validated).

### US-2: View Task List ✅
- **Delivered:** `TaskList` and `TaskItem` components.
- **Acceptance Criteria Met:**
  - All tasks render in a vertical list.
  - Each task shows its title and status (checkbox).
  - Newest tasks appear at the top.
  - Empty-state message displayed when no tasks exist.

### US-3: Mark a Task as Complete ✅
- **Delivered:** Toggle functionality on `TaskItem` checkbox.
- **Acceptance Criteria Met:**
  - Checkbox toggles completion state.
  - Completed tasks display with strikethrough styling.
  - Tasks can be toggled back to pending.

## DevOps Deliverables

| Artifact              | Status |
|-----------------------|--------|
| GitHub Actions CI pipeline (`ci.yml`) | ✅ Configured (lint → test → build) |
| Vitest test framework | ✅ Set up with jsdom + React Testing Library |
| Unit tests            | ✅ 16 tests across 4 test files — all passing |
| ESLint linting        | ✅ Integrated into pipeline |

## Test Results Summary
```
 Test Files  4 passed (4)
      Tests  16 passed (16)
```

**Test files:**
- `TaskForm.test.jsx` — 5 tests (input rendering, submission, validation)
- `TaskList.test.jsx` — 3 tests (empty state, rendering)
- `TaskItem.test.jsx` — 5 tests (rendering, checkbox, toggle, CSS class)
- `App.test.jsx` — 3 tests (integration: add, toggle, empty state)

## Sprint Velocity
- **Planned:** 7 story points (3 stories)
- **Completed:** 7 story points (3 stories)
- **Velocity:** 7 points
