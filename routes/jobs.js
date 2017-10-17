var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job')
var router = express.Router();

/* GET jobs. */
router.get('/', function(req, res, next) {
	console.log('in the route');
	//#######Create function Syntax
	// Job.create({
	// 	title: 'Junior Dev',
	// 	companyName: 'Google',
	// 	location: 'The Moon'
	// }, function(err,job){
	// 	if(err) return console.log(err)
	// 	res.send(job);
	// });

	//####Find all jobs documents function syntax
	Job.find({},function(err,jobs){
		if(err) return console.log(err);
		res.send(jobs);
	})
});

//node exports syntax
module.exports = router;
