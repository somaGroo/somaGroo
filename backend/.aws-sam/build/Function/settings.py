import os

STAGE = "dev"


if STAGE == "local":
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "user"
    POSTGRES_PASSWORD: str = "1234"
    POSTGRES_DB: str = "somagroo"
    POSTGRES_PORT: str = "5432"
else:  # Todo: develop db settings
    POSTGRES_SERVER: str = "somagroo2.crgsa3qt3jqa.ap-northeast-2.rds.amazonaws.com"
    POSTGRES_USER: str = "soma"
    POSTGRES_PASSWORD: str = "soma123##"
    POSTGRES_DB: str = "somagroo"
    POSTGRES_PORT: str = "5432"


SQLALCHEMY_DATABASE_URI = "postgresql://{}:{}@{}:{}/{}".format(
    POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_SERVER, POSTGRES_PORT, POSTGRES_DB
)


