var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/:date', function(req, res, next) {
	if(!moment(req.params.date).isValid()) {
		res.json({"unix":null, "natural":null});
	}
	else{
  		var date = moment(req.params.date);
  		var dateObj = {};
  		dateObj.unix = date.unix();
  		dateObj.natural = date.format('MMMM D, YYYY');
  		res.json(dateObj);
  	}
});

router.get('/', function(req, res, next) {
	res.render('index', {title: 'Timestamp Microservice'});
});

module.exports = router;
