<<<<<<< HEAD
/* GET about page */
const about = (req, res) => {
    pageTitle = process.env.npm_package_description + " - About";
    res.render('about', {title: pageTitle});
};
module.exports = {
    about
=======
/* GET about page */
const about = (req, res) => {
    pageTitle = process.env.npm_package_description + " - About";
    res.render('about', {title: pageTitle});
};
module.exports = {
    about
>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
};