<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctlNews = require('../controllers/news');

/* GET news page. */
router.get('/', ctlNews.news);

=======
var express = require('express');
var router = express.Router();
const ctlNews = require('../controllers/news');

/* GET news page. */
router.get('/', ctlNews.news);

>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
module.exports = router;