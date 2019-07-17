let mysql = require("mysql");
let connection;

connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "##w200##",
    database: "calorie_tracker_db"
});

connection.connect((err)=>{
    if(err){
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);

});

module.exports = connection; 