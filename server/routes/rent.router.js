const express = require('express');
const router = express.Router();

// TODO: Move this setup into a module
// PG SETUP
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real_estate', // name of database
    host: 'localhost',
    port: 5432,
    max: 10, // max number of concurrent connections
    idleTimeoutMillis: 10000 // attepmt to connect for 10 seconds
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected!!!');
});

pool.on('error', (error) => {
    console.log('Error connecting to db', error);
});

router.get('/', function(req,res) {
    console.log('in rental GET route');
    const query = 'SELECT * FROM "listings" WHERE "type"=rent;';
    pool.query(query).then((results) => {
        console.log('results from GET rental listings', results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error from GET rental listings', error);
        res.sendStatus(500);
    })
})

module.exports = router;

