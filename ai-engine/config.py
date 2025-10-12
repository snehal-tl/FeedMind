import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    FLASK_PORT = int(os.getenv('FLASK_PORT', 8000))
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    MODEL_PATH = os.getenv('MODEL_PATH', './data/models')
    SENTIMENT_MODEL = os.getenv('SENTIMENT_MODEL', 'distilbert-base-uncased-finetuned-sst-2-english')
    CLASSIFICATION_MODEL = os.getenv('CLASSIFICATION_MODEL', 'facebook/bart-large-mnli')
    HUGGINGFACE_API_KEY = os.getenv('HUGGINGFACE_API_KEY', '')
    MAX_WORKERS = int(os.getenv('MAX_WORKERS', 4))
    CACHE_SIZE = int(os.getenv('CACHE_SIZE', 100))
