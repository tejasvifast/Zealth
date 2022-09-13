const mongoose = require("mongoose")

const SpecialisationsSchema = new mongoose.Schema({
    disease: {
        type: String
        },
    specialisations:{
        type:[]
    }
}, { timestamps: true });

module.exports = mongoose.model("Specialisations", SpecialisationsSchema)
