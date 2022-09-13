const { default: mongoose } = require("mongoose");
const symptomModel = require("../models/symptomModel")
const specialisationsModel = require("../models/specialisationsModel")

//#################################################################################################################################################

const getSpecialist = async (req, res) => {
    try {
        const symptom = req.body.symptom

        const disease = await symptomModel.find({symptoms:symptom})
        console.log(disease)

        // const createdSymptoms = await symptomModel.create(data)

        // return res.status(201).send({ status: true, Message: "disease Symptom Created Successfully", data: createdSymptoms })
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}

module.exports = { getSpecialist }