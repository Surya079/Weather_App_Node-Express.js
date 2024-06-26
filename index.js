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
    const curTime = new Date().toTimeString().split(' ')[0];;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var date = new Date().toLocaleDateString();
    var dayName = days[d.getDay()];
    // console.log(date);
   try {
    const result = await axios.get(API_URL + `weather?q=${City}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`);
    const city = JSON.stringify(result.data.name);
    const temp = JSON.stringify(result.data.main.temp);
    var weather = JSON.stringify(result.data.weather[0].main)
   console.log(JSON.stringify(result.data));
    res.render("index.ejs", { 
        dayName,
        date,
        curTime,
        city,
        temp,
        weather
     });
} catch (error) {
    res.render("index.ejs", { content :" no matches that you trying to find..!"});
   }    
    
})


////// Server Config /////////

app.listen(port, (req, res)=>{
    console.log("Server listening on Port :", port);
})