const express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser');
const app = express()
const port = 8000

app.use(bodyParser.json('application/json'));

const data = fs.readFileSync('./db/auth.json', { encoding: 'utf8' });
app.get('/auth', (req, res) => {
    res.send(data)
})

app.post('/auth', (req, res) => {
    console.log(req.body)
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})