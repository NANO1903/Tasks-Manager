const Task = require('../models/task');

const getTasks = (req, res) => {

    res.status(200).json({
        success: true,
        message: 'All items',
        tasks: [
            {
                "name": "Dinner time",
                "completed": false,
                "_id": "6ac567dd645dba6c7832a75b",
                "__v": 0
            }, 
            {
                "name": "Breakfast time",
                "completed": false,
                "_id": "6ac5646e645dba6c7832a759",
                "__v": 0
            }
        ]
    });
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({
        success: true,
        message: 'Task created',
        task
    });
}

const getTask = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'One task',
        id: req.params
    });
}

const updateTasks = (req, res) => {
    res.status(201).json({
        success: true,
        message: 'Task updated',
        data: req.body,
        id: req.params
    });
}

const deleteTasks = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Task deleted',
        id: req.params
    });
}

module.exports = {
    getTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}