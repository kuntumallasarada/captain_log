require('dotenv').config();
const express = require('express');
const app = express();

//Middleware
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

//Routes
//New Route
app.get('/logs/new',(req,res)=>{
    res.render('New.jsx');
})

app.listen(3000,()=>{
    console.log('Listening');
})