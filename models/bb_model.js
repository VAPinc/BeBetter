var orm = require('../config/orm.js');

var bebetter = {
  allGoals: function (UserId, date, cb) {
    orm.selectAllGoals(UserId, date, function (res) {
      cb(res);
    });
  },

  createNewUser: function (fName, lName, gender, pswd, cb) {
    orm.insertNewUser(fName, lName, gender, pswd, function (res) {
      cb(res);
    });
  },

  createNewGoal: function (UserId, GoalDesc, IdFreq, IdType, cb) {
    orm.insertNewGoal(UserId, GoalDesc, IdTypeId, IdFreq, function (res) {
      cb(res);
    });
  },
 
  deleteGoal: function (GoalId, cb) {
    orm.deleteGoal(GoalId, function (res) {
      cb(res);
    });
  },

  getStats: function (GoalId, cb) {
    orm.getStats(GoalId, function () {
      cb(res);
    });
  },

  postProgress: function (UserId, date, cb) {
    orm.postProgress(UserId, date, function () {
      cb(res);
    });
  },
};

 // updateGoal: function (Goalid, hasMet, cb) {
  //   orm.InsertGoalMet(GoalId, hasMet, function (res) {
  //     cb(res);
  //   });
  // },


// allUsers: function(cb){
  // 	orm.selectAllUsers(function(res) {
  //   cb(res);
  // });
  // },

module.exports = bebetter;