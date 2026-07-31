# Vite

## Overview

Vite (pronounced **"veet"**, French for *fast*) is a modern frontend build tool and development server.

It is designed to provide:

- Fast project startup
- Instant Hot Module Replacement (HMR)
- Optimized production builds

Vite is now one of the most popular tools for React, Vue, Svelte, and other modern frontend frameworks.

---

## Why Do We Need Vite?

Frontend applications use many files:

- JavaScript / TypeScript
- CSS
- Images
- Fonts
- Components
- Third-party libraries

Browsers cannot efficiently understand or optimize all of these during development.

A build tool helps by:

- Starting a development server
- Bundling files for production
- Optimizing assets
- Handling TypeScript
- Supporting modern JavaScript

---

## Why Was Vite Created?

Before Vite, many React projects used **Create React App (CRA)**.

As projects became larger, developers experienced:

- Slow startup times
- Slow rebuilds
- Long waiting times after saving files

Vite was created to solve these problems by using modern browser features and a faster build process.

---

## How Vite Works

### Development Mode

When you run:

```bash
npm run dev
```

Vite starts a lightweight development server.

```
Developer

↓

Save File

↓

Vite Detects Change

↓

Only Changed Module Reloads

↓

Browser Updates
```

Instead of rebuilding the entire application, Vite reloads only the modified module.

---

# Environment Variables in Vite

Vite supports environment-specific configuration through environment variables.

A common example is configuring the backend API URL:

```text
VITE_API_BASE_URL=http://<BACKEND_HOST>:8000/api/v1
```

The React application can access it using:

```typescript
import.meta.env.VITE_API_BASE_URL
```

Example with Axios:

```typescript
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
```

This avoids hardcoding infrastructure-specific values inside application source code.

---

## Why the `VITE_` Prefix?

Vite only exposes environment variables prefixed with:

```text
VITE_
```

to client-side application code.

Correct:

```text
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Usage:

```typescript
import.meta.env.VITE_API_BASE_URL
```

A variable without the prefix:

```text
API_BASE_URL=http://localhost:8000/api/v1
```

is not exposed through `import.meta.env` by default.

---

## Important Security Rule

Variables prefixed with `VITE_` are available to frontend code and can therefore be visible to users after the application is built.

Never store secrets such as:

```text
VITE_DATABASE_PASSWORD
VITE_AWS_SECRET_KEY
VITE_JWT_SECRET
VITE_PRIVATE_API_KEY
```

Frontend environment variables should contain values that are safe to expose, such as:

```text
VITE_API_BASE_URL
```

### Key Principle

> A frontend `.env` file is configuration management, not secret management.

If the browser needs a value, assume the user can eventually see that value.

---

# Vite `.env` Files

During local development, Project Rock uses:

```text
app/frontend/.env
```

Example:

```text
VITE_API_BASE_URL=http://<BACKEND_HOST>:8000/api/v1
```

The real `.env` file should not be committed.

Instead, commit:

```text
app/frontend/.env.example
```

Example:

```text
VITE_API_BASE_URL=http://<BACKEND_HOST>:8000/api/v1
```

This documents the configuration required by the frontend without storing environment-specific values in source control.

---

# Restart Vite After Configuration Changes

Vite loads environment configuration when the development server starts.

After changing `.env`, restart the development server:

```bash
npm run dev -- --host 0.0.0.0
```

Do not assume changing `.env` will always update an already-running Vite process.

A useful debugging sequence is:

```text
Change .env
    ↓
Restart Vite
    ↓
Test application
    ↓
Check browser Network tab
```

---

# Development vs Production Build

A working Vite development server does not guarantee that the production build succeeds.

During Project Rock development, the application worked through:

```bash
npm run dev
```

but:

```bash
npm run build
```

detected a stale TypeScript import.

Therefore, before committing frontend work, run:

```bash
npm run build
```

The build performs TypeScript compilation and creates the production bundle.

### Practical Rule

```text
npm run dev
    ↓
Useful during development

npm run build
    ↓
Required before considering the change complete
```

Both checks serve different purposes.

---

# Environment Configuration Flow in Project Rock

The current frontend flow is:

```text
.env
 │
 │ VITE_API_BASE_URL
 ▼
import.meta.env
 │
 ▼
apiClient.ts
 │
 ▼
Axios
 │
 ▼
FastAPI API
```

The React components do not need to know the backend host.

For example:

```typescript
apiClient.get("/documentation/categories");
```

The service only knows the API path.

The shared Axios client knows where the backend is located:

```typescript
baseURL: import.meta.env.VITE_API_BASE_URL
```

This provides separation between:

```text
Feature Logic
     ↓
API Client
     ↓
