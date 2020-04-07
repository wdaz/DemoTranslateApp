const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.get('/test', (req, res) => res.send('OK!'));

app.use(history({
    verbose: true
}));

app.use('/', express.static(path.join(__dirname, 'dist/DemoTranslateApp')));

var port = process.env.PORT || 8080;
app.listen(port);