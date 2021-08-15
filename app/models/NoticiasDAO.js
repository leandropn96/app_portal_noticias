function NoticiasDAO(connection) {
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
};
NoticiasDAO.prototype.getNoticia = function(id, callback){
    this._connection.query(`select * from noticias where id_noticia = ${id}`, callback);
};
NoticiasDAO.prototype.getCincoNoticias = function(callback){
    this._connection.query(`select * from noticias order by data_criacao desc LIMIT 5`, callback);
};

module.exports = function (){

    return NoticiasDAO;
}