<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlContact = require('../controllers/contact');

/* GET contact page. */
router.get('/', ctlContact.contact);

=======
var express = require('express');
var router = express.Router();
const ctlContact = require('../controllers/contact');

/* GET contact page. */
router.get('/', ctlContact.contact);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;