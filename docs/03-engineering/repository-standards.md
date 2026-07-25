# Repository Standards

## Branch Strategy

- One feature per branch.
- Never commit directly to `main`.
- Every feature must be merged through a Pull Request.

---

## Commit Messages

Follow Conventional Commits where practical.

Examples:

- feat:
- fix:
- docs:
- chore:
- refactor:
- test:
- ci:

---

## Pull Requests

Each Pull Request should include:

- Business Context
- Summary of Changes
- Testing Performed
- Impact Assessment
- Checklist

---

## Documentation

Every significant engineering change should include documentation updates.

---

## Secrets

Secrets must never be committed to Git.

Use:

- GitHub Secrets
- AWS Secrets Manager (future)

---

## Code Reviews

Every Pull Request should be reviewed before merging.

Even in a solo project, the author should perform a self-review before merging.