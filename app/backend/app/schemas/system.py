from pydantic import BaseModel


class RootResponse(BaseModel):
    message: str
    project: str
    version: str


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str
    environment: str


class VersionResponse(BaseModel):
    project: str
    version: str
    environment: str
