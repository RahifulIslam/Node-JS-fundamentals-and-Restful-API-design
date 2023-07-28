const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number
    },

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    }

});

module.exports = mongoose.model('User', userSchema);
