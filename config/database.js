var mysql = require('mysql')

var connMySQL = function (){
    return  mysql.createConnection({
        host: "localhost",
        database: "portal_noticias",
        user: "root",
        password: "Leandro96@"
    })
}

module.exports = function () {
   return connMySQL;
}