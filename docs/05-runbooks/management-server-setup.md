# Management Server Setup

## Version

1.0

---

# Purpose

This document describes the initial setup of the Project Rock Management Server.

The Management Server acts as the central engineering workstation used to provision infrastructure, configure cloud resources, and manage deployments.

It is not part of the application infrastructure.

---

# Platform

| Property | Value |
|----------|-------|
| Cloud Provider | AWS |
| Operating System | Ubuntu 26.04 LTS |
| Purpose | Management Server |

---

# Installed Tools

| Tool | Purpose |
|------|---------|
| Git | Source control |
| OpenSSH | Secure remote access |
| AWS CLI v2 | AWS administration |

Terraform, Ansible, Docker, kubectl, and Helm will be installed in subsequent tasks.

---

# GitHub Authentication

The server authenticates with GitHub using an independent SSH key pair.

The public key is registered with GitHub.

This follows the principle that each engineering workstation maintains its own identity.

---

# AWS CLI

AWS CLI v2 is installed using the official AWS installation package.

The package manager version was intentionally not used to ensure compatibility with the latest AWS features.

---

# Authentication Strategy

AWS CLI authenticates using:

- IAM Access Key
- IAM Secret Access Key

Credentials are configured through a named CLI profile.

Future iterations will migrate to IAM Roles and temporary credentials.

---

# Engineering Principles

The Management Server is considered persistent infrastructure.

Responsibilities include:

- Infrastructure provisioning
- Configuration management
- Cloud administration
- CI/CD operations
- Kubernetes management
- Platform tooling

Application workloads will not be permanently hosted on this server.

---

# Future Tooling

The following tools will be installed:

- Terraform
- Ansible
- Docker
- kubectl
- Helm
- Session Manager Plugin