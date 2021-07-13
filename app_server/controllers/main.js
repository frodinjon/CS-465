<<<<<<< HEAD
/* GET homepage */
const index = (req, res) => {
    pageTitle = process.env.npm_package_description;
    res.render('index', {title: pageTitle});
};
module.exports = {
    index
=======
/* GET homepage */
const index = (req, res) => {
    pageTitle = process.env.npm_package_description;
    res.render('index', {title: pageTitle});
};
module.exports = {
    index
>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
};