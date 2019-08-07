const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000 ;

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Server is up and running")
})