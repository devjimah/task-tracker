# Sprint 2 — Final Retrospective

## What Went Well 👍

1. **All 4 user stories were delivered** — we completed the full backlog (7/7 stories) across both sprints, achieving the product vision of a functional task tracker with add, view, toggle, delete, filter, persistence, and summary features.

2. **Retrospective improvements were successfully applied** — JSDoc comments were added to every component before writing new code, which made the purpose and API of each component immediately clear. The TDD-adjacent approach for Sprint 2 features produced well-tested, focused code.

3. **Monitoring and logging integration** — the structured logger and HealthIndicator component provide real-time observability into the application's behavior, which would be essential in a production environment.

4. **Higher velocity** — Sprint 2 velocity (10 points) increased from Sprint 1 (7 points), demonstrating that process improvements and established patterns accelerate delivery.

5. **Comprehensive test coverage** — 29 tests across 7 test files give confidence in the codebase's correctness and make future changes safer.

## What Didn't Go Well 👎

1. **localStorage mocking in tests** — the jsdom environment's incomplete `localStorage` support required defensive coding in the application. Better test environment configuration should be investigated for future sprints.

2. **No automated deployment** — the CI pipeline runs lint, test, and build, but doesn't deploy anywhere. A CD step (e.g., deploying to GitHub Pages or Vercel) would complete the DevOps loop.

## Process Improvements Achieved Over Both Sprints

| Sprint | Improvement | Outcome |
|--------|-------------|---------|
| Sprint 1 → 2 | Added JSDoc documentation | Every component now has clear prop documentation |
| Sprint 1 → 2 | TDD-adjacent testing | Sprint 2 features have higher test confidence |
| Sprint 2 | Defensive localStorage handling | App works gracefully in any environment |
| Sprint 2 | Structured logging | All operations are traceable via the logger utility |

## Key Lessons Learned

1. **Start with CI/CD early** — setting up the pipeline in Sprint 1 provided continuous feedback throughout both sprints. Catching lint and test failures early saved debugging time.

2. **Small, incremental commits matter** — breaking work into focused commits (one per feature or concern) made the Git history readable and the review process straightforward.

3. **Retrospectives drive real improvement** — the Sprint 1 retrospective directly led to better documentation and testing practices in Sprint 2. The improvements were tangible, not theoretical.

4. **Keep it simple** — a focused product scope (7 well-defined user stories) allowed us to deliver everything with quality. Trying to do too much would have compromised the Definition of Done.

5. **Agile is about rhythm** — the predictable cadence of plan → execute → review → reflect creates a sustainable, improving workflow. Even as a solo developer, this structure keeps work organized and purposeful.

## Final Metrics

| Metric | Value |
|--------|-------|
| Total user stories completed | 7 / 7 |
| Total story points delivered | 17 |
| Total tests | 29 (all passing) |
| CI pipeline stages | 3 (lint, test, build) |
| Components built | 7 |
| Sprint 1 velocity | 7 pts |
| Sprint 2 velocity | 10 pts |
