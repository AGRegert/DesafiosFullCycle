const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    const sql = `SELECT * FROM people`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        let html = '<h1>Full Cycle Rocks!</h1>';
        html += '<ul>';
        result.forEach(element => {
            html += `<li>${element.name}</li>`;
        });
        html += '</ul>';
        res.send(html);
    });
    connection.end();
});

app.listen(port, () => console.log(`nodejs escutando na porta ${port}!`));
