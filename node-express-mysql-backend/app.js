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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/addjob', (req, res) => {
    let sql = `INSERT INTO appliedjobs(position, company, announced, closes, site, applied) values('${req.body.position}', '${req.body.company}', '${req.body.announced}', '${req.body.closes}', '${req.body.site}', ${req.body.applied})`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
    });
});

app.get('/jobslist', (req, res) => {
    let sql = 'SELECT * FROM appliedjobs';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.get('/deletejob/:id', (req, res) => {
    let sql = `DELETE FROM appliedjobs WHERE id = ${req.params.id}`
    console.log(sql);
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
    });
});

app.listen('3001', () => {
    console.log('Server started on port 3001');
});