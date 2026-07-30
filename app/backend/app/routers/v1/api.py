from fastapi import APIRouter

from app.routers.v1 import documentation, health, root

api_router = APIRouter()

api_router.include_router(root.router)
api_router.include_router(health.router)
api_router.include_router(documentation.router)
