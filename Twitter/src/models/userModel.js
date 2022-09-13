const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema.Types

const userModel = new mongoose.Schema({
    fname: {
        type: String, required: true, trim: true, 
    },
    lname: {
        type: String, required: true, trim: true,
    },
    title: {
        type: String, required: true, trim: true, enum: ["Mr", "Mrs", "Miss"],
    },
    email: {
        type: String, required: true, trim: true, lowercase: true, unique: true
    },
    password: {
        type: String, required: true, /*trim: true,lowercase: true, minlength: 6, select: false,*/
    },
    followers:[{type:ObjectId,ref:'User'}],
    followee:[{type:ObjectId,ref:'User'}]

}, { timestamps: true })

module.exports = mongoose.model('User', userModel);

