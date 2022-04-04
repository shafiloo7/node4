const express = require('express')
const app = express()

app.get('/shafil', function(req, res) {
    res.send('shafil mohammed')
})

app.listen(3000)