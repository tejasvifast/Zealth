const mongoose = require("mongoose")

const symptomSchema = new mongoose.Schema({
    disease: {
        type: String
        },
    symptoms:{
        type:[]
    }
}, { timestamps: true });

module.exports = mongoose.model("Symptom", symptomSchema)
