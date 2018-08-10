var fs = require('fs');
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("config-secret.json"))

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
});

connection.connect();



connection.query('ALTER TABLE hero ADD task VARCHAR(255)', function(error, results, fields) {
    console.log(results);
});

UPDATE hero
SET title = 'kill dragon', due_date = '2017-12-24 16:00:46', status = 3
WHERE id = 1;

DELETE FROM task 
WHERE id = 2;

DELTE FROM user 
WHERE id = 3;

connection.end();
