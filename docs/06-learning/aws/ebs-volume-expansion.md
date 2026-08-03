# AWS EBS Volume Expansion

## Overview

Amazon Elastic Block Store (EBS) provides persistent block storage for Amazon EC2 instances.

As applications grow, the root volume may eventually run out of space due to installed software, Docker images, application dependencies, logs, and other system files.

Fortunately, EBS volumes can be expanded without recreating the EC2 instance.

However, increasing the EBS volume in AWS is only the first step. The operating system must also be instructed to use the additional storage.

---

# Why Was This Needed?

While setting up Docker Compose for Project Rock, the following error occurred:

```text
No space left on device
```

Checking disk usage confirmed that the root filesystem was completely full.

```bash
df -h
```

Example:

```text
Filesystem       Size  Used Avail Use% Mounted on
/dev/root        6.7G  6.6G   53M 100% /
```

The EC2 instance had an 8 GiB root volume, which was no longer sufficient for:

- Docker Engine
- Docker Compose
- Python virtual environments
- Node.js dependencies
- Project source code
- Future infrastructure components

The solution was to expand the EBS volume from **8 GiB** to **20 GiB**.

---

# Understanding the Storage Layers

Expanding storage involves three separate layers.

```text
AWS EBS Volume
        │
        ▼
Linux Partition
        │
        ▼
Filesystem
```

Increasing the EBS volume alone does not automatically expand the partition or filesystem.

Each layer must be updated.

---

# Step 1 - Modify the EBS Volume

In the AWS Console:

1. Open **EC2**.
2. Navigate to **Elastic Block Store → Volumes**.
3. Select the volume attached to the EC2 instance.
4. Choose **Actions → Modify Volume**.
5. Increase the size (for Project Rock: **8 GiB → 20 GiB**).
6. Confirm the modification.

AWS immediately begins expanding the underlying storage.

---

# Step 2 - Verify the New Disk Size

SSH into the EC2 instance.

Run:

```bash
lsblk
```

Example:

```text
NAME         SIZE TYPE MOUNTPOINT
nvme0n1       20G disk
├─nvme0n1p1  6.9G part /
├─nvme0n1p13 989M part /boot
└─nvme0n1p15 105M part /boot/efi
```

Notice:

- Disk size is now **20 GiB**
- Root partition is still approximately **7 GiB**

The partition must be expanded.

---

# Step 3 - Expand the Partition

Run:

```bash
sudo growpart /dev/nvme0n1 1
```

Example output:

```text
CHANGED:
partition=1
old size=...
new size=...
```

This resizes partition 1 to occupy the newly available space.

---

# Step 4 - Expand the Filesystem

For Ubuntu EC2 instances using **ext4**, run:

```bash
sudo resize2fs /dev/nvme0n1p1
```

Example:

```text
The filesystem on /dev/nvme0n1p1 is now ...
```

This allows Linux to use the additional partition space.

---

# Step 5 - Verify

Run:

```bash
df -h
```

Example:

```text
Filesystem       Size  Used Avail Use% Mounted on
/dev/root         19G  6.3G   13G  35% /
```

The filesystem has successfully expanded.

---

# Commands Used

```bash
df -h

lsblk

sudo growpart /dev/nvme0n1 1

sudo resize2fs /dev/nvme0n1p1

df -h
```

---

# Common Mistakes

## Expanding only the EBS volume

Increasing the EBS volume in AWS does **not** automatically expand the Linux partition.

---

## Forgetting to resize the filesystem

Even after resizing the partition, Linux still uses the old filesystem size until `resize2fs` (or `xfs_growfs` for XFS) is executed.

---

## Running the wrong filesystem command

Ubuntu typically uses **ext4**, which requires:

```bash
resize2fs
```

Amazon Linux often uses **XFS**, which requires:

```bash
xfs_growfs
```

Always verify the filesystem before resizing.

---

# Best Practices

- Monitor disk usage regularly using `df -h`.
- Increase storage before reaching 100% utilization.
- Keep adequate free space for package installations and logs.
- Document infrastructure changes.
- Manage infrastructure through Infrastructure as Code whenever possible.

---

# Lessons Learned in Project Rock

While configuring Docker Compose, the EC2 instance ran out of storage because the original 8 GiB root volume was insufficient.

Instead of deleting software or project files, the root EBS volume was expanded to 20 GiB.

This exercise demonstrated that storage expansion requires changes at three layers:

1. AWS EBS Volume
2. Linux Partition
3. Filesystem

Understanding this distinction is an essential Linux and AWS operational skill for DevOps engineers.
