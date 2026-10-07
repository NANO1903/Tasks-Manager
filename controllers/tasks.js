// controllers/tasks.js
const Task = require('../models/task');

// Fetch all tasks from the database
const getTasks = (req, res) => {

    res.status(200).json({
        success: true,
        message: 'All items'
    });
}

// Create a new task in the database
const createTasks = async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({
        success: true,
        message: 'Task created',
        task
    });
}

// Fetch a single task from the database
const getTask = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'One task',
        id: req.params
    });
}

// Update a task in the database
const updateTasks = (req, res) => {
    res.status(201).json({
        success: true,
        message: 'Task updated',
        data: req.body,
        id: req.params
    });
}

// Delete a task from the database
const deleteTasks = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Task deleted',
        id: req.params
    });
}

// Export the controller functions
module.exports = {
    getTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}