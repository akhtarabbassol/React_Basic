# Wafadar MERN E-Commerce App

Full-stack MERN e-commerce application with customer and admin sections.

## Features

### Customer
- Register/login/logout
- Browse products
- Search and category filtering
- Product details
- Add/remove/update cart items
- Checkout and place order
- Order history and order details

### Admin
- Admin login with role protection
- Dashboard statistics
- Manage users (view, change role, activate/deactivate, delete)
- Manage customers (customer-only view)
- Manage products (create, edit, delete)
- Manage sales/orders (view, update order status)

## Tech Stack
- Frontend: React + Vite + React Router + Axios + Context API
- Backend: Node.js + Express + MongoDB + Mongoose
- Authentication: JWT + bcryptjs
- Styling: Custom responsive CSS

## Project Structure

```text
mern-ecommerce-app/
  backend/
    src/
      config/
      controllers/
      middleware/
      models/
      routes/
      seed/
      utils/
      server.js
    .env
    .env.example
    package.json
  frontend/
    src/
      components/
      context/
      layouts/
      pages/
      services/
      App.jsx
      main.jsx
      styles.css
    .env.example
    package.json
  README.md
```

## Run locally

### 1. Backend
```bash
cd backend
npm install
npm run seed
npm run dev
```
Backend runs on `http://localhost:5000`.

### 2. Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.

### Admin login
The seed script creates the admin from `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env`.
Default values included in this demo are:
- Email: `admin@example.com`
- Password: `Admin@12345`

Change these before production.

## MongoDB
The requested MongoDB Atlas connection is already placed in `backend/.env`. If you rotate the database password, update `MONGODB_URI` there.

## Important security note
The MongoDB password was supplied directly in the chat and is included in the local `.env` file only because you requested a ready-to-run integration. For a real deployment, rotate that MongoDB password and never commit `.env` to Git.
