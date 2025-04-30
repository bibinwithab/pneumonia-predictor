from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

import numpy as np
import os
import shutil

app = FastAPI()

model = load_model('./models/model.h5')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Api is up and running"}

@app.post("/predict-pneumonia")
async def predict_pneumonia(file: UploadFile = File(...)):
    try:
        temp_file_location = f"./temp/{file.filename}"
        with open(temp_file_location, "wb") as temp_file:
            shutil.copyfileobj(file.file, temp_file)
        
        img = image.load_img(temp_file_location, target_size=(150, 150))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0) / 255.0
    
        prediction = model.predict(x)[0][0]
    
        return {"prediction": "Pneumonia" if prediction[0][0] > 0.5 else "Normal"}

        os.remove(temp_file_location)

    except Exception as e:
        return {"error": str(e)}