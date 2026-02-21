---
name: implement-feature
description: Implement new features with quality assurance. Ensures code quality, runs tests, applies formatting, and updates documentation. Use when the user requests a new feature, enhancement, or capability to be added to the codebase.
---

# Feature Implementation with Quality Assurance

This skill guides the implementation of new features while maintaining code quality, testing, formatting, and documentation standards.

## When to Use This Skill

- User requests a new feature or capability
- User asks to "implement", "add", or "create" functionality
- User wants to enhance existing functionality with new capabilities
- User requests feature development with quality checks
- When implementing changes that should be properly tested and documented

## Feature Implementation Process

1. **Understand Requirements**
   - Clarify the feature requirements and scope
   - Identify affected modules and dependencies
   - Consider edge cases and error handling
   - Plan the implementation approach

2. **Implement the Feature**
   - Write clean, maintainable code following project conventions
   - Keep functions focused and single-purpose
   - Use meaningful variable and function names
   - Add appropriate error handling
   - Include inline comments for complex logic
   - Follow existing code patterns and architecture

3. **Write or Update Tests**
   - Add unit tests for new functionality
   - Update existing tests affected by changes
   - Test edge cases and error conditions
   - Ensure test coverage for critical paths
   - Verify all tests pass before proceeding

4. **Format Code**
   - Apply project code formatting standards
   - Run the project's formatter if a `format` or `lint` script exists
   - Ensure consistent code style throughout changes
   - Fix any linting warnings or errors

5. **Update Documentation**
   - Update [README.md](../../../README.md) with new features or changed behavior
   - Update relevant code comments and JSDoc
   - Update [CHANGELOG.md](../../../CHANGELOG.md) with a description of changes
   - Document new configuration options or API changes
   - Include usage examples if appropriate

6. **Verify Everything Works**
   - **Check available scripts** in `package.json` and run them:
     - If a `test` script exists: Run to ensure nothing broke
     - If a `build` script exists: Run to check for compilation errors
     - If a `lint` script exists: Run to check code style
   - Manually test the feature if necessary
   - Report test results and any issues found

## Code Quality Guidelines

**Structure:**

- Keep functions small and focused (typically < 50 lines)
- Use clear, descriptive names that explain intent
- Minimize function parameters (typically ≤ 3)
- Avoid deep nesting (max 3-4 levels)

**Error Handling:**

- Handle expected errors gracefully
- Provide meaningful error messages
- Validate inputs at boundaries
- Consider failure modes

**Maintainability:**

- Write self-documenting code
- Add comments for "why", not "what"
- Follow DRY (Don't Repeat Yourself)
- Keep related code together

## Example Workflow

**User Request:** "Add support for exporting data to CSV format"

**Expected Actions:**

1. **Understand:** Clarify CSV format requirements, delimiter preferences, field selection
2. **Implement:** Create `exportToCsv()` function with proper data transformation
3. **Test:** Add tests for various data types, edge cases, empty data
4. **Format:** Run formatter if available (check for `format` or `lint` script)
5. **Document:**
   - Update README with CSV export usage example
   - Update CHANGELOG with "Added CSV export functionality"
   - Add JSDoc comments to new functions
6. **Verify:** Run available verification scripts (test, build, lint) and report results

## Validation Commands

Check the project's `package.json` for available scripts and run them as appropriate:

- **Tests:** `npm test` (if `test` script exists)
- **Build:** `npm run build` (if `build` script exists)
- **Formatting/Linting:** `npm run format` or `npm run lint` (if scripts exist)

Only run commands that are configured for the project.

## Reporting Results

Always provide a clear summary of:

- ✅ What was implemented
- ✅ Tests added/updated and their results
- ✅ Formatting applied
- ✅ Documentation updated
- ⚠️ Any issues or warnings encountered
- 💡 Optional suggestions for future improvements
