const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
    // viewDepartment();
    // viewEmployees();
    // viewRoles();
    // addDepartment();
    // addEmployee()
    // addRole();
    start();
    // connection.end();
    
});


function start() {
    inquirer.prompt ({
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all Employees", "View all Departments", "View all Roles"]
    })
    .then(function(answer){
        if(answer.start === "View all Employees") {
            viewEmployees();
        }
        // connection.end();
    })
}






















    function viewDepartment() {
        connection.query("SELECT * FROM department", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.table(res[i].department_name)
            }
            // console.log(res);            
        })
    };
    
    function viewEmployees() {
        connection.query("SELECT * FROM employee", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.table(res[i].first_name + " " + " " +  res[i].last_name)
            }
            // console.log(res);
            // connection.end;
        })
    }; 

    function viewRoles() {
        connection.query("SELECT * FROM title", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.table(res[i].title + " " + " " +  res[i].salary)
            }
            // console.log(res);
            // connection.end;
        })
    }; 

    function addDepartment() {
    const query = connection.query("INSERT INTO department SET ?",  {
            department_name: "Janitor"
        },
        function(err,res){
            if (err) throw err;
            
                console.table(res.affectedRows + "department added")
            
            // console.log(res);            
        })
        console.log(query.sql)
    };

    function addEmployee() {
    const query = connection.query("INSERT INTO employee SET ?",  {
            first_name: "Testy",
            last_name: "trudy",
            title_id: 400,
            manager_id: 15,
        },
        function(err,res){
            if (err) throw err;
            
                console.table(res.affectedRows + "employee added")
            
            // console.log(res);            
        })
        console.log(query.sql)
    };

    function addRole() {
        const query = connection.query("INSERT INTO title SET ?",  {
                title: "Vice President",
                salary: 100000,
                department_id: 4,
                
            },
            function(err,res){
                if (err) throw err;
                
                    console.table(res.affectedRows + "employee added")
                
                // console.log(res);            
            })
            console.log(query.sql)
        };