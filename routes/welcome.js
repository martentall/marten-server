var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(["Welcome!", "My name is Marten", "What is your name?"]);
});

module.exports = router;
