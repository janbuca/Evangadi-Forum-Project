const mysql2 = require('mysql2');

const dbconnection = mysql2.createPool({
  user: "evangadi-admin",
  host: "localhost",
  password: "123456" ,
  database:"evangadi_database",
  connectionLimit:10,
});

dbconnection.execute("select 'DB Connected!' ", (err, result)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(result);
    }
})

