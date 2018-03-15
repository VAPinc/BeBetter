var orm = require('../config/orm.js');

var bebetter = {
  allUsers: function (cb) {
    orm.getAllUsers(function (res) {
      cb(res);
    });
  },

  allGoals: function (userId, date, cb) {
    orm.selectAllGoals(userId, date, function (res) {
      cb(res);
    });
  },

  createNewUser: function (fName, lName, gender, pswd, cb) {
    orm.insertNewUser(fName, lName, gender, pswd, function (res) {
      cb(res);
    });
  },

  createNewGoal: function (userId, goalDesc, idFreq, idType, cb) {
    orm.insertNewGoal(userId, goalDesc, idType, idFreq, function (res) {
      cb(res);
    });
  },

  deleteGoal: function (goalId, cb) {
    orm.deleteGoal(goalId, function (res) {
      cb(res);
    });
  },

  getStats: function (goalId, cb) {
    orm.getStats(goalId, function (res) {
      cb(res);
    });
  },

  postProgress: function (userId, date, cb) {
    orm.postProgress(userId, date, function (res) {
      cb(res);
    });
  },
};

// updateGoal: function (goalid, hasMet, cb) {
//   orm.InsertGoalMet(goalId, hasMet, function (res) {
//     cb(res);
//   });
// },


// allUsers: function(cb){
// 	orm.selectAllUsers(function(res) {
//   cb(res);
// });
// },

module.exports = bebetter;