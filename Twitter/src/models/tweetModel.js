const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const tweetSchema = new mongoose.Schema({
    body: {
        type: String, required: true, trim: true
    },
    userId: {
        type: ObjectId, required: true, ref: "user",
    }
}, { timestamps: true });

module.exports = mongoose.model("Tweet", tweetSchema)
