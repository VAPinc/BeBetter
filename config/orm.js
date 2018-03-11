var connection = require('./connection.js');
var moment = require('moment');

var orm = {

  //display all goals for a users
  selectAllGoals: function (UserId, date, callback) {
    //var queryString = "SELECT * FROM " + tableInput + ";"; 	    	
    var queryString = "Select users.UserId, usergoals.GoalId, usergoals.Goal_Desc, inputtypemstr.InputID, inputtypemstr.InputTypeName, goalfreqmstr.FreqId, goalfreqmstr.FreqName FROM users, goalfreqmstr, inputtypemstr,usergoals WHERE users.UserId = usergoals.fk_Userid AND goalfreqmstr.FreqID = usergoals.fk_FreqId and inputtypemstr.inputID = usergoals.fk_InputTypeIdand users.Userid= " + UserID + " ;"
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

  //inseert a goal for a user
  insertNewGoal: function (UserId, GoalText, FreqId, TypeId, callback) {

    var QueryString = "INSERT INTO usergoals(fk_UserId, Goal_Desc, fk_FreqId, fk_InputTypeId) VALUES(" + UserId + ", " + GoalText + ", " + FreqId + ", " + TypeId + ");";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  InsertNewUser: function (fName, lName, Gender, callback) {

    var QueryString = "INSERT INTO users(first_name, last_name, gender) Values(" + fName + ", " + lName + ", " + Gender + ");";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Insert a goal transaction 
  InsertGoalMet: function (GoalId, isMet, callback) {
    var UpdateDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    var QueryString = "INSERT INTO goaltransactions(fk_GoalId, UpdateDate, GoalMet, GoalQnty) VALUES(" + GoalId + ", " + UpdateDate + ", " + GoalMet + ");";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}

module.exports = orm
