const { body, validationResult } = require('express-validator');
module.exports = function(application) { 
    application.get('/admin', function (req, res) {
        application.app.controllers.admin.admin(application, req, res)
    })
    application.post('/noticias/salvar',
    body('titulo', 'Titulo deve ter mais de 2 caracteres e menos que 30').isLength({max: 30, min: 2}),
     function (req, res) {
        application.app.controllers.admin.noticias_salvar(application, req, res)
        
    })
}
