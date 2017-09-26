var mysql=require('mysql');

var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'inventory_db'
});

connection.connect();

var inventory = {
// set db requirements here
}

connection.query('insert into inventory_db set ?', inventory, function(err, result){
    if(err){
        console.error(err);
        return;
    }
    console.log(result);
});
