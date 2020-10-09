const express = require('express')
const cors = require('cors')
const fs = require('fs')
var bodyParser = require('body-parser');
const app = express()
app.use(cors())
const port = 8000

app.use(bodyParser.json('application/json'));

const event = fs.readFileSync('./assets/event.json', { encoding: 'utf8' });
const volunteer = fs.readFileSync('./assets/volunteer.json', { encoding: 'utf8' });

const reset = () => {
    fs.writeFileSync('./db/event.json', event, { encoding: 'utf8' });
    fs.writeFileSync('./db/volunteer.json', volunteer, { encoding: 'utf8' });
};
reset();
app.get('/event', (req, res) => {
    const data = fs.readFileSync('./db/event.json', { encoding: 'utf8' });
    res.send(data)
})

app.get('/volunteer', (req, res) => {
    const data = fs.readFileSync('./db/volunteer.json', { encoding: 'utf8' });
    res.send(data)
})

app.get('/reset', (req, res) => {
    reset()
    res.sendStatus(200)
})

app.get('/volunteer/:id', (req, res) => {
    const data = fs.readFileSync('./db/volunteer.json', { encoding: 'utf8' });
    data[req.params.id-1]['job_skill']
    res.send(data[req.params.id-1]['job_skill'])
})

app.post('/volunteer', (req, res) => {
    const data = req.body
    fs.writeFileSync('./db/volunteer.json', JSON.stringify(data), { encoding: 'utf8' });
    res.sendStatus(200)
})

app.post('/event', (req, res) => {
    const data = req.body
    fs.writeFileSync('./db/event.json', JSON.stringify(data), { encoding: 'utf8' });
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})