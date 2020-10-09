const express = require('express')
const cors = require('cors')
const fs = require('fs')
var bodyParser = require('body-parser');
const e = require('express');
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
  
function moveIdToTop(jsonarray, id) {
 for (var i = 0; i < jsonarray.length; ++i) {
    if (jsonarray[i].id == id) {
       var temp = jsonarray[i];
       jsonarray.splice(i, 1);
       jsonarray.unshift(temp);
       break;
    }
 }
}

app.get('/volunteer/:id/event', (req, res) => {
    vlist = JSON.parse(fs.readFileSync('./db/volunteer.json', { encoding: 'utf8' })) ;
    elist = JSON.parse(fs.readFileSync('./db/event.json', { encoding: 'utf8' }));
    index = 0
    for (let i = 0; i < vlist.length; ++i) {
        if (vlist[i].id == req.params.id) {
            index = i
        }
    }
    var my_age = parseInt(vlist[index].age)
    var temp;
    console.log(my_age)
    if (my_age < 15){
         temp = elist.filter(function(item) {return item.age_range == 'child'})
         console.log("sdsd",temp)
    }

    if (my_age >= 15 && my_age < 60) {
         temp = elist.filter(function(item) {return item.age_range == 'adult'})
         console.log(temp)
    }

    if (my_age >=60){
         temp = elist.filter(function(item) {return item.age_range == 'old'})
         console.log(temp)
    }
    elist = temp

    for (let i = 0; i < elist.length; ++i) {
        if (elist[i].job_skill == vlist[index].job_skill) {
            moveIdToTop(elist, i+1)
        }
    }
    res.send(elist)
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