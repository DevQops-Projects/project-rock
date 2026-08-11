from sqlalchemy import select

from app.db.session import SessionLocal
from app.models.documentation import DocumentationCategory


DOCUMENTATION_CATEGORIES = [
    {
        "id": 1,
        "name": "AWS",
        "description": "Amazon Web Services documentation",
    },
    {
        "id": 2,
        "name": "Terraform",
        "description": "Infrastructure as Code",
    },
    {
        "id": 3,
        "name": "Docker",
        "description": "Containerization",
    },
    {
        "id": 4,
        "name": "Kubernetes",
        "description": "Container Orchestration",
    },
]


def seed_documentation_categories() -> None:
    with SessionLocal() as db:
        existing_ids = set(
            db.execute(
                select(DocumentationCategory.id)
            ).scalars().all()
        )

        for category_data in DOCUMENTATION_CATEGORIES:
            if category_data["id"] in existing_ids:
                continue

            db.add(
                DocumentationCategory(
                    id=category_data["id"],
                    name=category_data["name"],
                    description=category_data["description"],
                )
            )

        db.commit()


if __name__ == "__main__":
    seed_documentation_categories()
    print("Documentation categories seeded successfully.")
