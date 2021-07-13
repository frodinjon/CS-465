<<<<<<< HEAD
/* GET news page */
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle});
};
module.exports = {
    news
=======
/* GET news page */
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle});
};
module.exports = {
    news
>>>>>>> b7ffb66999f3ff4d55628e9e141c8f31f8a677dd
};