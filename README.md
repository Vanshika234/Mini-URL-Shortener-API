This is a simple backend project for shortening URLs, built using *Node.js, **Express, and **MongoDB*.

## 🚀 Features

- 🔐 POST / – Submit a long URL and get a shortened version
- 📊 GET /analytics/:shortId – Get analytics data like number of clicks and timestamp for a given shortened URL

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

 🧩 Installation & Setup # Mini-URL-Shortener-API

 Set up Environment Variables

Create a .env file in the root and add your MongoDB connection string:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start the Server

npm start
The server will start on http://localhost:5000
