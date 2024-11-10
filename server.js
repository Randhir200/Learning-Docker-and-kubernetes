// server.js
const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('<h1>Le Response</h1>');
});

const PORT = 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
}

module.exports = app;
