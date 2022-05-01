
from pydantic import BaseModel, Field


class UserCreate(BaseModel):
    swm_id: int
    role: str
    name: str


class PaperCreate(BaseModel):
    title: str
    content: str


class PagerCreateIn(BaseModel):
    title: str
    content: str