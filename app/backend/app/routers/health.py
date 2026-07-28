from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("")
def health():
    return {
        "status": "healthy",
        "service": "project-rock-api",
        "version": "0.1.0",
    }
