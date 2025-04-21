const express = require('express');
const req = require('express/lib/request');
const basicAuth = require('express-basic-auth')
const app = express();
const fs = require("fs")
const resume = require("./resume.json")
require('dotenv').config();
const axios = require('axios');
var azure = require('azure-storage');




app.get('/', (req, res) => {

res.send('Thank you for accessing my API. My resume is available at rest.kmcloud.tech/resume. Username: user Password: resume');

});

app.use(basicAuth({
    users: {'user': "resume" },
    challenge: true
}))



app.get('/resume', async (req, res) => {
    try {
        const azureResponse = await axios.get(Azure_Function_URL); // Replace 'Azure_Function_URL' with the actual URL
        const dynamicNumber = azureResponse.data.count; // Assuming the response contains a number property

        let resumeData = JSON.parse(fs.readFileSync(__dirname + '/resume.json', 'utf8'));
        resumeData.basics.visitCounter = dynamicNumber;
        
        res.json(resumeData);
    } catch (error) {
        console.error("Failed to fetch the number from Azure Function", error);
        res.status(500).send("An error occurred");
    }
});


app.get('/resume/image', (req, res) => {
    res.sendFile(__dirname + '/image.html');
});



app.listen(8080, () => console.log('Alive and kicking'));