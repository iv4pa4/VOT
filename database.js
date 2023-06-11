const { 
    createPool
} = require('mysql');

const pool = createPool({
    host:"localhost",
    user: "admin",
    password: " ",
    database: "quiz_db",
    connectionLimit: 1
})

pool.query('select * from Options', (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})