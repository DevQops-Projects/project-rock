from fastapi import APIRouter

from app.core.config import settings
from app.schemas.system import HealthResponse

router = APIRouter(tags=["Health"])


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health Check",
    description="Returns the current health status of the application.",
)
def health_check():
    return HealthResponse(
        status="healthy",
        service=settings.service_name,
        version=settings.app_version,
        environment=settings.environment,
    )   
