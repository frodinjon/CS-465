<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlRooms = require('../controllers/rooms');

/* GET rooms page. */
router.get('/', ctlRooms.rooms);

=======
var express = require('express');
var router = express.Router();
const ctlRooms = require('../controllers/rooms');

/* GET rooms page. */
router.get('/', ctlRooms.rooms);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;