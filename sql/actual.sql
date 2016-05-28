Create DATABASE SKI_BORAD_MFG;
USE SKI_BORAD_MFG;

CREATE TABLE `Employeee` (
    EmployeeeID              BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    EmployeeeFirst         VARCHAR(50),
    EmployeeeLast         VARCHAR(50),
    EmployeeePhone        VARCHAR(50),
    EmployeeeEmail           VARCHAR(50)
);

CREATE TABLE `Customer` (
    EmployeeeID             BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    CustomerName            VARCHAR(50),
    CustomerStreet          VARCHAR(50),
    CustomerCity            VARCHAR(50),
    CustomerStateProvience  VARCHAR(50),
    CustomerCountry         VARCHAR(50),
    CustomerZIP             VARCHAR(50)
       
);