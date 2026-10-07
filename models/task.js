// models/task.js
const mongoose = require('mongoose');

// Define the Task schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name is required'],
        trim: true,
        maxLength: [20, 'Task name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Export the Task model
module.exports = mongoose.model('Task', TaskSchema);