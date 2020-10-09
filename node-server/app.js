const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const data = fs.readFileSync('./db/auth.json', { encoding: 'utf8' });
app.get('/', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})