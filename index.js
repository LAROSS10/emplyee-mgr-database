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
    viewDepartment();
    viewEmployees();
    viewRoles();
    
});

    function viewDepartment() {
        connection.query("SELECT * FROM department", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.log(res[i].department_name)
            }
            // console.log(res);            
        })
    };
    
    function viewEmployees() {
        connection.query("SELECT * FROM employee", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.log(res[i].first_name + " " + " " +  res[i].last_name)
            }
            // console.log(res);
            connection.end;
        })
    }; 

    function viewRoles() {
        connection.query("SELECT * FROM title", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.log(res[i].title + " " + " " +  res[i].salary)
            }
            // console.log(res);
            connection.end;
        })
    }; 