import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model

model = load_model('./models/model.h5')

img = image.load_img('user_img_1.jpeg', target_size=(150, 150))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0) / 255.0

prediction = model.predict(x)
print("Pneumonia" if prediction[0][0] > 0.5 else "Normal")
print("Confidence:", prediction[0][0] * 100)