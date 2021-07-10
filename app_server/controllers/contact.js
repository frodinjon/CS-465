/* GET contact page */
const contact = (req, res) => {
    res.render('contact', {title: 'Contact - Travlr Getaways'});
};
module.exports = {
    contact
};