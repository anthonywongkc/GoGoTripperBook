module.exports.index = function (req, res) {
  res.render('map', {
    title: 'Home Page',
    project: {name: 'Go Go Tripbook'}
  });
};
