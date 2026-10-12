# Tasks Manager

This is my project implementation of the very first Node.js and Express project from the course series **Node.js Projects** by ***Coding Addict***, link of the series: https://youtu.be/rltfdjcXjmk

---
## Features
- Tasks creation with personalized names up to 20 chars
- Toggable completed task
- Task deletion
- Dashboard view of all the tasks

---
## Built With
- [Express](https://expressjs.com/es/guide/migrating-4/) 4.17
- [mongoose](https://mongoosejs.com/docs/guide.html) 9.10
- [MongoDB Atlas](https://www.mongodb.com/es/docs/atlas/)

---
## Getting Started
Install the dependencies:

    pnpm install

Run the development server:

    npm start

Open http://localhost:3000 in your browser. The page updates automatically as you edit the source files.

---
## Project Structure

    app/
    |-- public/
    |   |-- index.html      # Landing page
    |   |-- main.css        # CSS Styles
    |   |-- normalize.css   # CSS Styles normalizations
    |   |-- task.html       # View of the task editing
    |   |-- edit-task.js    # Logic of the task editing
    |   |-- browser-app.js  # Logic of the landing page
    |-- db/
    |   |-- connect.js      # Database connection
    |-- models/
    |   |-- task.js         # Task schema for Database
    |-- controllers/
    |   |-- tasks.js        # API REST logic
    |-- routes/
    |   |-- tasks.js        # API REST routing
    `-- app.js              # Dependencies, middleware and project instances 