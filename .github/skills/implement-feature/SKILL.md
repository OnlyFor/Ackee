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
   - Run the project's formatter (e.g., `npm run format`)
   - Ensure consistent code style throughout changes
   - Fix any linting warnings or errors

5. **Update Documentation**
   - Update [README.md](../../../README.md) with new features or changed behavior
   - Update relevant code comments and JSDoc
   - Update [CHANGELOG.md](../../../CHANGELOG.md) with a description of changes
   - Document new configuration options or API changes
   - Include usage examples if appropriate

6. **Verify Everything Works**
   - Run the full test suite to ensure nothing broke
   - Build the project to check for compilation errors
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
4. **Format:** Run `npm run format` or equivalent formatter
5. **Document:**
   - Update README with CSV export usage example
   - Update CHANGELOG with "Added CSV export functionality"
   - Add JSDoc comments to new functions
6. **Verify:** Run `npm test` and report results

## Validation Commands

Use these common commands to validate the implementation:

- **Tests:** `npm test`
- **Formatting:** `npm run format`

Adapt commands based on the project's `package.json` scripts.

## Reporting Results

Always provide a clear summary of:

- ✅ What was implemented
- ✅ Tests added/updated and their results
- ✅ Formatting applied
- ✅ Documentation updated
- ⚠️ Any issues or warnings encountered
- 💡 Optional suggestions for future improvements
