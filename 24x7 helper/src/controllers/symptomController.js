
const { default: mongoose } = require("mongoose");
const symptomModel = require("../models/symptomModel")

//#################################################################################################################################################

const createSymtomsOfDisease = async (req, res) => {
    try {
        const data = req.body

        const createdSymptoms = await symptomModel.create(data)

        return res.status(201).send({ status: true, Message: "disease Symptom Created Successfully", data: createdSymptoms })
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}

module.exports = { createSymtomsOfDisease }

