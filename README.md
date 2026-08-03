# 🚀 Project Rock

> **A production-inspired DevOps learning platform built to demonstrate modern software engineering, Cloud, DevOps, Platform Engineering, and AI-assisted engineering practices.**

---

## 📖 About Project Rock

Project Rock is an open-source engineering and learning project developed under the **DevQops** organization.

The goal is not simply to build another web application.

Project Rock is being developed as a realistic application workload through which modern engineering practices can be learned, implemented, tested, documented, and improved.

The project is designed to progressively explore:

- Software Engineering
- Cloud Engineering
- DevOps
- Infrastructure as Code
- CI/CD
- Containers
- Kubernetes
- Observability
- Security
- Platform Engineering
- AI-assisted engineering

Rather than learning these technologies independently, Project Rock introduces them as solutions to real engineering problems encountered while building and operating the platform.

---

# 🎯 Vision

DevOps learning is often fragmented across tutorials, documentation, videos, labs, and isolated projects.

Project Rock aims to combine learning with practical engineering.

The platform is being built around the idea:

> **Learn the technology by understanding the problem it solves and implementing it in a real system.**

Official documentation remains the primary source of technical truth, while Project Rock focuses on practical implementation, engineering decisions, troubleshooting, and lessons learned.

---

# 🏗️ Current Application

Project Rock currently consists of a React frontend and FastAPI backend.

```text
User
 │
 ▼
React + TypeScript
 │
 │ HTTP / REST
 ▼
FastAPI
 │
 ├── API Routing
 ├── Services
 ├── Schemas
 ├── Configuration
 └── Logging
 │
 ▼
Future Persistence Layer
```

The application is currently running on AWS EC2 while the surrounding infrastructure and deployment platform are developed incrementally.

---

# ✨ Current Capabilities

The project currently includes:

- React + TypeScript frontend
- Vite frontend build tooling
- FastAPI backend
- Versioned REST API (`/api/v1`)
- Feature-based frontend architecture
- Layered backend architecture
- Frontend-to-backend API integration
- Centralized Axios API client
- Environment-based application configuration
- CORS configuration
- Backend health endpoint
- Documentation categories API
- AWS EC2 development environment
- Elastic IP configuration
- Git feature-branch workflow
- Structured engineering and learning documentation
- Terraform foundation and workflow documentation

Additional platform capabilities will be introduced incrementally as the project evolves.

---

# 🛠️ Technology Stack

## Currently Implemented

| Category | Technology |
|----------|------------|
| Frontend | React + Vite + TypeScript |
| Backend | FastAPI |
| Database | PostgreSQL 17 |
| ORM | SQLAlchemy 2.x *(integration in progress)* |
| Database Driver | Psycopg 3 |
| Database Migrations | Alembic *(setup in progress)* |
| Containers | Docker & Docker Compose |

---

# 🏛️ Architecture

Project Rock follows a **modular application architecture** designed to remain understandable while allowing the system to evolve as requirements grow.

## Frontend

The frontend follows a feature-oriented structure:

```text
frontend/src/
│
├── api/
├── components/
├── features/
│   ├── documentation/
│   ├── health/
│   └── home/
├── hooks/
├── layouts/
├── routes/
├── styles/
└── utils/
```

Feature-specific code is kept close to the feature that owns it.

Example:

```text
features/documentation/
├── components/
├── pages/
├── services/
└── types/
```

## Backend

The FastAPI backend separates API routing, business logic, schemas, configuration, and data access responsibilities.

```text
backend/app/
│
├── core/
├── models/
├── repositories/
├── routers/
│   └── v1/
├── schemas/
├── services/
└── main.py
```

Public APIs are versioned under:

```text
/api/v1
```

Example:

```text
GET /api/v1/health
GET /api/v1/documentation/categories
```

---

# ⚙️ Configuration Management

Environment-specific values are kept outside application source code.

Frontend:

```text
VITE_API_BASE_URL
```

Backend:

```text
FRONTEND_URL
```

The configuration flow follows:

```text
Environment
     │
     ▼
Configuration
     │
     ▼
Application
```

rather than:

```text
Infrastructure values
     │
     ▼
Hardcoded source code
```

Real `.env` files are excluded from Git while `.env.example` files document the required configuration.

---

# 📂 Repository Structure

```text
project-rock/
│
├── app/
│   ├── backend/
│   └── frontend/
│
├── infrastructure/
├── platform/
├── cicd/
├── observability/
├── docs/
├── diagrams/
└── scripts/
```

The repository is intentionally structured to grow with the engineering lifecycle of the platform.

---

# 📚 Learning Documentation

One of the core goals of Project Rock is to document not only **what was built**, but also **what was learned while building it**.

Learning documentation is maintained under:

```text
docs/06-learning/
```

Current areas include:

```text
06-learning/
├── aws/
├── frontend/
├── git/
├── python/
├── sprint-retrospectives/
└── terraform/
```

