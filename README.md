---

# 📊 SlideVault – Presentation Sharing Platform

SlideVault is a web-based platform where users can **upload, discover, and share presentations**. It is designed to make academic and professional content easily accessible with features like preview, download, and categorization.

🔗 **Live Demo:**
[https://slidevault-1-z35j.onrender.com](https://slidevault-1-z35j.onrender.com)

---

## 🚀 Features

* 📤 Upload presentations (PPT, PPTX, PDF, KEY)
* 🔍 Search and filter presentations by category or keywords
* 📊 View statistics (downloads, views, likes)
* ❤️ Like presentations
* 📥 Download presentations
* 👀 Preview slides before downloading
* 📂 Category-based browsing (CS, Math, Physics, Business, etc.)
* 🔐 User authentication (Login/Signup UI)
* 📈 Trending presentations section

---

## 🛠️ Tech Stack

### Frontend

* HTML5, CSS3
* JavaScript (Vanilla JS)
* Responsive UI Design

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose ODM)

### Other Tools & Libraries

* Multer (File Upload Handling)
* dotenv (Environment Variables)
* CORS
* Helmet (Security)

---

## 📁 Project Structure

```
SlideVault/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Presentation.js
│   ├── routes/
│   │   └── presentationRoutes.js
│   └── uploads/
│
├── .env
├── package.json
└── README.md
```

---

## 📦 API Endpoints

### 🔹 Get All Presentations

```
GET /api/presentations
```

### 🔹 Get Single Presentation

```
GET /api/presentations/:id
```

### 🔹 Upload Presentation

```
POST /api/presentations
```

### 🔹 Increment Views

```
PATCH /api/presentations/:id/view
```

### 🔹 Increment Downloads

```
PATCH /api/presentations/:id/download
```

### 🔹 Like Presentation

```
PATCH /api/presentations/:id/like
```

### 🔹 Delete Presentation

```
DELETE /api/presentations/:id
```

### 🔹 Stats

```
GET /api/stats
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/slidevault.git
cd slidevault
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Server

```bash
npm start
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 📌 Supported File Types

* .ppt
* .pptx
* .pdf
* .key

(Max file size: 50MB)

---

## 🎯 Future Improvements

* 🔐 Full authentication system (JWT)
* 💬 Comments and reviews on presentations
* 📊 Advanced analytics dashboard
* ☁️ Cloud storage integration (AWS S3 / Cloudinary)
* 📱 Mobile app version
* 🧠 AI-based recommendation system

---

## 👨💻 Author

**Ayush Kumar**
B.Tech CSE (2028)

---

## 📄 License

This project is open-source and available under the **MIT License**.
