var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let db = req.db;
    let collection = db.get('favourites');

    collection.find({}, {}, (e, items) => {
      res.send(items)
    });
});

router.post('/', (req, res) => {
    let db = req.db;
    let name = req.body.name;

    let collection = db.get('favourites');

    collection.insert({name}, (err, doc) => {
        if (err) {
            res.status(500).send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/favourites/");
        }
    });

});

router.delete('/', (req, res) => {
    let db = req.db;
    let name = req.body.name;

    let collection = db.get('favourites');

    console.log(`Favourite deleted: ${name}`);

    collection.remove({name}, (err, doc) => {
        if (err) {
            res.status(500).send("There was a problem adding the information to the database.");
        }
        else {
            res.send("Deleted");
        }
    });

});

module.exports = router;
