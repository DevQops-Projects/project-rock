# DEVQ-029 – Documentation Dashboard

## Objective

Integrate the React frontend with the FastAPI backend to display documentation categories dynamically.

---

## Overview

This feature replaces the static Documentation page with data fetched from the backend API.

The frontend retrieves documentation categories using Axios and renders them dynamically using React state.

---

## Backend Endpoint

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/documentation/categories |

### Sample Response

```json
[
  {
    "id": 1,
    "name": "AWS",
    "description": "Amazon Web Services documentation"
  },
  {
    "id": 2,
    "name": "Terraform",
    "description": "Infrastructure as Code"
  }
]
```

---

## Frontend Flow

```
DocumentationPage

↓

documentationService

↓

Axios API Client

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

## Components

### DocumentationPage

Responsible for:

- Fetching documentation categories
- Managing component state
- Rendering category cards

---

### documentationService

Responsible for:

- Calling backend APIs
- Returning typed responses
- Hiding HTTP implementation from UI components

---

### apiClient

Shared Axios instance configured with:

- Base URL
- Request timeout
- Default headers

---

## Technologies Used

- React
- TypeScript
- Axios
- FastAPI
- REST API

---

## Learning Outcomes

This feature introduces:

- React useEffect
- React useState
- Axios API calls
- Service Layer Pattern
- TypeScript Interfaces
- Dynamic UI Rendering
- Backend Integration
- CORS Configuration
