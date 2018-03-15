var express = require('express');
var router = express.Router();
var moment = require('moment');


var bebetter = require('../models/bb_model.js')

// get auth page
router.get('/', function (req, res) {
    bebetter.allUsers(function (data) {
        console.log(data);
        let date = moment().format('YYYYMMDD');
        data.forEach(element => {
            element.date = date;
        });
        // let hbsObj = {users: data} 
        // console.log(users[0].FirstName);
        res.render('login', {users: data, layout: 'auth.handlebars'});
    });
    
});

// get all habits for a user with date's progress
router.get('/:user_id/:date', function (req, res) {
    bebetter.allGoals(req.params.user_id, req.params.date, function (data) {
        console.log(data);
        res.render('index', data);
    });
});

//create new user
router.post('/api/users/new', function (req, res) {
    let fName = req.body.fName;
    let lName = req.body.lName;
    let gender = req.body.gender;
    let pswd = req.body.pswd;
    bebetter.createNewUser(fName, lName, gender, pswd, function (response) {
        console.log(response);
        res.render('index', response);
    });
});

//add a new habit for user
router.post('/api/habits/new', function (req, res) {
    bebetter.createNewGoal(req.body.user_id, req.body.habit_description, req.body.data_type, req.body.frequency, function (response) {
        res.json({ id: result.insertId });
    });
});

// delete one habit
router.delete("/api/habits/:habit_id", function (req, res) {
    bebetter.deleteGoal(req.params.habit_id, function (response) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//provide progress for one habit for one user for whole period
router.get('/api/stats/:habit_id', function (req, res) {
    console.log('in api/stats/:habit_id')
    bebetter.getStats(req.params.habit_id, function (response) {
        console.log(response)
        res.render('index', {layout: 'main.handlebars'});

        // res.render('index', response);
    });
});

//add progress for all habits for one user for one day
router.post('/api/:user_id/stats/:date', function (req, res) {
    bebetter.postProgress(req.params.user_id, req.params.date, function (response) {
        res.render('index', data);
    });
});

//get list of all users

module.exports = router;