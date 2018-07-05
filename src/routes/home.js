var express = require('express');
var router = express.Router();

let UserController = require('../controllers/UserController');

/* GET home page. */
router.post('/', function(req, res, next) {

   let user = req.body.user;

   UserController.save(user);

});

module.exports = router;
