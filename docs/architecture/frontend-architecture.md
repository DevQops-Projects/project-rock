# Frontend Architecture

## Overview

Project Rock follows a feature-based architecture to improve scalability, maintainability, and code organization.

The application separates shared infrastructure from feature-specific code.

---

## Directory Structure

```text
src/
├── api/
│   └── apiClient.ts
│
├── assets/
│
├── components/
│   ├── common/
│   └── ui/
│
├── features/
│   ├── documentation/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── health/
│   │   ├── components/
│   │   └── pages/
│   │
│   └── home/
│       ├── components/
│       └── pages/
│
├── hooks/
├── layouts/
├── routes/
├── styles/
├── types/
└── utils/
```

---

## Feature-Based Organization

Each feature owns its pages, components, and services.

Example:

```text
features/
└── documentation/
    ├── components/
    ├── pages/
    └── services/
```

Benefits:

- Improved scalability
- Better separation of concerns
- Easier feature maintenance
- Reduced coupling between modules

---

## Shared Directories

### api/

Contains shared HTTP client configuration.

Example:

- Axios instance
- Base URL configuration
- Common request settings

---

### components/common/

Reusable layout components shared across the application.

Examples:

- Navbar
- Sidebar
- Footer

---

### components/ui/

Reusable UI components.

Examples:

- Button
- Card
- PageTitle

---

### layouts/

Defines application layouts.

Current layout:

- MainLayout

---

### routes/

Application routing configuration.

Responsible for:

- Route definitions
- Layout integration
- Feature navigation

---

### hooks/

Reserved for reusable custom React hooks.

---

### styles/

Global application styles.

---

### utils/

Reusable helper functions and utilities.

---

## API Communication Flow

```text
React Page

↓

Feature Service

↓

Shared Axios Client

↓

FastAPI Backend

↓

JSON Response

↓

React State

↓

UI Rendering
```

---

## Design Principles

- Feature-first organization
- Separation of concerns
- Shared infrastructure
- Reusable UI components
- Typed API communication
- Scalable folder structure
