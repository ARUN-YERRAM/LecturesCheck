import os
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from scipy.spatial.distance import cosine
from flask import Flask, request, jsonify

# Disable oneDNN custom operations (optional, based on the initial warning)
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

app = Flask(__name__)

# Load pre-trained USE model
print("Loading Universal Sentence Encoder model...")
model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
print("Model loaded successfully.")

# Function to calculate similarity using USE
def calculate_use_similarity(text1, text2):
    print("Calculating similarity...")
    embeddings = model([text1, text2])
    similarity = 1 - cosine(embeddings[0].numpy(), embeddings[1].numpy())
    print("Similarity calculated:", similarity)
    return similarity

@app.route('/calculate_similarity', methods=['POST'])
def calculate_similarity():
    try:
        # Get the text files from the request
        file1 = request.files['file1']
        file2 = request.files['file2']

        # Read the content of the files
        text1 = file1.read().decode('utf-8')
        text2 = file2.read().decode('utf-8')

        # Calculate similarity
        similarity = calculate_use_similarity(text1, text2)
        
        # Send the similarity score back
        return jsonify({'similarity': similarity})
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Run the Flask app
    app.run(host='0.0.0.0', port=6000, debug=True)
