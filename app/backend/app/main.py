from fastapi import FastAPI

from app.core.config import settings
from app.core.logger import setup_logging
from app.routers import health, root

setup_logging()

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)

app.include_router(root.router)
app.include_router(health.router)
