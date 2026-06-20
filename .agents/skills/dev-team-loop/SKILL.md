---
name: dev-team-loop
description: Run a bounded multi-agent software development loop where planner, feature coder, test engineer, and code reviewer collaborate like a dev team.
---

# Dev Team Agentic Loop

Use this skill when implementing a feature with multiple specialized agents.

## Team Roles

- planner: owns requirements, architecture plan, acceptance criteria, implementation checklist, and test checklist.
- feature_coder: owns implementation of the approved plan.
- test_engineer: owns tests, verification, and regression coverage.
- code_reviewer: owns final review for correctness, security, maintainability, architecture, and missing tests.
- greploop_reviewer: optional PR/MR/CL hardening after a PR exists and Greptile optimization is requested.

## Core Loop

1. Intake
   - Clarify the feature request only if blocked.
   - Create or update `.codex/team/current-task.md`.

2. Planning Gate
   - Spawn planner.
   - Planner must produce:
     - feature summary
     - affected files
     - action/service architecture decision
     - acceptance criteria
     - implementation checklist
     - test checklist
     - risks and assumptions
   - If the feature touches repeated operational logic, use the code-structure skill.

3. Implementation Gate
   - Spawn feature_coder.
   - Coder implements only the approved plan.
   - Coder must keep the diff small.
   - Coder must not expand scope.
   - If duplicated operational logic appears, use the code-structure skill.

4. Testing Gate
   - Spawn test_engineer.
   - Tester adds or updates relevant tests.
   - Tester runs the smallest useful test suite first.
   - Tester reports exact commands and results.
   - If tests fail, return to feature_coder with the failure summary.

5. Review Gate
   - Spawn code_reviewer.
   - Reviewer checks:
     - correctness
     - security
     - architecture
     - data integrity
     - maintainability
     - missing tests
   - If review requests changes, return to feature_coder with the review findings.

6. Fix Loop
   - Repeat implementation → testing → review until:
     - tests pass
     - reviewer approves or approves with non-blocking comments
     - max local iterations reached

7. Optional PR Hardening
   - Only after a PR/MR/CL exists and the user explicitly asks for Greptile optimization.
   - Spawn greploop_reviewer.
   - Use the greploop skill.
   - Stop at 5/5 Greptile confidence with zero unresolved comments, or at max iterations.

## Iteration Limits

- Max local fix iterations: 3
- Max Greploop iterations: follow greploop skill limit
- Never loop indefinitely.

## Handoff Format

Every agent must return:

1. What it did
2. Files inspected or changed
3. Decisions made
4. Commands run
5. Problems found
6. Next recommended agent

## Exit Criteria

The loop is complete when:

- Feature matches acceptance criteria.
- Tests pass or failures are clearly documented.
- Code review is approved or only has non-blocking comments.
- Risks and follow-ups are documented.
