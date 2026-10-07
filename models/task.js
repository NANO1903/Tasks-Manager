// models/task.js
const mongoose = require('mongoose');

// Define the Task schema
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

// Export the Task model
module.exports = mongoose.model('Task', TaskSchema);