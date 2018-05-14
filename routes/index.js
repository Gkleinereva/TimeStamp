var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/:date', function(req, res, next) {
	if(moment(req.params.date).isValid()) {
		var date = moment(req.params.date);
  		var dateObj = {};
  		dateObj.unix = date.unix();
  		dateObj.natural = date.format('MMMM D, YYYY');
  		res.json(dateObj);
	}
	else{
  		if(!isNaN(req.params.date)) {
  			var date = moment.unix(req.params.date);
  			var dateObj = {};
  			dateObj.unix = date.unix();
  			dateObj.natural = date.format('MMMM D, YYYY');
  			res.json(dateObj);
  		}
  		else {
  			res.json({"unix":null, "natural":null});
  		}
  	}
});

router.get('/', function(req, res, next) {
	var exURLA = req.protocol + '://' + req.get('host') + req.originalUrl + "December%2015,%202015";
	var exURLB = req.protocol + '://' + req.get('host') + req.originalUrl + "1450137600";
	res.render('index', {title: 'Timestamp Microservice', exURLA: exURLA, exURLB: exURLB});
});

module.exports = router;