The notes focus on:

- Core concepts
- Practical implementation
- Common mistakes
- Debugging experiences
- Engineering decisions
- Production considerations
- Interview revision

This creates a reusable engineering knowledge base alongside the application itself.

---

# 🧠 Engineering Philosophy

Project Rock follows several guiding principles.

### Every technology should solve a problem

Technology is not introduced simply because it is popular.

Before introducing a tool, the project should answer:

> What engineering problem does this solve?

---

### Build incrementally

Large architectural changes are broken into small, testable improvements.

```text
Implement
   ↓
Test
   ↓
Debug
   ↓
Document
   ↓
Commit
```

---

### Configuration belongs outside code

Environment-specific configuration should not require source-code changes.

---

### Validate before considering work complete

Frontend development includes both:

```bash
npm run dev
```

and production build validation:

```bash
npm run build
```

Backend changes are verified through application testing and automated tests.

---

### Documentation is part of engineering

Architecture decisions, mistakes, troubleshooting, and lessons learned are treated as part of the project—not as an afterthought.

---

# 🔄 Development Workflow

Project Rock uses feature branches for incremental development.

```text
main
 │
 └── feature/devq-xxx
          │
          ├── Implement
          ├── Test
          ├── Document
          └── Pull Request
                 │
                 ▼
               main
```

Typical workflow:

```bash
git checkout main
git pull origin main

git checkout -b feature/devq-xxx
```

After implementation and verification:

```bash
git add .
git commit -m "<type>(<scope>): <description>"
git push -u origin feature/devq-xxx
```

Changes are reviewed through a Pull Request before being merged.

---

# ☁️ Cloud Environment

Project Rock currently uses AWS EC2 as its development cloud environment.

The application currently runs as:

```text
Internet
   │
   ▼
AWS Security Group
   │
   ▼
EC2
   │
   ├── React / Vite :5173
   │
   └── FastAPI      :8000
```

An Elastic IP provides a stable public address for the current EC2 environment.

This is an intermediate architecture.

As the project evolves, direct application exposure through development ports will be replaced by more production-appropriate networking and deployment patterns.

---

# 🗺️ Engineering Roadmap

Project Rock is being developed incrementally.

### Foundation

- ✅ Repository and engineering foundation
- ✅ Initial AWS environment
- ✅ Terraform foundation
- ✅ Backend foundation
- ✅ Frontend foundation
- ✅ React routing
- ✅ Versioned FastAPI routing
- ✅ Frontend/backend API integration
- ✅ Environment configuration
- 🔄 Frontend resilience and user states

### Upcoming Evolution

Planned areas include:

- Database integration
- Authentication and authorization
- Docker
- CI pipelines
- Automated testing improvements
- Deployment automation
- AWS infrastructure evolution
- Kubernetes
- Monitoring and observability
- Centralized logging
- Security improvements
- AI-assisted learning capabilities
- Platform engineering capabilities

The roadmap evolves as new engineering requirements emerge.

---

# 🚀 Running the Application

## Backend

```bash
cd app/backend

source .venv/bin/activate

uvicorn app.main:app \
  --reload \
  --host 0.0.0.0 \
  --port 8000
```

Backend API documentation is available through FastAPI Swagger UI at:

```text
http://<BACKEND_HOST>:8000/docs
```

---

## Frontend

```bash
cd app/frontend

npm install

npm run dev -- --host 0.0.0.0
```

Before considering frontend changes complete:

```bash
npm run build
```

---

# 🔐 Environment Configuration

Create local environment files from the provided examples.

Frontend:

```bash
cd app/frontend
cp .env.example .env
```

Backend:

```bash
cd app/backend
cp .env.example .env
```

Update the values according to your environment.

Never commit real `.env` files.

---

# 🤝 Contributing

Project Rock follows an engineering-focused contribution workflow.

Contributions should:

- Use feature branches
- Keep changes focused
- Include appropriate testing
- Update relevant documentation
- Avoid committing secrets or environment-specific configuration
- Use Pull Requests for review

Detailed contribution guidelines can evolve in `CONTRIBUTING.md`.

---

# 📈 Current Status

Project Rock is currently in **active development**.

The application foundation is operational:

```text
React Frontend
      │
      ▼
Versioned REST API
      │
      ▼
FastAPI Backend
      │
      ▼
AWS EC2 Environment
```

The next stages focus on making the application and its delivery platform progressively more production-ready.

---

# 🎯 Long-Term Goal

Project Rock is intended to become both:

**A learning platform**

for understanding DevOps, Cloud, Platform Engineering, and modern software engineering through practical implementation.

and

**An engineering portfolio**

demonstrating how a system evolves from a simple application into a production-inspired cloud-native platform.

The value of the project is not only the final architecture.

The engineering journey—including decisions, mistakes, debugging, automation, documentation, and evolution—is part of the product.

---

## ⭐ DevQops

Built with ❤️ under the **DevQops** engineering organization.
