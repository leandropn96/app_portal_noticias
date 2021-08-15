const { body, validationResult } = require('express-validator');

module.exports.admin = function(application, req, res){
    res.render('admin/form_add_noticia')
}

module.exports.noticias_salvar = function(application, req, res){
        var conection =  application.config.database()
        var adminDAO = new application.app.models.AdminDAO(conection);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('admin/form_add_noticia', errors)
        // return res.status(400).json({ errors: errors.array() });
        }
        var data = req.body
        adminDAO.postAdmin(data, function(error, resp){
            res.redirect('/noticias')
        });  
}