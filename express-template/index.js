'use strict';

const PORT = process.env.PORT;
const express = require('express');
const app = express();

const stuffApi = require('./api/stuff');

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1>hello world</h1>
        </div>
    `);
});

app.use('/api/stuff', stuffApi);

app.listen(PORT, err => console.log(err || `> listening on port: ${PORT}`));
