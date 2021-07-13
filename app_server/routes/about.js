<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctlAbout.about);

=======
var express = require('express');
var router = express.Router();
const ctlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctlAbout.about);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;