# Git Merge vs Git Rebase

> **Category:** Git
>
> **Difficulty:** Intermediate
>
> **Project:** Project Rock
>
> **Prerequisite:** git-workflow.md

---

# 1. Overview

Both **Merge** and **Rebase** are Git operations used to integrate changes from one branch into another.

Although they achieve a similar goal, they work very differently.

Understanding **when to use Merge** and **when to use Rebase** is one of the most common Git interview topics.

---

# 2. Why Do We Need Merge or Rebase?

Imagine this scenario.

```
main

A ---- B ---- C
```

You create a feature branch.

```
main

A ---- B ---- C
             \
feature       D ---- E
```

While you are developing, another developer pushes changes.

```
main

A ---- B ---- C ---- F ---- G
             \
feature       D ---- E
```

Now your feature branch is behind main.

Before merging, Git must integrate these two histories.

This is where Merge and Rebase come into play.

---

# 3. Merge

Merge combines two independent histories.

## Before Merge

```
main

A ---- B ---- C ---- F ---- G
             \
feature       D ---- E
```

Run

```bash
git checkout main
git merge feature
```

Result

```
A ---- B ---- C ---- F ---- G -------- M
             \                       /
              D ------------------- E
```

Git creates a **Merge Commit**.

---

## Characteristics

✅ Preserves history

✅ Easy to understand

✅ Safe

❌ Extra merge commits

❌ History becomes complex

---

# 4. Rebase

Rebase rewrites commit history.

Instead of creating a merge commit, Git moves your feature commits on top of the latest main.

Before

```
main

A ---- B ---- C ---- F ---- G
             \
feature       D ---- E
```

Run

```bash
git checkout feature
git rebase main
```

Result

```
A ---- B ---- C ---- F ---- G ---- D' ---- E'
```

Notice

D

became

D'

because Git recreated the commits.

---

# 5. Internal Working

Merge

```
Two histories

↓

Merge Commit

↓

History preserved
```

Rebase

```
Replay commits

↓

New commits created

↓

Linear history
```

---

# 6. Mental Model

## Merge

Imagine two roads joining.

```
Road A

-------------

                 \

                  Merge

                 /

-------------
Road B
```

Both roads remain visible.

---

## Rebase

Imagine moving your house.

Old location disappears.

The house is rebuilt somewhere else.

History becomes linear.

---

# 7. Advantages

## Merge

- Safe
- Complete history
- Good for shared branches

---

## Rebase

- Clean history
- Easier code review
- Better commit ordering
- Preferred before Pull Requests

---

# 8. Disadvantages

## Merge

History becomes

```
Merge

Merge

Merge

Merge
```

Difficult to read.

---

## Rebase

Changes commit hashes.

Dangerous if commits have already been shared.

---

# 9. When Should You Use Merge?

Use Merge

✔ Team branches

✔ Shared branches

✔ Release branches

✔ Main branch

---

# 10. When Should You Use Rebase?

Use Rebase

✔ Personal feature branches

✔ Before opening Pull Request

✔ Cleaning history

✔ Updating feature branch with latest main

---

# 11. Golden Rule

Never rebase a branch that other developers are actively using.

Reason

Rebase changes commit history.

Other developers will now have different commit IDs.

This creates confusion and conflicts.

---

# 12. Project Rock Workflow

Our workflow

```
main

↓

feature/devq-028

↓

Development

↓

git fetch origin

↓

git checkout main

↓

git pull origin main

↓

git checkout feature/devq-028

↓

git rebase main

↓

Run Tests

↓

Push

↓

Open Pull Request

↓

Merge into main

↓

Delete branch
```

---

# 13. Real Example from Project Rock

We experienced branch divergence.

Git reported

```
Your branch and origin have diverged.
```

Initially we tried

```
git push
```

Git rejected it.

Why?

Because remote contained commits that local did not.

Solution

Synchronize histories.

Understand the difference between

- fetch
- pull
- merge
- rebase

instead of randomly running commands.

---

# 14. Common Beginner Mistakes

## Mistake 1

Running rebase on main.

Never rewrite main history.

---

## Mistake 2

Rebasing shared branches.

Other developers now have different commit IDs.

---

## Mistake 3

Thinking merge and rebase are identical.

They are not.

---

## Mistake 4

Force pushing after rebase without understanding.

Can overwrite remote history.

---

# 15. How Senior Engineers Think

Beginner

"I always use merge."

Senior

"I choose merge or rebase based on collaboration, history, and workflow."

---

Beginner

"I use whatever Stack Overflow says."

Senior

"I understand how Git is rewriting commit history."

---

# 16. Interview Questions

### What is Git Rebase?

### Difference between Merge and Rebase?

### Why does Rebase change commit hashes?

### Why shouldn't you rebase shared branches?

### Explain a Merge Commit.

### What causes branch divergence?

### When would you prefer Merge?

### When would you prefer Rebase?

### Can Rebase cause data loss?

### Explain fast-forward merge.

---

# 17. One Minute Revision

Merge

- Combines histories
- Creates merge commit
- Safe
- Preserves history
- Best for shared branches

Rebase

- Rewrites history
- No merge commit
- Creates linear history
- Better before PR
- Never rebase shared branches

Golden Rule

> Merge preserves history.
>
> Rebase rewrites history.

---

# 18. References

Git Documentation

https://git-scm.com/docs/git-merge

Git Rebase Documentation

https://git-scm.com/docs/git-rebase
