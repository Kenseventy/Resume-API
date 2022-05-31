const express = require('express');
const req = require('express/lib/request');
const basicAuth = require('express-basic-auth')
const app = express();
const fs = require("fs")

const resume = require("./resume.json")


app.get('/', (req, res) => {

res.send('Thank you for accessing my API. My resume is available at rest.kmcloud.tech/resume');

});

app.use(basicAuth({
    users: {'user': "resume" },
    challenge: true
}))

app.get('/resume', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile('resume.json' , {root :__dirname});
    
}); 

app.get('/resume/image', (req, res) => {
    res.sendFile(__dirname + '/image.html');
});



app.listen(8080, () => console.log('Alive and kicking'));