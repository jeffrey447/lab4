exports.viewProject = (req, res) => {
    let name = req.params.name;
    console.log(`The project name is: ${name}.`);
    
    res.render('project', {
        projectName: name
    });
};