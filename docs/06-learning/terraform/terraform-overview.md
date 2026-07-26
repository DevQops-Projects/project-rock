# Terraform Overview

## What is Terraform?

Terraform is an Infrastructure as Code (IaC) tool developed by HashiCorp.

It allows engineers to define infrastructure using declarative configuration files rather than manually creating cloud resources.

Terraform supports multiple cloud providers including AWS, Azure, Google Cloud, Kubernetes, GitHub, Cloudflare, and many others through provider plugins.

---

## Why do we use Terraform?

Traditional infrastructure is often created manually through cloud consoles.

This approach introduces several problems:

- Difficult to reproduce
- Human error
- No version control
- No peer review
- Difficult disaster recovery

Terraform solves these problems by treating infrastructure like application code.

---

## Infrastructure as Code (IaC)

Infrastructure is defined in code and stored in Git.

Benefits include:

- Version control
- Repeatability
- Automation
- Collaboration
- Documentation
- Faster recovery

---

## Declarative vs Imperative

Terraform is declarative.

You describe the desired end state.

Example:

"I need one EC2 instance."

Terraform determines the required API calls.

---

## Terraform Workflow

terraform init

↓

terraform plan

↓

terraform apply

↓

terraform destroy

---

## Project Rock Usage

Terraform will provision:

- S3
- DynamoDB
- VPC
- Security Groups
- EC2
- IAM
- Route53
- Application infrastructure

---

## Best Practices

- Store code in Git
- Use remote state
- Review plans before applying
- Modularize infrastructure
- Never hardcode secrets

---

## Common Mistakes

- Editing infrastructure manually
- Losing state files
- Sharing local state
- Committing secrets

---

## Interview Questions

### What is Infrastructure as Code?

Infrastructure managed through version-controlled code rather than manual operations.

---

### Why is Terraform called declarative?

Because engineers define the desired infrastructure state rather than the sequence of commands to create it.

---

## Official Documentation

https://developer.hashicorp.com/terraform/docs