Environment Configuration
```

---

# Common Mistakes

## Hardcoding the backend URL

Avoid:

```typescript
baseURL: "http://100.29.248.133:8000/api/v1"
```

Prefer:

```typescript
baseURL: import.meta.env.VITE_API_BASE_URL
```

---

## Forgetting the `VITE_` prefix

Incorrect:

```text
API_BASE_URL=http://localhost:8000
```

Correct:

```text
VITE_API_BASE_URL=http://localhost:8000
```

---

## Putting secrets in `VITE_*`

Never assume frontend environment variables are private.

```text
VITE_* = client-visible configuration
```

---

## Committing `.env`

Keep the actual environment file ignored:

```gitignore
.env
.env.*
!.env.example
```

Commit `.env.example` instead.

---

## Forgetting to restart Vite

When environment configuration changes:

```text
Update .env
    ↓
Restart Vite
    ↓
Verify
```

---

# Interview Quick Revision

### How does Vite expose environment variables?

Vite exposes client-side environment variables through:

```typescript
import.meta.env
```

Custom variables intended for frontend code must normally use the `VITE_` prefix.

### Can secrets be stored in `VITE_*` variables?

No. These variables become part of client-side code and should be treated as publicly visible configuration.

### Why use an environment variable for the API URL?

Because the backend address can differ between development, staging, and production while the frontend source code remains unchanged.

### Why use a shared Axios client?

It centralizes configuration such as the API base URL, timeout, and headers instead of duplicating them across feature services.

### Does `npm run dev` passing mean the application is production-ready?

No. The production build should also be validated with:

```bash
npm run build
```

This can detect TypeScript, import, and build-time problems that may not have been noticed during development.

---

### Production Mode

When you run:

```bash
npm run build
```

Vite creates an optimized production build.

The output is generated inside:

```
dist/
```

The files are:

- Minified
- Optimized
- Bundled
- Ready for deployment

---

## Hot Module Replacement (HMR)

One of Vite's biggest advantages is **Hot Module Replacement (HMR)**.

Without HMR:

```
Save File

↓

Entire Page Reloads

↓

Application State Lost
```

With HMR:

```
Save File

↓

Only Updated Component Reloads

↓

Application State Preserved
```

This makes development much faster.

---

## Project Structure

A typical Vite project contains:

```
frontend/

├── public/
├── src/
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Important Files

### index.html

Unlike older React projects, Vite uses a single HTML entry point.

```
index.html

↓

main.tsx

↓

App.tsx
```

---

### vite.config.ts

Contains Vite configuration.

Examples:

- Plugins
- Aliases
- Proxy settings
- Build configuration

---

## Development Server

Run:

```bash
npm run dev
```

Default:

```
http://localhost:5173
```

To allow access from another machine:

```bash
npm run dev -- --host 0.0.0.0
```

---

## Project Rock Example

We created the frontend using:

```bash
npm create vite@latest frontend -- --template react-ts
```

This generated:

- React
- TypeScript
- ESLint
- Vite configuration

We then started the development server:

```bash
npm run dev -- --host 0.0.0.0
```

Initially, the browser could not connect.

Reason:

Port **5173** was blocked by the AWS Security Group.

After allowing port **5173**, the React application became accessible.

---

## Development vs Production

### Development

```
npm run dev
```

Purpose:

- Fast development
- HMR
- Debugging

---

### Production

```
npm run build
```

Purpose:

- Optimized application
- Deployment

---

### Preview Production Build

After building:

```bash
npm run preview
```

This serves the production build locally for testing.

---

## Common Commands

Create project:

```bash
npm create vite@latest
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run on all interfaces:

```bash
npm run dev -- --host 0.0.0.0
```

Build production application:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Common Mistakes

### Mistake 1

Trying to access:

```
http://EC2-IP:5173
```

without using:

```bash
--host 0.0.0.0
```

The development server listens only on localhost by default.

---

### Mistake 2

Forgetting to open port **5173** in the AWS Security Group.

The application runs, but the browser cannot connect.

---

### Mistake 3

Editing files inside:

```
node_modules/
```

Changes will be lost after reinstalling dependencies.

Always modify files inside:

```
src/
```

---

### Mistake 4

Thinking Vite is React.

React is the UI library.

Vite is the development and build tool.

---

## Best Practices

- Keep Vite configuration simple.
- Use `npm run dev` during development.
- Test the production build using `npm run preview`.
- Deploy the contents of the `dist/` folder.
- Keep dependencies updated.

---

## Interview Questions

### What is Vite?

A modern frontend build tool and development server.

---

### Why is Vite faster than Create React App?

Because it serves modules directly during development and reloads only changed modules using Hot Module Replacement instead of rebuilding the entire application.

---

### What is Hot Module Replacement (HMR)?

A feature that updates only the modified module without reloading the entire application.

---

### What is generated by `npm run build`?

An optimized production build inside the `dist/` directory.

---

### Is Vite a frontend framework?

No.

Vite is a build tool.

React is the frontend library.

---

### What is the purpose of `vite.config.ts`?

To configure the Vite development server and build process.

---

## Revision Notes

- Vite is a frontend build tool.
- React builds the UI.
- Vite starts the development server.
- HMR updates only changed modules.
- `npm run dev` starts development.
- `npm run build` creates the production build.
- `dist/` contains production-ready files.
- `vite.config.ts` stores configuration.
- Use `--host 0.0.0.0` to access Vite from another machine.
- Project Rock uses Vite with React and TypeScript.
