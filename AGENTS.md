<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Multi-Agent Feature Workflow

Use this workflow for feature development:

1. planner: creates requirements, architecture notes, acceptance criteria, and implementation checklist.
2. feature_coder: implements the approved plan with minimal, maintainable changes.
3. test_engineer: adds or updates tests and runs relevant verification commands.
4. code_reviewer: reviews the final diff for correctness, security, maintainability, and missing tests.

General rules:

- Plan before implementation.
- Keep diffs small and focused.
- Do not add production dependencies without justification.
- Update docs when behavior changes.
- Treat linting, type-checking, tests, and review as part of done.

Suggested verification commands:

- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build

## Greptile Optimization Stage

After the normal workflow is complete, a Greptile optimization stage may be used:

planner → feature_coder → test_engineer → code_reviewer → greploop_reviewer

Use `greploop_reviewer` only when:

- A PR/MR/CL already exists.
- The branch has been pushed.
- GitHub CLI, GitLab CLI, or Perforce CLI is authenticated.
- Greptile is installed and configured for the repo.

The greploop stage should:

- Trigger Greptile review.
- Fix actionable Greptile comments.
- Run relevant tests.
- Commit and push/re-shelve fixes.
- Repeat until Greptile reaches 5/5 with zero unresolved comments, or until the max iteration limit is reached.

Do not use greploop for early local development.
Use it as a final PR-hardening workflow.

## Dev Team Agentic Loop

Use the `dev-team-loop` skill for multi-agent feature work.

The root Codex session acts as the tech lead/orchestrator. Subagents act as specialists:

1. planner
2. feature_coder
3. test_engineer
4. code_reviewer
5. greploop_reviewer, only after PR/MR/CL creation and explicit Greptile optimization request

Use these handoff files:

- `.codex/team/current-task.md`
- `.codex/team/feature-plan.md`
- `.codex/team/test-report.md`
- `.codex/team/review-report.md`
- `.codex/team/decision-log.md`

Loop rules:

- Plan before coding.
- Implement only the approved plan.
- Test after implementation.
- Review after tests.
- If tests fail, return to feature_coder.
- If review requests changes, return to feature_coder.
- If architecture is unclear, return to planner.
- Maximum local fix loop: 3 iterations.
- Never run an infinite loop.
- Greploop is optional and only runs after a PR/MR/CL exists.

Architecture rules:

- Use code-structure when deciding action vs service boundaries.
- Keep domain rules, auth, ownership checks, and state transitions in actions.
- Move only repeated operational mechanics into services.

Done means:

- Acceptance criteria are met.
- Tests pass or failures are documented.
- Review is approved or has only non-blocking comments.
- Follow-up risks are documented.
