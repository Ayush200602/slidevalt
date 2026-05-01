# 🎯 SlideVault — Upload. Discover. Present.

SlideVault is a modern web platform designed to **upload, explore, and share presentations** seamlessly. It enables students, educators, and professionals to access high-quality slides across multiple domains while offering an intuitive and clean user experience.

🔗 Live Demo: [https://slidevault-1-z35j.onrender.com](https://slidevault-1-z35j.onrender.com)

---

## 🚀 Features

* 📤 **Upload Presentations** (PPT, PPTX, PDF, KEY)
* 🔍 **Search & Filter** presentations by category and keywords
* 📊 **Trending & Popular Content** display
* 👁️ **Preview Slides** before downloading
* ❤️ **Like & Save** presentations
* ⬇️ **Download Tracking** system
* 📈 **Real-time Stats** (views, downloads, likes)
* 🧠 **Category-based Organization** (CS, Math, Business, etc.)
* 🔐 **Authentication UI** (Login/Signup interface ready)

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* Multer (File Upload)
* Dotenv (Environment Variables)
* CORS

---

## 📁 Project Structure

```
SlideVault/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── presentation.js
│   ├── uploads/
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/slidevault.git
cd slidevault
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run Server

```
npm start
```

Server will run on:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint                        | Description             |
| ------ | ------------------------------- | ----------------------- |
| GET    | /api/presentations              | Get all presentations   |
| GET    | /api/presentations/:id          | Get single presentation |
| POST   | /api/presentations              | Upload presentation     |
| PATCH  | /api/presentations/:id/view     | Increase views          |
| PATCH  | /api/presentations/:id/download | Increase downloads      |
| PATCH  | /api/presentations/:id/like     | Like presentation       |
| DELETE | /api/presentations/:id          | Delete presentation     |

---

## 🧪 Future Enhancements

* 🔐 Full authentication (JWT / OAuth)
* 🗂️ User dashboards
* 💬 Comments & reviews
* ⭐ Rating system
* ☁️ Cloud storage (AWS S3 / Cloudinary)
* 📱 Mobile responsiveness improvements

---

## 👨‍💻 Author

**Ayush Kumar**
B.Tech CSE Student

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 💡 Inspiration

SlideVault was built to simplify presentation sharing and make knowledge more accessible in a structured and visually engaging way.

---

⭐ If you like this project, consider giving it a star on GitHub!
