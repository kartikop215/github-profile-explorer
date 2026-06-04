# GitHub Profile Explorer

A full-stack web application that allows users to search GitHub profiles and explore public repositories through a secure backend proxy.

---

## Features

* Search GitHub users by username
* View GitHub profile information
* Browse public repositories
* Repository search functionality
* Repository sorting (Stars, Forks, Last Updated)
* Pagination for repositories
* Loading skeletons
* Responsive design
* Backend proxy architecture
* In-memory caching using Node Cache
* Environment variable configuration

---

## Why Use a Backend Proxy?

The frontend never communicates directly with the GitHub API.

Benefits:

1. Prevents exposing API tokens in the browser.
2. Enables caching to reduce GitHub API requests.
3. Helps avoid GitHub rate-limit issues.
4. Provides a scalable architecture for future enhancements.

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* Axios
* Node Cache
* Dotenv

---

## Architecture

```text
React Frontend
       │
       ▼
Express Backend
       │
       ▼
Node Cache
       │
       ▼
GitHub API
```

---

## API Endpoint

### Get GitHub User

```http
GET /api/github/:username
```

Example:

```http
GET /api/github/octocat
```

Response:

```json
{
  "success": true,
  "cached": false,
  "timestamp": "2026-06-02T18:42:12.125Z",
  "data": {
    "profile": {},
    "repos": [],
    "repositoryCount": 8
  }
}
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/kartikop215/github-profile-explorer.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env`

```env
PORT=5000
GITHUB_TOKEN=your_github_token
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```


---

## Future Improvements

* Redis caching
* Infinite scrolling
* Repository filtering by language
* GitHub contribution graph
* User favorites
* Dark/Light theme toggle

---

## Author

Kartik Bisht

Built as a Full Stack Developer Recruitment Assignment.
