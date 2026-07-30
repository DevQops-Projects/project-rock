# Git Internals

> **Category:** Git Internals
>
> **Difficulty:** Intermediate → Advanced
>
> **Prerequisites:**
>
> - git-workflow.md
> - git-rebase-vs-merge.md
>
> **Project:** Project Rock

---

# 1. Overview

Most developers know **how to use Git**.

Few understand **how Git works internally**.

Understanding Git Internals helps you:

- Debug difficult Git problems
- Understand merge conflicts
- Recover lost commits
- Use advanced Git features confidently
- Perform better in technical interviews

Git is **not just a version control tool**.

Git is actually a **content-addressable database**.

---

# 2. Why Learn Git Internals?

Most developers think Git stores files.

It doesn't.

Git stores **objects**.

Everything inside Git is an object.

Examples

- Files
- Directories
- Commits
- Tags

All are stored as objects inside

```
.git/objects
```

---

# 3. Git Repository Structure

```
project/

├── .git/
│
├── src/
├── docs/
├── README.md
└── package.json
```

Everything Git needs exists inside

```
.git/
```

This directory contains:

```
.git/

├── objects/
├── refs/
├── HEAD
├── config
├── index
├── logs/
└── hooks/
```

---

# 4. The Four Core Git Objects

Git has only four object types.

```
Blob

Tree

Commit

Tag
```

Everything else is built using these.

---

# 5. Blob

Blob = Binary Large Object

A Blob stores

ONLY

File contents.

Example

```
README.md
```

Git stores

```
Blob
```

Notice

The filename is NOT stored inside the Blob.

Only data.

---

# 6. Tree

A Tree represents a directory.

Example

```
src/

app.py

config.py
```

Git creates

```
Tree

↓

Blob app.py

↓

Blob config.py
```

A Tree maps

Filename

↓

Blob

---

# 7. Commit Object

A Commit stores

- Tree reference
- Parent commit
- Author
- Committer
- Timestamp
- Commit message

It does NOT store file contents.

Example

```
Commit

↓

Tree

↓

Blobs
```

---

# 8. HEAD

HEAD is simply

```
A pointer
```

Example

```
HEAD

↓

main

↓

Commit
```

HEAD tells Git

"What commit am I currently on?"

---

# 9. Branches

Many beginners think

A branch is a copy.

Wrong.

A branch is simply

```
A movable pointer
```

Example

```
main

↓

Commit C
```

After a new commit

```
Commit D

↑

main
```

Git moves the pointer.

That's why branches are lightweight.

---

# 10. Commits

Each commit points to

Its parent commit.

```
A

↓

B

↓

C

↓

D
```

Git history is actually a linked list.

---

# 11. SHA Hashes

Every object has a unique hash.

Example

```
4b825dc642cb6eb9...
```

Git calculates hashes using SHA.

Advantages

- Detect corruption
- Unique identity
- Fast lookup

---

# 12. Staging Area

Many developers misunderstand this.

Workflow

```
Working Directory

↓

git add

↓

Index (Staging Area)

↓

git commit

↓

Repository
```

The staging area allows you to choose exactly what goes into a commit.

---

# 13. Why Git is Fast

Git does NOT copy the whole project each commit.

Instead

Git stores

Objects

↓

References

↓

Hashes

Unchanged objects are reused.

Only new objects are created.

---

# 14. Mental Model

Imagine Git as a library.

Blob

↓

Book

Tree

↓

Bookshelf

Commit

↓

Library Snapshot

Branch

↓

Bookmark

HEAD

↓

Current Page

---

# 15. Project Rock Example

When we committed

```
feat(frontend): bootstrap React application
```

Git

Created new Blob objects

↓

Created Tree

↓

Created Commit

↓

Moved feature branch pointer

↓

Updated HEAD

No files were copied.

Only references changed.

---

# 16. Common Beginner Mistakes

Thinking

Branch = Folder

Wrong.

Branch = Pointer.

---

Thinking

Commit stores files.

Wrong.

Commit stores references.

---

Thinking

Merge copies files.

Wrong.

Git connects commit histories.

---

# 17. Best Practices

Understand

Working Tree

↓

Index

↓

Repository

Always think in commits.

Not files.

---

# 18. Troubleshooting

Problem

Lost Commit

Solution

```
git reflog
```

Problem

Detached HEAD

Meaning

HEAD points directly to a commit instead of a branch.

---

Problem

Merge conflict

Cause

Two commits modified the same lines.

---

# 19. Production Perspective

Large companies may have repositories with:

- Millions of objects
- Thousands of branches
- Decades of history

Git remains fast because it stores immutable objects and references instead of duplicating entire repositories.

---

# 20. Interview Questions

### What is Git internally?

### What are Blob, Tree and Commit objects?

### What does HEAD point to?

### Does a branch contain commits?

### Why are branches lightweight?

### What does a commit actually store?

### Why is Git fast?

### What is the staging area?

### What is a detached HEAD?

### How does Git detect file changes?

---

# 21. Project Rock Learnings

During Project Rock we learned:

- A branch is not a folder.
- Merge conflicts happen because histories diverge.
- Git never duplicated our repository.
- Feature branches are lightweight because only pointers move.
- Understanding Git Internals made merge and rebase much easier to visualize.

---

# 22. Revision Cheatsheet

- Git is a content-addressable database.
- Git stores objects, not projects.
- Four object types: Blob, Tree, Commit, Tag.
- Branch = Pointer.
- HEAD = Current branch pointer.
- Commit = Metadata + Tree reference.
- Blob = File contents.
- Tree = Directory structure.
- Staging Area sits between Working Directory and Repository.
- Git is fast because objects are immutable and reused.
- Every object has a SHA hash.

---

# 23. References

Pro Git Book

https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain

Git Documentation

https://git-scm.com/docs
