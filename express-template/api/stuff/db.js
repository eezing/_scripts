
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const fileName = './__temp__db.json';

let db = load();

function insert(object) {
    const item = Object.assign({}, object, { id: generateUniqueId() });
    db.push(item);
    save(db);
    return item;
}

function query(key, value) {
    let items = key ? db.filter(item => item[key] === value) : db;
    return items.map(item => Object.assign({}, item));
}

function pluck(id) {
    return query('id', id)[0];
}

function update(object) {
    db = db.map(item => item.id === object.id ? object : item);
    save(db);
    return pluck(object.id);
}

function remove(id) {
    const item = pluck(id);
    db = db.filter(item => item.id !== id);
    save(db);
    return item;
}

function generateUniqueId() {
    const id = crypto.randomBytes(2).toString('hex');
    return db.find(item => item.id === id) ? generateUniqueId() : id;
}

function load() {
    try {
        return require(fileName);
    } catch(error) {
        return [];
    }
}

function save(db) {
    fs.writeFile(path.resolve(__dirname, fileName), JSON.stringify(db, undefined, 2), (err) => {
        if (err) throw err;
    });
}

module.exports = {
    insert,
    query,
    pluck,
    update,
    remove
};
