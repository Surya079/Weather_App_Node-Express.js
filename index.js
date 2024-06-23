import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;
const OPENWEATHERMAP_API_KEY = 'e88159402b705238bf6ec83d127edc04';
const API_URL = "https://api.openweathermap.org/data/2.5/"

// "weather?q={city name}&appid={API key}"

///// Config Our STATIC FILE /////
app.use(express.static("public"));



/////// Get Routes of Weather//////

app.get('/weather', async (req, res)=>{
    
})



////// Server Config /////////

app.listen(port, (req, res)=>{
    console.log("Server listening on Port :", port);
})