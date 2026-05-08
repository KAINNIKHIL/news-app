# MERN Hacker News App

A full-stack MERN application that scrapes the top stories from Hacker News, stores them in MongoDB, and allows authenticated users to bookmark stories.

---

# Features

- Scrape top 10 Hacker News stories
- Automatic scraping on server start
- Manual scraping API
- JWT Authentication
- Register & Login
- Bookmark stories
- Protected bookmarks page
- Pagination support
- Responsive frontend UI

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Axios
- Cheerio

---

# Project Structure

```bash
mern-news-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── .env
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── .env
│   └── package.json
│
└── README.md
```


Environment Variables
Backend (.env)

Create a .env file inside the backend folder:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Frontend (.env)

Create a .env file inside the frontend folder:

```
VITE_API_URL=http://localhost:5000/api
```
# Setup Instructions
## Clone Repository

```
git clone
```
## Backend Setup
```
cd backend
npm install
npm run dev
http://localhost:5000
```

## Frontend Setup
```
cd frontend
npm install
npm run dev
http://localhost:5173
```

# API Endpoints
## Register User
```
POST /api/auth/register
```
## Login User
```
POST /api/auth/login
```
## Get All Stories
```
GET /api/stories
```
## Get Single Story
```
GET /api/stories/:id
```
## Bookmark
```
POST /api/stories/:id/bookmark
```
## Get Bookmarked Stories
```
GET /api/stories/bookmarks
```

# ⭐ Thank You
