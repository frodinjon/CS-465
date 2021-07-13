<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlMeals = require('../controllers/meals');

/* GET meals page. */
router.get('/', ctlMeals.meals);

=======
var express = require('express');
var router = express.Router();
const ctlMeals = require('../controllers/meals');

/* GET meals page. */
router.get('/', ctlMeals.meals);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;