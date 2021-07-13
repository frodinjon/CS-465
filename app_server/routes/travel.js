<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlTravel = require('../controllers/travel');

/* GET travel page. */
router.get('/', ctlTravel.travel);

=======
var express = require('express');
var router = express.Router();
const ctlTravel = require('../controllers/travel');

/* GET travel page. */
router.get('/', ctlTravel.travel);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;