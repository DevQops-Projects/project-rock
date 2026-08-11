from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.documentation import DocumentationCategory


def get_documentation_categories(
    db: Session,
) -> list[DocumentationCategory]:
    statement = select(DocumentationCategory).order_by(
        DocumentationCategory.id
    )

    result = db.execute(statement)

    return list(result.scalars().all())
