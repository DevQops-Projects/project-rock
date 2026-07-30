# React Architecture

## Overview

React is a **JavaScript library** for building modern, interactive, and reusable user interfaces (UI).

Instead of updating the entire web page after every user action, React updates only the parts of the page that have changed.

React is based on the idea of **building applications using reusable components**.

---

## Why Do We Need React?

Before React, websites were mostly built using:

- HTML
- CSS
- JavaScript
- jQuery

As applications became larger, developers faced several problems:

- Duplicate code
- Difficult maintenance
- Manual DOM manipulation
- Poor scalability
- Hard-to-track application state

React solves these problems by organizing the UI into reusable components and efficiently updating the page.

---

## Traditional Web Applications

A traditional website works like this:

```
User clicks button
        │
        ▼
Browser sends request
        │
        ▼
Server generates HTML
        │
        ▼
Entire page reloads
```

Every interaction often required a new page to be loaded.

Examples:

- Login
- Profile page
- Dashboard
- Products page

---

## React Applications

React follows a different approach.

```
User clicks button
        │
        ▼
React updates application state
        │
        ▼
Virtual DOM compares changes
        │
        ▼
Only changed elements are updated
```

The page remains loaded while only the necessary UI changes.

This creates a much smoother user experience.

---

## What is a Component?

A component is an independent, reusable piece of UI.

Examples:

```
Navbar

Sidebar

Footer

Login Form

Search Box

Product Card
```

Instead of writing the same HTML multiple times, we create one component and reuse it.

Example:

```
Dashboard

├── Navbar
├── Sidebar
├── Header
├── Statistics Cards
├── Recent Activity
└── Footer
```

Each part is developed independently.

---

## Benefits of Components

- Reusable
- Easier to maintain
- Easier to test
- Better code organization
- Independent development

Think of components as LEGO bricks.

Small pieces combine to build large applications.

---

## React Project Structure

A React project commonly contains:

```
frontend/

├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── vite.config.ts
```

Each folder has a specific responsibility.

---

## Feature-Based Architecture

As applications grow, organizing everything by file type becomes difficult.

Instead of:

```
components/

pages/

services/

types/
```

Large applications often organize code by feature.

Example:

```
features/

authentication/

dashboard/

documentation/

settings/
```

Each feature contains its own:

- Components
- API calls
- Types
- Hooks
- Tests

This improves scalability and reduces coupling.

---

## Project Rock Architecture

Current structure:

```
frontend/src/

api/

components/

layouts/

pages/

routes/

services/

styles/

types/
```

As Project Rock grows, we may gradually move to a feature-based structure while keeping shared components in common folders.

This approach keeps the application modular and easy to maintain.

---

## React Rendering Flow

```
main.tsx
      │
      ▼
App.tsx
      │
      ▼
AppRouter
      │
      ▼
Page
      │
      ▼
Components
```

Every React application starts from `main.tsx`.

---

## Project Rock Example

Our application currently follows this flow:

```
Browser

↓

main.tsx

↓

App.tsx

↓

AppRouter

↓

Home Page
```

As we add features, the router will decide which page to display based on the URL.

---

## Common Mistakes

### Mistake 1

Creating very large components.

Example:

```
Dashboard.tsx

1200 lines
```

Instead, split into smaller reusable components.

---

### Mistake 2

Duplicating UI code.

If you copy the same JSX multiple times, it probably should be a reusable component.

---

### Mistake 3

Mixing API logic with UI logic.

Bad:

```
Component

↓

HTTP Request

↓

Rendering

↓

Validation

↓

Business Logic
```

Good:

```
Component

↓

Service

↓

API

↓

Backend
```

Each layer has a clear responsibility.

---

### Mistake 4

Keeping everything inside App.tsx.

`App.tsx` should remain simple and mainly configure routing or application providers.

---

## Best Practices

- Build small reusable components.
- Keep components focused on one responsibility.
- Separate UI from API logic.
- Keep routing in a dedicated folder.
- Use TypeScript interfaces for data models.
- Prefer composition over duplication.

---

## Interview Questions

### What is React?

A JavaScript library for building component-based user interfaces.

---

### Why was React created?

To simplify building complex user interfaces by using reusable components and efficient UI updates.

---

### What is a component?

A reusable and independent piece of the user interface.

---

### Why is React called component-based?

Because applications are built by combining small reusable components.

---

### What is the Virtual DOM?

A lightweight in-memory representation of the real DOM used by React to efficiently determine what needs to be updated.

---

### Why is React faster than manually updating the DOM?

Because React compares changes using the Virtual DOM and updates only the affected elements instead of rebuilding the entire page.

---

## Revision Notes

- React is a UI library.
- Applications are built using reusable components.
- Components improve maintainability and scalability.
- React updates only changed parts of the UI.
- `main.tsx` is the application entry point.
- `App.tsx` is the root component.
- Routing determines which page is displayed.
- Keep UI, routing, and API logic separate.
- Project Rock uses a modular architecture that can evolve into feature-based organization.
