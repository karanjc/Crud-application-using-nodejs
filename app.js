const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');
const homeRoutes = require('./routers/home');
const app = express();
const port = process.env.PORT || 8080;

mongoos.connect("mongodb://localhost:27017/studentDetails", {useNewUrlParser: true});
const db = mongoos.connection;
db.on('error', ()=>{
    console.log("Error is ");
});

db.once('open', ()=>{
    console.log("Connected!");
});


//body parser
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', homeRoutes);

app.listen(port)