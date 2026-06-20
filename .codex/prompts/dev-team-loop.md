Use the dev-team-loop skill.

Feature request:

[PASTE FEATURE HERE]

Act as the root tech lead/orchestrator.

Run this bounded workflow:

1. Update `.codex/team/current-task.md`.
2. Spawn planner.
   - Use code-structure if the feature touches shared mechanics or repeated operational logic.
   - Write/update `.codex/team/feature-plan.md`.
   - Do not modify production code.

3. After planner completes, spawn feature_coder.
   - Implement only the approved plan.
   - Keep the diff small.
   - Use code-structure if duplicated operational logic appears.
   - Update `.codex/team/decision-log.md` for important decisions.

4. Spawn test_engineer.
   - Add or update relevant tests.
   - Run the smallest useful verification commands first.
   - Write/update `.codex/team/test-report.md`.

5. Spawn code_reviewer.
   - Review the final diff against the plan and acceptance criteria.
   - Use code-structure to check architecture boundaries.
   - Write/update `.codex/team/review-report.md`.

6. If tests fail or review requests changes:
   - Send the failure/review summary back to feature_coder.
   - Then run test_engineer again.
   - Then run code_reviewer again.
   - Stop after 3 local fix iterations.

7. Do not run greploop unless I explicitly request it and a PR/MR/CL exists.

Final response must include:
- Feature summary
- Plan summary
- Action/service architecture decision
- Implementation summary
- Tests added and results
- Review verdict
- Fix iterations used
- Remaining risks
- Suggested next step
