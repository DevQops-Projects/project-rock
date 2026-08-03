# Docker Basics

## Overview

Docker is a containerization platform that packages applications and their dependencies into portable, lightweight containers.

Instead of installing software directly on an operating system, Docker provides a consistent runtime environment that behaves the same across development, testing, and production.

This eliminates the common "works on my machine" problem.

---

# Why Docker?

Without Docker, developers need to install and configure:

- Programming language runtimes
- Package managers
- Databases
- Supporting tools

Different operating systems and software versions often lead to inconsistent environments.

Docker solves this by packaging everything required to run an application.

---

# Docker Architecture

```text
Developer
     │
     ▼
 Docker CLI
     │
     ▼
Docker Engine
     │
     ▼
Container
```

The Docker Engine manages images, containers, networks, and volumes.

---

# Core Concepts

## Docker Image

A Docker image is a read-only template that contains:

- Application code
- Runtime
- Libraries
- Dependencies
- Configuration

Images cannot execute by themselves.

---

## Docker Container

A container is a running instance of an image.

Relationship:

```text
Docker Image
      │
docker run
      ▼
Docker Container
```

Multiple containers can be created from a single image.

---

## Docker Hub

Docker Hub is the default public registry used to store and distribute Docker images.

It is comparable to:

- PyPI for Python
- npm for JavaScript

---

# Container Lifecycle

Containers typically follow this lifecycle:

```text
Pull Image
      │
      ▼
Create Container
      │
      ▼
Running
      │
      ▼
Stopped
      │
      ▼
Removed
```

Stopping a container does not remove it.

Removing a container does not remove the image.

---

# Port Mapping

Containers are isolated from the host machine.

Port mapping exposes container ports externally.

Example:

```bash
docker run -p 8080:80 nginx
```

Meaning:

```text
Host Port 8080
      │
      ▼
Container Port 80
```

---

# Docker Volumes

Containers are designed to be disposable.

Persistent data should be stored in Docker volumes.

Example:

```text
Container
      │
      ▼
Docker Volume
      │
      ▼
Host Storage
```

Volumes are commonly used for databases and uploaded files.

---

# Docker Networks

Docker networks allow containers to communicate securely.

Instead of hardcoded IP addresses, containers communicate using service names.

Example:

```text
Frontend
      │
      ▼
Backend
      │
      ▼
PostgreSQL
```

Docker provides built-in DNS resolution for containers attached to the same network.

---

# Docker Commands Learned

```bash
docker --version
docker pull
docker images
docker run
docker ps
docker ps -a
docker stop
docker start
docker restart
docker logs
docker exec
docker rm
docker volume create
docker volume ls
docker volume inspect
docker network create
docker network ls
docker network inspect
```

---

# Best Practices

- Use official images whenever possible.
- Keep containers stateless.
- Store persistent data in Docker volumes.
- Use Docker networks instead of hardcoded IP addresses.
- Give containers meaningful names.
- Remove unused containers regularly.

---

# Lessons Learned in Project Rock

- Docker provides consistent runtime environments.
- Images are templates; containers are running instances.
- Containers should remain disposable.
- Volumes provide persistent storage.
- Networks allow service-to-service communication without fixed IP addresses.
