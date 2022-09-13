const express = require('express');
const router = express.Router();

const { createSymtomsOfDisease } = require("../controllers/symptomController")
const { createSpecialistOfDisease } = require("../controllers/specialisationsController")
const {getSpecialist} = require("../controllers/getSpecialist")

router.post('/createSymtomsOfDisease',createSymtomsOfDisease) //done
router.post('/createSpecialistOfDisease',createSpecialistOfDisease) //done
router.get('/getSpecialist',getSpecialist)


module.exports = router; 