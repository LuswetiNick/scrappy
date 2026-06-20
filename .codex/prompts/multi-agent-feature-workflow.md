I want to build the following feature:

[Describe feature here]

Use this multi-agent workflow:

1. Spawn planner first.
   - Inspect the repo and produce a feature plan.
   - Use the code-structure skill if the feature touches repeated operational logic or shared mechanics.
   - Decide what belongs in actions versus services.
   - Do not modify files.

2. After the plan is ready, spawn feature_coder.
   - Implement only the approved plan.
   - Use the code-structure skill if implementation would duplicate operational logic.
   - Keep domain rules in actions.
   - Extract only reusable mechanics into services.
   - Keep the diff small.

3. Then spawn test_engineer.
   - Add or update relevant tests.
   - If service extraction happened, test all affected callers.
   - Run the smallest useful test suite first, then broader checks if appropriate.

4. Finally spawn code_reviewer.
   - Review the final diff.
   - Use the code-structure skill to check action/service boundaries.
   - Do not modify files.
   - Return approve / approve with comments / request changes.

5. Optional PR hardening:
   - If a PR/MR/CL exists and I ask for Greptile optimization, spawn greploop_reviewer.
   - Use the greploop skill.
   - Trigger Greptile review.
   - Fix actionable comments.
   - Run tests.
   - Push or re-shelve changes.
   - Stop at 5/5 confidence with zero unresolved comments or max iterations.

Final summary should include:

- plan summary
- action/service architecture decisions
- implementation summary
- tests added and results
- review verdict
- Greptile result, if greploop was used
- remaining risks
