const express = require('express');
const req = require('express/lib/request');
const basicAuth = require('express-basic-auth')
const app = express();
const fs = require("fs")

const resume = require("./resume.json")


app.use(basicAuth({
    users: { 'admin': 'supersecret',
            'resume': "resume" }
}))


app.get('/api', (req, res) => {

    const apiKey = req.query.apiKey;

res.send('🔥🔥🔥');

});

app.get('/resume', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile('resume.json' , {root :__dirname});



}); 


app.listen(8080, () => console.log('alive'));