# AWS Networking & Security Groups

## Overview

A **Security Group (SG)** is a virtual firewall attached to AWS resources such as EC2 instances.

It controls **who can communicate with your instance** by allowing or denying network traffic based on defined rules.

Unlike traditional firewalls installed on an operating system, Security Groups operate at the AWS infrastructure level.

---

## Why Do We Need It?

Imagine launching an EC2 instance with no protection.

Anyone on the internet could attempt to access:

- SSH (22)
- HTTP (80)
- HTTPS (443)
- Database ports (3306, 5432)
- Development servers (8000, 5173)

Security Groups restrict access by allowing only the ports and sources you explicitly configure.

This follows the **Principle of Least Privilege**:
> Only allow the traffic that is actually required.

---

## How It Works

When a request reaches your EC2 instance, AWS first checks the Security Group.

```
Browser
    │
Internet
    │
AWS Security Group
    │
EC2 Instance
    │
Application (FastAPI / React)
```

If the port is **allowed**, the request reaches the application.

If the port is **not allowed**, AWS blocks the request before it reaches the instance.

---

## Inbound vs Outbound Rules

### Inbound Rules

Control traffic **coming into** the EC2 instance.

Example:

| Port | Purpose |
|------|---------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 8000 | FastAPI |
| 5173 | Vite Development Server |

---

### Outbound Rules

Control traffic **leaving** the EC2 instance.

Example:

- Download packages using `apt`
- Install Python packages using `pip`
- Install npm packages
- Connect to external APIs

By default, outbound traffic is usually allowed.

---

## 127.0.0.1 vs 0.0.0.0

### 127.0.0.1

Also called **localhost**.

The application accepts requests **only from the same machine**.

```
EC2

Application

↑

Only EC2 itself
```

---

### 0.0.0.0

Means:

> Listen on **all network interfaces**.

```
Browser

↓

Internet

↓

EC2 Public IP

↓

Application
```

This is required when accessing the application from another machine.

Example:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000

npm run dev -- --host 0.0.0.0
```

---

## Project Rock Example

### Problem

FastAPI worked locally:

```bash
curl http://127.0.0.1:8000/health
```

But opening:

```
http://<EC2-PUBLIC-IP>:8000
```

did not work.

Reason:

Port **8000** was not allowed in the Security Group.

---

Later we faced the same issue with React.

Vite was running correctly:

```
http://0.0.0.0:5173
```

But the browser could not connect.

Reason:

Port **5173** was missing from the Security Group.

After adding:

```
Type: Custom TCP
Port: 5173
Source: 0.0.0.0/0
```

the application became accessible.

---

## Commands

Check if the application is listening:

```bash
ss -tulnp
```

Check a specific port:

```bash
ss -tulnp | grep 8000
```

```bash
ss -tulnp | grep 5173
```

Test locally:

```bash
curl http://127.0.0.1:8000/health
```

```bash
curl http://127.0.0.1:5173
```

---

## Common Mistakes

### Mistake 1

Running the application on:

```
127.0.0.1
```

instead of

```
0.0.0.0
```

Result:

Accessible only from the EC2 instance.

---

### Mistake 2

Opening the application without allowing the port in the Security Group.

Result:

Browser cannot connect even though the application is running.

---

### Mistake 3

Using the private IP address instead of the public IP address.

Private IP:

```
172.x.x.x
```

Public IP:

```
3.x.x.x
```

---

## Best Practices

- Open only the ports you need.
- Never expose databases directly to the internet.
- Use Security Groups instead of disabling security.
- Close development ports when no longer required.
- Use HTTPS (443) in production.

---

## Interview Questions

**Q. What is an AWS Security Group?**

A virtual firewall that controls inbound and outbound traffic for AWS resources.

---

**Q. Why wasn't the application accessible from the browser?**

Because the required port was blocked by the Security Group.

---

**Q. Difference between 127.0.0.1 and 0.0.0.0?**

- `127.0.0.1` listens only on the local machine.
- `0.0.0.0` listens on all network interfaces.

---

**Q. Is a Security Group stateful?**

Yes.

If inbound traffic is allowed, the response traffic is automatically allowed.

---

## Revision Notes

- Security Group = AWS virtual firewall.
- Inbound controls incoming traffic.
- Outbound controls outgoing traffic.
- Use `0.0.0.0` to allow external connections.
- Open required ports in the Security Group.
- `127.0.0.1` = Localhost only.
- Always verify the application is listening before checking the Security Group.
- In Project Rock, ports **8000** (FastAPI) and **5173** (React) had to be explicitly allowed.
