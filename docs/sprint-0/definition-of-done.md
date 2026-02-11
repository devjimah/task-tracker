# Definition of Done (DoD)

A backlog item is considered **Done** when all of the following criteria are met:

1. **Code Complete** — All code for the user story is written and follows the project's coding standards (ESLint passes with no errors).

2. **Tested** — Unit tests are written for the feature, and all tests pass successfully (both locally and in the CI pipeline).

3. **Reviewed** — The code has been self-reviewed for quality, readability, and correctness before committing.

4. **Builds Successfully** — The application builds without errors (`npm run build` completes with exit code 0).

5. **Pipeline Passes** — The CI/CD pipeline runs all stages (lint, test, build) and completes successfully with a green status.

6. **Committed & Pushed** — All changes are committed to the Git repository with clear, descriptive commit messages and pushed to the remote branch.

7. **Acceptance Criteria Met** — All acceptance criteria defined in the user story are satisfied and can be demonstrated.

8. **No Known Defects** — There are no open bugs or regressions introduced by the change.
