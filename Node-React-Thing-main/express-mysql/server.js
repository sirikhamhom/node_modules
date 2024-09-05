const express = require("express");
var cors = require('cors')
const mysql = require('mysql2');
const app = express();
app.use(cors())

var host = "localhost";
if(process.env.NODE_ENV == 'production'){
    host = 'mysql-server2'
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdti1234',
    database: 'travel',
});

app.get('/attractions', function(req, res){
    connection.query(
        'SELECT * FROM attractions',
        function (err, results, fields){
            req.json(results);
            //console.log(results);
            //console.log(fields);
        }
    );
    //res.send('Hello from Node.js RESTful API'); //res.json({msg: 'This is CORS-enabled for all original'})
});

app.route('/about').get((req, res) => {
    res.send('About Page');
});

const port = process.env.PORT || 8000;
app.listen(port,() =>{
    console.log('server is running on port: ', port);
});