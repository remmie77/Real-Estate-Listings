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
    console.log('in sales GET route');
    const query = `SELECT * FROM "listings" WHERE "type"='sale';`;
    pool.query(query).then((results) => {
        //console.log('results from GET sales listings', results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error from GET sales listings', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', function (req, res) {
    console.log('In DELETE route', req.params.id);
    const houseToDelete = req.params.id;
    const query = 'DELETE FROM "listings" WHERE "id"=$1 RETURNING *;';
    pool.query(query, [houseToDelete]).then((results) => {
        console.log(results.rows);
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});










module.exports = router;