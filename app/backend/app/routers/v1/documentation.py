from fastapi import APIRouter

from app.schemas.documentation import DocumentationCategory
from app.services.documentation_service import documentation_service

router = APIRouter(
    prefix="/api/v1/documentation",
    tags=["Documentation"],
)


@router.get(
    "/categories",
    response_model=list[DocumentationCategory],
)
def get_categories():
    return documentation_service.get_categories()
