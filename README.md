# 👥 User Directory

A simple Employee Directory web app that fetches user data from a public API and displays it as clean, responsive Bootstrap cards.

---

## 🚀 Live Demo

> Open `index.html` directly in your browser — no server setup needed!

---

## 📸 Features

- Fetches real user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Displays each user as a Bootstrap card showing:
  - Full Name
  - Company Name
  - Email Address
  - City
- Responsive grid layout (3 cards per row on desktop)
- Graceful error handling if the API call fails

---

## 🗂️ Project Structure

```
├── index.html   # Main HTML page with Bootstrap CDN
└── app.js       # Fetches API data and dynamically renders employee cards
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Bootstrap 5.3 | Styling & responsive grid |
| JavaScript (ES6+) | Async data fetching & DOM manipulation |
| JSONPlaceholder API | Mock employee data source |

---

## ⚙️ How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/loedex/fetch-api-user-directory.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd fetch-api-user-directory
   ```

3. **Open `index.html` in your browser**
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html
   ```

> ✅ No installations or dependencies required — it runs entirely in the browser!

---

## 📡 API Reference

Data is sourced from the free mock API:

```
GET https://jsonplaceholder.typicode.com/users
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).