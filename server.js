require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({extended: false})
);

var Users = require('./router/Users');
//
app.use('/api', Users);

app.listen(port, function () {
    console.log('Server running on port : ' + port);
});
