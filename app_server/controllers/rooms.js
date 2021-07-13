<<<<<<< HEAD
var fs = require('fs');
var roomsData = JSON.parse(fs.readFileSync('./data/rooms.json'));

/* GET rooms page */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, roomsData});
};
module.exports = {
    rooms
=======
var fs = require('fs');
var roomsData = JSON.parse(fs.readFileSync('./data/rooms.json'));

/* GET rooms page */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, roomsData});
};
module.exports = {
    rooms
>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
};