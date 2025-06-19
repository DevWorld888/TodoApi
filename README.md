

---

```markdown
# 📝 Todo API - Node.js + Express + MongoDB

A professional-level RESTful API for managing personal tasks, built with **Node.js**, **Express**, and **MongoDB**, including user authentication with **JWT**, validation, error handling, and deployment readiness.

---

## 🚀 Features

✅ RESTful API with full CRUD operations  
✅ JWT-based user authentication  
✅ Route protection  
✅ User-based task filtering  
✅ Data validation with express-validator  
✅ Centralized error handling  
✅ MongoDB Cloud (Atlas) integration  
✅ Ready for deployment on Railway

---

## 🏗️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs
- express-validator
- dotenv
- Railway (for deployment)

---

## 📁 Project Structure

```

todo-api/
├── config/               # Database connection
│   └── db.js
├── controllers/          # Business logic
│   ├── authController.js
│   └── taskController.js
├── middleware/           # Middleware (auth, errors, etc.)
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── asyncHandler.js
├── models/               # Mongoose schemas
│   ├── Task.js
│   └── User.js
├── routes/               # API routes
│   ├── authRoutes.js
│   └── taskRoutes.js
├── utils/                # Helpers
│   └── generateToken.js
├── validators/           # Data validation rules
│   ├── authValidator.js
│   └── taskValidator.js
├── .env                  # Environment variables
├── server.js             # App entry point
└── README.md

```

---

## 🔐 Authentication Flow

1. **Register** a new user via `/api/auth/register`
2. **Login** via `/api/auth/login` and receive a JWT token
3. Use the token in the `Authorization` header:
```

Authorization: Bearer <your-token>

````
4. Access protected routes like `/api/tasks` using the token

---

## 🧪 API Endpoints

### Auth

| Method | Route               | Description          |
|--------|---------------------|----------------------|
| POST   | `/api/auth/register`| Register new user    |
| POST   | `/api/auth/login`   | Login and get token  |

### Tasks (Protected)

| Method | Route             | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/tasks`     | Get all tasks of user    |
| POST   | `/api/tasks`     | Create a new task        |
| GET    | `/api/tasks/:id` | Get one task             |
| PUT    | `/api/tasks/:id` | Update task              |
| DELETE | `/api/tasks/:id` | Delete task              |

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
````

---

## 🧱 Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm run dev
```

---

## ☁️ Deployment

You can deploy the API to **Railway**:

1. Push this repo to GitHub
2. Create a new project in [Railway](https://railway.app)
3. Link your GitHub repo
4. Set your environment variables in Railway
5. Deploy 🎉

---

## 🧠 Future Improvements

* Pagination and filtering on tasks
* Admin role and role-based access control
* Swagger documentation
* Refresh tokens
* Email verification

---

## 🧑‍💻 Author

Created by **Israel Augusto Cáceres Suárez**
📍 Based in Sydney, Australia
🚀 Learning Full-Stack & Automation with AI

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```

---


```
