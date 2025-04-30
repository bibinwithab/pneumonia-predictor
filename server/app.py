from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image as keras_image
from datetime import datetime

import numpy as np
import os
import shutil

app = FastAPI()

model = load_model('./models/model.h5')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173/", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "API is up and running"}

@app.post("/predict-pneumonia")
async def predict_pneumonia(image: UploadFile = File(...)):
    try:
        temp_file_location = f"./temp/{image.filename}"
        os.makedirs("./temp", exist_ok=True)

        with open(temp_file_location, "wb") as temp_file:
            shutil.copyfileobj(image.file, temp_file)

        img = keras_image.load_img(temp_file_location, target_size=(150, 150))
        x = keras_image.img_to_array(img)
        x = np.expand_dims(x, axis=0) / 255.0

        prediction = float(model.predict(x)[0][0])
        confidence = round(prediction * 100, 1)
        label = "pneumonia" if prediction > 0.5 else "normal"

        print("Prediction:", label)
        print("Confidence:", confidence)

        os.remove(temp_file_location)

        return {
            "prediction": label,
            "confidence": float(confidence),
            "timestamp": datetime.now().isoformat()
        }

    except Exception as e:
        print("Error:", str(e))
        return {"error": str(e)}