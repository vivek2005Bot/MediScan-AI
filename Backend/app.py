import os
import sys # To potentially modify path if needed, though Flask handles ../ well
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv

# --- Configuration ---
# Option: If .env is in the project root (one level up from backend)
# dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
# load_dotenv(dotenv_path=dotenv_path)
# Option: If .env is inside the backend folder
load_dotenv() # Looks for .env in the current directory (backend) by default

# 1. Load API Key
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable not set. Make sure it's accessible "
                     "or your .env file is loaded correctly.")

# 2. Configure the Google Generative AI client
genai.configure(api_key=api_key)

# 3. Select the Gemini model
model = genai.GenerativeModel('gemini-1.5-flash-latest')

# 4. Initialize chat history
#    (Still has the limitation of being shared across all users)
chat_session = model.start_chat(history=[])
# --- End Configuration ---


# ***MODIFIED LINE HERE***
# Calculate the path to the template folder relative to this script's location
# Go up one level ('..') from 'backend', then into 'Frontend/templates'
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
template_dir = os.path.join(base_dir, 'Frontend', 'templates')
static_dir = os.path.join(base_dir, 'Frontend', 'static')

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)
# Alternatively, if relative paths work directly (often they do):
# app = Flask(__name__, template_folder='../frontend/template')


@app.route("/")
def index():
    """Renders the chat interface."""
    try:
        return render_template('index.html')
    except Exception as e:
        print(f"Error rendering template: {e}")
        # Provide feedback if the template isn't found
        return f"Error finding template. Looked in: {app.template_folder}. Error: {e}", 500

@app.route("/chat")
def chat_page():
    return render_template("chat.html")

@app.route("/get", methods=["POST"])
def chat():
    """Handles incoming chat messages and returns the AI's response."""
    try:
        user_message = request.form["msg"]
        if not user_message:
            return jsonify({"error": "Empty message received."}), 400

        response_text = get_gemini_response(user_message)
        return response_text # Return plain text response

    except Exception as e:
        print(f"Error during chat processing: {e}")
        return f"Error: Sorry, I encountered an issue. {e}"


def get_gemini_response(text):
    """
    Sends the user's text to the Gemini model via the ongoing chat session
    and returns the model's response.
    """
    try:
        response = chat_session.send_message(text)
        return response.text
    except Exception as e:
        print(f"Error communicating with Google AI: {e}")
        raise e

if __name__ == '__main__':
    # Run the app
    # Host '0.0.0.0' makes it accessible on your network,
    # otherwise use '127.0.0.1' for local access only.
    app.run(host='0.0.0.0', port=5000, debug=True) # Added host and port for clarity