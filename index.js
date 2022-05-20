const express = require('express');
const req = require('express/lib/request');
const app = express();
const fs = require("fs")

const resume = require("./resume.json")




app.get('/api', (req, res) => {

    const apiKey = req.query.apiKey;

res.send('🔥🔥🔥');

});

app.get('/resume', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile('resume.json' , {root :__dirname});



}); 


app.listen(8080, () => console.log('alive'));