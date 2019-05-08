const express = require('express');
const mognoose = require('mongoose');
const bodyParser = require('body-parser');
const db_uri = require('./config/keys')

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(bodyParser.json())

const db = db_uri.mongoURI;
mognoose.connect(db, {
    useNewUrlParser: true
}).then(() => console.log("Successfully connected to db"))
  .catch(err => console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`) )
