# Terraform Workflow

## Standard Workflow

terraform init

↓

terraform fmt

↓

terraform validate

↓

terraform plan

↓

terraform apply

---

## init

Downloads providers and initializes the working directory.

---

## fmt

Formats Terraform code.

---

## validate

Checks configuration syntax.

---

## plan

Shows what Terraform intends to change.

---

## apply

Creates or updates infrastructure.

---

## destroy

Deletes managed infrastructure.

---

## Best Practice

Always review `terraform plan` before `terraform apply`.