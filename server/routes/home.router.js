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
    console.log('in home GET route');
    const query = 'SELECT * FROM "listings";';
    pool.query(query).then((results) => {
        console.log('results from GET home listings', results);
        res.sendStatus(results.rows);
    }).catch((error) => {
        console.log('error from GET home listings', error);
        res.sendStatus(500);
    })
})





// Express removed the '/shoes' when we do a app.use
router.post('/', function (req, res) {
    const shoeToAdd = req.body; // This the data we sent
    console.log('In POST route - product:', shoeToAdd); // Has a name, size and cost
    const query = 'INSERT INTO "shoes" ("name", "cost", "size") VALUES ($1, $2, $3);';
    // $ with index (e.g. $1) will help improve the security of your db
    // Avoids SQL injection -- see bobby drop table comic
    pool.query(query, [shoeToAdd.name, shoeToAdd.cost, shoeToAdd.size]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});

module.exports = router;
