from sqlalchemy.orm import Session

from app.db import get_db
from app.models import *
from app import schemas
import json


def user_initialization():
    db: Session = next(get_db())
    if len(db.query(User).all()) > 0:
        return

    with open("app/static/user_data.json") as json_file:
        json_data = json.load(json_file)
        for user_data in json_data['user']:
            user_data['swm_id'] = user_data['swm_no']
            del user_data['swm_no']
            user = User(**user_data)
            db.add(user)

        db.commit()

