# Git & GitHub Mistakes and Learnings

## Overview

This document captures real Git and GitHub mistakes encountered during Project Rock, why they occurred, how they were resolved, and the best practices to prevent them in future projects.

---

# Mistake 1 — Creating Branches from the Wrong Base

## Problem

Attempted to create a new sprint branch without ensuring the local `main` branch was up to date.

## Why it is a problem

A new branch inherits all commits from the branch it is created from. If the base branch is outdated, the new branch starts from an old state.

## Correct Workflow

```bash
git checkout main
git pull origin main

git checkout -b epic/sprint-02-application-foundation
```

## Learning

Always create new branches from an updated base branch.

---

# Mistake 2 — Push Rejected (Non-Fast-Forward)

## Error

```text
! [rejected] (non-fast-forward)
```

## Cause

The remote branch contained commits that the local branch did not have.

Git rejected the push to prevent overwriting remote history.

## Correct Solution

```bash
git fetch origin
git pull --rebase origin <branch>
git push
```

## Learning

Never use `git push --force` unless you fully understand the consequences.

---

# Mistake 3 — No Tracking Branch

## Error

```text
There is no tracking information for the current branch.
```

## Cause

The branch was created locally but had not been associated with a remote branch.

## Solution

```bash
git push -u origin branch-name
```

or

```bash
git branch --set-upstream-to=origin/branch-name
```

## Learning

The `-u` flag establishes the upstream relationship so future `git push` and `git pull` commands know which remote branch to use.

---

# Mistake 4 — Divergent Branches

## Error

```text
Need to specify how to reconcile divergent branches.
```

## Cause

Both the local and remote branches had new commits.

## Solution

Preferred workflow:

```bash
git pull --rebase
```

Alternative:

```bash
git pull --no-rebase
```

## Learning

For Project Rock, prefer **rebase** to keep commit history linear and easier to read.

---

# Mistake 5 — Working on Multiple Machines

## Situation

Code was edited from:

- Windows
- EC2

without synchronizing first.

## Result

Branches diverged and push operations were rejected.

## Correct Workflow

Before starting work:

```bash
git checkout epic/sprint-02-application-foundation
git pull --rebase
```

After finishing:

```bash
git add .
git commit
git push
```

## Learning

Always synchronize before making changes.

---

# Mistake 6 — Incorrect Virtual Environment Location

## Problem

Created the virtual environment inside:

```text
app/venv
```

instead of:

```text
backend/.venv
```

## Why it is a problem

The application package should only contain source code.

Virtual environments belong at the project root.

## Correct Structure

```text
backend/
├── .venv/
├── app/
├── tests/
└── pyproject.toml
```

## Learning

Follow standard Python project layouts.

---

# Mistake 7 — Python Module Shadowing

## Problem

Created:

```text
logging.py
```

## Error

```text
AttributeError:
module 'logging' has no attribute 'getLogger'
```

## Cause

The local file shadowed Python's standard library `logging` module.

## Resolution

Renamed:

```text
logger.py
```

## Learning

Avoid filenames that conflict with Python's standard library.

Examples:

- logging.py
- json.py
- pathlib.py
- typing.py
- asyncio.py
- random.py

---

# Mistake 8 — Binding FastAPI to Localhost

## Problem

Started Uvicorn using:

```bash
uvicorn app.main:app --reload
```

## Result

The API was only accessible from the EC2 instance.

## Correct Command

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## Learning

- `127.0.0.1` → Local machine only
- `0.0.0.0` → All network interfaces

---

# Mistake 9 — Inconsistent Naming

## Problem

Initially used:

```text
docs.py
docs_service.py
documentation.py
```

## Improvement

Standardized on:

```text
documentation.py
documentation_service.py
DocumentationCategory
```

## Learning

Consistent naming reduces confusion and improves maintainability.

---

# Mistake 10 — Architecture Before Features

## Problem

Initially, the project structure evolved while features were already being added.

## Improvement

Stabilized the backend architecture before adding more functionality.

## Learning

Organize the project early to avoid expensive refactoring later.

---

# Mistake 11 — Test Failure Due to Design Inconsistency

## Error

```text
Expected:
project-rock-api

Actual:
Project Rock API
```

## Cause

The API returned a display name where a machine-readable service identifier was expected.

## Resolution

Introduced separate concepts:

- `APP_NAME`
- `SERVICE_NAME`

## Learning

Differentiate between human-friendly values and machine-friendly identifiers.

---

# Mistake 12 — Temporary Files Accidentally Added

## Examples

- `__pycache__`
- `.pyc`
- Virtual environments

## Solution

Use `.gitignore`

Example:

```gitignore
__pycache__/
*.pyc
.venv/
.env
*.egg-info/
```

## Learning

Configure `.gitignore` before making the first commit whenever possible.

---

# Git Workflow Adopted for Project Rock

```text
Pull Latest Changes
        │
        ▼
Create / Switch Branch
        │
        ▼
Develop Feature
        │
        ▼
Run Tests
        │
        ▼
Update Documentation
        │
        ▼
git status
        │
        ▼
git add .
        │
        ▼
git commit
        │
        ▼
git push
        │
        ▼
Pull Request
        │
        ▼
Merge to Sprint Branch
        │
        ▼
Merge Sprint to Main
```

---

# Daily Git Checklist

## Before Starting Work

```bash
git checkout <branch>
git pull --rebase
git status
```

## Before Ending Work

```bash
git status
git add .
git commit -m "<meaningful message>"
git push
```

---

# Common Git Commands

## Check Current Status

```bash
git status
```

## View Commit History

```bash
git log --oneline --graph --decorate --all
```

## Fetch Remote Changes

```bash
git fetch origin
```

## Pull with Rebase

```bash
git pull --rebase origin <branch>
```

## Push Changes

```bash
git push
```

## Create a New Branch

```bash
git checkout -b <branch-name>
```

## Switch Branches

```bash
git checkout <branch-name>
```

## Check Remote Branches

```bash
git branch -a
```

## Check Tracking Information

```bash
git branch -vv
```

---

# Key Lessons

- Synchronize before starting work.
- Prefer `git pull --rebase` over merge to maintain a clean history.
- Never use `git push --force` without understanding its impact.
- Commit logical, tested units of work.
- Keep documentation and code synchronized.
- Stabilize project architecture before adding features.
- Learn from every Git error instead of just fixing it.
- Keep your `.gitignore` updated.
- Follow consistent naming conventions.
- Work on one synchronized branch at a time.

---

# Project Rock Git Workflow

```text
START WORK
    │
    ▼
git checkout <branch>
    │
    ▼
git pull --rebase
    │
    ▼
Development
    │
    ▼
Testing
    │
    ▼
Documentation
    │
    ▼
git status
    │
    ▼
git add .
    │
    ▼
git commit
    │
    ▼
git push
    │
    ▼
Create Pull Request
    │
    ▼
Merge into Sprint Branch
    │
    ▼
Merge Sprint into Main
```

---

# References

## Official Git Documentation

- https://git-scm.com/docs

## Git Book

- https://git-scm.com/book/en/v2

## GitHub Documentation

- https://docs.github.com/

---

# Project Rock Takeaways

Throughout Project Rock, Git errors became valuable learning opportunities rather than obstacles. Each issue—whether it involved branching, rebasing, synchronization, virtual environments, or project organization—helped reinforce real-world software engineering practices.

The goal is not to memorize Git commands, but to understand **why** Git behaves the way it does. That understanding makes troubleshooting much easier and builds confidence when collaborating on larger software projects.
