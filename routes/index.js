module.exports.index = function (req, res) {
  res.render('index', {
    title: 'Home Page',
    project: {name: 'Go Go Tripbook'}
  });
};

module.exports.plans = function (req, res) {
  res.render('plans', {
    title: 'Plans',
    project: {name: 'Go Go Tripbook'}
  });
};
