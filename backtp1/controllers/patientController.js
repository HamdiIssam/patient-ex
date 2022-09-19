const { DeletePatientByIDService, UpdatePatientByIDService, getPatientByIDService, getPatientsService, 
    createPatientService,getPatientByEmailService,getPasswordService} = require('../services/patientService');
const wrapper= require('../shared/wrapper')
const {statusCodes}=require('http') 




const createPatientController = async (req, res) => {
    const {
        nom, prenom, age,email,password
    } = req.body
const emailTest=await getPatientByEmailService(email)
console.log('rr',emailTest);

if (emailTest.length===0) {
    await createPatientService(nom, prenom, age,email,password)
    res.status(201).send({msg:"Created"});
} else
 return res.send({msg:"email exist"})

    
}
const getPatientByIDController = async (req, res) => {

    const patient = await getPatientByIDService(req.params.id)
    res.status(200).send(patient);
}
 
const getAllPatientsController = async (req, res) => {

    const patients = await getPatientsService()

    res.status(200).send(patients);
} 

const DeletePatientByIDController = async (req, res) => {

    await DeletePatientByIDService(req.params.id)

    res.status(200).send({msg:"deleted"});
}
const UpdatePatientByIDController = async (req, res) => {
    const {
        body: { nom, prenom, age,email,password },
        params: { id: idpatient }
    }
        = req
    // const {
    //     nom,prenom,age
    // } = req.body
        await UpdatePatientByIDService(idpatient,nom, prenom, age,email,password)
        res.status(201).send({msg:"Updated"});
}


const login= async(req,res)=>{
    const {email,password}=req.body;
    const patientExist= await getPatientByEmailService(email)
    // if (Object.keys(patientExist).length===0) 
    if (patientExist.length===0) 

     {
        return res.send({msg:"patient not found"})
    }
    const patientExistPassword= await getPasswordService(email,password)
    
    if (patientExistPassword.length===0) {
        return res.send({msg:"password not found"})
    }

return res.send(patientExist)






}





module.exports = {
     DeletePatientByIDController, 
     UpdatePatientByIDController, 
     getAllPatientsController, 
     getPatientByIDController, 
     createPatientController,
     login }
