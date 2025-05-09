# 📖 Booking API

A simple Node.js + Express.js based RESTful API for **User Registration, Activity Booking, and Booking Management**.

---

## 📑 Features

- ✅ User Registration
- ✅ User Login (with JWT Authentication)
- ✅ List Public Activities
- ✅ Book an Activity (Authorized Users only)
- ✅ View My Bookings (Authorized Users only)

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📮 API Endpoints

### 📌 User Routes

- **POST** `/api/users/register` → Register a new user
- **POST** `/api/users/login` → Login user and receive JWT token
- **POST** `/api/users/logout` → Logout user

---

### 📌 Activity Routes

- **GET** `/api/activities` → Get list of all available activities

---

### 📌 Booking Routes (Protected - Requires JWT Token)\*\*

- **POST** `/api/bookings/book` → Book an activity

  **Body Example:**

  ```json
  {
    "activityId": "665ca4b1625aef5a6d18e1b3"
  }
  ```

- **GET** `/api/bookings/myBooking` → Get all bookings for the logged-in user

  ## 🚀 Run Project Locally

### 📦 Install Dependencies

```bash
npm install
```

### 📦 Start the Server

```bash
npm run dev
```
