DROP DATABASE IF EXISTS beBetter;

CREATE DATABASE beBetter;

USE beBetter;

CREATE TABLE Users
(
	UserId INT NOT NULL,
    first_name varchar(40) NOT NULL,
    last_name varchar(40) NOT NULL,
    gender varchar(8),
    PRIMARY KEY(User_id)
);

CREATE TABLE UserGoals
(
	GoalId INT NOT NULL,
    fk_Userid INT NOT NULL,
    Goal_Desc varchar(200) NOT NULL,
    fk_FreqId INT NOT NULL,
    fk_InputTypeId INT NOT NULL,
    PRIMARY KEY(GoalId)
);

CREATE TABLE InputTypeMstr
(
	InputID INT NOT NULL,
    InputTypeName varchar(10) NOT NULL,
    PRIMARY KEY(InputId)
);

CREATE TABLE GoalFreqMstr
(
	FreqId INT NOT NULL,
    FreqName VARCHAR(20) NOT NULL,
    PRIMARY KEY (FreqId)
);

CREATE TABLE GoalTransactions
(
	TransId INT NOT NULL AUTO_INCREMENT,
    fk_GoalId INT NOT NULL,
    UpdateDate datetime NOT NULL,
    GoalMet boolean NOT NULL,
    GoalQnty INT,
    PRIMARY KEY(TransId)
);