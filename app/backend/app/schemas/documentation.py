from pydantic import BaseModel


class DocumentationCategory(BaseModel):
    id: int
    name: str
    description: str
