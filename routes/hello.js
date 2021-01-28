
/*
 * GET home page.
 */

exports.view = function(req, res) {
  console.log(`Name is ${nameToShow}.`);

  res.render('hello', {
  	'name': (req.params.userName || 'World'),
  });
};