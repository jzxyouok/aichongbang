const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: Number,
    email: String,
    id:String,
    role:"admin"|"men",
    status:Number
})

mongoose.model('usersModel', usersSchema, "users");

module.exports.usersModel = mongoose.model('usersModel');