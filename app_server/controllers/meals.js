<<<<<<< HEAD
var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals page */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, mealsData});
};
module.exports = {
    meals
=======
var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals page */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, mealsData});
};
module.exports = {
    meals
>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
};