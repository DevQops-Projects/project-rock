# Python Virtual Environments

## Overview

A **Python Virtual Environment (venv)** is an isolated Python environment that allows each project to have its own dependencies, independent of the system Python or other projects.

It ensures that packages installed for one project do not interfere with another.

---

## Why Do We Need It?

Imagine you have two Python projects.

Project A requires:

```
FastAPI 0.115
```

Project B requires:

```
FastAPI 0.90
```

If both projects use the system Python, installing one version will overwrite the other, causing compatibility issues.

A virtual environment solves this by creating a separate Python environment for each project.

---

## How It Works

A virtual environment contains its own:

- Python executable
- pip
- Installed packages
- Scripts

Example:

```
backend/

├── .venv/
│   ├── bin/
│   ├── lib/
│   ├── include/
│   └── pyvenv.cfg
│
├── app/
└── pyproject.toml
```

When activated, the shell uses the Python executable inside `.venv` instead of the system Python.

---

## System Python vs Virtual Environment

### System Python

```
/usr/bin/python3
```

Shared by the operating system and all users.

---

### Virtual Environment

```
backend/.venv/bin/python
```

Private to the project.

Each project can have different package versions.

---

## Activation

Linux/macOS

```bash
source .venv/bin/activate
```

Windows (PowerShell)

```powershell
.venv\Scripts\Activate.ps1
```

After activation, your terminal prompt changes:

```
(.venv)
ubuntu@server:~/project/backend$
```

This indicates that the virtual environment is active.

---

## Deactivation

```bash
deactivate
```

The shell returns to the system Python.

---

## How to Verify

Check Python location:

```bash
which python
```

Expected:

```
.../backend/.venv/bin/python
```

Check pip:

```bash
which pip
```

Expected:

```
.../backend/.venv/bin/pip
```

Check active environment:

```bash
echo $VIRTUAL_ENV
```

Expected:

```
.../backend/.venv
```

---

## Project Rock Example

While starting the backend, we ran:

```bash
uvicorn app.main:app --reload
```

Result:

```
Command 'uvicorn' not found
```

Reason:

The virtual environment was **not activated**, so the shell searched the system PATH instead of the project's `.venv`.

After activating:

```bash
source .venv/bin/activate
```

the command worked correctly because `uvicorn` was installed inside the virtual environment.

---

## Common Commands

Create a virtual environment:

```bash
python3 -m venv .venv
```

Activate:

```bash
source .venv/bin/activate
```

Install packages:

```bash
pip install fastapi uvicorn
```

View installed packages:

```bash
pip list
```

Freeze dependencies:

```bash
pip freeze
```

Deactivate:

```bash
deactivate
```

---

## Common Mistakes

### Mistake 1

Running Python commands without activating `.venv`.

Result:

```
ModuleNotFoundError
```

or

```
Command not found
```

---

### Mistake 2

Committing `.venv` to Git.

Why it's wrong:

- Large size
- Platform dependent
- Easily recreated

Always add:

```
.venv/
```

to `.gitignore`.

---

### Mistake 3

Installing packages globally using `sudo pip`.

This can break the system Python and cause package conflicts.

Always install packages inside a virtual environment.

---

### Mistake 4

Creating multiple virtual environments accidentally.

During Project Rock, we accidentally created:

```
app/backend/app/venv
```

instead of:

```
app/backend/.venv
```

Lesson:

Always create the virtual environment at the project root.

---

## Best Practices

- Use one virtual environment per project.
- Name it `.venv`.
- Never commit `.venv` to Git.
- Activate the environment before development.
- Store dependencies in `pyproject.toml` (or `requirements.txt` for older projects).
- Recreate the environment instead of copying it between machines.

---

## Interview Questions

### What is a Python virtual environment?

An isolated Python environment that allows each project to manage its own dependencies independently.

---

### Why shouldn't we install packages globally?

Global packages can conflict between projects and may affect the operating system.

---

### How do you know if a virtual environment is active?

- Terminal prompt shows `(.venv)`
- `which python` points to `.venv/bin/python`
- `echo $VIRTUAL_ENV` returns the environment path

---

### What is the purpose of `.gitignore` for `.venv`?

The virtual environment is generated locally and can be recreated. It should not be version controlled.

---

## Revision Notes

- `.venv` isolates project dependencies.
- Activate before running Python commands.
- `which python` verifies the active interpreter.
- `deactivate` exits the environment.
- Never commit `.venv`.
- One project = One virtual environment.
- Project Rock uses `app/backend/.venv`.
