
const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

const Person = require('./models/person')

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/save-person', async (req, res) => {
    try{
        const data = req.body;
        const newPerson =  new Person(data);
        const response = await newPerson.save();
        console.log('Data saved successfully!')
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Error saving'})
    }
})

app.get('/get-person',async (req, res) => {
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Error getting data'})
    }
})

app.get('/test', function (request, response) {
    response.send('Tihs is a test case.')
})

app.listen(3000)