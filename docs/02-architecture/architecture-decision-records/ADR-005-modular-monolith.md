# ADR-005

## Title

Adopt a Modular Monolith Architecture for the Initial Platform

---

## Status

Accepted

---

## Context

Project Rock is currently developed by a single engineer with the primary objective of learning production-inspired DevOps engineering.

Starting directly with microservices would introduce significant operational complexity without delivering proportional learning value during the early phases.

---

## Decision

The platform will initially be implemented as a Modular Monolith.

Logical boundaries between modules will be maintained to enable future extraction into independent services if required.

---

## Consequences

### Advantages

- Faster development
- Easier debugging
- Lower AWS cost
- Simpler deployment
- Better learning progression
- Easier testing

### Trade-offs

- Less independent scaling
- Shared deployment lifecycle

---

## Future Evolution

As product requirements justify additional complexity, modules may be extracted into standalone microservices without major architectural redesign.