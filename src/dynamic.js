const dbConnection = require('../database/db_connection');

const getData = (cb) => {
    dbConnection.query('SELECT * FROM SUPERHEROES;', (err, res) => {
        if (err) return cb(err);
        console.log('res.rows: ' + res.rows);
        cb(null, res.rows)
    });
}

module.exports = getData;