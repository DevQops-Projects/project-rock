from fastapi import FastAPI

from app.core.config import settings
from app.routers import health
from app.schemas.system import RootResponse, VersionResponse

app = FastAPI(
    title="Project Rock API",
    description="""
An AI-assisted DevOps learning platform built to demonstrate real-world
engineering practices, cloud-native development, and modern DevOps workflows.
""",
    version=settings.app_version,
    contact={
        "name": "Project Rock",
        "url": "https://github.com/DevQops-Projects/project-rock",
    },
    license_info={
        "name": "MIT License",
    },
)

app.include_router(health.router)


@app.get("/", response_model=RootResponse, tags=["System"])
def root():
    return RootResponse(
        message="Welcome to Project Rock!",
        project="Project Rock",
        version=settings.app_version,
    )


@app.get("/version", response_model=VersionResponse, tags=["System"])
def version():
    return VersionResponse(
        project=settings.app_name,
        version=settings.app_version,
        environment=settings.environment,
    )
