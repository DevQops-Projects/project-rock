# Git Workflow

> **Category:** Version Control
>
> **Difficulty:** Beginner → Intermediate
>
> **Project:** Project Rock
>
> **Last Updated:** Sprint 02

---

# 1. Overview

Git is a **Distributed Version Control System (DVCS)** used to track changes in source code over time.

Unlike traditional version control systems, every developer has a complete copy of the repository, including the entire commit history.

Git helps teams:

- Track changes
- Collaborate safely
- Maintain code history
- Roll back mistakes
- Develop multiple features simultaneously

---

# 2. Why Do We Need Git?

Imagine developing software without Git.

You might create files like:

```
project-final.zip
project-final-v2.zip
project-final-latest.zip
project-final-latest-final.zip
```

Problems:

- No history
- Difficult collaboration
- No rollback
- High risk of overwriting changes

Git solves these problems by storing changes as commits.

---

# 3. Problem Statement

A software project continuously changes.

Developers need to:

- Add features
- Fix bugs
- Experiment safely
- Work in parallel
- Restore previous versions

Git enables all of this while preserving complete project history.

---

# 4. Mental Model

Think of Git as a time machine.

```
Commit A
    ↓
Commit B
    ↓
Commit C
    ↓
Commit D
```

Each commit is a snapshot of the project.

Git does NOT store every file repeatedly.

Instead, Git stores changes efficiently and reconstructs snapshots when needed.

---

# 5. Internal Working

Git stores everything inside:

```
.git/
```

Important components:

```
Working Directory
        │
        ▼
Staging Area (Index)
        │
        ▼
Repository (.git)
```

Workflow:

```
Edit File

↓

git add

↓

Staging Area

↓

git commit

↓

Repository
```

---

# 6. Important Terminology

| Term | Meaning |
|------|---------|
| Repository | Git project |
| Commit | Snapshot |
| Branch | Independent line of development |
| Merge | Combine branches |
| Rebase | Rewrite commit history |
| HEAD | Current checked-out commit |
| Origin | Remote repository |
| Upstream | Tracking branch |
| Clone | Copy remote repository |
| Fork | Personal copy of another repository |

---

# 7. Project Rock Git Strategy

We follow **Feature Branch Workflow**.

```
main

│

├── feature/devq-027-frontend-bootstrap

├── feature/devq-028-routing

├── feature/devq-029-api-integration

└── feature/devq-030-ui
```

Every feature has its own branch.

After completion:

- Test
- Review
- Merge into main
- Delete branch

---

# 8. Feature Development Workflow

## Step 1

Update main

```bash
git checkout main
git pull origin main
```

---

## Step 2

Create feature branch

```bash
git checkout -b feature/devq-027-frontend-bootstrap
```

---

## Step 3

Develop

Make changes.

---

## Step 4

Commit

```bash
git add .

git commit -m "feat(frontend): bootstrap React application"
```

---

## Step 5

Push

```bash
git push -u origin feature/devq-027-frontend-bootstrap
```

---

## Step 6

Create Pull Request

GitHub

↓

Review

↓

Merge

---

## Step 7

Delete branch

Local

```bash
git branch -d feature/devq-027-frontend-bootstrap
```

Remote

```bash
git push origin --delete feature/devq-027-frontend-bootstrap
```

---

# 9. Git Lifecycle

```
Create Branch

↓

Develop

↓

Commit

↓

Push

↓

Pull Request

↓

Review

↓

Merge

↓

Delete Branch
```

---

# 10. Commands Cheat Sheet

Clone

```bash
git clone
```

Status

```bash
git status
```

History

```bash
git log
```

Branches

```bash
git branch
```

Checkout

```bash
git checkout
```

Create Branch

```bash
git checkout -b feature/name
```

Pull

```bash
git pull
```

Fetch

```bash
git fetch
```

Push

```bash
git push
```

Commit

```bash
git commit
```

Merge

```bash
git merge
```

Rebase

```bash
git rebase
```

Delete Branch

```bash
git branch -d
```

---

# 11. Real World Example

A company has:

- 30 developers
- 500 repositories
- 50 deployments per day

Without feature branches:

Everyone works on main.

Problems:

- Constant conflicts
- Broken builds
- Unstable code

Instead:

Every feature gets its own branch.

Only tested code reaches main.

---

# 12. Common Beginner Mistakes

### Working directly on main

Wrong

```
main

↓

Code

↓

Push
```

Correct

```
main

↓

feature

↓

Merge
```

---

### Forgetting to pull latest main

Result

Merge conflicts.

---

### Huge commits

Wrong

```
100 files

One commit
```

Correct

```
Small logical commits
```

---

### Force pushing without understanding

Can overwrite teammates' work.

---

### Leaving merge conflicts unresolved

Example

```
<<<<<<< HEAD
=======
>>>>>>>
```

These markers are NOT valid code.

---

# 13. Best Practices

✅ Small commits

✅ Meaningful commit messages

✅ Feature branches

✅ Pull before starting work

✅ Rebase before merging (when appropriate)

✅ Delete merged branches

✅ Never commit secrets

✅ Never commit .venv

✅ Never commit node_modules

---

# 14. Project Rock Learnings

We encountered several real Git issues.

### Diverged branches

Cause

Multiple histories.

Solution

Understand fetch, pull, merge and rebase.

---

### Remote updates

Remote changed after local commit.

Solution

Synchronize before pushing.

---

### Merge conflict markers committed

Problem

Python application failed.

Reason

Conflict markers remained inside source files.

Lesson

Always validate before merging.

---

### Long-lived sprint branches

Problem

Synchronization became difficult.

Solution

Move to feature branches.

---

# 15. How Senior Engineers Think

Beginner:

"I just run git pull."

Senior:

"I know whether I need fetch, merge, or rebase based on the repository state."

---

Beginner:

"I push directly."

Senior:

"I create a feature branch, verify tests, and open a pull request."

---

# 16. Interview Questions

### What is Git?

### Difference between Git and GitHub?

### What is a commit?

### What is HEAD?

### Difference between fetch and pull?

### Difference between merge and rebase?

### Why use feature branches?

### What causes merge conflicts?

### How do you resolve merge conflicts?

### Why shouldn't developers work directly on main?

### Explain your Git workflow.

---

# 17. Revision Cheatsheet

- Git is a Distributed Version Control System.
- Every commit is a snapshot.
- Working Directory → Staging Area → Repository.
- Feature branches isolate work.
- Pull latest main before starting.
- Commit small logical changes.
- Push feature branch.
- Create Pull Request.
- Resolve conflicts carefully.
- Never commit generated files.
- Never leave merge conflict markers.
- Delete merged branches.
- Keep main stable.
- Git tracks history, not just files.

---

# 18. References

Official Git Documentation

https://git-scm.com/docs

Pro Git Book

https://git-scm.com/book/en/v2
