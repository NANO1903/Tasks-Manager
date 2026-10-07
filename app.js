// 3-task-manager/app.js
// Dependencies
require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const app = express();



// Middleware
app.use(express.json());
app.use(express.static('./public'));



// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);








/*
    - get all the tasks
    - create a new task
    - get single task
    - update task
    - delete task
*/

// console.log(process.env.MONGODB_URI);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        const port = 3000;
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

// console.clear()