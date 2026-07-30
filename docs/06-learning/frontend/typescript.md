# TypeScript

## Overview

TypeScript is an open-source programming language developed by Microsoft that builds on JavaScript by adding **static typing**.

TypeScript helps developers catch errors during development instead of discovering them while the application is running.

It is fully compatible with JavaScript and is widely used in modern React, Angular, and Node.js applications.

---

## Why Do We Need TypeScript?

JavaScript is dynamically typed.

Example:

```javascript
let age = 25;
age = "Twenty Five";
```

JavaScript allows this without any warning.

This flexibility is useful but can also introduce bugs that are difficult to find.

TypeScript detects these issues before the code runs.

Example:

```typescript
let age: number = 25;

age = "Twenty Five";
```

Result:

```
Type 'string' is not assignable to type 'number'.
```

The error is detected during development.

---

## JavaScript vs TypeScript

| JavaScript | TypeScript |
|------------|------------|
| Dynamic typing | Static typing |
| Errors at runtime | Errors during development |
| No type checking | Type checking |
| Easier to start | Easier to maintain large projects |

---

## How TypeScript Works

Browsers understand JavaScript, **not TypeScript**.

TypeScript code must first be compiled into JavaScript.

```
TypeScript (.ts / .tsx)

↓

TypeScript Compiler

↓

JavaScript (.js)

↓

Browser
```

This compilation happens automatically when using tools like Vite.

---

## Type Annotations

Type annotations specify the expected data type.

Example:

```typescript
let username: string = "DevQops";

let age: number = 25;

let isAdmin: boolean = true;
```

---

## Type Inference

TypeScript can often determine the type automatically.

Example:

```typescript
let username = "DevQops";
```

TypeScript automatically infers:

```
string
```

You don't always need to specify the type.

---

## Interfaces

Interfaces describe the shape of an object.

Example:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}
```

A variable using this interface:

```typescript
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
```

Interfaces improve readability and consistency.

---

## Type Aliases

Another way to define custom types.

```typescript
type Status = "Pending" | "Approved" | "Rejected";
```

Used for unions, primitives, and more complex type combinations.

---

## Interface vs Type

### Use Interface

- Objects
- API models
- Component props

### Use Type

- Union types
- Primitive aliases
- Function signatures
- Utility types

In Project Rock, we'll generally use:

- **Interfaces** for API data models.
- **Types** where union or utility types make more sense.

---

## TypeScript in React

React components often receive data through **props**.

Example:

```tsx
interface ButtonProps {
    label: string;
}

function Button({ label }: ButtonProps) {
    return <button>{label}</button>;
}
```

If the wrong data type is passed, TypeScript reports an error before the application runs.

---

## Project Rock Example

Our frontend was created using:

```bash
npm create vite@latest frontend -- --template react-ts
```

The `react-ts` template configured:

- React
- TypeScript
- Vite
- ESLint

Project files include:

```
tsconfig.json

tsconfig.app.json

tsconfig.node.json
```

These configuration files control how TypeScript compiles the project.

---

## Important File Extensions

### .ts

Used for regular TypeScript files.

Example:

```
api.ts

utils.ts

types.ts
```

---

### .tsx

Used when the file contains JSX.

Example:

```
App.tsx

HomePage.tsx

Navbar.tsx
```

---

## Common Commands

Check TypeScript version:

```bash
npx tsc --version
```

Compile manually:

```bash
npx tsc
```

Type checking:

```bash
npx tsc --noEmit
```

---

## Common Mistakes

### Mistake 1

Using `any` everywhere.

```typescript
let user: any;
```

This disables many benefits of TypeScript.

Use proper types whenever possible.

---

### Mistake 2

Ignoring compiler errors.

TypeScript warnings often point to real bugs.

Fix them instead of suppressing them.

---

### Mistake 3

Creating duplicate interfaces.

Reuse shared models instead of defining the same interface multiple times.

---

### Mistake 4

Confusing `.ts` and `.tsx`.

- `.ts` → No JSX.
- `.tsx` → Contains JSX.

---

## Best Practices

- Prefer inferred types when obvious.
- Use interfaces for API models.
- Avoid `any`.
- Keep shared types in a dedicated `types/` folder.
- Treat TypeScript errors as early bug detection.

---

## Interview Questions

### What is TypeScript?

A superset of JavaScript that adds static typing and compiles to JavaScript.

---

### Why use TypeScript?

To detect errors during development, improve maintainability, and provide better tooling support.

---

### Does the browser understand TypeScript?

No.

TypeScript must be compiled into JavaScript before execution.

---

### Difference between JavaScript and TypeScript?

JavaScript is dynamically typed.

TypeScript adds optional static typing.

---

### Difference between Interface and Type?

Interfaces primarily describe object structures.

Types can represent objects, primitives, unions, tuples, and more complex combinations.

---

### Why avoid `any`?

Using `any` disables type checking, reducing the benefits of TypeScript.

---

## Revision Notes

- TypeScript extends JavaScript.
- Browsers run JavaScript, not TypeScript.
- TypeScript is compiled before execution.
- Static typing catches errors early.
- `.ts` = TypeScript.
- `.tsx` = TypeScript + JSX.
- Interfaces define object structures.
- Types define aliases and unions.
- Avoid `any`.
- Project Rock uses React + TypeScript + Vite.
