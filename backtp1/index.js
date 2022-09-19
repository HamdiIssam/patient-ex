require('dotenv').config();
require('express-async-errors');
const morgan=require('morgan')
const express=require('express');
const notFound = require('./middleware/notFound');
const patientRoute = require('./routes/patientRoute');
const cors = require ('cors');

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;
// const connexion = require('./shared/connectdb')
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })
app.use(cors())
app.use(morgan('tiny'))
app.use('/api/v1/patient',patientRoute)
app.use(notFound)
app.listen(port,()=>{
    console.log(`localhost:${port}`);
})