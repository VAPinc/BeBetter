var express = require('express');
var router = express.Router();

var burger = require('../models/bebetter.js')

router.get('/', function(req, res){});

router.post('/api/habits', function(req, res){})

router.put("/api/habits/:id", function(req, res){});

module.exports = router;