from sqlalchemy.orm import Session

from app.repositories.documentation_repository import (
    get_documentation_categories,
)
from app.schemas.documentation import DocumentationCategory


class DocumentationService:
    """Business logic for documentation."""

    def get_categories(
        self,
        db: Session,
    ) -> list[DocumentationCategory]:
        categories = get_documentation_categories(db)

        return [
            DocumentationCategory(
                id=category.id,
                name=category.name,
                description=category.description,
            )
            for category in categories
        ]


documentation_service = DocumentationService()
