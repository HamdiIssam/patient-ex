const { DeletePatientByIDController, UpdatePatientByIDController, getAllPatientsController, getPatientByIDController, createPatientController, login } = require('../controllers/patientController');
const patientRoute = require('express').Router();
patientRoute.get('/', getAllPatientsController).get('/:id', getPatientByIDController).post('/add', createPatientController).delete('/:id', DeletePatientByIDController).patch('/:id', UpdatePatientByIDController)
patientRoute.post('/',login)
module.exports=patientRoute 