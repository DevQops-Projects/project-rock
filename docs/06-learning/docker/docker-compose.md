# Docker Compose

## Overview

Docker Compose is a tool for defining and managing multi-container applications using a declarative YAML file.

Instead of running multiple `docker run` commands, all infrastructure can be described in a single `compose.yaml` file.

---

# Why Docker Compose?

As applications grow, managing individual containers becomes difficult.

Example:

```text
Frontend
Backend
PostgreSQL
Redis
```

Docker Compose starts and manages all required services together.

---

# Compose File Structure

Project Rock uses:

```text
infrastructure/docker/compose.yaml
```

The file defines:

- Services
- Networks
- Volumes
- Environment variables

---

# Services

Each container is defined as a service.

Example:

```yaml
services:
  postgres:
    image: postgres:17
```

---

# Environment Variables

Environment variables initialize container configuration.

Example:

```yaml
environment:
  POSTGRES_DB: projectrock
  POSTGRES_USER: projectrock
  POSTGRES_PASSWORD: projectrock
```

These values should later be externalized into a `.env` file.

---

# Volumes

Named volumes provide persistent storage.

Example:

```yaml
volumes:
  project-rock-postgres-data:
```

The PostgreSQL container mounts this volume to preserve database data across container recreation.

---

# Networks

Networks allow services to communicate using service names.

Example:

```yaml
networks:
  project-rock-network:
```

---

# Common Commands

Start services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

View running services:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs
```

---

# Lessons Learned in Project Rock

- Infrastructure can be managed declaratively.
- Docker Compose creates containers, networks, and volumes automatically.
- Compose files become the single source of truth for local infrastructure.
- Compose prepares the project for future backend and frontend containerization.
