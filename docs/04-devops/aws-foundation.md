# AWS Foundation

## Version

1.0

---

# Purpose

This document defines the foundational AWS account configuration for Project Rock.

Before any infrastructure is provisioned, the AWS account must be secured and prepared according to production-inspired engineering practices.

The objective is to establish a secure environment that supports Infrastructure as Code, automation, and least-privilege access.

---

# AWS Account Security

## Root Account

The AWS root account is reserved exclusively for:

- Initial account configuration
- Billing management
- Emergency account recovery

The root account is **not** used for routine engineering activities.

### Security Controls

- Multi-Factor Authentication (MFA) enabled
- Recovery email configured
- Recovery phone number configured

---

# Administrative IAM User

Daily administration is performed using a dedicated IAM user.

### User

`project-rock-admin`

### Authentication

- Console access enabled
- MFA enabled

This user is used for:

- AWS Console administration
- AWS CLI
- Terraform
- Ansible
- Future automation until IAM roles are introduced

---

# Cost Management

A monthly AWS Budget has been configured.

| Setting | Value |
|---------|-------|
| Budget Type | Cost Budget |
| Budget | $10/month |
| Alerts | 50%, 80%, 100% |

The objective is to detect unexpected charges early while remaining within Free Tier limits whenever possible.

---

# Resource Tagging Standard

Every AWS resource created for Project Rock should include:

| Tag | Example |
|------|---------|
| Project | project-rock |
| Environment | dev |
| ManagedBy | terraform |
| Owner | abhinav |
| Sprint | sprint-2 |

Consistent tagging supports resource management, cost tracking, and operational visibility.

---

# Engineering Decisions

- Daily AWS administration is performed using IAM users rather than the root account.
- MFA is mandatory for privileged identities.
- Cost monitoring is configured before provisioning infrastructure.
- Infrastructure provisioning will transition to Terraform as the primary management mechanism.

---

# Future Improvements

Future sprints will replace long-lived IAM user credentials with:

- IAM Roles
- EC2 Instance Profiles
- GitHub Actions OIDC
- AWS Secrets Manager

This evolution reflects modern cloud security practices.