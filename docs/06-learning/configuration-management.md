# Configuration Management in Python

## Overview

Configuration Management is the practice of separating application configuration from application code.

Instead of hardcoding values such as API URLs, ports, credentials, or environment-specific settings, applications should read them from external configuration sources such as environment variables.

This follows one of the core principles of the **Twelve-Factor App** methodology and is considered a DevOps best practice.

---

# Why Configuration Management?

Imagine the following code:

```python
DATABASE_URL = "localhost"
API_KEY = "my-secret-key"
PORT = 8000
```

This works during development but becomes problematic when deploying to different environments.

Examples:

| Environment | Database |
|------------|----------|
| Development | Local PostgreSQL |
| Testing | Test Database |
| Staging | AWS RDS |
| Production | Production RDS |

Without configuration management, developers would have to modify source code for every environment.

Instead, the application remains unchanged while only the configuration changes.

---

# Benefits

- Environment independent deployments
- Better security
- Easier maintenance
- Cleaner source code
- Faster deployments
- Easier CI/CD integration

---

# Environment Variables

Environment variables are key-value pairs provided by the operating system.

Example:

```bash
PORT=8000
LOG_LEVEL=INFO
ENVIRONMENT=development
```

Applications read these values during startup.

---

# The `.env` File

During local development, environment variables are usually stored inside a `.env` file.

Example:

```text
APP_NAME=Project Rock API
APP_VERSION=0.1.0
ENVIRONMENT=development

HOST=0.0.0.0
PORT=8000

LOG_LEVEL=INFO

FRONTEND_URL=http://localhost:5173
```

The `.env` file should **never** be committed to Git because it may contain sensitive information.

---

# The `.env.example` File

Instead of committing `.env`, projects should commit `.env.example`.

Example:

```text
APP_NAME=Project Rock API
APP_VERSION=0.1.0
ENVIRONMENT=development

HOST=0.0.0.0
PORT=8000

LOG_LEVEL=INFO

FRONTEND_URL=http://localhost:5173
```

New developers can simply copy:

```bash
cp .env.example .env
```

and customize the values for their local environment.

---

# Why Use Pydantic Settings?

Project Rock uses **Pydantic Settings** to manage configuration.

Instead of manually reading environment variables:

```python
import os

PORT = os.getenv("PORT")
```

Pydantic automatically:

- Reads values from environment variables
- Loads values from `.env`
- Validates data types
- Applies default values
- Provides IDE autocompletion
- Produces cleaner and more maintainable code

Example:

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    port: int = 8000
```

---

# Project Rock Implementation

Current configuration includes:

- Application Name
- Application Version
- Environment
- Host
- Port
- Logging Level
- Frontend URL

These settings are centralized in:

```
app/backend/app/core/config.py
```

The application imports a single `settings` object wherever configuration is required.

---

# Configuration Sources

As Project Rock evolves, configuration will come from different sources depending on the deployment environment.

| Environment | Configuration Source |
|-------------|----------------------|
| Local Development | `.env` |
| Docker Compose | Docker environment variables |
| GitHub Actions | GitHub Secrets |
| AWS EC2 | Environment variables / IAM |
| Kubernetes | ConfigMaps and Secrets |

Notice that **the application code remains unchanged**. Only the source of configuration changes.

---

# Best Practices

✅ Never hardcode secrets

✅ Commit only `.env.example`

✅ Keep `.env` inside `.gitignore`

✅ Use meaningful variable names

✅ Group related configuration together

✅ Validate configuration values

✅ Use sensible defaults where appropriate

---

# Common Mistakes

❌ Committing `.env` to GitHub

❌ Hardcoding passwords

❌ Using unclear variable names

❌ Scattering configuration throughout the codebase

❌ Using different variable names across environments

---

# Security Considerations

Sensitive information such as:

- Database passwords
- API keys
- AWS credentials
- JWT secrets

should never be stored inside source code.

For production deployments, use secure secret management solutions such as:

- GitHub Secrets
- AWS Secrets Manager
- AWS Systems Manager Parameter Store
- Kubernetes Secrets

---

# Interview Questions

## 1. What is Configuration Management?

Configuration Management is the practice of separating application configuration from application code so that the same codebase can run across multiple environments using different configuration values.

---

## 2. Why should secrets never be hardcoded?

Hardcoded secrets can be exposed through version control, are difficult to rotate, and reduce the security of an application.

---

## 3. Why use environment variables?

Environment variables allow applications to adapt to different deployment environments without modifying the source code.

---

## 4. What is Pydantic Settings?

Pydantic Settings is a library that loads configuration from environment variables (and optionally `.env` files), validates data types, and provides a structured, type-safe configuration object.

---

## 5. What is the difference between `.env` and `.env.example`?

| `.env` | `.env.example` |
|---------|----------------|
| Contains actual configuration values | Contains sample/template values |
| May include secrets | Never includes secrets |
| Not committed to Git | Committed to Git |

---

# Key Takeaways

- Separate configuration from code.
- Never hardcode secrets.
- Use environment variables for flexibility.
- Commit `.env.example`, not `.env`.
- Use Pydantic Settings for clean, validated configuration.
- Keep application code independent of deployment environments.

---

# Official Documentation

- Pydantic Settings: https://docs.pydantic.dev/latest/concepts/pydantic_settings/
- Twelve-Factor App – Config: https://12factor.net/config
