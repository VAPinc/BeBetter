var orm = require('../config/orm.js');

var bebetter = {
    allUsers: function(cb){
    	orm.selectAllUsers(function(res) {
      cb(res);
    });
    },
    allGoals: function(UserId, cb){
    	orm.selectAllGoals(UserId,function(res) {
      cb(res);
    });
    },
    
    createNewUser: function(fName, lName, Gender, cb){
    	orm.InsertNewUser(fName, lName, Gender, function(res){
    	cb(res);
    });
    },

	createNewGoal: function(UserId, GoalDesc, IdFreq, IdType, cb){
    	orm.insertNewGoal(UserId, GoalDesc, IdFreq, IdTypeId, function(res){
    	cb(res);
    });
    },    
    
    updateGoal: function(Goalid, hasMet, cb){
    	orm.InsertGoalMet(GoalId,hasMet,function(res){
    	cb(res);	
      });
    },
};

module.exports = bebetter;