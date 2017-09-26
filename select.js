var mysql = require('mysql');
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'inventory_db'
});

connnection.query('select * from inventory_db where id = ?', id, function(err, result){
    if(err){
        console.error(err);
        return;
    }
    console.log(result);
});