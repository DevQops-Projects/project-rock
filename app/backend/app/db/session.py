from sqlalchemy.orm import sessionmaker

from app.core.database import engine

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)
