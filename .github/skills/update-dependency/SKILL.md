---
name: update-dependency
description: Update an npm dependency to its latest version, check for breaking changes in changelogs and release notes, adjust code to maintain compatibility, and verify with tests. Use when the user requests to update, upgrade, or bump a dependency version.
argument-hint: package-name
---

# Update npm Dependency with Breaking Change Detection

This skill helps safely update npm dependencies to their latest versions by researching breaking changes and automatically adjusting code to maintain compatibility.

## When to Use This Skill

- User explicitly requests to "update", "upgrade", or "bump" a dependency
- User mentions making a dependency "latest" or going to a specific version
- After security vulnerabilities are reported in dependencies
- When preparing for a major version update of a dependency
- When user wants to adopt new features from a newer version

## Update Process

### 1. **Analyze Current State**

- Read `package.json` to find the current version of the specified dependency
- Check if the dependency exists in `dependencies`, `devDependencies`, or `peerDependencies`
- Verify the package exists in the npm registry
- Get the latest version available

### 2. **Research Breaking Changes**

- Fetch the package's npm registry page to find the repository URL
- Access the repository's CHANGELOG, RELEASE_NOTES, or GitHub releases
- Search for "BREAKING CHANGE", "breaking:", or similar patterns
- Identify migration guides or upgrade documentation
- Summarize breaking changes between current and target version
- Look for deprecation warnings and API changes

### 3. **Search Codebase for Usage**

- Use grep_search to find all imports and requires of the dependency
- Identify which modules, functions, or APIs are being used
- Check for patterns that match documented breaking changes
- Create a list of files that may need updates

### 4. **Update Package Version**

- Update the version in `package.json` to the target version
- Run `npm install` to update `package-lock.json` and install the new version
- Check for any installation errors or peer dependency conflicts

### 5. **Apply Code Adjustments**

- Based on breaking changes found, update affected code:
  - Rename deprecated APIs to their replacements
  - Update function signatures if parameters changed
  - Adjust import/export statements if module structure changed
  - Update configuration objects if options changed
  - Fix type definitions if using TypeScript
- Make minimal, targeted changes focused on compatibility
- Follow the project's existing code style and patterns

### 6. **Verify Compatibility**

- Run the test suite to check for failures
- Run linting/formatting tools if configured
- Check for TypeScript compilation errors if applicable
- Review any runtime or build errors
- If tests fail, investigate and apply additional fixes

### 7. **Report Results**

- Summarize what was updated (from version X to version Y)
- List breaking changes that were addressed
- List files that were modified and why
- Report test results and any remaining issues
- Suggest additional manual verification steps if needed

## Breaking Change Detection Strategy

Use multiple sources to find breaking changes:

1. **Official Documentation**
   - CHANGELOG.md in the repository
   - BREAKING_CHANGES.md or MIGRATION.md
   - GitHub releases page with release notes
   - Official documentation upgrade guides

2. **npm Registry Metadata**
   - Package homepage and repository links
   - Latest release notes and tags

3. **Code Analysis**
   - Compare major/minor version jumps (semver)
   - Check for deprecation warnings in current version
   - Look for exported APIs that changed

## Example Execution

**User Request:** "Update blessed to the latest version"

**Expected Actions:**

1. Check `package.json` - current version is `blessed@0.1.81`
2. Check npm registry - latest version is `blessed@0.1.82`
3. Fetch repository changelog from GitHub
4. Search for breaking changes between versions
5. Update `package.json` with `"blessed": "^0.1.82"`
6. Run `npm install`
7. Search codebase for `blessed` usage: `import blessed from 'blessed'`
8. Review if any APIs changed (check method signatures, options)
9. Update code if needed (e.g., deprecated methods, changed options)
10. Run `npm test` to verify
11. Report results with summary of changes

## Edge Cases to Handle

- **No Breaking Changes**: If versions are compatible, simply update and test
- **Major Version Jump**: Warn about potential for significant changes
- **Missing Documentation**: Rely on git history or issue tracker
- **Peer Dependency Conflicts**: Report conflicts and suggest resolutions
- **Failed Tests After Update**: Investigate failures and attempt fixes, or revert if necessary
- **Transitive Dependencies**: Note if updating one package requires updating others

## Best Practices

- Always commit changes before starting (or verify git status)
- Update one dependency at a time for easier debugging
- Prefer stable releases over pre-release versions
- Check for security advisories in addition to features
- Test thoroughly, especially after major version updates
- Update related dependencies together (e.g., `@types/*` packages)
- Document the reason for the update in commit messages

## Tools and Commands

Common commands used during updates:

```bash
# Check current version
npm list <package-name>

# View available versions
npm view <package-name> versions

# Get latest version
npm view <package-name> version

# Update package
npm install <package-name>@latest

# Run tests
npm test

# Check for outdated packages
npm outdated
```

## Important Notes

- **Breaking Changes Detection**: Use web fetch capabilities to access changelogs and release notes from package repositories
- **Semver Awareness**: Major version changes (1.x -> 2.x) likely have breaking changes; minor/patch updates typically don't
- **Test Coverage**: Rely on existing tests to catch compatibility issues
- **Fallback Strategy**: If automatic adjustment fails, provide manual migration checklist
- **Documentation Priority**: Always prioritize official migration guides over guessing

## Success Criteria

The update is successful when:

1. ✅ Package is updated in `package.json` and `package-lock.json`
2. ✅ All breaking changes are identified and documented
3. ✅ Code adjustments are applied where needed
4. ✅ All tests pass with the new version
5. ✅ No linting or compilation errors
6. ✅ User understands what changed and why
