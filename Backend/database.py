from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, Text, Boolean, LargeBinary
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import os

# Create database directory if it doesn't exist
os.makedirs('Backend/database', exist_ok=True)

# Create SQLite database
engine = create_engine('sqlite:///Backend/database/mediscan.db')
Session = sessionmaker(bind=engine)
Base = declarative_base()

class ChatHistory(Base):
    __tablename__ = 'chat_history'
    
    id = Column(Integer, primary_key=True)
    user_message = Column(Text, nullable=False)
    bot_response = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

class HeartPrediction(Base):
    __tablename__ = 'heart_predictions'
    
    id = Column(Integer, primary_key=True)
    age = Column(Integer, nullable=False)
    sex = Column(Integer, nullable=False)
    cp = Column(Integer, nullable=False)
    thalach = Column(Integer, nullable=False)
    exang = Column(Integer, nullable=False)
    oldpeak = Column(Float, nullable=False)
    slope = Column(Integer, nullable=False)
    ca = Column(Integer, nullable=False)
    thal = Column(Integer, nullable=False)
    prediction = Column(Boolean, nullable=False)  # 0 for Low Risk, 1 for High Risk
    timestamp = Column(DateTime, default=datetime.utcnow)

class DiabetesPrediction(Base):
    __tablename__ = 'diabetes_predictions'
    
    id = Column(Integer, primary_key=True)
    pregnancies = Column(Integer, nullable=False)
    glucose = Column(Float, nullable=False)
    bmi = Column(Float, nullable=False)
    age = Column(Integer, nullable=False)
    prediction = Column(Boolean, nullable=False)  # 0 for Low Risk, 1 for High Risk
    timestamp = Column(DateTime, default=datetime.utcnow)

class ParkinsonPrediction(Base):
    __tablename__ = 'parkinson_predictions'
    
    id = Column(Integer, primary_key=True)
    mdvp_jitter = Column(Float, nullable=False)
    mdvp_jitter_abs = Column(Float, nullable=False)
    mdvp_rap = Column(Float, nullable=False)
    mdvp_ppq = Column(Float, nullable=False)
    jitter_ddp = Column(Float, nullable=False)
    mdvp_shimmer = Column(Float, nullable=False)
    mdvp_shimmer_db = Column(Float, nullable=False)
    shimmer_apq3 = Column(Float, nullable=False)
    shimmer_apq5 = Column(Float, nullable=False)
    mdvp_apq = Column(Float, nullable=False)
    shimmer_dda = Column(Float, nullable=False)
    prediction = Column(Boolean, nullable=False)  # 0 for Low Risk, 1 for High Risk
    timestamp = Column(DateTime, default=datetime.utcnow)

class SkinAnalysis(Base):
    __tablename__ = 'skin_analysis'
    
    id = Column(Integer, primary_key=True)
    image_data = Column(LargeBinary, nullable=False)
    prediction = Column(String(255), nullable=False)
    confidence = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

class BrainMRI(Base):
    __tablename__ = 'brain_mri'
    
    id = Column(Integer, primary_key=True)
    image_data = Column(LargeBinary, nullable=False)
    prediction = Column(String(255), nullable=False)
    confidence = Column(Float, nullable=False)
    scan_date = Column(DateTime, nullable=False)
    symptoms = Column(Text)
    timestamp = Column(DateTime, default=datetime.utcnow)

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(150), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create all tables
Base.metadata.create_all(engine)

def get_db_session():
    return Session() 