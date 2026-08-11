from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
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
def get_categories(
    db: Session = Depends(get_db),
):
    return documentation_service.get_categories(db)
