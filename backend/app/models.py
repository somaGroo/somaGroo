
import sqlalchemy as sa
from sqlalchemy.orm import relationship, backref

from app.db import Base
from app.db import engine

class User(Base):
    __tablename__ = "somagroo_user"

    id: int = sa.Column(sa.Integer, primary_key=True, autoincrement=True)
    swm_id: int = sa.Column(sa.Integer)
    role: str = sa.Column(sa.String)
    name: str = sa.Column(sa.String)


class Paper(Base):
    __tablename__ = "somagroo_paper"

    id: int = sa.Column(sa.Integer, primary_key=True, autoincrement=True)
    user_id: int = sa.Column(sa.Integer, sa.ForeignKey("somagroo_user.id", ondelete="CASCADE"), index=True)
    user = relationship(User, backref=backref("papers", cascade="all, delete-orphan"))
    title: str = sa.Column(sa.String)
    content: str = sa.Column(sa.String)




Base.metadata.create_all(bind=engine)
