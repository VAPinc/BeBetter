DROP DATABASE IF EXISTS BeBetter;

CREATE DATABASE BeBetter;

USE BeBetter;

CREATE TABLE Users
(
	UserId INT NOT NULL AUTO_INCREMENT,
    FirstName varchar(40) NOT NULL,
    LastName varchar(40) NOT NULL,
    Gender varchar(8),
    Pswd varchar(20) NOT NULL,
    PRIMARY KEY(UserId)
);

CREATE TABLE UserGoals
(
	GoalId INT NOT NULL AUTO_INCREMENT,
    UserId INT NOT NULL,
    GoalDesc varchar(200) NOT NULL,
    FreqId INT NOT NULL,
    InputTypeId INT NOT NULL,
    PRIMARY KEY(GoalId)
);

CREATE TABLE InputTypeMstr
(
	InputId INT NOT NULL AUTO_INCREMENT,
    InputTypeName varchar(10) NOT NULL,
    PRIMARY KEY(InputId)
);

CREATE TABLE GoalFreqMstr
(
	FreqId INT NOT NULL AUTO_INCREMENT,
    FreqName VARCHAR(20) NOT NULL,
    PRIMARY KEY (FreqId)
);

CREATE TABLE GoalTransactions
(
	TransId INT NOT NULL AUTO_INCREMENT,
    GoalId INT NOT NULL,
    UpdateDate DATE NOT NULL,
    GoalMet BOOLEAN,
    GoalQnty INT,
    PRIMARY KEY(TransId)
);

ALTER TABLE UserGoals
ADD CONSTRAINT FK_UserId FOREIGN KEY(UserId) REFERENCES Users(UserId),
ADD CONSTRAINT FK_FreqId FOREIGN KEY(FreqId) REFERENCES GoalFreqMstr(freqId),
ADD CONSTRAINT FK_InputTypeId FOREIGN KEY(InputTypeId) REFERENCES InputTypeMstr(InputId);

ALTER TABLE GoalTransactions
ADD CONSTRAINT FK_GoalId FOREIGN KEY(GoalId) REFERENCES UserGoals(GoalId);