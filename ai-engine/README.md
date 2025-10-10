# FeedMind AI Engine

Python-based AI/NLP engine for sentiment analysis, topic classification, and bias detection.

## Getting Started

### Prerequisites
- Python 3.9, 3.10, or 3.11
- pip

### Installation

1. Create virtual environment:
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```
pip install -r requirements.txt
```

3. Download NLP models:
```
python -m spacy download en_core_web_sm
```

4. Configuration:
```
cp .env.example .env
# Edit .env with your settings
```

### Development
```
python app.py
```

API will run on: http://localhost:8000

### Testing
```
pytest tests/
```

## API Endpoints
- `GET /api/health` - Health check

More endpoints coming soon...
