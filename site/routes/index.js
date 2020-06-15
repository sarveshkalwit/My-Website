var express = require('express');
var router = express.Router();
const axios = require('axios');
const Alpaca = require('@alpacahq/alpaca-trade-api')

/* GET home page. */
router.get('/', function(req, res, next) {
	// Github API calls
		// https://stackoverflow.com/questions/21869795/github-api-retrieve-user-commits
		// https://gist.github.com/paulmillr/2657075
	
	// Alpaca API calls
	const startDate = "";
	const todayDate = "";
	const alpaca = new Alpaca({
		keyId: process.env.APCA_API_KEY_ID,
		secretKey: process.env.APCA_API_SECRET_KEY,
		paper: true,
		usePolygon: false
	})
	alpaca.getPortfolioHistory({
	])
		

	res.render('index', { title: 'Express' });
});

module.exports = router;
