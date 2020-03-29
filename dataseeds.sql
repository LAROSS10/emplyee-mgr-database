DROP DATABASE IF EXISTS manage_employeesDB;
CREATE database manage_employeesDB;

USE manage_employeesDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NULL,
    PRIMARY KEY (id)

);

CREATE TABLE title (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(8,2) NULL,
    department_id INT,
    PRIMARY KEY(id)

);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    title_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

-- SELECT * FROM department;
-- SELECT * FROM title;
-- SELECT * FROM employee;



INSERT INTO department (department_name)
VALUES ("Accounting");

INSERT INTO department (department_name)
VALUES ("Credit");

INSERT INTO department (department_name)
VALUES ("Human Resources");

INSERT INTO employee (first_name, last_name , title_id, manager_id)
VALUES ("Raina", "McCullogh", 100, 5);

INSERT INTO employee (first_name, last_name , title_id, manager_id)
VALUES ("Gust", "Howe", 200, 10);

INSERT INTO employee (first_name, last_name , title_id, manager_id)
VALUES ("Rigoberto" , "Nitzsche", 300, 15);

INSERT INTO title (title, salary, department_id)
VALUES ("Accounting Analyst", 50000, 1);

INSERT INTO title (title, salary, department_id)
VALUES ("Credit Specialist", 45000, 2);

INSERT INTO title (title, salary, department_id)
VALUES ("Human Resources Associate", 65000, 3);