module.exports.home = function(application, req, res){
    var conection =  application.config.database()
    var noticiasDAO = new application.app.models.NoticiasDAO(conection);

    noticiasDAO.getCincoNoticias(function(error, resp){
        res.render('home', {noticias: resp})
    })
}