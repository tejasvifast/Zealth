
const { default: mongoose } = require("mongoose");
const specialisationsModel = require("../models/specialisationsModel")

//#################################################################################################################################################

const createSpecialistOfDisease = async (req, res) => {
    try {
        const data = req.body

        const createdSpecialist = await specialisationsModel.create(data)

        return res.status(201).send({ status: true, Message: "disease Symptom Created Successfully", data: createdSpecialist })
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}

module.exports = { createSpecialistOfDisease }

