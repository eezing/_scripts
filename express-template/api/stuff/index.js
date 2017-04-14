
const express = require('express');
const db = require('./db');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', (req, res) => res.send(db.insert(req.body)));

router.get('/', (req, res) => res.send(db.query()));

router.get('/:id', (req, res) => {

    const item = db.pluck(req.params.id);

    if (!item) {
        res.status(404).send();
    } else {
        res.send(item);
    }
});

router.put('/:id', (req, res) => {

    const updatedItem = db.update(Object.assign({}, req.body, { id: req.params.id }));

    if (!updatedItem) {
        res.status(404).send();
    } else {
        res.send(updatedItem);
    }

});

router.delete('/:id', (req, res) => {

    const deletedItem = db.remove(req.params.id);

    if (!deletedItem) {
        res.status(404).send();
    } else {
        res.send(deletedItem);
    }
});


module.exports = router;
