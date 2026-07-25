# Security & Operations Handbook

## Version

1.0

---

# Purpose

This handbook defines the operational and security standards for Project Rock.

The objective is to establish secure, repeatable, and production-inspired engineering practices before infrastructure is provisioned.

Security is considered a continuous engineering responsibility rather than a separate phase.

---

# Security Principles

Project Rock follows these principles:

- Least privilege
- Defense in depth
- Secure by default
- Zero hardcoded secrets
- Infrastructure as Code
- Continuous verification
- Automation over manual processes

---

# Identity & Access Management (IAM)

## AWS Root Account

The AWS root account exists only for:

- Initial account setup
- Billing
- Emergency recovery

The root account must never be used for daily engineering activities.

---

## IAM Users

Daily work is performed using dedicated IAM users.

Requirements:

- MFA enabled
- Least privilege
- Individual credentials
- No shared accounts

---

## Future Evolution

As Project Rock grows, IAM Identity Center (AWS IAM Identity Center / SSO) should replace individual IAM users.

---

# Secrets Management

Secrets must never be:

- committed to Git
- stored in Terraform code
- shared in chat
- stored in documentation

Approved locations:

- GitHub Actions Secrets
- AWS Secrets Manager
- Environment variables
- Ansible Vault (when introduced)

---

# Infrastructure Security

Infrastructure should implement:

- Private networking where appropriate
- Security groups with least privilege
- Encrypted storage
- Remote Terraform state
- State locking
- IAM roles instead of long-lived credentials
- Resource tagging

---

# CI/CD Security

Pipelines should include:

- Terraform validation
- Code formatting
- Linting
- Dependency scanning
- Secret scanning
- Container image scanning
- Manual approval before production deployment

---

# Container Security

Containers should:

- Use official base images where appropriate
- Run as non-root
- Minimize installed packages
- Pin dependency versions where practical
- Be scanned for vulnerabilities

---

# Kubernetes Security

When Kubernetes is introduced:

- RBAC enabled
- Network Policies
- Secrets management
- Resource limits
- Pod security standards
- Image verification

---

# Monitoring Philosophy

Every production workload should expose:

- Health checks
- Metrics
- Logs
- Alerts

If a service cannot be monitored, it is considered incomplete.

---

# Logging Standards

Applications should produce:

- Structured logs
- Meaningful log levels
- Correlation IDs (future)
- Centralized log collection

---

# Backup Strategy

Critical resources include:

- PostgreSQL
- Terraform state
- Application configuration

Backup requirements:

- Automated
- Versioned
- Recoverable

Recovery procedures should be documented and periodically tested.

---

# Incident Response

A standard incident lifecycle:

1. Detect
2. Assess
3. Contain
4. Recover
5. Review
6. Improve

Every significant incident should produce documented lessons learned.

---

# Change Management

Every engineering change follows:

Feature Branch

↓

Pull Request

↓

Review

↓

CI Validation

↓

Merge

↓

Deployment

↓

Verification

---

# Operational Runbooks

Project Rock will maintain runbooks for:

- Local setup
- Deployments
- Rollbacks
- Infrastructure recovery
- Database restoration
- Kubernetes operations
- Monitoring
- Troubleshooting

---

# Engineering Philosophy

Operational excellence is not achieved by preventing failures.

It is achieved by building systems that are observable, recoverable, secure, and continuously improving.