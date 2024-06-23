import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { name } from 'ejs';

const app = express();
const port = 3000;
const OPENWEATHERMAP_API_KEY = 'e88159402b705238bf6ec83d127edc04';
const API_URL = "https://api.openweathermap.org/data/2.5/"

// "weather?q={city name}&appid={API key}"

///// BodyRequest package ///////

app.use(bodyParser.urlencoded({extended : true}));



///// Config Our STATIC FILE /////
app.use(express.static("public"));



/////// Get Routes of Weather//////
app.get('/', (req, res)=>{
    
    res.render("index.ejs")
})
app.post('/',async (req, res)=>{
    const City = req.body["City"]
   try {
    const result = await axios.get(API_URL + `weather?q=${City}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`);
    res.render("index.ejs", { content : JSON.stringify(result.data) });
} catch (error) {
    res.render("index.ejs", { content : error.message});
   }    
    
})


////// Server Config /////////

app.listen(port, (req, res)=>{
    console.log("Server listening on Port :", port);
})