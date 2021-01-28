exports.viewProject = function (req, res) {
    res.render('project', {
        projectName: req.params.name
    });
};