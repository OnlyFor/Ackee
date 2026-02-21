---
name: refactor
description: Refactor code for simplicity after recent changes. Removes dead code, simplifies logic flows, and reduces unnecessary complexity. Use when the user requests refactoring, cleanup, simplification, or dead-code removal. Validates changes by running build/tests to ensure behavior is preserved.
---

# Code Refactoring for Simplicity

This skill helps clean up and simplify code after changes, focusing on maintainability without altering behavior.

## When to Use This Skill

- User explicitly requests "refactor", "cleanup", or "simplify"
- After implementing features that may have introduced complexity
- When removing unused or deprecated code paths
- When straightening convoluted logic flows
- When the user wants to verify refactors with build/tests

## Refactoring Process

1. **Review Recent Changes**
   - Analyze what was just modified or added
   - Identify areas where complexity was introduced
   - Look for dead code, unused variables, and unreachable paths

2. **Apply Simplification Refactors**
   - Remove dead code and unreachable code paths
   - Straighten complex conditional logic and nested structures
   - Eliminate excessive or redundant parameters
   - Remove premature optimizations that harm readability
   - Consolidate duplicate logic

3. **Verify Behavior is Preserved**
   - **Check available scripts** in `package.json` and run them:
     - If a `build` script exists: Run to check for compilation errors
     - If a `test` script exists: Run to ensure functionality remains intact
     - If a `lint` script exists: Run to check code style
   - Report any test failures or build issues

4. **Suggest Optional Improvements** (if appropriate)
   - Identify reusable patterns or abstractions
   - Only suggest if they clearly improve code clarity
   - Keep suggestions brief and actionable
   - Don't over-engineer or introduce unnecessary abstractions

## Example

**User Request:** "Refactor the authentication module"

**Expected Actions:**

1. Review the authentication code for complexity
2. Remove unused helper functions or dead branches
3. Simplify nested conditionals
4. Run available verification scripts (test, build, lint) to verify behavior
5. Report results and any optional improvements
