# React Router

## Overview

React Router is a library that enables **client-side routing** in React applications.

Instead of requesting a new HTML page from the server for every navigation, React Router updates the displayed component while keeping the same page loaded.

This creates a **Single Page Application (SPA)** experience.

---

## Why Do We Need React Router?

Imagine an application with multiple pages:

- Home
- Login
- Dashboard
- Profile
- Settings

Without React Router, you would need separate HTML pages or manually control which components are displayed.

React Router provides a clean way to map URLs to React components.

---

## What is Routing?

Routing determines **which page or component should be displayed** for a given URL.

Example:

| URL | Component |
|------|-----------|
| `/` | Home |
| `/login` | Login |
| `/dashboard` | Dashboard |
| `/documentation` | Documentation |

---

## Traditional Website Routing

Traditional websites rely on the server to generate a new HTML page.

```
Browser

↓

GET /dashboard

↓

Server

↓

Generate HTML

↓

Browser

↓

New Page
```

Every navigation reloads the page.

---

## React Routing (SPA)

React Router works differently.

```
Browser

↓

React Router

↓

Match URL

↓

Render Component

↓

Update UI
```

Only the displayed component changes.

The browser does not reload the entire application.

---

## BrowserRouter

`BrowserRouter` enables routing using the browser's History API.

Example:

```tsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

It allows URLs like:

```
/

```

```
/documentation
```

```
/about
```

without full page reloads.

---

## Routes

Routes define the mapping between URLs and components.

Example:

```tsx
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/documentation" element={<DocumentationPage />} />
</Routes>
```

When the URL changes, React Router renders the matching component.

---

## Route Matching

Suppose the browser opens:

```
/documentation
```

React Router checks every defined route.

```
/

Documentation

Settings

Profile
```

It selects:

```
Documentation
```

and renders:

```
DocumentationPage
```

---

## Navigation

Navigation changes the current route.

Instead of HTML:

```html
<a href="/documentation">
```

React applications use:

```tsx
<Link to="/documentation">
```

or

```tsx
navigate("/documentation")
```

This keeps the SPA experience without reloading the page.

---

## React Router Flow

```
Browser

↓

main.tsx

↓

BrowserRouter

↓

App.tsx

↓

AppRouter

↓

Routes

↓

Selected Page
```

---

## Project Rock Example

Current architecture:

```
main.tsx

↓

App.tsx

↓

AppRouter.tsx

↓

Routes

↓

Home Page
```

Future routes:

```
/

↓

Home

/documentation

↓

Documentation

/settings

↓

Settings

/about

↓

About
```

Each feature will have its own page component.

---

## Why We Created AppRouter.tsx

Instead of placing all routes inside `App.tsx`, we created a dedicated router.

Benefits:

- Cleaner code
- Easier maintenance
- Single place to manage routes
- Better scalability

Future changes only require modifying `AppRouter.tsx`.

---

## Refresh Behaviour

While developing, React Router works correctly because the Vite development server understands client-side routing.

In production, refreshing:

```
/documentation
```

may return:

```
404 Not Found
```

Why?

The web server tries to locate a real file:

```
documentation.html
```

which doesn't exist.

The web server must instead return:

```
index.html
```

so React Router can handle the route.

This is configured later using servers such as Nginx.

---

## Backend vs Frontend Routing

Frontend Routing

```
React Router

↓

Displays Components
```

Backend Routing

```
FastAPI

↓

Processes API Requests
```

Example:

Frontend

```
/documentation
```

Backend

```
/api/v1/documentation
```

Frontend routes display pages.

Backend routes return data.

---

## Project Rock Architecture

```
Browser

↓

React Router

↓

Documentation Page

↓

Axios

↓

FastAPI

↓

Documentation API

↓

JSON Response

↓

React Updates UI
```

React Router and FastAPI routing work together but serve different purposes.

---

## Common Mistakes

### Mistake 1

Using:

```html
<a href="">
```

instead of:

```tsx
<Link>
```

Result:

Entire application reloads.

---

### Mistake 2

Putting every route inside `App.tsx`.

As applications grow, routing becomes difficult to maintain.

---

### Mistake 3

Confusing frontend routes with backend API routes.

Example:

Wrong

```
/documentation
```

should call

```
/documentation
```

Correct

```
/documentation
```

Frontend page

↓

Calls

```
/api/v1/documentation
```

Backend API

---

### Mistake 4

Forgetting server configuration for client-side routing.

Refreshing deep links can return 404 unless the web server serves `index.html`.

---

## Best Practices

- Keep routing inside a dedicated router.
- Organize routes logically.
- Use `<Link>` instead of `<a>` for internal navigation.
- Keep page components separate from reusable UI components.
- Keep backend and frontend routing independent.

---

## Interview Questions

### What is React Router?

A library that enables client-side routing in React applications.

---

### What is a Single Page Application (SPA)?

An application where navigation updates the displayed components without reloading the entire page.

---

### Why use BrowserRouter?

It uses the browser's History API to provide clean URLs and client-side navigation.

---

### Why shouldn't we use HTML anchor tags?

Anchor tags trigger a full page reload.

React Router's `<Link>` performs client-side navigation.

---

### What is the difference between frontend and backend routing?

Frontend routing determines which UI component is displayed.

Backend routing determines which server endpoint processes a request.

---

### Why can refreshing a React route return 404 in production?

Because the web server searches for a physical file instead of returning `index.html` for React Router to handle.

---

## Revision Notes

- React Router enables client-side routing.
- React applications are Single Page Applications (SPAs).
- BrowserRouter manages browser history.
- Routes map URLs to React components.
- Use `<Link>` instead of `<a>` for internal navigation.
- Frontend routes display pages.
- Backend routes return data.
- `AppRouter.tsx` keeps routing organized.
- Production servers must serve `index.html` for unknown routes.
- Project Rock separates frontend routing from backend API routing.
