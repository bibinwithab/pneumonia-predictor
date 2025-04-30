# 🚻 Pneumonia Detection API

A full-stack machine learning project that detects pneumonia from chest X-ray images using a Convolutional Neural Network (CNN). It includes:

- 📆 A FastAPI backend with a trained ML model
- 🌐 A React + Vite frontend for image upload and prediction display
- 🧠 A TensorFlow/Keras-based binary classification model (Normal vs Pneumonia)

---

## 📂 Dataset Source

This project uses the **Chest X-Ray Images (Pneumonia)** dataset from Kaggle:

📅 **[Download from Kaggle](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia)**

Make sure to extract it and organize as:

```
chest_xray/
├── train/
│   ├── NORMAL/
│   └── PNEUMONIA/
└── test/
    ├── NORMAL/
    └── PNEUMONIA/
```

## 🚀 FastAPI Backend

### 📦 Install Requirements

```bash
pip install -r requirements.txt
```

### ▶️ Run the Backend

```bash
uvicorn app:app --reload
```

---

## 🌐 React Frontend

### 📁 Go to the frontend folder

```bash
cd client
```

### 🧶 Install dependencies

```bash
npm install
```

### ▶️ Run the app

```bash
npm run dev
```

Access the app at:  
📍 `http://localhost:5173`

---

## 📡 API Endpoint

### POST `/predict`

**Form-Data**:
- `file`: an image file (X-ray)

**Response**:

```json
{
  "prediction": "NORMAL" // or "PNEUMONIA"
}
```

---

## ✅ Tech Stack

- 🧠 TensorFlow + Keras (CNN model)
- ⚡ FastAPI (backend)
- 🎨 React + Vite (frontend)
- 📂 Pillow, python-multipart, Axios

---

## 📝 License

This project is for educational and demonstration purposes.  
Original dataset by Paul Mooney on Kaggle.

