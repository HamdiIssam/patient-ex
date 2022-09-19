const mysql = require('mysql2');
const cnx=mysql.createConnection({
    host:process.env.HOSTDB,
    user:process.env.USERDB,
    password:process.env.PASSWORDDB,
    port:process.env.PORTDB,
    database:process.env.DATABASE
});
const cnxdb = cnx.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connextion db Success");
    
    }
    });
    
    
    module.exports = {cnxdb,cnx}