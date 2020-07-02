const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host        : '192.168.56.101',
    user        : 'anonymous',
    password    : '',
    database    : 'test'
});

db.connect((err) => {
    if(err) throw err;
    console.log('mysql connected');
});

const app = express();
app.use(cors());

app.listen('3001', () => {
    console.log('Server started on port 3001');
});

app.get('/jobslist', (req, res) => {
    let sql = 'SELECT * FROM appliedjobs';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/addjob/:position/:announced/:closes/:site/:applied', (req, res) => {
    let sql = `INSERT INTO appliedjobs(position, announced, closes, site, applied) values('${req.params.position}', '${req.params.announced}', '${req.params.closes}', '${req.params.site}', ${req.params.applied})`;
     let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});