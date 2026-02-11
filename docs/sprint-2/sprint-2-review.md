# Sprint 2 — Review

## Sprint Goal
> Extend the application with delete, filtering, persistence, and task count features. Add monitoring/logging. Apply Sprint 1 retrospective improvements.

## Retrospective Improvements Applied

| Improvement | Implementation |
|-------------|---------------|
| **Add code comments and prop documentation** | All components now include JSDoc comments describing their purpose, props, and behavior. |
| **Write tests before implementation (TDD approach)** | Sprint 2 test files (`TaskFilter.test.jsx`, `TaskSummary.test.jsx`, `logger.test.js`) were written alongside features with a test-first mindset. |

## Completed User Stories

### US-4: Delete a Task ✅
- **Delivered:** Delete button on each `TaskItem`; `deleteTask` handler in `App.jsx`.
- **Acceptance Criteria Met:**
  - Each task has a visible "Delete" button.
  - Clicking "Delete" removes the task immediately.
  - Remaining tasks re-render correctly.

### US-5: Filter Tasks by Status ✅
- **Delivered:** `TaskFilter` component with All / Pending / Completed buttons.
- **Acceptance Criteria Met:**
  - Three filter buttons are displayed.
  - Clicking a filter shows only matching tasks.
  - Active filter is visually highlighted.
  - Defaults to "All" on page load.

### US-6: Persist Tasks in Local Storage ✅
- **Delivered:** `useEffect` in `App.jsx` for save/load with `localStorage`.
- **Acceptance Criteria Met:**
  - Tasks are saved whenever the list changes.
  - Tasks are loaded on initial render.
  - Empty list if no saved data exists.
  - Graceful fallback if localStorage is unavailable.

### US-7: Display Task Counts ✅
- **Delivered:** `TaskSummary` component showing Total, Pending, and Completed counts.
- **Acceptance Criteria Met:**
  - Summary line displays all three counts.
  - Counts update dynamically on every change.

## Monitoring & Logging Deliverables

| Artifact | Description |
|----------|-------------|
| `src/utils/logger.js` | Structured logging utility with `INFO`, `WARN`, `ERROR`, `DEBUG` levels. All messages include ISO timestamps. |
| `HealthIndicator` component | Displays application health status, uptime (in seconds), and last render time — acts as a client-side health endpoint. |
| Logging in `App.jsx` | All task operations (add, toggle, delete) and localStorage interactions are logged with the logger utility. |

## Test Results Summary
```
 Test Files  7 passed (7)
      Tests  29 passed (29)
```

**New test files in Sprint 2:**
- `TaskFilter.test.jsx` — 4 tests (rendering, active class, click handler, aria-pressed)
- `TaskSummary.test.jsx` — 3 tests (zero counts, mixed counts, dynamic updates)
- `logger.test.js` — 3 tests (info, warn, error levels)
- `App.test.jsx` — extended with 3 new integration tests (delete, filter, summary)

## Sprint Velocity
- **Planned:** 10 story points (4 stories)
- **Completed:** 10 story points (4 stories)
- **Velocity:** 10 points (up from 7 in Sprint 1)

## Cumulative Project Summary

| Metric | Sprint 1 | Sprint 2 | Total |
|--------|----------|----------|-------|
| Stories completed | 3 | 4 | 7 |
| Story points | 7 | 10 | 17 |
| Tests | 16 | 29 | 29 |
| Components | 3 | 7 | 7 |
