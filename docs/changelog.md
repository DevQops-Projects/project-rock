# Changelog

All notable changes to Project Rock are documented in this file.

---

## DEVQ-029 – Documentation Dashboard

### Added

- Integrated React frontend with FastAPI backend.
- Implemented Documentation Dashboard.
- Added Axios as the HTTP client.
- Introduced a shared Axios API client.
- Implemented a Documentation Service layer.
- Added TypeScript interface for documentation categories.
- Configured FastAPI CORS middleware for frontend communication.
- Displayed documentation categories dynamically from the backend.

### Changed

- Replaced static documentation content with dynamic API-driven rendering.
- Adopted a feature-based frontend structure for the Documentation module.
- Established a reusable API communication pattern.

### Technical Highlights

Frontend:

- React
- TypeScript
- Axios
- useState
- useEffect

Backend:

- FastAPI
- REST API
- CORS Middleware

### API Endpoint

```
GET /api/v1/documentation/categories
```

### Result

The Documentation page now retrieves category data from the backend and renders it dynamically, establishing the project's first complete frontend-to-backend integration.
