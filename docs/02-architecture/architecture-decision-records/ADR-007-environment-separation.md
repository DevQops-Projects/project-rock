# ADR-007

## Title

Adopt Independent Environments for Development, Staging, and Production

---

## Status

Accepted

---

## Context

Project Rock aims to demonstrate production-inspired cloud engineering practices.

Using a single shared environment increases deployment risk and reduces confidence in infrastructure changes.

---

## Decision

Separate environments will be maintained for:

- Development
- Staging
- Production

Each environment will maintain independent Terraform state, variables, and cloud resources.

---

## Consequences

### Advantages

- Reduced deployment risk
- Safer experimentation
- Easier rollback
- Better production simulation

### Trade-offs

- Increased infrastructure complexity
- Slightly higher cloud costs

---

## Future Considerations

As the platform evolves, environment promotion may become fully automated through CI/CD pipelines with approval gates.