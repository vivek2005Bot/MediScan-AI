import os
import pickle
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv

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

# Load the ML models and scalers
base_dir = os.path.dirname(os.path.abspath(__file__))

# Heart Disease Model
heart_scaler_path = os.path.join(base_dir, 'Notebook', 'Heartdieseas_scaler.pkl')
with open(heart_scaler_path, 'rb') as file:
    heart_scaler = pickle.load(file)

heart_model_path = os.path.join(base_dir, 'Notebook', 'Heartdieseas.pkl')
with open(heart_model_path, 'rb') as file:
    heart_model = pickle.load(file)

# Diabetes Model
diabetes_scaler_path = os.path.join(base_dir, 'Notebook', 'Diabeties_scaler.pkl')
with open(diabetes_scaler_path, 'rb') as file:
    diabetes_scaler = pickle.load(file)

diabetes_model_path = os.path.join(base_dir, 'Notebook', 'Diabeties.pkl')
with open(diabetes_model_path, 'rb') as file:
    diabetes_model = pickle.load(file)

# Parkinson's Model
parkinson_scaler_path = os.path.join(base_dir, 'Notebook', 'parkinson_scaler.pkl')
with open(parkinson_scaler_path, 'rb') as file:
    parkinson_scaler = pickle.load(file)

parkinson_model_path = os.path.join(base_dir, 'Notebook', 'parkinson.pkl')
with open(parkinson_model_path, 'rb') as file:
    parkinson_model = pickle.load(file)

@app.route("/", methods=["GET", "POST"])
def index():
    heart_prediction = None
    diabetes_prediction = None
    parkinson_prediction = None

    if request.method == "POST":
        form_type = request.form.get("form_type")
        # Heart Disease Prediction
        if form_type == "heart":
            try:
                heart_features = [
                    float(request.form.get("age")),
                    float(request.form.get("sex")),
                    float(request.form.get("cp")),
                    float(request.form.get("thalach")),
                    float(request.form.get("exang")),
                    float(request.form.get("oldpeak")),
                    float(request.form.get("slope")),
                    float(request.form.get("ca")),
                    float(request.form.get("thal"))
                ]
                scaled_features = heart_scaler.transform([heart_features])
                result = heart_model.predict(scaled_features)[0]
                heart_prediction = "High Risk of Heart Disease" if result == 1 else "Low Risk of Heart Disease"
            except Exception as e:
                heart_prediction = f"Error in heart disease prediction: {e}"
        # Diabetes Prediction
        elif form_type == "diabetes":
            try:
                diabetes_features = [
                    float(request.form.get("pregnancies")),
                    float(request.form.get("glucose")),
                    float(request.form.get("bmi")),
                    float(request.form.get("age"))
                ]
                scaled_features = diabetes_scaler.transform([diabetes_features])
                result = diabetes_model.predict(scaled_features)[0]
                diabetes_prediction = "High Risk of Diabetes" if result == 1 else "Low Risk of Diabetes"
            except Exception as e:
                diabetes_prediction = f"Error in diabetes prediction: {e}"
        # Parkinson's Prediction
        elif form_type == "parkinsons":
            try:
                parkinson_features = [
                    float(request.form.get("MDVP:Jitter(%)")),
                    float(request.form.get("MDVP:Jitter(Abs)")),
                    float(request.form.get("MDVP:RAP")),
                    float(request.form.get("MDVP:PPQ")),
                    float(request.form.get("Jitter:DDP")),
                    float(request.form.get("MDVP:Shimmer")),
                    float(request.form.get("MDVP:Shimmer(dB)")),
                    float(request.form.get("Shimmer:APQ3")),
                    float(request.form.get("Shimmer:APQ5")),
                    float(request.form.get("MDVP:APQ")),
                    float(request.form.get("Shimmer:DDA"))
                ]
                scaled_features = parkinson_scaler.transform([parkinson_features])
                result = parkinson_model.predict(scaled_features)[0]
                parkinson_prediction = "High Risk of Parkinson's Disease" if result == 1 else "Low Risk of Parkinson's Disease"
            except Exception as e:
                parkinson_prediction = f"Error in Parkinson's prediction: {e}"

    return render_template("index.html", 
                         heart_prediction=heart_prediction,
                         diabetes_prediction=diabetes_prediction,
                         parkinson_prediction=parkinson_prediction)

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

@app.route("/predict/heart", methods=["POST"])
def predict_heart():
    try:
        heart_features = [
            float(request.form.get("age")),
            float(request.form.get("sex")),
            float(request.form.get("cp")),
            float(request.form.get("thalach")),
            float(request.form.get("exang")),
            float(request.form.get("oldpeak")),
            float(request.form.get("slope")),
            float(request.form.get("ca")),
            float(request.form.get("thal"))
        ]
        scaled_features = heart_scaler.transform([heart_features])
        result = heart_model.predict(scaled_features)[0]
        prediction = "High Risk of Heart Disease" if result == 1 else "Low Risk of Heart Disease"
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"prediction": f"Error in heart disease prediction: {e}"})

@app.route("/predict/diabetes", methods=["POST"])
def predict_diabetes():
    try:
        diabetes_features = [
            float(request.form.get("pregnancies")),
            float(request.form.get("glucose")),
            float(request.form.get("bmi")),
            float(request.form.get("age"))
        ]
        scaled_features = diabetes_scaler.transform([diabetes_features])
        result = diabetes_model.predict(scaled_features)[0]
        prediction = "High Risk of Diabetes" if result == 1 else "Low Risk of Diabetes"
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"prediction": f"Error in diabetes prediction: {e}"})

@app.route("/predict/parkinsons", methods=["POST"])
def predict_parkinsons():
    try:
        parkinson_features = [
            float(request.form.get("MDVP:Jitter(%)")),
            float(request.form.get("MDVP:Jitter(Abs)")),
            float(request.form.get("MDVP:RAP")),
            float(request.form.get("MDVP:PPQ")),
            float(request.form.get("Jitter:DDP")),
            float(request.form.get("MDVP:Shimmer")),
            float(request.form.get("MDVP:Shimmer(dB)")),
            float(request.form.get("Shimmer:APQ3")),
            float(request.form.get("Shimmer:APQ5")),
            float(request.form.get("MDVP:APQ")),
            float(request.form.get("Shimmer:DDA"))
        ]
        scaled_features = parkinson_scaler.transform([parkinson_features])
        result = parkinson_model.predict(scaled_features)[0]
        prediction = "High Risk of Parkinson's Disease" if result == 1 else "Low Risk of Parkinson's Disease"
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"prediction": f"Error in Parkinson's prediction: {e}"})

def get_gemini_response(text):
    try:
        response = chat_session.send_message(text)
        return response.text
    except Exception as e:
        print(f"Gemini API error: {e}")
        raise e

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
