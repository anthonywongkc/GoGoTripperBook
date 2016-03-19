module.exports.index = function (req, res) {
  res.render('index', {
    title: 'Home Page',
    project: {name: 'Go Go Tripbook'}

  });
};
