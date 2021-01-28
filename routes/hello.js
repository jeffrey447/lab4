
/*
 * GET home page.
 */

exports.view = function(req, res) {
  res.render('hello', {
  	'name': (req.params.userName || 'World'),
  });
};