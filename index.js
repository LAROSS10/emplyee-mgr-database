const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lorisql1234",
    database: "manage_employeesDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connectd as id" + connection.threadId);
    connection.end();
})
