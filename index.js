const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const path = require('path');


const api = require('./api');
const app = express();
const port = process.env.PORT || 3030;

// file uploader
const upload = require("express-fileupload");
app.use(upload({
    parseNested: true
}));

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));

app.use(expressValidator());
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) => {
  	res.send('Hello World!')
});
app.use(express.static('build'));
app.get('*', function(req, res) {
  	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`);
});