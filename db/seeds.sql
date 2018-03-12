INSERT INTO Users (FirstName, LastName, Gender, Pswd)
VALUES ('Anastasia', 1, 'f', 'psw1'), ('Pavel', 1, 'm', 'pswd1'), ('Vishy', 1, 'm', 'pswrd1');

INSERT INTO InputTypeMstr (InputTypeName)
VALUES ('number'), ('boolean');

INSERT INTO GoalFreqMstr (FreqName)
VALUES ('daily'), ('weekly'), ('monthly');

INSERT INTO UserGoals (UserId, GoalDesc, FreqId, InputTypeId)
VALUES (1, 'Drink 8 glasses of water', 1, 1), (3, 'Do 77 pushups', 1, 1), (1, 'Take contrast shower', 1, 2), 
(2, 'Drink 88 glasses of water', 1, 1), (3, 'Take kids to park', 2, 2), (2, 'Run marathon', 3, 2),
(1, 'Do yoga', 2, 2), (1, 'Commit to GitHub', 1, 2), (1, 'Call my friend', 3, 2);

SELECT * FROM UserGoals;

INSERT INTO GoalTransactions (GoalId, UpdateDate, GoalMet)
VALUES (9, '2018-03-11', 1), (11, '2018-03-10', 1), (12, '2018-03-01', 0);

INSERT INTO GoalTransactions (GoalId, UpdateDate, GoalQnty)
VALUES (7, '2018-03-11', 5), (7, '2018-03-10', 11), (7, '2018-03-09', 10), 
(8, '2018-03-11', 55), (8, '2018-03-10', 111), (8, '2018-03-09', 108), 
(10, '2018-03-11', 57), (10, '2018-03-10', 101), (10, '2018-03-09', 90);

SELECT * FROM GoalTransactions;
