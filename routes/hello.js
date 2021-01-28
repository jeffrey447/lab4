
/*
 * GET home page.
 */

exports.view = function(req, res) {
  let nameToShow = req.params.userName;
  res.render('hello', {
  	'name': nameToShow,
  });
};
