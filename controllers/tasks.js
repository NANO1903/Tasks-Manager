// controllers/tasks.js
const Task = require('../models/task');

// Fetch all tasks from the database
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});

        res.status(200).json({
            success: true,
            tasks
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching tasks',
            error: error.message
        });
    }
}

// Create a new task in the database
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Task created',
            task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message
        });
    }

}

// Fetch a single task from the database
const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);

        res.status(200).json({
            success: true,
            task
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `Task with id: ${id} not found`
        })
    }
}

// Update a task in the database
const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskUpdated = await Task.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });

        res.status(201).json({
            success: true,
            message: 'Task updated',
            task: taskUpdated
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `Task with id: ${id} not found`,
            error: error
        })
    }
}

// Delete a task from the database
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskDeleted = await Task.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Task deleted',
            task: taskDeleted
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `Task with id: ${id} not found`,
            error: error
        });
    }
}

// Export the controller functions
module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}