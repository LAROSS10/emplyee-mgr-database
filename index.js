const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection to the manage_employees database
var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lorisql1234",
    database: "manage_employeesDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);

    // start the application by running start function below
    selectEmployee();
    
});

    function selectEmployee() {
        connection.query("SELECT * FROM department", function(err,res) {
    if(err) throw err;
    console.log(res);
    connection.end();
});    
        }
    


