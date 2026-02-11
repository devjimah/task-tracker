# Task Tracker

A lightweight, browser-based task management application built with **React** and **Vite**. This project demonstrates Agile and DevOps practices across three simulated sprints.

## Features

- **Add tasks** — capture work by typing a title and clicking "Add"
- **View task list** — see all tasks with their status; newest first
- **Toggle completion** — mark tasks as complete/pending with a checkbox
- **Delete tasks** — remove tasks you no longer need
- **Filter by status** — view All, Pending, or Completed tasks
- **Persistent storage** — tasks are saved in `localStorage` and survive page refreshes
- **Task summary** — see counts of total, pending, and completed tasks at a glance
- **Monitoring** — structured logging and an app health indicator

## Tech Stack

| Layer       | Technology |
|-------------|------------|
| Framework   | React 19   |
| Build Tool  | Vite 7     |
| Testing     | Vitest + React Testing Library |
| CI/CD       | GitHub Actions |
| Linting     | ESLint 9   |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Project Structure

```
task-tracker/
├── .github/workflows/ci.yml     # CI pipeline config
├── docs/
│   ├── sprint-0/                 # Planning: vision, backlog, DoD, sprint plans
│   ├── sprint-1/                 # Sprint 1: review & retrospective
│   └── sprint-2/                 # Sprint 2: review & final retrospective
├── src/
│   ├── components/               # React components
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── TaskSummary.jsx
│   │   └── HealthIndicator.jsx
│   ├── utils/
│   │   └── logger.js             # Structured logging utility
│   ├── test/                     # Test files
│   │   ├── setup.js
│   │   ├── App.test.jsx
│   │   ├── TaskForm.test.jsx
│   │   ├── TaskList.test.jsx
│   │   ├── TaskItem.test.jsx
│   │   ├── TaskFilter.test.jsx
│   │   ├── TaskSummary.test.jsx
│   │   └── logger.test.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Agile Artifacts

| Document | Location |
|----------|----------|
| Product Vision | `docs/sprint-0/product-vision.md` |
| Product Backlog | `docs/sprint-0/product-backlog.md` |
| Definition of Done | `docs/sprint-0/definition-of-done.md` |
| Sprint 1 Plan | `docs/sprint-0/sprint-1-plan.md` |
| Sprint 2 Plan | `docs/sprint-0/sprint-2-plan.md` |
| Sprint 1 Review | `docs/sprint-1/sprint-1-review.md` |
| Sprint 1 Retrospective | `docs/sprint-1/sprint-1-retrospective.md` |
| Sprint 2 Review | `docs/sprint-2/sprint-2-review.md` |
| Sprint 2 Retrospective | `docs/sprint-2/sprint-2-retrospective.md` |

## CI/CD Pipeline

The GitHub Actions pipeline (`.github/workflows/ci.yml`) runs on every push and pull request to `main`:

1. **Lint** — `npm run lint`
2. **Test** — `npm run test` (29 tests)
3. **Build** — `npm run build`

Tested against Node.js 18 and 20.

## License

MIT
