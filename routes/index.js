var express = require('express');
var router = express.Router();

/* This is the home page*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
