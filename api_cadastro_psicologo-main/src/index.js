require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');





const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3000

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})