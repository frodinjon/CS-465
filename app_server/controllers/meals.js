var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json'));

/* GET travel page */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', { title: pageTitle, mealsData });
};
module.exports = {
    meals
};