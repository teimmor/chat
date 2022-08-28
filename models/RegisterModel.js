const mongoose = require('mongoose');


const register = new mongoose.Schema({
    socketId:  { type: String, required: true },
    NICKNAME: String,
})

const registerController = mongoose.model('register', register)
module.exports = registerController