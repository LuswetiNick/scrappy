---
name: testing
description: Design, write, and run tests for feature work, including unit, integration, API, component, and regression tests.
---

When invoked, create a practical test plan and implement tests.

Testing workflow:
1. Identify behavior that changed.
2. Identify risk areas:
   - permissions
   - validation
   - API errors
   - database writes
   - race conditions
   - UI states
3. Match the existing project's test framework and patterns.
4. Add tests for:
   - happy path
   - validation failure
   - authorization failure where relevant
   - important edge case
   - regression case if fixing a bug
5. Run relevant commands.
6. Report exact pass/fail results.

Never claim tests passed unless they were actually run.
