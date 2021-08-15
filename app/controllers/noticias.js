module.exports.noticia = function(application, req, res){
    var conection =  application.config.database()
    var noticiasDAO = new application.app.models.NoticiasDAO(conection);

    noticiasDAO.getNoticia(req.params.id, function(error, resp){
        res.render('noticias/noticia', {noticia: resp})
    })
}

module.exports.noticias = function(application, req, res){
    var conection = application.config.database()
    var noticiasDAO = new application.app.models.NoticiasDAO(conection);

    noticiasDAO.getNoticias(function(error, resp){
        res.render('noticias/noticias', {noticias: resp})
    });
}