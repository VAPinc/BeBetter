INSERT INTO users(first_name, last_name, gender)
Values("Vishy", "Ram", "Male");

Select * from users;

INSERT INTO GoalFreqMstr(FreqName)
VALUES("Monthly");

Select * from GoalFreqMstr;

INSERT INTO inputtypemstr(InputTypeName)
VALUES("Text");

Select * from inputtypemstr;

INSERT INTO usergoals(fk_UserId, Goal_Desc, fk_FreqId, fk_InputTypeId)
VALUES(2, "30 minute daily workout", 1,1);

Select * from usergoals; 

INSERT INTO goaltransactions(fk_GoalId, UpdateDate, GoalMet, GoalQnty)
VALUES(1, '2018-03-10 02:14:00', true, 0);

Select * from goaltransactions;

Select users.first_name, users.last_name, users.gender, goalfreqmstr.FreqName, inputtypemstr.InputTypeName, 
usergoals.Goal_Desc,goaltransactions.UpdateDate, goaltransactions.GoalMet, goaltransactions.GoalQnty
FROM users, goalfreqmstr, inputtypemstr,usergoals,goaltransactions
WHERE users.UserId = usergoals.fk_Userid AND goalfreqmstr.FreqID = usergoals.fk_FreqId and inputtypemstr.inputID = usergoals.fk_InputTypeId AND
goaltransactions.fk_GoalId = usergoals.Goalid and
userid = 2;  