# 🏠 Airbnb Prototype

A full-stack property listing web application inspired by Airbnb. Built with Node.js, Express, MongoDB, and EJS — featuring complete CRUD operations, session-based authentication, and user authorization.

🔗 **Live Demo:** [airbnb-prototype-4spb.onrender.com](https://airbnb-prototype-4spb.onrender.com)

---

## 📸 Screenshots
<img width="1920" height="1029" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/ff1cfb5d-832e-4e76-acaa-f04706a015f0" />

<img width="1920" height="1023" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/72844e2f-4dad-4040-828d-0dbb80df037d" />
<img width="1920" height="1024" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/159f3532-5154-4644-82c2-04a7df650f0d" />




---

## ✨ Features

- 🔐 **User Authentication** — Register, login and logout using secure session-based auth
- 🛡️ **Authorization** — Users can only edit or delete their own listings
- 🏡 **Property Listings** — Create, read, update and delete property listings
- 💬 **Reviews** — Logged-in users can leave reviews on listings
- 📱 **Responsive Design** — Mobile-friendly UI built with Bootstrap
- ✅ **Form Validation** — Server-side and client-side validation on all forms
- 🚀 **Deployed** — Live on Render

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js, Express.js |
| Frontend | EJS, HTML5, CSS3, Bootstrap |
| Database | MongoDB, Mongoose,Cloudinary |
| Authentication | Express-Session, Passport.js |
| Deployment | Render |

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
# Clone the repository
git clone https://github.com/AnshAngural/airbnb-prototype.git

# Navigate into the project
cd airbnb-prototype

# Install dependencies
npm install

# Create a .env file in the root directory
touch .env
```

### Environment Variables

Add the following to your `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

### Run the App

```bash
node app.js
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
airbnb-prototype/
├── models/
│   ├── listing.js
│   └── user.js
├── routes/
│   ├── listing.js
│   └── user.js
├── views/
│   ├── listings/
│   └── users/
├── public/
│   └── css/
├── middleware.js
├── app.js
└── package.json
```

---

## 🔑 Key Concepts Demonstrated

- **MVC Architecture** — Clean separation of Models, Views, and Controllers
- **Session-based Auth** — Secure login system using express-session
- **RESTful Routes** — Proper use of GET, POST, PUT, DELETE routes
- **Middleware** — Custom middleware for authentication checks
- **MongoDB CRUD** — Full create, read, update, delete with Mongoose

---

## 👨‍💻 Author

**Ansh Angural**
- GitHub: [@AnshAngural](https://github.com/AnshAngural)
- LinkedIn: [Ansh Angural](https://www.linkedin.com/in/ansh-angural-4959b42b2)
- Portfolio: [AnshAngural.github.io](https://AnshAngural.github.io)

---

⭐ If you found this project useful, please give it a star!
