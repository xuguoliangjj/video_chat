var express = require('express');
var router = express.Router();
var mysql = require('../models/db')

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('video');
});

module.exports = router;
