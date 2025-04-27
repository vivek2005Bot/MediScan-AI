import os
import pickle
import numpy as np
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
from database import get_db_session, ChatHistory, HeartPrediction, DiabetesPrediction, ParkinsonPrediction, SkinAnalysis
from datetime import datetime
from PIL import Image
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from werkzeug.utils import secure_filename

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
                
                # Store prediction in database
                session = get_db_session()
                prediction = HeartPrediction(
                    age=int(heart_features[0]),
                    sex=int(heart_features[1]),
                    cp=int(heart_features[2]),
                    thalach=int(heart_features[3]),
                    exang=int(heart_features[4]),
                    oldpeak=float(heart_features[5]),
                    slope=int(heart_features[6]),
                    ca=int(heart_features[7]),
                    thal=int(heart_features[8]),
                    prediction=bool(result)
                )
                session.add(prediction)
                session.commit()
                session.close()
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
                
                # Store prediction in database
                session = get_db_session()
                prediction = DiabetesPrediction(
                    pregnancies=int(diabetes_features[0]),
                    glucose=float(diabetes_features[1]),
                    bmi=float(diabetes_features[2]),
                    age=int(diabetes_features[3]),
                    prediction=bool(result)
                )
                session.add(prediction)
                session.commit()
                session.close()
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
                
                # Store prediction in database
                session = get_db_session()
                prediction = ParkinsonPrediction(
                    mdvp_jitter=float(parkinson_features[0]),
                    mdvp_jitter_abs=float(parkinson_features[1]),
                    mdvp_rap=float(parkinson_features[2]),
                    mdvp_ppq=float(parkinson_features[3]),
                    jitter_ddp=float(parkinson_features[4]),
                    mdvp_shimmer=float(parkinson_features[5]),
                    mdvp_shimmer_db=float(parkinson_features[6]),
                    shimmer_apq3=float(parkinson_features[7]),
                    shimmer_apq5=float(parkinson_features[8]),
                    mdvp_apq=float(parkinson_features[9]),
                    shimmer_dda=float(parkinson_features[10]),
                    prediction=bool(result)
                )
                session.add(prediction)
                session.commit()
                session.close()
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
        
        # Get response from Gemini
        response_text = get_gemini_response(user_message)
        
        # Store chat in database
        session = get_db_session()
        chat_entry = ChatHistory(
            user_message=user_message,
            bot_response=response_text
        )
        session.add(chat_entry)
        session.commit()
        session.close()
        
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
        
        # Store prediction in database
        session = get_db_session()
        prediction_entry = HeartPrediction(
            age=int(heart_features[0]),
            sex=int(heart_features[1]),
            cp=int(heart_features[2]),
            thalach=int(heart_features[3]),
            exang=int(heart_features[4]),
            oldpeak=float(heart_features[5]),
            slope=int(heart_features[6]),
            ca=int(heart_features[7]),
            thal=int(heart_features[8]),
            prediction=bool(result)
        )
        session.add(prediction_entry)
        session.commit()
        session.close()
        
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
        
        # Store prediction in database
        session = get_db_session()
        prediction_entry = DiabetesPrediction(
            pregnancies=int(diabetes_features[0]),
            glucose=float(diabetes_features[1]),
            bmi=float(diabetes_features[2]),
            age=int(diabetes_features[3]),
            prediction=bool(result)
        )
        session.add(prediction_entry)
        session.commit()
        session.close()
        
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
        
        # Store prediction in database
        session = get_db_session()
        prediction_entry = ParkinsonPrediction(
            mdvp_jitter=float(parkinson_features[0]),
            mdvp_jitter_abs=float(parkinson_features[1]),
            mdvp_rap=float(parkinson_features[2]),
            mdvp_ppq=float(parkinson_features[3]),
            jitter_ddp=float(parkinson_features[4]),
            mdvp_shimmer=float(parkinson_features[5]),
            mdvp_shimmer_db=float(parkinson_features[6]),
            shimmer_apq3=float(parkinson_features[7]),
            shimmer_apq5=float(parkinson_features[8]),
            mdvp_apq=float(parkinson_features[9]),
            shimmer_dda=float(parkinson_features[10]),
            prediction=bool(result)
        )
        session.add(prediction_entry)
        session.commit()
        session.close()
        
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"prediction": f"Error in Parkinson's prediction: {e}"})

@app.route("/skin-analysis", methods=["POST"])
def skin_analysis():
    try:
        if 'skin_image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
            
        file = request.files['skin_image']
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400
            
        # Create uploads directory if it doesn't exist
        if not os.path.exists('uploads'):
            os.makedirs('uploads')
            
        # Save the uploaded file
        filename = secure_filename(file.filename)
        filepath = os.path.join('uploads', filename)
        file.save(filepath)
        
        # Load the model
        model = tf.keras.models.load_model('Notebook/model.h5')
        
        # Process the image
        img = tf.keras.utils.load_img(filepath, target_size=(224, 224))
        img = tf.keras.utils.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = img.reshape(-1, 224, 224, 3)
        img = img / 255.0  # Normalize pixel values
        
        # Make prediction
        predictions = model.predict(img)
        predicted_class_index = np.argmax(predictions[0])
        confidence = float(predictions[0][predicted_class_index])
        
        # Define class labels and descriptions
        class_labels = ['Enfeksiyonel', 'Ekzama', 'Akne', 'Pigment', 'Benign', 'Malign', 'unidentified']
        class_descriptions = {
            'Enfeksiyonel': 'Infectious skin condition that may require medical attention',
            'Ekzama': 'Chronic skin condition causing inflammation and irritation',
            'Akne': 'Common skin condition affecting hair follicles and oil glands',
            'Pigment': 'Pigmentation-related skin condition',
            'Benign': 'Non-cancerous skin condition',
            'Malign': 'Potentially serious skin condition requiring immediate medical attention',
            'unidentified': 'Unable to confidently identify the condition'
        }
        
        # Get all predictions above 40% confidence
        valid_predictions = []
        for i, conf in enumerate(predictions[0]):
            if conf >= 0.4:  # 40% confidence threshold
                valid_predictions.append({
                    'condition': class_labels[i],
                    'confidence': float(conf),
                    'description': class_descriptions[class_labels[i]]
                })
        
        # Sort predictions by confidence
        valid_predictions.sort(key=lambda x: x['confidence'], reverse=True)
        
        # Store in database
        session = get_db_session()
        analysis = SkinAnalysis(
            image_data=open(filepath, 'rb').read(),
            prediction=valid_predictions[0]['condition'] if valid_predictions else 'unidentified',
            confidence=valid_predictions[0]['confidence'] if valid_predictions else 0.0
        )
        session.add(analysis)
        session.commit()
        session.close()
        
        # Clean up uploaded file
        os.remove(filepath)
        
        # Prepare response
        response = jsonify({
            "predictions": valid_predictions if valid_predictions else [{
                'condition': 'unidentified',
                'confidence': 0.0,
                'description': class_descriptions['unidentified']
            }]
        })
        response.headers.add("Access-Control-Allow-Origin", "*")
        
        return response
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def get_gemini_response(text):
    try:
        response = chat_session.send_message(text)
        return response.text
    except Exception as e:
        print(f"Gemini API error: {e}")
        raise e

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
