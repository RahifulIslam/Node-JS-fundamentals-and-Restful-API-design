const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: {
        type: Number,
    },

    name: {
        type: String,
    },

    email: {
        type: String,

    },

    address: {
        type: String
    }

});

module.exports = mongoose.model('Student', studentSchema);