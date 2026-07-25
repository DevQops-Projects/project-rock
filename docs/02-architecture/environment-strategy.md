# Environment Strategy

## Purpose

Project Rock follows a multi-environment deployment strategy inspired by production engineering practices.

The goal is to ensure infrastructure, configuration, and deployments can be validated before reaching production.

---

# Environments

## Local

Purpose:

Development and experimentation.

Characteristics:

- Docker Compose
- Local PostgreSQL
- Local configuration
- Fast feedback

---

## Development

Purpose:

Integration testing.

Infrastructure:

- AWS
- Terraform-managed
- Shared development environment

---

## Staging

Purpose:

Pre-production validation.

Infrastructure should closely resemble production.

Used for:

- End-to-end testing
- Deployment validation
- Performance verification

---

## Production

Purpose:

Serve end users.

Characteristics:

- Stable
- Monitored
- Secure
- Highly reliable

---

# Environment Isolation

Each environment should maintain independent:

- Terraform state
- Variables
- Configuration
- Secrets
- Resources

---

# Naming Convention

Examples:

project-rock-dev

project-rock-stage

project-rock-prod

---

# Terraform Strategy

Each environment will use:

- Independent backend configuration
- Separate tfvars
- Separate state files
- Shared reusable modules

---

# Promotion Strategy

Application changes follow this path:

Local

↓

Development

↓

Staging

↓

Production

Promotion occurs only after validation at each stage.