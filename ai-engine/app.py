from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

PORT = int(os.getenv('FLASK_PORT', 8000))

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'success',
        'message': 'FeedMind AI Engine is running',
        'models_loaded': False  # Will be True after model loading
    }), 200

if __name__ == '__main__':
    print(f'🤖 AI Engine running on port {PORT}')
    app.run(host='0.0.0.0', port=PORT, debug=True)
