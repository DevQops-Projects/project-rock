# React Basics

## Overview

React is a JavaScript library for building user interfaces using reusable components.

Project Rock uses React to build a modern Single Page Application (SPA), where the browser dynamically updates the UI without reloading the entire page.

---

# Components

React applications are built from components.

Example:

```tsx
function HomePage() {
  return <h1>Home</h1>;
}
```

Each component is responsible for rendering a small part of the user interface.

---

# Props

Props allow data to be passed from one component to another.

Example:

```tsx
function Greeting({ name }: { name: string }) {
  return <h1>Hello {name}</h1>;
}
```

Props are read-only.

---

# State

State stores data that changes during the lifetime of a component.

Example:

```tsx
const [count, setCount] = useState(0);
```

Updating state automatically re-renders the component.

---

# useEffect

The `useEffect()` hook performs side effects such as:

- Calling APIs
- Fetching data
- Starting timers
- Subscribing to events

Example:

```tsx
useEffect(() => {
  loadData();
}, []);
```

The empty dependency array (`[]`) means the effect runs once after the component mounts.

---

# Loading, Error and Success States

When fetching data from an API, components should handle different states.

Typical flow:

```text
Loading
    ↓
Success
```

or

```text
Loading
    ↓
Error
    ↓
Retry
```

Providing clear loading and error messages improves the user experience.

---

# Polling with useEffect

Some pages need to refresh their data periodically, such as monitoring dashboards or health pages.

Example:

```tsx
useEffect(() => {
  loadHealth();

  const interval = setInterval(loadHealth, 30000);

  return () => clearInterval(interval);
}, []);
```

The cleanup function prevents memory leaks by clearing the interval when the component unmounts.

---

# Conditional Rendering

React allows components to render different UI based on application state.

Example:

```tsx
if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Something went wrong.</p>;
}

return <Dashboard />;
```

This pattern keeps components predictable and easy to understand.

---

# Best Practices

- Keep components focused on a single responsibility.
- Use state only when data changes.
- Keep API calls outside presentation logic where possible.
- Handle loading and error states explicitly.
- Clean up timers and subscriptions inside `useEffect()`.

---

# Lessons Learned in Project Rock

- React components should remain focused on rendering UI.
- API communication belongs in feature-specific service files.
- Every API request should handle loading, success, and error states.
- Long-running timers should always be cleaned up to avoid memory leaks.
- Retry mechanisms improve usability without requiring a page refresh.
