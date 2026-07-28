from app.models.sample_data import DOCUMENTATION_CATEGORIES
from app.schemas.documentation import DocumentationCategory


class DocumentationService:
    """Business logic for documentation."""

    def get_categories(self) -> list[DocumentationCategory]:
        return [
            DocumentationCategory(**category)
            for category in DOCUMENTATION_CATEGORIES
        ]


documentation_service = DocumentationService()
