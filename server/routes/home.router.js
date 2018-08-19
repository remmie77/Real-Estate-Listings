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

router.post('/', function (req,res) {
    const houseToAdd = req.body;
    console.log('In POST route - house listing:', houseToAdd);
    const query = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES ($1, $2, $3, $4, $5);';
    pool.query(query, [houseToAdd.cost, houseToAdd.sqft, houseToAdd.type, houseToAdd.city, houseToAdd.image_path]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', function (req,res) {
    console.log('In DELETE route');
    const houseToDelete = req.params.id;
    const query = 'DELETE * FROM "listings" WHERE "id"=$1;';
    pool.query(query, [houseToDelete]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});




module.exports = router;
