# Node.js, npm & npx

## Overview

When starting a modern JavaScript or TypeScript project, you will frequently use three terms:

- Node.js
- npm
- npx

Although they are closely related, they serve different purposes.

Understanding the difference helps you manage projects, install packages, and run development tools correctly.

---

## Why Do We Need Them?

Originally, JavaScript could only run inside a web browser.

This meant developers could not use JavaScript to:

- Build servers
- Run scripts
- Install project dependencies
- Execute build tools

Node.js solved this problem by allowing JavaScript to run outside the browser.

Along with Node.js came npm, which made it easy to install and manage JavaScript packages.

---

## What is Node.js?

Node.js is a JavaScript runtime built on Google's V8 JavaScript engine.

It allows JavaScript code to run outside a web browser.

Examples:

- Backend applications
- Build tools
- CLI applications
- Automation scripts

Without Node.js, commands like:

```bash
npm
npx
vite
```

would not exist.

---

## What is npm?

npm stands for:

```
Node Package Manager
```

It comes bundled with Node.js.

Its responsibilities include:

- Installing packages
- Managing dependencies
- Running project scripts
- Publishing packages

Example:

```bash
npm install axios
```

This downloads Axios into:

```
node_modules/
```

and updates:

```
package.json
package-lock.json
```

---

## What is npx?

npx executes packages without requiring a global installation.

Example:

```bash
npx create-vite frontend
```

Instead of installing `create-vite` globally, npx:

1. Downloads it temporarily.
2. Executes it.
3. Removes the temporary copy (if not cached).

This ensures you always use the latest version.

---

## Relationship

```
Node.js
    │
    ├── npm
    │     ├── Install Packages
    │     ├── Manage Dependencies
    │     └── Run Scripts
    │
    └── npx
          └── Execute Packages
```

---

## package.json

Every Node project contains:

```
package.json
```

This file describes the project.

Example:

```json
{
  "name": "frontend",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

It defines:

- Project name
- Version
- Scripts
- Dependencies
- Development dependencies

Think of it as the project's configuration file.

---

## package-lock.json

This file records the exact versions of every installed package.

Why?

Suppose today:

```
React 19.1.0
```

Tomorrow:

```
React 19.2.0
```

Without a lock file, two developers could install different versions.

The lock file ensures everyone installs the exact same dependency tree.

Always commit:

```
package-lock.json
```

---

## node_modules

All installed packages are stored here.

Example:

```
node_modules/

react/

react-dom/

vite/

axios/
```

This directory can become very large.

Never commit it to Git.

It can always be recreated using:

```bash
npm install
```

---

## Project Rock Example

We created our frontend using:

```bash
npm create vite@latest frontend -- --template react-ts
```

Internally, npm used:

```
npx create-vite
```

to scaffold the project.

After creation:

```bash
npm install
```

downloaded all dependencies into:

```
node_modules/
```

We later installed additional packages:

```bash
npm install react-router-dom
```

```bash
npm install axios
```

These packages were automatically added to:

```
package.json
```

---

## Common Commands

Check versions:

```bash
node --version

npm --version
```

Install project dependencies:

```bash
npm install
```

Install a package:

```bash
npm install axios
```

Install development dependency:

```bash
npm install -D tailwindcss
```

Run development server:

```bash
npm run dev
```

Build production application:

```bash
npm run build
```

Execute package:

```bash
npx create-vite
```

List installed packages:

```bash
npm list
```

---

## Common Mistakes

### Mistake 1

Committing:

```
node_modules/
```

Why it's wrong:

- Very large
- Platform dependent
- Can be recreated

Always ignore it using:

```
node_modules/
```

in `.gitignore`.

---

### Mistake 2

Deleting:

```
package-lock.json
```

This can cause inconsistent dependency versions across different machines.

---

### Mistake 3

Using outdated global packages.

Instead of:

```bash
npm install -g create-vite
```

prefer:

```bash
npx create-vite
```

or

```bash
npm create vite@latest
```

---

### Mistake 4

Running npm commands outside the project directory.

Always verify you're inside the folder containing:

```
package.json
```

---

## Best Practices

- Commit `package.json`.
- Commit `package-lock.json`.
- Never commit `node_modules`.
- Use `npm install` to recreate dependencies.
- Prefer `npx` for one-time tools.
- Keep Node.js updated to an LTS version.

---

## Interview Questions

### What is Node.js?

A JavaScript runtime that allows JavaScript to execute outside a web browser.

---

### What is npm?

Node Package Manager used to install and manage JavaScript packages.

---

### What is npx?

A tool that executes npm packages without requiring a global installation.

---

### Difference between npm and npx?

- npm installs packages.
- npx executes packages.

---

### Why shouldn't we commit node_modules?

Because it is generated automatically, is very large, and can be recreated using:

```bash
npm install
```

---

### Why do we commit package-lock.json?

To ensure every developer installs exactly the same dependency versions.

---

## Revision Notes

- Node.js runs JavaScript outside the browser.
- npm manages project dependencies.
- npx executes packages without global installation.
- `package.json` describes the project.
- `package-lock.json` locks dependency versions.
- `node_modules` contains installed packages.
- Never commit `node_modules`.
- Always commit `package-lock.json`.
- Project Rock uses Node.js + npm + Vite for the frontend.
