# ADR-008

## Title

Adopt a Security-First Engineering Strategy

---

## Status

Accepted

---

## Context

Project Rock is intended to demonstrate production-inspired DevOps and Cloud Engineering practices.

Security should be incorporated into every engineering phase rather than treated as a separate activity.

---

## Decision

Security requirements will be defined before infrastructure implementation.

Every sprint should consider:

- Identity
- Secrets
- Infrastructure
- CI/CD
- Containers
- Observability

---

## Consequences

### Advantages

- Better engineering discipline
- Reduced security risks
- Easier compliance with best practices
- More realistic cloud architecture

### Trade-offs

- Additional planning
- Slightly slower implementation during early stages

---

## Future Considerations

Future work will include:

- AWS Secrets Manager
- IAM Identity Center
- OIDC authentication
- Image signing
- Policy as Code
- Runtime security