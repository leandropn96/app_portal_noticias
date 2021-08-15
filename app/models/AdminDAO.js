function AdminDAO(connection){
 this._connection = connection
}

AdminDAO.prototype.postAdmin = function(noticias, callback){
    this._connection.query(`INSERT INTO noticias set ?`,noticias, callback);
}; 

module.exports = function (){
    return AdminDAO
}