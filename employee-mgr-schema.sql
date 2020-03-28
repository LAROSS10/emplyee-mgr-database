DROP DATABASE IF EXISTS manage_employeesDB;
CREATE database manage_employeesDB;

USE manage_employeesDB;

CREATE TABLE department (
    id INT NOT NULL,
    department_name VARCHAR(30) NULL,
    PRIMARY KEY (id)

);

CREATE TABLE title (
    id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(8,2) NULL,
    department_id INT,
    PRIMARY KEY(id)

);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

SELECT * FROM department;
SELECT * FROM title;
SELECT * FROM employee;