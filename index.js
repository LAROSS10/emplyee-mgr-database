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
        choices: ["View all Employees",
         "View all Departments",
          "View all Roles",          
          "Add an Employee",
          "Add a Department",
          "Add a Role",
          "Update a Department"
        ]
    })
    .then(function(answer){
        switch (answer.start) {

            case "View all Employees":
            viewEmployees();
            break;

            case "View all Departments":
            viewDepartment();
            break;
            
            case "View all Roles":
            viewRoles();
            break;

            case "Add an Employee":
            addEmployee();
            break;

            case "Add a Department":
            addDepartment();
            break;

            case "Add a Role":
            addRole();
            break;

            case "Update a Department":
                updateDepartment();
                break;
        }        
        })      
    }

    function viewDepartment() {
        connection.query("SELECT * FROM department", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.table({department_name: res[i].department_name})
                
            }
            // console.log(res);            
        })
    };
    
    function viewEmployees() {
        connection.query("SELECT * FROM employee", function(err,res){
            if (err) throw err;
            for (let i=0; i<res.length; i++) {
                console.table({
                    first_name: res[i].first_name,
                    last_name: res[i].last_name,
                    })
                // console.log(res[i].first_name + " " + " " +  res[i].last_name)
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
        inquirer.prompt([
          {
              name: "department",
              type: "input",
              message: "Please enter the department name you would like to add"
          }  
        ])
        .then(function(answer){
            connection.query("INSERT INTO department SET ?", 
            {
                department_name: answer.department
            }, function(err){
                if (err) throw err;
                console.log("You have successfully added a department")
            })
            connection.end();
        })
    }

    function addEmployee() {
        inquirer.prompt([
          {
              name: "employeeFirstName",
              type: "input",
              message: "Please enter the Employee's first name."
          },  
          {
            name: "employeeLastName",
            type: "input",
            message: "Please enter the Employee's last name."
        },
        {
            name: "titleId",
            type: "input",
            message: "Please enter the Employee's title Id."
        } ,
        {
            name: "managerId",
            type: "input",
            message: "Please enter the Employee's manager Id."
        }    
        ])
        .then(function(answer){
            connection.query("INSERT INTO employee SET ?", 
            {
                
                first_name: answer.employeeFirstName,
                last_name: answer.employeeLastName,
                title_id: answer.titleId,
                manager_id: answer.managerId
            }, function(err){
                if (err) throw err;
                console.log("You have successfully added a new Employee")
            })
            connection.end();
        })
    }
    function addRole() {
        inquirer.prompt([
          {
              name: "Title",
              type: "input",
              message: "Please enter the title you would like to add"
          },  
          {
            name: "Salary",
            type: "input",
            message: "Please enter the Salary you would like to add"
        }, 
        {
            name: "departmentId",
            type: "input",
            message: "Please enter the Department you would like to add"
        }  
        ])
        .then(function(answer){
            connection.query("INSERT INTO title ?", 
            {
                
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departmentId
            }, function(err){
                if (err) throw err;
                console.log("You have successfully added a department")
            })
            connection.end();
        })
    }

    // function updateDepartment() {
    //     inquirer
    //       .prompt({
    //         name: "changeDepartment",
    //         type: "input",
    //         message: "What department would you like to change?"
    //       })
    //       .then(function(answer) {
    //         var query = "SELECT department_name FROM department WHERE ?";
    //         connection.query(query, { department_name: answer.changeDepartment }, function(err, res) {
    //           if (err) throw err;
    //           for (var i= 0; i<res.length; i++){
    //               console.log(res[i].department_name)
    //           }
            
               
    //             // console.log("Thank you");
              
    //           changeDepartment();
    //         });
    //       });
    //   }

    //   function changeDepartment() {
    //     inquirer
    //       .prompt({
    //         name: "renameDepartment",
    //         type: "input",
    //         message: "Please enter new department name?"
    //       })
    //       .then(function(answer) {
    //         var query = "UPDATE department SET ? WHERE ?";
    //         connection.query(query, { department_name: answer.renameDepartment }, function(err, res) {
    //           if (err) throw err;
    //           console.log(res.affectedRows + "department updated")
                      
               
    //             // console.log("Thank you");
              
    //           addDepartment();
    //         });
    //       });
    //   }