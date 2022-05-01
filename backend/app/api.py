from fastapi import APIRouter, Depends, Path, Body, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from app.db import get_db
from app import schemas
from app.models import *
router = APIRouter()


@router.post('/user/{user_id}/paper')
async def create_paper(
        db: Session = Depends(get_db),
        user_id: int = Path(...),
        paper_req: schemas.PaperCreate = Body(...)
) -> Paper:
    if db.query(User).get(user_id) is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND)

    paper_data = paper_req.dict()
    paper_data['user_id'] = user_id
    paper = Paper(**paper_data)
    db.add(paper)
    db.commit()
    db.refresh(paper)
    return paper


@router.get('/user/{user_id}')
async def get_user_detail(db: Session = Depends(get_db), user_id: int = Path(...)):
    user = db.query(User).get(user_id)
    if user is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND)
    for paper in user.papers:
        db.refresh(paper)
    return user
