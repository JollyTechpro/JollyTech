from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class Bot(Base):
    __tablename__ = "bots"
    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(String, index=True)
    name = Column(String, nullable=False)
    broker = Column(String, nullable=False)  # "binance" | "alpaca"
    api_key = Column(String, nullable=True)
    api_secret = Column(String, nullable=True)
    paper = Column(Boolean, default=True)
    status = Column(String, default="stopped")
