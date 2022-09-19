const {db,cnx} = require('../shared/connectdb');


const createPatientService = (nom, prenom, age,email,password) => {
    let qr = `insert into patient(nom, prenom, age,email,password)values('${nom}','${prenom}',${age},'${email}','${password}')`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}

//getAllPatients
const getPatientsService = () => { 
    let qr = `select * from patient`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}
//getByID
const getPatientByIDService = (id) => {
    let qr = `select * from patient where patient.id=${id}`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}

//deletePatientByID
const DeletePatientByIDService = (id) => {
    let qr = `delete from patient where patient.id=${id}`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}
//UpdatePatient
const UpdatePatientByIDService = (id,nom, prenom, age,email,password) => {
    let qr = `update patient set 
    patient.nom='${nom}',
    patient.prenom='${prenom}',
    patient.age=${age},
    patient.email='${email}',
    patient.password='${password}'
    where patient.id = ${id}
    `
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}

const getPatientByEmailService=(mail)=>{

    let qr = `select email from patient where patient.email='${mail}'`
    // console.log(qr);
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        })
    })
};




   const getPasswordService=(email,password)=>{          //password: bech njbha men typescript
        let qr = `select Password from patient where patient.Password='${password}' and patient.email='${email}' `
        console.log(qr);
        return new Promise((resolve, reject) => {
            cnx.query(qr, (err, result) => {
                err ? reject(err) : resolve(result);
    
            })
        });

    }














module.exports={
    DeletePatientByIDService,
    UpdatePatientByIDService,
    getPatientByIDService,
    getPatientsService,
    createPatientService,
    getPatientByEmailService,
    getPasswordService


}