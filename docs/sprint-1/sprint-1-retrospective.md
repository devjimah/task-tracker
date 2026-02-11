# Sprint 1 — Retrospective

## What Went Well 👍
1. **All 3 user stories were completed** — we met the sprint goal and delivered the full core task management functionality (add, view, toggle).
2. **CI/CD pipeline was established early** — having the GitHub Actions pipeline running lint, test, and build from the start gave immediate feedback on code quality.
3. **Test-driven confidence** — writing 16 unit and integration tests provided confidence that the components work correctly and made refactoring safer.

## What Didn't Go Well 👎
1. **No component-level code documentation** — components were created without JSDoc comments or prop documentation, which could slow down understanding in Sprint 2.
2. **No data persistence** — tasks are lost on page refresh, which makes it difficult to demo real-world usage. This should be addressed in Sprint 2.

## Action Items for Sprint 2 🔧

| # | Improvement | How |
|---|-------------|-----|
| 1 | **Add code comments and prop documentation** | Add JSDoc comments to all component files describing props and behavior before writing new features. |
| 2 | **Write tests before implementation (TDD approach)** | For Sprint 2 stories, write the test cases first, then implement the feature to pass them. This ensures better test coverage and clearer requirements. |

## Key Metrics
- Sprint velocity: **7 story points**
- Tests written: **16** (all passing)
- Pipeline status: **Green** (lint + test + build)
