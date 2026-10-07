// routes/task.js
// Dependencies
const express = require('express');
const {
    getTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
} = require('../controllers/tasks');


const router = express.Router();


// Routing
router.route('/').get(getTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks);


module.exports = router;