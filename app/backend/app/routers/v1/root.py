from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():
    return {
        "message": "Welcome to Project Rock API",
        "version": "0.1.0",
    }
