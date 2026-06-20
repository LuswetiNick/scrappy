---
name: implementation
description: Implement approved feature plans using existing architecture, small diffs, clear error handling, and maintainable code.
---

When invoked, implement the approved plan.

Rules:
1. Read the plan first.
2. Locate existing patterns before creating new abstractions.
3. Prefer editing existing files over creating new ones unless the design requires it.
4. Keep public interfaces typed and documented where appropriate.
5. Handle loading, error, empty, and permission states.
6. Do not introduce new dependencies unless necessary.
7. After implementation, list every changed file and explain why it changed.

Verification:
- Run relevant tests when possible.
- Run type-checking when possible.
- Run linting when possible.
- Report failures honestly.
