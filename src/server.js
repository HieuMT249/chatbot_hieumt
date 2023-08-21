import express from 'express';
import viewEngine from './config/viewEngine';
import initWebRoute from './routes/web';
import bodyParser from 'body-parser';
require("dotenv").config(); //để chạy dòng process.env
let app = express(); //tạo app

//config view engine
viewEngine(app);

//parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//init web route
initWebRoute(app);

//run app
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Chatbot đang hoạt động ở cổng: "+port);
});