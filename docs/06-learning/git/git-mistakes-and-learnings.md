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

# Mistake 13: Committing Unresolved Merge Conflicts

## What Happened?

While working on Project Rock, unresolved Git merge conflict markers were accidentally committed into source files.

Example:

```python
<<<<<<< HEAD
service_name = "project-rock-api"
=======
>>>>>>> feature/backend
```

The application failed to start because these markers are not valid Python syntax.

Error:

```
SyntaxError: invalid decimal literal
```

---

## Root Cause

A merge conflict was not resolved completely before committing.

Git uses conflict markers to indicate sections that require manual resolution.

These markers must never remain in the final code.

---

## How We Diagnosed It

Running the backend produced:

```bash
uvicorn app.main:app --reload
```

Result:

```
SyntaxError
```

Opening the file revealed the conflict markers.

---

## Solution

1. Remove the conflict markers.
2. Keep the correct code.
3. Run the application again.
4. Search the repository for remaining conflict markers.

```bash
grep -R "<<<<<<<" . \
  --exclude-dir=.git \
  --exclude-dir=.venv \
  --exclude-dir=node_modules

grep -R ">>>>>>>" . \
  --exclude-dir=.git \
  --exclude-dir=.venv \
  --exclude-dir=node_modules
```

Expected:

```
(no output)
```

---

## Lesson Learned

Always validate the repository before merging.

Never assume all merge conflicts have been resolved.

---

# Mistake 14: Searching Generated Directories

## What Happened?

When searching for merge conflicts, the search returned results from:

- node_modules
- .venv
- TypeScript internals

Example:

```
node_modules/typescript/lib/typescript.js
```

These were not actual problems in our project.

---

## Root Cause

The search included generated directories.

---

## Solution

Exclude generated directories.

```bash
grep -R "<<<<<<<" . \
  --exclude-dir=.git \
  --exclude-dir=.venv \
  --exclude-dir=node_modules
```

---

## Lesson Learned

Always limit repository searches to source code.

---

# Mistake 15: Building on a Broken Main Branch

## What Happened?

Development continued even though the main branch contained unresolved merge conflicts.

This increased the risk of future merge problems.

---

## Why This Is Dangerous

Every new feature inherits problems from the base branch.

Fixing the foundation first prevents repeated issues.

---

## Correct Workflow

```
Fix main

↓

Verify

↓

Create feature branch

↓

Develop

↓

Merge back to main
```

---

## Lesson Learned

Never build new features on top of a broken main branch.

---

# Mistake 16: Confusing Merge and Rebase

## What Happened?

We considered rebasing while the current feature was still under active development.

The correct decision was to first stabilize the current branch and only rebase immediately before merging.

---

## Correct Workflow

```
Create Feature Branch

↓

Develop

↓

Commit

↓

Push

↓

Update main

↓

Rebase Feature Branch

↓

Run Tests

↓

Merge
```

---

## Lesson Learned

Rebase is a synchronization step before merging, not something that should be done repeatedly during development.

---

# Mistake 17: Long-Lived Sprint Branches

## What Happened?

Initially, Sprint 2 work was performed on a long-lived sprint branch.

As more work accumulated, synchronizing with main became increasingly difficult.

---

## Better Approach

Create a new feature branch for every task.

Example:

```
feature/devq-027-frontend-bootstrap

feature/devq-028-react-router

feature/devq-029-home-page
```

Each branch should:

- Focus on one feature.
- Be merged quickly.
- Be deleted after merging.

---

## Lesson Learned

Short-lived feature branches reduce merge conflicts and simplify code reviews.

---

# Mistake 18: Treating Git Commands as Magic

## What Happened?

Whenever Git reported an error, the instinct was to immediately run another command (`pull`, `fetch`, `rebase`, etc.) without first understanding the repository's state.

---

## Better Approach

Before running any Git command, ask:

1. What branch am I on?
2. Is my branch ahead or behind?
3. Has the remote changed?
4. Am I trying to merge or synchronize?
5. What does `git status` say?
6. What does `git log --graph --decorate --all` show?

Only then decide which command is appropriate.

---

## Lesson Learned

Git problems are solved by understanding the repository state, not by memorizing commands.

---

# Git Principles Learned from Project Rock

These principles summarize the most important lessons from our hands-on experience.

1. Always check `git status` before making changes.
2. Visualize branch history with `git log --graph --decorate --all`.
3. Pull the latest `main` before creating a new feature branch.
4. Keep feature branches short-lived.
5. Make small, logical commits.
6. Resolve merge conflicts immediately.
7. Search for unresolved conflict markers before merging.
8. Test the application before pushing.
9. Never panic when Git reports an error—understand the repository state first.
10. Git commands are tools; repository state determines which tool to use.

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
