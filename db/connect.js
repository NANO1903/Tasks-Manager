// database connection
// Dependencies
const mongoose = require('mongoose');

// Return a promise that resolves when the connection is successful
const connectDB = (url) => {
    return mongoose.connect(url);
}

module.exports = connectDB;