---
name: code-review
description: Review software changes for correctness, security, maintainability, regressions, architecture fit, and missing tests.
---

When invoked, review the diff as a senior engineer.

Review priorities:
1. Correctness:
   - Does the code implement the requested behavior?
   - Are edge cases handled?
2. Security:
   - Are auth and permissions enforced?
   - Is user input validated?
   - Are secrets exposed?
3. Data integrity:
   - Are database writes safe?
   - Are migrations compatible?
4. Maintainability:
   - Does the code follow existing patterns?
   - Is complexity justified?
5. Tests:
   - Are meaningful tests added?
   - Are important failure cases covered?

Return findings with:
- severity
- affected file/function
- why it matters
- suggested fix

Avoid style-only comments unless they affect maintainability or correctness.
