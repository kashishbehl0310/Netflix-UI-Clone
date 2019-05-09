const express = require('express');
const mognoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db_uri = require('./config/keys');
const passport = require('passport');
const users = require('./routes/users')

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(bodyParser.json())
app.use(cors())
const db = db_uri.mongoURI;
mognoose.connect(db, {
    useNewUrlParser: true
}).then(() => console.log("Successfully connected to db"))
  .catch(err => console.log(err))
app.use(passport.initialize())

require('./config/passport')(passport)
app.use('/api/users', users)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`) )
