import os
import pickle
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY is not set")

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash-latest')
chat_session = model.start_chat(history=[])

# Template and static directories
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
template_dir = os.path.join(base_dir, 'Frontend', 'templates')
static_dir = os.path.join(base_dir, 'Frontend', 'static')

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)


# Load the ML model
base_dir = os.path.dirname(os.path.abspath(__file__))
scaler_path = os.path.join(base_dir, 'Notebook', 'Heartdieseas_scaler.pkl')
with open(scaler_path, 'rb') as file:
    scaler = pickle.load(file)

model_path = os.path.join(base_dir, 'Notebook', 'Heartdieseas.pkl')
with open(model_path, 'rb') as file:
    heart_model = pickle.load(file)

@app.route("/", methods=["GET", "POST"])
def index():
    prediction = None

    if request.method == "POST":
        try:
            # Extract features from form
            features = [
                float(request.form.get("age")),
                float(request.form.get("sex")),
                float(request.form.get("cp")),
                float(request.form.get("trestbps")),
                float(request.form.get("chol")),
                float(request.form.get("fbs")),
                float(request.form.get("restecg")),
                float(request.form.get("thalach")),
                float(request.form.get("exang")),
                float(request.form.get("oldpeak")),
                float(request.form.get("slope")),
                float(request.form.get("ca")),
                float(request.form.get("thal")),
            ]

            # Make prediction
            scaled_features = scaler.transform([features])
            result = heart_model.predict(scaled_features)[0]
            prediction = "High Risk of Heart Disease" if result == 1 else "Low Risk of Heart Disease"


        except Exception as e:
            prediction = f"Error in prediction: {e}"

    return render_template("index.html", prediction=prediction)

@app.route("/chat")
def chat_page():
    return render_template("chat.html")

@app.route("/get", methods=["POST"])
def chat():
    try:
        user_message = request.form["msg"]
        if not user_message:
            return jsonify({"error": "Empty message received."}), 400
        response_text = get_gemini_response(user_message)
        return response_text
    except Exception as e:
        return f"Error: {e}"

def get_gemini_response(text):
    try:
        response = chat_session.send_message(text)
        return response.text
    except Exception as e:
        print(f"Gemini API error: {e}")
        raise e

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
