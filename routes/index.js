var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// Github API calls
		// https://stackoverflow.com/questions/21869795/github-api-retrieve-user-commits
		// https://gist.github.com/paulmillr/2657075
	
	// Alpaca API calls

	res.render('index', { "test": 'hi' });
});

module.exports = router;
