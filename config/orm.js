var connection = require('./connection.js');
var moment = require('moment');

var orm = {
  getAllUsers: function(callback){
    let queryString = 'SELECT * FROM users';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  //display all goals for a users
  selectAllGoals: function (userId, date, callback) {
    //var queryString = "SELECT * FROM " + tableInput + ";"; 	 

    //pass frequencyType to uncomment this:
    // let dailyGoals = '(f.FreqId = 1);';
    // let weeklyGoals = '(f.FreqId = 1 OR f.FreqId = 2);';
    // let monthlyGoals = '(f.FreqId = 1 OR f.FreqId = 2 OR f.FreqId = 3);';

    // if (frequencyType = 'monthly') {
    //   frequency = monthlyGoals;
    // }
    // else if (frequencyType = 'weekly') {
    //   frequency = weeklyGoals;
    // }
    // else {
    //   frequency = dailyGoals;
    // }

    let frequency = '(f.FreqId = 1 OR f.FreqId = 2 OR f.FreqId = 3);';

    var queryString = 'SELECT g.GoalId, g.GoalDesc, t.GoalMet, t.GoalQnty, i.InputTypeName, f.FreqName ' +
      'FROM  UserGoals AS g ' +
      'LEFT OUTER JOIN GoalTransactions AS t ON g.GoalId = t.GoalId ' +
      ' AND t.UpdateDate = \'' + date + '\'' +
      'INNER JOIN Users AS u ON g.UserId = u.UserId ' +
      'INNER JOIN InputTypeMstr AS i ON g.InputTypeId = i.InputId ' +
      'INNER JOIN GoalFreqMstr AS f ON g.FreqId = f.FreqId ' +
      'WHERE u.UserId = ' + userId +
      ' AND ' + frequency;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertNewUser: function (fName, lName, gender, pswd, callback) { //Gender is either f or m, all other fields are required
    var queryString = 'INSERT INTO Users (FirstName, LastName, Gender, Pswd) ' +
      'VALUES (\'' + fName + '\', \'' + lName + '\', \'' + gender + '\', \'' + pswd + '\');';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  //insert a goal for a user
  insertNewGoal: function (userId, goalText, freqId, typeId, callback) {
    var queryString = 'INSERT INTO UserGoals (UserId, GoalDesc, FreqId, InputTypeId) ' +
      'VALUES(' + userId + ', \'' + goalText + '\', ' + freqId + ', ' + typeId + ');';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //delete a goal
  deleteGoal: function (goalId, callback) {
    var queryString = 'DELETE FROM UserGoals WHERE GoalId=' + goalId + ';';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //provide progress for one habit for one user for whole period
  getStats: function (goalId, callback) {
    var queryString = 'SELECT * FROM GoalTransactions AS t, UserGoals AS g ' +
      'WHERE t.GoalId = g.GoalId ' +
      'AND g.GoalId =' + goalId +
      ' ORDER BY t.UpdateDate;';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  //Insert a goal transaction 
  postProgress: function (goalId, boolGoal, numGoal, date, callback) { //either BoolGoal or NumGoal should be NULL (no quotes)
    var updateDate = moment(date, "YYYY-MM-DD");
    let queryStringBool = "INSERT INTO GoalTransactions (GoalId, UpdateDate, GoalMet) VALUES(" + goalId + ", " + updateDate + ", " + boolGoal + ");";
    let queryStringNum = "INSERT INTO GoalTransactions (GoalId, UpdateDate, GoalQnty) VALUES(" + goalId + ", " + updateDate + ", " + numGoal + ");";
    if (boolGoal) {
      queryString = queryStringBool;
    }
    else if (queryStringNum) {
      queryString = queryStringNum;
    }
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //display all Users for a users
  // selectAllUsers: function (callback) {
  //var queryString = "SELECT * FROM " + tableInput + ";"; 	    	
  //   var queryString = "Select users.UserId,users.first_name, users.last_name, users.gender FROM users;"
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },
}

module.exports = orm
